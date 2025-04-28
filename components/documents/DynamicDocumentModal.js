'use client';

import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Alert, Row, Col, Label } from 'reactstrap';
import DynamicDocumentUploader from './DynamicDocumentUploader';
import moment from 'moment';

// Version info for tracking integration
const COMPONENT_VERSION = '1.0.0';

// Helper function to log data in a structured way
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
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
  containerClassName = "rounded-10 border-radius-10"
}) => {
  const [documentTitle, setDocumentTitle] = useState('Document');
  const [submitting, setSubmitting] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [formSchema, setFormSchema] = useState(null);
  
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
    logData('Document upload successful', data);
    setUploadSuccess(true);
    setUploadError('');
    setSubmitting(false);
    
    // Notify parent window
    if (window.parent && isEmbedded) {
      window.parent.postMessage({
        type: 'DOCUMENT_UPLOAD_SUCCESS',
        data: data
      }, parentOrigin);
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
      window.parent.postMessage({
        type: 'MODAL_CLOSED',
        success: uploadSuccess,
        cancelled: !uploadSuccess, // Indicate it was cancelled if not successful
        timestamp: new Date().toISOString()
      }, parentOrigin);

      // Force parent to close the iframe
      if (!uploadSuccess) {
        window.parent.postMessage({
          type: 'FORCE_CLOSE_IFRAME',
          reason: 'User cancelled',
          timestamp: new Date().toISOString()
        }, parentOrigin);
      }
    }
    
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

  // Callback to receive schema from uploader
  const handleSchemaLoaded = (schema) => {
    setFormSchema(schema);
  };

  // Explicit cancel handler for the footer cancel button
  const handleFooterCancel = () => {
    // Send explicit cancel message
    if (window.parent && isEmbedded) {
      window.parent.postMessage({
        type: 'UPLOAD_CANCELLED',
        cancelled: true,
        reason: 'User clicked cancel button',
        timestamp: new Date().toISOString()
      }, parentOrigin);

      // Force close the iframe
      window.parent.postMessage({
        type: 'FORCE_CLOSE_IFRAME',
        reason: 'User cancelled',
        timestamp: new Date().toISOString()
      }, parentOrigin);
    }

    // Call error callback if provided
    if (onError) {
      onError(new Error('Upload cancelled by user from modal footer'));
    }

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
            <Button 
              color="secondary" 
              outline
              onClick={handleFooterCancel}
              className="btn-rounded font-weight-bold mr-2 py-2"
              style={{ borderColor: '#FF69B4', color: '#FF69B4' }}
            >
              Cancel
            </Button>
            
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
              Delete
            </Button>
            
            <Button 
              color="secondary"
              type="submit"
              form="document-upload-form"
              className="btn-rounded font-weight-bold py-2"
              style={{ backgroundColor: '#FF69B4', borderColor: '#FF69B4', color: 'white' }}
              disabled={!!uploadError || submitting}
              onClick={() => setSubmitting(true)}
            >
              {submitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Processing...
                </>
              ) : (
                'Add'
              )}
            </Button>
          </div>
        )}
      </ModalFooter>
    </Modal>
  );
};

export default DynamicDocumentModal; 