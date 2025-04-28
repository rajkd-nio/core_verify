'use client';

import React, { useState, useEffect } from 'react';
import DynamicDocumentModal from '../../components/documents/DynamicDocumentModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/nurseio-theme.css';

// Helper function to log data in a structured way
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
};

// Helper function to safely send messages to parent
const sendMessageToParent = (message, targetOrigin) => {
  if (window.parent && window.parent !== window) {
    try {
      logData('SENDING_TO_PARENT', {
        message,
        targetOrigin
      });
      
      window.parent.postMessage(message, targetOrigin || '*');
      return true;
    } catch (error) {
      console.error('Error sending message to parent:', error);
      return false;
    }
  }
  return false;
};

export default function IframeUploader() {
  const [token, setToken] = useState('');
  const [configData, setConfigData] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const [modalType, setModalType] = useState('edit');
  const [documentType, setDocumentType] = useState('certificate');
  const [tokenError, setTokenError] = useState('');

  // Parse URL parameters and listen for messages from parent
  useEffect(() => {
    // Parse token from URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get('token');
    const docType = urlParams.get('docType') || 'certificate';
    const viewMode = urlParams.get('modalType') || 'edit';
    
    // Configure initial document type from URL
    if (docType) {
      setDocumentType(docType);
      
      const initialConfig = {
        ...configData || {},
        documentType: docType
      };
      setConfigData(initialConfig);
    }
    
    // Set modal type if provided
    if (viewMode) {
      setModalType(viewMode);
    }
    
    if (urlToken) {
      setToken(urlToken);
    } else {
      setTokenError('Authentication token is missing. Please ensure the URL contains a valid token parameter.');
    }

    // Set up message listener for parent window communication
    const handleMessage = (event) => {
      logData('Received message from parent', {
        origin: event.origin,
        data: event.data
      });
      
      if (event.data && event.data.type === 'CONFIG_OVERRIDE') {
        logData('Applying config override from parent', event.data.config);
        setConfigData(event.data.config);
        
        // If modalType is specified in the config, set it
        if (event.data.config && event.data.config.modalType) {
          setModalType(event.data.config.modalType);
        }
        
        // If documentType is specified in the config, set it
        if (event.data.config && event.data.config.documentType) {
          setDocumentType(event.data.config.documentType);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Clean up listener on unmount
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const handleCloseModal = () => {
    // Notify parent window that modal was closed
    if (window.parent) {
      window.parent.postMessage({
        type: 'MODAL_CLOSED',
        success: false
      }, '*');
    }
    
    setShowModal(false);
  };

  // If token is missing, show error message
  if (tokenError) {
    return (
      <div className="iframe-uploader-container nurseio-theme">
        <div className="alert alert-danger m-4">
          <h4>Authentication Error</h4>
          <p>{tokenError}</p>
          <p>Please contact support if this issue persists.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="iframe-uploader-container nurseio-theme">
      <DynamicDocumentModal
        isOpen={showModal}
        toggle={handleCloseModal}
        token={token}
        documentType={documentType}
        modalType={modalType}
        config={configData}
        isEmbedded={true}
        parentOrigin="*"
        hideHeader={false}
        containerClassName="certificate-modal"
      />
    </div>
  );
} 