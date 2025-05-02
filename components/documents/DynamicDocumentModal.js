'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Alert, Row, Col, Label } from 'reactstrap';
import DynamicDocumentUploader from './DynamicDocumentUploader';
import moment from 'moment';
import { useLoading } from '../../context/LoadingContext';

// Version info for tracking integration
const COMPONENT_VERSION = '1.0.0';

// Helper function to log data in a structured way
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
};

// Helper function to try to close iframe using multiple methods
const forceCloseParentIframe = (parentOrigin, reason = 'User cancelled', actionType = 'cancel') => {
  if (!window.parent) return false;
  
  try {
    // Set a flag that parent code can check
    window.parent.closeIframeFlag = true;
    window.parent.closeReason = reason;
    window.parent.closeAction = actionType;
    
    // Try different message formats
    window.parent.postMessage({
      type: 'FORCE_CLOSE_IFRAME',
      reason: reason,
      timestamp: new Date().toISOString()
    }, parentOrigin);
    
    window.parent.postMessage({
      type: 'MODAL_CLOSED',
      success: false,
      cancelled: true,
      timestamp: new Date().toISOString()
    }, parentOrigin);
    
    window.parent.postMessage({
      action: actionType,
      event: 'user_cancelled'
    }, parentOrigin);
    
    window.parent.postMessage(JSON.stringify({
      action: actionType,
      event: 'user_cancelled'
    }), parentOrigin);
    
    // Simple string message as fallback
    window.parent.postMessage('CANCEL', parentOrigin);
    
    // Try calling functions directly
    if (typeof window.parent.closeIframe === 'function') window.parent.closeIframe();
    if (typeof window.parent.closeModal === 'function') window.parent.closeModal();
    if (typeof window.parent.closeVerifyModal === 'function') window.parent.closeVerifyModal();
    
    // Set a timeout to repeat the action (sometimes the first attempt is missed)
    setTimeout(() => {
      window.parent.postMessage({
        type: 'FORCE_CLOSE_IFRAME',
        reason: `${reason} (retry)`,
        timestamp: new Date().toISOString()
      }, parentOrigin);
    }, 100);
    
    return true;
  } catch (err) {
    console.error('Error trying to force close parent iframe:', err);
    return false;
  }
};

/**
 * A dynamic modal component that can switch between different document types
 * while maintaining the same form fields
 */
const DynamicDocumentModal = ({
  isOpen,
  toggle,
  token = "",
  onSuccess,
  onError,
  documentType = 'certificate',
  modalType = 'edit',
  data = null,
  config = null,
  verifyConfig = null,
  isEmbedded = false,
  parentOrigin = "*",
  hideHeader = true,
  containerClassName = "rounded-10 border-radius-10",
  onCustomButtonClick = null
}) => {
  // Add debug logging for incoming props
  useEffect(() => {
    console.log('DynamicDocumentModal received config:', config);
    console.log('DynamicDocumentModal received verifyConfig:', verifyConfig);
    console.log('DynamicDocumentModal documentType:', documentType);
  }, [config, verifyConfig, documentType]);

  // Get the global loading state
  const { setLoading, setLoadingMessage } = useLoading();

  const [documentTitle, setDocumentTitle] = useState('Document');
  const [submitting, setSubmitting] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [formSchema, setFormSchema] = useState(null);
  const [formActions, setFormActions] = useState(null);
  
  // Store a reference to valid form actions
  const [actionsFunctions, setActionsFunctions] = useState({
    hasValidForm: () => true, // Default to true if not yet initialized
    submitFormAction: () => true,
    getSubmitButtonText: () => 'Add'
  });
  
  // Add ref to track previous actionInfo to prevent unnecessary updates
  const previousActionInfoId = useRef(null);
  
  // Setup unload handler to ensure parent iframe closes
  useEffect(() => {
    // Only add if we're embedded in an iframe
    if (!isEmbedded || !window.parent) return;
    
    // Function to notify parent when component is about to unmount
    const notifyParentOnUnload = () => {
      logData('COMPONENT_UNMOUNTING', { documentType, isEmbedded });
      
      // Use our helper to try to close the parent iframe
      forceCloseParentIframe(parentOrigin, 'Component unmounted', 'unmount');
    };
    
    // Add the event listener for beforeunload
    window.addEventListener('beforeunload', notifyParentOnUnload);
    
    // Call once immediately after mount to set parent properties
    if (window.parent) {
      try {
        // Set properties on parent window that we can reference
        window.parent.iframeComponentMounted = true;
        window.parent.iframeDocumentType = documentType;
      } catch (error) {
        // Ignore cross-origin errors
        console.log('Could not set parent window properties due to cross-origin restrictions');
      }
    }
    
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('beforeunload', notifyParentOnUnload);
      // Try to notify parent on unmount
      notifyParentOnUnload();
    };
  }, [isEmbedded, documentType, parentOrigin]);
  
  // Update document title when document type changes
  useEffect(() => {
    const docTitle = getDocumentNameByType(documentType);
    setDocumentTitle(docTitle);
  }, [documentType]);
  
  // Helper function to get document title based on document type
  const getDocumentNameByType = (type) => {
    const documentTitles = {
      'certificate': 'Certificate',
      'document': 'Document',
      'medical': 'Medical Record',
      'other': 'Document',
      'default': 'Document'
    };
    
    return documentTitles[type] || documentTitles.default;
  };

  // Handle successful document upload
  const handleSuccess = (data) => {
    // Detailed structured logging of the success data
    logData('Document upload successful', {
      documentType,
      childDocumentType: formActions?.selectedChildType,
      timestamp: new Date().toISOString(),
      data
    });
    
    setUploadSuccess(true);
    setUploadError('');
    setSubmitting(false);
    setLoading(false); // Ensure global loading is turned off
    
    // Notify parent window with enhanced data
    if (window.parent && isEmbedded) {
      // First use our helper function to ensure compatibility
      // But with success=true to indicate successful processing
      try {
        // Format 1: New format with document data
        window.parent.postMessage({
          type: 'DOCUMENT_UPLOAD_SUCCESS',
          data: data,
          documentType: documentType,
          childDocumentType: formActions?.selectedChildType,
          timestamp: new Date().toISOString(),
          authData: config?.authData || null,
          locationId: config?.locationId || formActions?.schema?.locationId || null
        }, parentOrigin);
        
        // Format 2: Legacy NurseIO format
        window.parent.postMessage(JSON.stringify({
          action: 'success',
          documentType: documentType,
          data: data,
          event: 'upload_success'
        }), parentOrigin);
        
        // Format 3: Force close message
        window.parent.postMessage({
          type: 'CLOSE_IFRAME',
          reason: 'Document uploaded successfully',
          success: true,
          timestamp: new Date().toISOString()
        }, parentOrigin);
        
        // Try to call parent methods directly
        if (window.parent.closeIframe && typeof window.parent.closeIframe === 'function') {
          window.parent.closeIframe(true); // true indicates success
        }
        if (window.parent.closeModal && typeof window.parent.closeModal === 'function') {
          window.parent.closeModal(true); // true indicates success
        }
        if (window.parent.closeVerifyModal && typeof window.parent.closeVerifyModal === 'function') {
          window.parent.closeVerifyModal(true); // true indicates success
        }
        
        console.log('Successfully notified parent window of document upload success');
      } catch (error) {
        console.error('Error notifying parent window:', error);
      }
    }
    
    if (onSuccess) {
      onSuccess(data);
    }
  };

  // Handle document upload errors
  const handleError = (error) => {
    logData('Document upload error', error);
    setUploadError(error.message || 'An error occurred during document upload. Please try again.');
    setUploadSuccess(false);
    setSubmitting(false);
    setLoading(false); // Ensure global loading is turned off
    
    // Notify parent window
    if (window.parent && isEmbedded) {
      window.parent.postMessage({
        type: 'DOCUMENT_UPLOAD_ERROR',
        error: error
      }, parentOrigin);
    }
    
    if (onError) {
      onError(error);
    }
  };

  // Handle modal close
  const handleCloseModal = () => {
    // Always send a message to parent when closing, including cancel operations
    if (window.parent && isEmbedded) {
      if (!uploadSuccess) {
        // If not successful, treat as a cancel and use our helper function
        forceCloseParentIframe(parentOrigin, 'User closed modal', 'close');
      }
      
      // First format - used by newer NurseIO integrations
      window.parent.postMessage({
        type: 'MODAL_CLOSED',
        success: uploadSuccess,
        cancelled: !uploadSuccess, // Indicate it was cancelled if not successful
        timestamp: new Date().toISOString()
      }, parentOrigin);

      // Second format - used by legacy NurseIO integrations
      window.parent.postMessage(JSON.stringify({
        action: uploadSuccess ? 'success' : 'cancel',
        documentType: documentType,
        event: uploadSuccess ? 'upload_success' : 'user_cancelled'
      }), parentOrigin);

      // Force parent to close the iframe
      if (!uploadSuccess) {
        window.parent.postMessage({
          type: 'FORCE_CLOSE_IFRAME',
          reason: 'User closed modal',
          timestamp: new Date().toISOString()
        }, parentOrigin);
        
        // Alternative close method (for older integrations)
        try {
          if (window.parent.closeIframe && typeof window.parent.closeIframe === 'function') {
            window.parent.closeIframe();
          }
        } catch (error) {
          // Ignore errors trying to access parent methods (expected due to cross-origin restrictions)
          console.log('Could not access parent closeIframe method');
        }
      }
    }
    
    // Log the action for debugging
    logData('MODAL_CLOSED', {
      documentType,
      childDocumentType: formActions?.selectedChildType,
      isEmbedded,
      wasSuccessful: uploadSuccess,
      timestamp: new Date().toISOString()
    });
    
    toggle();
  };
  
  // Handle reset for uploading another document
  const handleReset = () => {
    setUploadSuccess(false);
    setUploadError('');
  };

  // Get modal title based on modalType and documentType
  const getModalTitle = () => {
    switch (modalType) {
      case 'view':
        return `View ${documentTitle}`;
      case 'edit':
        return `Edit ${documentTitle}`;
      case 'add':
        return `Add ${documentTitle}`;
      case 'reject':
        return `Reject ${documentTitle}`;
      default:
        return documentTitle;
    }
  };

  // Callback to receive schema and actions from uploader
  const handleSchemaLoaded = (actionInfo) => {
    if (!actionInfo) {
      console.error('Received undefined or null actionInfo in handleSchemaLoaded');
      return;
    }
    
    // Additional logging for Fingerprint Clearance
    if (actionInfo.selectedChildType === 'fingerprint_clearance') {
      console.log('Fingerprint Clearance form schema received:', {
        fields: actionInfo.schema?.fields?.map(f => f.name) || [],
        documentType: actionInfo.schema?.documentType,
        childType: actionInfo.selectedChildType,
        locationId: actionInfo.schema?.locationId || config?.locationId,
        formId: actionInfo.schema?.formId,
        isChildTypeSelector: actionInfo.isChildTypeSelector,
        hasChildSchemas: !!actionInfo.childFormSchemas && Object.keys(actionInfo.childFormSchemas || {}).includes('fingerprint_clearance')
      });

      // Ensure the schema has the correct documentType for fingerprint clearance
      if (actionInfo.schema && actionInfo.schema.documentType !== 'fingerprint_clearance') {
        console.log('Setting documentType to fingerprint_clearance in schema');
        actionInfo.schema.documentType = 'fingerprint_clearance';
      }
    }
    
    // Create a unique identifier for this actionInfo to compare with previous
    const actionInfoId = JSON.stringify({
      schemaId: actionInfo.schema?.id,
      schemaDocType: actionInfo.schema?.documentType,
      isChildTypeSelector: actionInfo.isChildTypeSelector,
      selectedChildType: actionInfo.selectedChildType,
      childTypeOptionsCount: actionInfo.childTypeOptions?.length
    });
    
    // Only update state if the actionInfo has meaningful changes
    if (previousActionInfoId.current !== actionInfoId) {
      previousActionInfoId.current = actionInfoId;
      
      setFormSchema(actionInfo.schema);
      setFormActions(actionInfo);
      
      // Safely extract the functions with extra safety checks
      const functions = {
        hasValidForm: typeof actionInfo.hasValidForm === 'function' 
          ? actionInfo.hasValidForm 
          : () => {
              console.log('Using fallback hasValidForm function');
              return true;
            },
        submitFormAction: typeof actionInfo.submitFormAction === 'function' 
          ? actionInfo.submitFormAction 
          : () => {
              console.log('Using fallback submitFormAction function');
              return false;
            },
        getSubmitButtonText: typeof actionInfo.getSubmitButtonText === 'function'
          ? actionInfo.getSubmitButtonText
          : () => 'Submit'
      };
      setActionsFunctions(functions);
    }
  };

  // Explicit cancel handler for the footer cancel button
  const handleFooterCancel = () => {
    // Always mark this action as cancelled
    const isCancelled = true;
    
    // Send explicit cancel message with multiple formats to ensure compatibility
    if (window.parent && isEmbedded) {
      // Try the helper function first
      forceCloseParentIframe(parentOrigin, 'User clicked cancel button', 'cancel');
      
      // Format 1: Object format with type property (newer integration)
      window.parent.postMessage({
        type: 'UPLOAD_CANCELLED',
        cancelled: isCancelled,
        reason: 'User clicked cancel button',
        timestamp: new Date().toISOString()
      }, parentOrigin);

      // Format 2: Object format with 'action' property (most compatible)
      window.parent.postMessage({
        action: 'cancel',
        documentType: documentType,
        event: 'user_cancelled'
      }, parentOrigin);

      // Format 3: String JSON format with action property (original NurseIO format)
      window.parent.postMessage(JSON.stringify({
        action: 'cancel',
        documentType: documentType,
        event: 'user_cancelled'
      }), parentOrigin);

      // Format 4: Force close iframe message
      window.parent.postMessage({
        type: 'FORCE_CLOSE_IFRAME',
        reason: 'User cancelled',
        timestamp: new Date().toISOString()
      }, parentOrigin);

      // Format 5: Simple string message (fallback for very basic integrations)
      window.parent.postMessage('CANCEL', parentOrigin);
      
      // Try to call a closeModal function directly on parent if available
      try {
        if (window.parent.closeIframe && typeof window.parent.closeIframe === 'function') {
          window.parent.closeIframe();
        }
        if (window.parent.closeModal && typeof window.parent.closeModal === 'function') {
          window.parent.closeModal();
        }
        if (window.parent.closeVerifyModal && typeof window.parent.closeVerifyModal === 'function') {
          window.parent.closeVerifyModal();
        }
      } catch (error) {
        // Ignore errors trying to access parent methods (expected due to cross-origin restrictions)
        console.log('Could not access parent close methods');
      }
    }

    // Call error callback if provided
    if (onError) {
      onError(new Error('Upload cancelled by user from modal footer'));
    }

    // Log the action for debugging
    logData('USER_CANCELLED_DOCUMENT_UPLOAD', {
      documentType,
      childDocumentType: formActions?.selectedChildType,
      isEmbedded,
      timestamp: new Date().toISOString()
    });
    
    // Close modal via the toggle prop
    toggle();
  };

  // Edit button handler
  const handleEdit = () => {
    // Send edit message if needed
    if (window.parent && isEmbedded) {
      window.parent.postMessage({
        type: 'DOCUMENT_EDIT',
        documentType: documentType,
        timestamp: new Date().toISOString()
      }, parentOrigin);
    }
    
    // Additional edit functionality can be added here
    console.log('Edit button clicked for document type:', documentType);
  };

  // Handle custom button actions
  const handleCustomButtonAction = (buttonConfig) => {
    if (!buttonConfig || !buttonConfig.action) {
      console.error('Invalid button configuration for custom action');
      return;
    }
    
    logData('CUSTOM_BUTTON_ACTION', { 
      action: buttonConfig.action, 
      label: buttonConfig.label,
      documentType: documentType,
      childDocumentType: formActions?.selectedChildType 
    });
    
    // Handle the action based on the button configuration
    switch (buttonConfig.action) {
      case 'submit':
        if (typeof actionsFunctions.submitFormAction === 'function') {
          actionsFunctions.submitFormAction();
        }
        break;
        
      case 'cancel':
      case 'close':
      case 'go_back':
        // All of these actions should close the form/iframe
        // Use our helper function first for maximum compatibility
        forceCloseParentIframe(parentOrigin, `User clicked ${buttonConfig.label || buttonConfig.action} button`, buttonConfig.action);
        // Then use the standard handler
        handleFooterCancel();
        break;
        
      case 'delete':
        // Handle document deletion
        if (onError) {
          onError(new Error('Document deleted by user'));
        }
        
        // First use our helper function for maximum compatibility
        forceCloseParentIframe(parentOrigin, 'User deleted document', 'delete');
        
        // Send delete message to parent if embedded
        if (window.parent && isEmbedded) {
          window.parent.postMessage({
            type: 'DOCUMENT_DELETED',
            deleted: true,
            reason: 'User clicked delete button',
            timestamp: new Date().toISOString()
          }, parentOrigin);
          
          // Also force close the iframe
          window.parent.postMessage({
            type: 'FORCE_CLOSE_IFRAME',
            reason: 'User deleted document',
            timestamp: new Date().toISOString()
          }, parentOrigin);
        }
        
        toggle();
        break;
        
      case 'reset':
        handleReset();
        break;
        
      case 'decline':
        // Special handling for decline action (e.g., for flu vaccine)
        // First use our helper function for maximum compatibility
        forceCloseParentIframe(parentOrigin, 'User declined document', 'decline');
        
        if (window.parent && isEmbedded) {
          window.parent.postMessage({
            type: 'DOCUMENT_DECLINED',
            documentType: documentType,
            childDocumentType: formActions?.selectedChildType,
            timestamp: new Date().toISOString()
          }, parentOrigin);
          
          // Close the iframe after declining
          window.parent.postMessage({
            type: 'FORCE_CLOSE_IFRAME',
            reason: 'User declined document',
            timestamp: new Date().toISOString()
          }, parentOrigin);
        }
        
        // Notify parent component
        if (onCustomButtonClick && typeof onCustomButtonClick === 'function') {
          onCustomButtonClick({
            ...buttonConfig,
            documentType,
            childDocumentType: formActions?.selectedChildType
          });
        }
        
        toggle();
        break;
        
      default:
        // If a custom handler was provided by the parent, call it
        if (onCustomButtonClick && typeof onCustomButtonClick === 'function') {
          onCustomButtonClick({
            ...buttonConfig,
            documentType,
            childDocumentType: formActions?.selectedChildType
          });
        }
        break;
    }
  };

  return (
    <Modal 
      isOpen={isOpen} 
      toggle={handleCloseModal}
      className={`document-modal ${containerClassName}`}
      backdrop="static"
      size="xl"
      fullscreen={isEmbedded}
    >
      
      <ModalBody className="document-modal-body-scrollable pt-4">
        {uploadSuccess ? (
          <Alert color="success" className="mb-0">
            <h4>Success!</h4>
            <p>Your {documentTitle.toLowerCase()} has been uploaded successfully.</p>
            <p>You can close this window now or upload another {documentTitle.toLowerCase()}.</p>
          </Alert>
        ) : uploadError ? (
          <Alert color="danger" className="mb-4">
            <h4>Upload Error</h4>
            <p>{uploadError}</p>
          </Alert>
        ) : null}

        {!uploadSuccess && (
          <DynamicDocumentUploader
            token={token}
            documentType={documentType}
            modalType={modalType}
            onSuccess={handleSuccess}
            onError={handleError}
            data={data}
            config={config}
            verifyConfig={verifyConfig}
            isEmbedded={isEmbedded}
            parentOrigin={parentOrigin}
            hideHeader={hideHeader}
            onSchemaLoaded={handleSchemaLoaded}
          />
        )}
      </ModalBody>
      
      <ModalFooter className="document-modal-footer">
        {uploadSuccess ? (
          <>
            <Button 
              color="primary" 
              outline
              className="mr-2 btn-rounded font-weight-bold py-2"
              onClick={handleReset}
              style={{ borderColor: '#FF69B4', color: '#FF69B4' }}
            >
              Upload Another {documentTitle}
            </Button>
            <Button 
              color="primary"
              className="btn-rounded font-weight-bold py-2"
              onClick={handleCloseModal}
              style={{ backgroundColor: '#FF69B4', borderColor: '#FF69B4' }}
            >
              Close
            </Button>
          </>
        ) : (
          <div className="d-flex ml-auto">
            {/* Only show cancel button if explicitly defined in schema or no schema loaded yet */}
            {(!formSchema || (formSchema && formSchema.showCancelButton !== false)) && (
              <Button 
                color="secondary" 
                outline
                onClick={handleFooterCancel}
                className="btn-rounded font-weight-bold mr-2 py-2"
                style={{ borderColor: '#FF69B4', color: '#FF69B4' }}
              >
                {formSchema && formSchema.cancelButtonText ? formSchema.cancelButtonText : 'Cancel'}
              </Button>
            )}
            
            {/* Only show delete button if explicitly defined in schema or for child type selectors */}
            {((formActions && formActions.isChildTypeSelector) || 
               (formSchema && formSchema.showDeleteButton === true)) && (
              <Button 
                color="danger" 
                outline
                onClick={() => {
                  // Handle document deletion
                  if (onError) {
                    onError(new Error('Document deleted by user'));
                  }
                  // Send delete message
                  if (window.parent && isEmbedded) {
                    window.parent.postMessage({
                      type: 'DOCUMENT_DELETED',
                      deleted: true,
                      reason: 'User clicked delete button',
                      timestamp: new Date().toISOString()
                    }, parentOrigin);
                  }
                  toggle();
                }}
                className="btn-rounded font-weight-bold mr-2 py-2"
                style={{ borderColor: '#dc3545', color: '#dc3545' }}
              >
                {formSchema && formSchema.deleteButtonText ? formSchema.deleteButtonText : 'Delete'}
              </Button>
            )}
            
            {/* Render additional custom buttons from schema if available */}
            {formSchema && formSchema.customButtons && formSchema.customButtons.map((button, index) => (
              <Button
                key={`custom-button-${index}`}
                color={button.color || "secondary"}
                outline={button.outline || false}
                onClick={() => {
                  handleCustomButtonAction(button);
                }}
                className={`btn-rounded font-weight-bold mr-2 py-2 ${button.className || ''}`}
                style={button.style || {}}
                disabled={button.disabled || false}
              >
                {button.label || 'Button'}
              </Button>
            ))}
            
            {/* Only show submit button if explicitly defined in schema or no schema loaded yet */}
            {(!formSchema || (formSchema && formSchema.showSubmitButton !== false)) && (
              <Button 
                color="secondary"
                type="submit"
                form="document-upload-form"
                className="btn-rounded font-weight-bold py-2"
                style={{ backgroundColor: '#FF69B4', borderColor: '#FF69B4', color: 'white' }}
                disabled={
                  uploadError || 
                  submitting || 
                  // Don't disable the button just because we're extracting data
                  // for fingerprint clearance - that would prevent submission
                  (formActions?.selectedChildType === 'fingerprint_clearance' ? 
                    false : 
                    (typeof actionsFunctions.hasValidForm === 'function' ? !actionsFunctions.hasValidForm() : false))
                }
                onClick={() => {
                  try {
                    // Log the submission attempt with relevant context
                    logData('FORM_SUBMISSION_ATTEMPT', {
                      documentType,
                      childDocumentType: formActions?.selectedChildType,
                      timestamp: new Date().toISOString(),
                      isEmbedded,
                      hasAuthData: !!config?.authData,
                      locationId: config?.locationId || formActions?.schema?.locationId
                    });
                    
                    setSubmitting(true);
                    // Set global loading state
                    setLoading(true);
                    setLoadingMessage(`Uploading ${documentTitle.toLowerCase()}...`);
                    
                    // For fingerprint clearance, add special logging
                    if (formActions?.selectedChildType === 'fingerprint_clearance') {
                      console.log('Submitting fingerprint clearance document to NurseIO');
                      
                      // If there's auth data in the config, log it (without sensitive data)
                      if (config?.authData) {
                        console.log('Auth data available for submission:', {
                          hasToken: !!config.authData.token,
                          hasUserId: !!config.authData.userId,
                          provider: config.authData.provider || 'unknown'
                        });
                      }
                    }
                    
                    // Use the safely stored function with error handling
                    if (typeof actionsFunctions.submitFormAction === 'function') {
                      actionsFunctions.submitFormAction();
                    } else {
                      console.error('submitFormAction is not a function');
                      // Fall back to submitting the form directly
                      const form = document.getElementById('document-upload-form');
                      if (form) {
                        console.log('Submitting form directly via DOM event');
                        form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                      }
                    }
                  } catch (error) {
                    console.error('Error submitting form:', error);
                    setUploadError('Error submitting form. Please try again.');
                    setSubmitting(false);
                    setLoading(false); // Ensure global loading is turned off
                  }
                }}
              >
                {submitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Processing...
                  </>
                ) : (
                  typeof actionsFunctions.getSubmitButtonText === 'function' 
                    ? actionsFunctions.getSubmitButtonText() 
                    : (formSchema && formSchema.submitButtonText ? formSchema.submitButtonText : 'Submit')
                )}
              </Button>
            )}
          </div>
        )}
      </ModalFooter>
    </Modal>
  );
};

export default DynamicDocumentModal; 