'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Alert, Row, Col, Label } from 'reactstrap';
import DynamicDocumentUploader from './DynamicDocumentUploader';
import moment from 'moment';
import { useLoading } from '../../context/LoadingContext';
import '../../styles/DynamicDocumentModal.css';

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
      // Try different formats again with a delay
      window.parent.postMessage({
        type: 'FORCE_CLOSE_IFRAME',
        reason: `${reason} (retry)`,
        timestamp: new Date().toISOString()
      }, parentOrigin);
      
      window.parent.postMessage({
        type: 'UPLOAD_CANCELLED', 
        action: 'cancel',
        reason: reason,
        timestamp: new Date().toISOString()
      }, parentOrigin);
      
      // Explicitly call NurseIO's global functions again after a delay
      if (typeof window.parent.closeIframe === 'function') window.parent.closeIframe();
      if (typeof window.parent.closeModal === 'function') window.parent.closeModal();
      if (typeof window.parent.closeVerifyModal === 'function') window.parent.closeVerifyModal();
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
  isEmbedded = true ,
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
  const [fingerprintProcessed, setFingerprintProcessed] = useState(false);
  
  // Add a flag to prioritize upload fields
  const [prioritizeUploadFields, setPrioritizeUploadFields] = useState(true);
  
  // Store a reference to valid form actions
  const [actionsFunctions, setActionsFunctions] = useState({
    hasValidForm: () => true, // Default to true if not yet initialized
    submitFormAction: () => true,
    getSubmitButtonText: () => 'Add'
  });
  
  // Add ref to track previous actionInfo to prevent unnecessary updates
  const previousActionInfoId = useRef(null);
  
  // Add ref for modal content to measure height
  const modalContentRef = useRef(null);
  
  /**
   * Helper function to send comprehensive close messages to parent
   * @param {boolean} isSuccess - Whether the close is due to successful completion
   * @param {string} reason - The reason for closing
   */
  const sendCloseMessageToParent = (isSuccess, reason) => {
    // Only send if embedded in an iframe
    if (!window.parent || !isEmbedded) return;
    
    // Always log the action for tracking
    logData('SENDING_CLOSE_MESSAGE', {
      isSuccess,
      reason,
      documentType,
      childDocumentType: formActions?.selectedChildType,
      timestamp: new Date().toISOString()
    });
    
    // Format 1: Direct function calls (most reliable if available)
    try {
      if (typeof window.parent.closeIframe === 'function') {
        console.log('Calling window.parent.closeIframe()');
        window.parent.closeIframe(isSuccess);
      }
      if (typeof window.parent.closeModal === 'function') {
        console.log('Calling window.parent.closeModal()');
        window.parent.closeModal(isSuccess);
      }
      if (typeof window.parent.closeVerifyModal === 'function') {
        console.log('Calling window.parent.closeVerifyModal()');
        window.parent.closeVerifyModal(isSuccess);
      }
    } catch (e) {
      console.log('Unable to directly call parent functions:', e);
    }
    
    // Format 2: CLOSE_IFRAME type message
    window.parent.postMessage({
      type: 'CLOSE_IFRAME',
      timestamp: new Date().toISOString(),
      success: isSuccess,
      cancelled: !isSuccess,
      reason,
      documentType: documentType,
      childDocumentType: formActions?.selectedChildType
    }, parentOrigin);
    
    // Format 3: MODAL_CLOSED type message
    window.parent.postMessage({
      type: 'MODAL_CLOSED',
      success: isSuccess,
      cancelled: !isSuccess,
      reason,
      timestamp: new Date().toISOString(),
      documentType: documentType
    }, parentOrigin);

    // Format 4: FORCE_CLOSE_IFRAME type message
    window.parent.postMessage({
      type: 'FORCE_CLOSE_IFRAME',
      reason,
      timestamp: new Date().toISOString()
    }, parentOrigin);
    
    // Format 5: Legacy action format
    window.parent.postMessage({
      action: isSuccess ? 'success' : 'cancel',
      documentType: documentType,
      event: isSuccess ? 'upload_success' : 'user_cancelled',
      reason
    }, parentOrigin);

    // Format 6: String JSON format (original NurseIO format)
    window.parent.postMessage(JSON.stringify({
      action: isSuccess ? 'success' : 'cancel',
      documentType: documentType,
      event: isSuccess ? 'upload_success' : 'user_cancelled',
      reason
    }), parentOrigin);

    // Format 7: Simple string message (fallback for very basic integrations)
    window.parent.postMessage(isSuccess ? 'SUCCESS' : 'CANCEL', parentOrigin);
    
    // Add specifically the UPLOAD_CANCELLED format that NurseIO uses in its message handler
    window.parent.postMessage({
      type: 'UPLOAD_CANCELLED',
      action: 'cancel',
      reason: reason,
      timestamp: new Date().toISOString()
    }, parentOrigin);
    
    // Try the forceCloseParentIframe helper as a final attempt
    forceCloseParentIframe(parentOrigin, reason, isSuccess ? 'success' : 'cancel');
    
    // Set a timeout to ensure multiple attempts at message passing 
    setTimeout(() => {
      // Call NurseIO's specific functions again with a delay
      try {
        if (typeof window.parent.closeIframe === 'function') window.parent.closeIframe(isSuccess);
        if (typeof window.parent.closeModal === 'function') window.parent.closeModal(isSuccess);
        if (typeof window.parent.closeVerifyModal === 'function') window.parent.closeVerifyModal(isSuccess);
        
        // Send the UPLOAD_CANCELLED message again
        window.parent.postMessage({
          type: 'UPLOAD_CANCELLED',
          action: 'cancel', 
          timestamp: new Date().toISOString()
        }, parentOrigin);
        
        // Send simple string CANCEL message again (this format is explicitly checked in NurseIO)
        window.parent.postMessage('CANCEL', parentOrigin);
      } catch (e) {
        console.error('Error in delayed close attempt:', e);
      }
    }, 200);
  };
  
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
  
  // Add resize observer to notify parent of height changes
  useEffect(() => {
    // Only add if we're embedded in an iframe
    if (!isEmbedded || !window.parent) return;
    
    // Just send a simple "MODAL_READY" message to parent
    if (window.parent) {
          window.parent.postMessage({
        type: 'MODAL_READY',
            documentType: documentType,
            timestamp: new Date().toISOString()
          }, parentOrigin);
          
      console.log('Sent MODAL_READY message to parent');
    }
    
    // Clean up
    return () => {
      // No cleanup needed
    };
  }, [isEmbedded, parentOrigin, documentType]);
  
  // Update document title when document type changes
  useEffect(() => {
    const docTitle = getDocumentNameByType(documentType);
    setDocumentTitle(docTitle);
    
    // Reset important states when document type changes
    setUploadSuccess(false);
    setUploadError('');
    setSubmitting(false);
    setFingerprintProcessed(false);
    
    // Make sure the prioritizeUploadFields flag is set to true when document type changes
    setPrioritizeUploadFields(true);
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
    
    // Notify parent window of success
    sendCloseMessageToParent(true, 'Document uploaded successfully');
    
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
    
    // Don't close the modal on error - just notify parent of the error
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
    // Send close messages to parent
    sendCloseMessageToParent(uploadSuccess, uploadSuccess ? 
      'Document processed successfully' : 
      'User closed modal');
    
    // Also try direct parent functions with "CANCEL" as a fallback
    if (window.parent && isEmbedded) {
      // Let's explicitly call each known function in NurseIO
      try {
        if (typeof window.parent.closeIframe === 'function') window.parent.closeIframe();
        if (typeof window.parent.closeModal === 'function') window.parent.closeModal();
        if (typeof window.parent.closeVerifyModal === 'function') window.parent.closeVerifyModal();
        
        // Also try one more format that NurseIO might be checking for
        window.parent.postMessage('CANCEL', parentOrigin);
      } catch (e) {
        console.error('Error calling parent functions directly:', e);
      }
    }
    
    // Close this modal
    toggle();
  };
  
  // Handle reset for uploading another document
  const handleReset = () => {
    setUploadSuccess(false);
    setUploadError('');
    setSubmitting(false);
    setFingerprintProcessed(false);
  };

  /**
   * Get a formatted modal title based on the document type and form state
   * @returns {string} - Formatted modal title
   */
  const getModalTitle = () => {
    // If we have a document title from the form schema, use that
    if (formSchema && formSchema.title) {
      return formSchema.title;
    }
    
    // If we have special handling for child document type
    if (formActions && formActions.selectedChildType) {
      // Format the child document type nicely
      const formattedName = formActions.selectedChildType
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      // Special case handling
      switch(formActions.selectedChildType) {
        case 'fingerprint_clearance':
          return 'Fingerprint Clearance Card';
        case 'rn_license':
          return 'RN License';
        case 'lpn_license':
          return 'LPN License';
        case 'bls_certification':
          return 'BLS/CPR Certification';
        case 'acls_certification':
          return 'ACLS Certification';
        case 'pals_certification':
          return 'PALS Certification';
        case 'covid19_vaccine':
          return 'COVID-19 Vaccination Record';
        default:
          return formattedName;
      }
    }
    
    // Default titles based on document type
    const documentTitles = {
      'certificate': 'Professional Certificate',
      'document': 'Document Upload',
      'medical': 'Medical Record',
      'mandatory': 'Professional Document',
      'documents': 'Document Upload',
      'vaccination_record': 'Vaccination Record',
      'other': 'Additional Document'
    };
    
    return documentTitles[documentType] || `Upload ${documentTitle}`;
  };

  // Callback to receive schema and actions from uploader
  const handleSchemaLoaded = (actionInfo) => {
    if (!actionInfo) {
      console.error('Received undefined or null actionInfo in handleSchemaLoaded');
      return;
    }
    
    // Check if the child document type has changed
    if (formActions?.selectedChildType !== actionInfo.selectedChildType) {
      console.log('Child document type changed, resetting upload state', {
        from: formActions?.selectedChildType,
        to: actionInfo.selectedChildType
      });
      
      // Reset states for a new document type
      setUploadSuccess(false);
      setUploadError('');
      setSubmitting(false);
      
      // Make sure the prioritizeUploadFields flag is set to true when child type changes
      setPrioritizeUploadFields(true);
      
      // Send a message to force reset the form state
      setTimeout(() => {
        console.log('Sending reset message to form components');
        window.dispatchEvent(new CustomEvent('resetDocumentForm', { 
          detail: { 
            childType: actionInfo.selectedChildType,
            timestamp: new Date().toISOString()
          } 
        }));
      }, 100);
    }
    
    // Store form actions and functions for later use
    setFormActions(actionInfo);
    
    // Create wrapper functions for actions
    const actionsFunctions = {
      submitForm: actionInfo.submitFormAction || (() => false),
      getSubmitButtonText: actionInfo.getSubmitButtonText || (() => 'Upload Document'),
      hasValidForm: actionInfo.hasValidForm || (() => false)
    };
    
    setActionsFunctions(actionsFunctions);
  };

  // Explicit cancel handler for the footer cancel button
  const handleFooterCancel = () => {
    // Send cancel message to parent
    sendCloseMessageToParent(false, 'User clicked cancel button');

    // Call error callback if provided
    if (onError) {
      onError(new Error('Upload cancelled by user from modal footer'));
    }
    
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
        if (typeof actionsFunctions.submitForm === 'function') {
          actionsFunctions.submitForm();
        }
        break;
        
      case 'cancel':
      case 'close':
      case 'go_back':
        // Send cancel message to parent and close the modal
        sendCloseMessageToParent(false, `User clicked ${buttonConfig.label || buttonConfig.action} button`);
        toggle();
        break;
        
      case 'delete':
        // Handle document deletion and send delete message
        if (onError) {
          onError(new Error('Document deleted by user'));
        }
        
        // Send delete-specific message
        if (window.parent && isEmbedded) {
          window.parent.postMessage({
            type: 'DOCUMENT_DELETED',
            deleted: true,
            reason: 'User clicked delete button',
            timestamp: new Date().toISOString()
          }, parentOrigin);
        }
        
        // Then send general close message
        sendCloseMessageToParent(false, 'User deleted document');
        toggle();
        break;
        
      case 'reset':
        handleReset();
        break;
        
      case 'decline':
        // Special handling for decline action (e.g., for flu vaccine)
        if (window.parent && isEmbedded) {
          window.parent.postMessage({
            type: 'DOCUMENT_DECLINED',
            documentType: documentType,
            childDocumentType: formActions?.selectedChildType,
            timestamp: new Date().toISOString()
          }, parentOrigin);
        }
        
        // Send general close message
        sendCloseMessageToParent(false, 'User declined document');
        
        // Notify parent component if handler exists
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
      className={`document-modal document-type-${formActions?.selectedChildType || documentType} ${containerClassName}`}
      backdrop="static"
      size="xl"
      fullscreen={isEmbedded}
      style={isEmbedded ? { height: '100%', maxHeight: '100%', margin: 0, width: '100%' } : {}}
    >
      <div className="modal-inner-container" style={isEmbedded ? { height: '100vh', display: 'flex', flexDirection: 'column' } : {}}>
        {/* Dynamic header with improved styling */}
        <div className="dynamic-document-header">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="document-title">
              <h4>
                {getModalTitle()}
                {/* Type selector is now hidden via CSS */}
                {formActions?.selectedChildType && (
                  <span className="text-muted">
                    {formSchema?.childDocumentType || formActions.selectedChildType}
                  </span>
                )}
              </h4>
              {formSchema?.description && <p className="text-muted mb-0 small">{formSchema.description}</p>}
            </div>
            <button
              type="button"
              className="document-modal-close"
              aria-label="Close"
              onClick={handleCloseModal}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <ModalBody className="document-modal-body-scrollable" ref={modalContentRef} style={isEmbedded ? { flex: '1 1 auto' } : {}}>
          {uploadSuccess ? (
            <Alert color="success" className="compact-alert">
              <div className="d-flex align-items-center">
                <div className="success-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM14.59 5.58L8 12.17L5.41 9.59L4 11L8 15L16 7L14.59 5.58Z" fill="#388e3c"/>
                  </svg>
                </div>
                <div>
                  <h5 className="mb-1">Document Uploaded Successfully!</h5>
                  <p className="mb-0 small">Your document has been processed and saved.</p>
                </div>
              </div>
            </Alert>
          ) : uploadError ? (
            <Alert color="danger" className="compact-alert">
              <div className="d-flex align-items-center">
                <div className="error-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="#d32f2f"/>
                  </svg>
                </div>
                <div>
                  <h5 className="mb-1">Upload Error</h5>
                  <p className="mb-0 small">{uploadError}</p>
                </div>
              </div>
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
              hideHeader={true} // Always hide the form's internal header, we're showing our own
              onSchemaLoaded={handleSchemaLoaded}
              prioritizeUploadFields={prioritizeUploadFields}
            />
          )}
        </ModalBody>
        
        <div className="document-modal-footer">
          {uploadSuccess ? (
            <div className="d-flex justify-content-end w-100">
              <Button 
                color="primary" 
                outline
                className="btn-rounded mr-2"
                onClick={handleReset}
                style={{ borderColor: '#ff007f', color: '#ff007f' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="mr-2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V1L7 6L12 11V7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13H4C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 8.58 16.42 5 12 5Z" fill="currentColor"/>
                </svg>
                Upload Another
              </Button>
              <Button 
                color="primary"
                className="btn-rounded"
                onClick={handleCloseModal}
                style={{ backgroundColor: '#ff007f', borderColor: '#ff007f' }}
              >
                Close
              </Button>
            </div>
          ) : (
            <div className="d-flex justify-content-between w-100 align-items-center">
              <div className="left-buttons">
                {/* Left side buttons if needed */}
                {formSchema && formSchema.leftButtons && formSchema.leftButtons.map((button, index) => (
                  <Button
                    key={`left-button-${index}`}
                    color={button.color || "secondary"}
                    outline={button.outline || false}
                    onClick={() => {
                      handleCustomButtonAction(button);
                    }}
                    className={`btn-rounded mr-2 ${button.className || ''}`}
                    style={button.style || {}}
                    disabled={button.disabled || false}
                  >
                    {button.label || 'Button'}
                  </Button>
                ))}
              </div>
              
              <div className="action-buttons">
                {/* Only show cancel button if explicitly defined in schema or no schema loaded yet */}
                {(!formSchema || (formSchema && formSchema.showCancelButton !== false)) && (
                  <Button 
                    color="secondary" 
                    outline
                    onClick={handleFooterCancel}
                    className="btn-rounded"
                    style={{ borderColor: '#5f6368', color: '#5f6368' }}
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
                    className="btn-rounded"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="mr-2" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/>
                    </svg>
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
                    className={`btn-rounded ${button.className || ''}`}
                    style={button.style || {}}
                    disabled={button.disabled || false}
                  >
                    {button.label || 'Button'}
                  </Button>
                ))}
                
                {/* Only show submit button if explicitly defined in schema or no schema loaded yet */}
                {(!formSchema || (formSchema && formSchema.showSubmitButton !== false)) && (
                  <Button 
                    color="primary"
                    type="submit"
                    form="document-upload-form"
                    className="btn-rounded"
                    style={{ backgroundColor: '#ff007f', borderColor: '#ff007f', color: 'white' }}
                    disabled={
                      uploadError || 
                      submitting || 
                      (typeof actionsFunctions.hasValidForm === 'function' ? !actionsFunctions.hasValidForm() : false)
                    }
                  >
                    {submitting ? 'Uploading...' : (
                      typeof actionsFunctions.getSubmitButtonText === 'function' ? 
                        actionsFunctions.getSubmitButtonText() : 
                        'Upload Document'
                    )}
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <style jsx>{`
        .modal-inner-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
        }
        
        .dynamic-document-header {
          flex-shrink: 0;
        }
        
        .document-modal-body-scrollable {
          flex: 1;
        }
        
        .document-modal-footer {
          flex-shrink: 0;
        }
        
        @media (max-width: 768px) {
          .action-buttons {
            flex-direction: column;
          }
          
          .action-buttons .btn {
            margin-right: 0 !important;
            margin-bottom: 0.5rem;
            width: 100%;
          }
        }
        
        .submit-loading-dots {
          display: inline-flex;
          gap: 4px;
          margin-right: 8px;
          align-items: center;
        }
        
        .submit-loading-dots .dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: white;
          opacity: 0.8;
        }
        
        .submit-loading-dots .dot1 {
          animation: pulse 1.2s infinite;
        }
        
        .submit-loading-dots .dot2 {
          animation: pulse 1.2s infinite 0.4s;
        }
        
        .submit-loading-dots .dot3 {
          animation: pulse 1.2s infinite 0.8s;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </Modal>
  );
};

export default DynamicDocumentModal; 