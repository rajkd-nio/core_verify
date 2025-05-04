'use client';

import React, { useState, useEffect } from 'react';
import DynamicDocumentModal from '../../components/documents/DynamicDocumentModal';
import SkeletonLoader from '../../components/SkeletonLoader';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/nurseio-theme.css';
import '../../styles/FormStyles.css';
import '../../styles/DynamicDocumentModal.css';

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

// Global variables to store type mappings
let documentTypeMappings = {
  // Default mappings - use IDs consistently
  'vaccination_record': 'vaccination_record',
  'mandatory': 'mandatory',
  'documents': 'documents',
  'other': 'other'
};

// Store child document types for each parent type
let childDocumentTypesByParent = {};

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
    const locationId = urlParams.get('locationId');
    const locationName = urlParams.get('locationName') || null;
    
    // Configure initial document type from URL
    if (docType) {
      // Normalize document type if needed
      const normalizedDocType = docType.toLowerCase() === 'vaccination record' ? 'vaccination_record' : docType;
      setDocumentType(normalizedDocType);
      
      const initialConfig = {
        ...configData || {},
        documentType: normalizedDocType,
        // Add locationId to the initial config if available
        ...(locationId && { locationId: parseInt(locationId, 10) }),
        ...(locationName && { locationName }),
      };
      
      // Log the extracted location information from URL
      logData('Extracted location info from URL', {
        locationId,
        locationName,
        parsedLocationId: locationId ? parseInt(locationId, 10) : null
      });
      
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
      
      // Handle document type mapping messages
      if (event.data && event.data.type === 'TYPE_MAPPING') {
        logData('Received type mapping from parent', event.data);
        
        const mapping = event.data.mapping;
        const locationInfo = event.data.locationSpecific;
        
        // Store the mapping
        if (mapping && mapping.nurseioType && mapping.coreVerifyType) {
          documentTypeMappings[mapping.nurseioType] = mapping.coreVerifyType;
          
          // Handle possible IDs field for vaccination records
          if (mapping.possibleIds && Array.isArray(mapping.possibleIds)) {
            console.log('Received possible IDs for type mapping:', mapping.possibleIds);
            
            // Store all possible ID mappings
            mapping.possibleIds.forEach(id => {
              documentTypeMappings[id.toLowerCase()] = mapping.coreVerifyType;
            });
          }
          
          // Special handling for mandatory documents
          if (mapping.nurseioType === 'mandatory') {
            // Store location-specific information for mandatory documents
            if (locationInfo) {
              window.mandatoryLocationInfo = locationInfo;
              console.log('Stored location-specific info for mandatory documents:', locationInfo);
            }
          }
          
          // Also specifically handle vaccination record type
          if (mapping.nurseioType === 'vaccination_record' || 
              mapping.coreVerifyType === 'Vaccination Record' ||
              mapping.nurseioType?.toLowerCase()?.includes('vaccination')) {
            // Always use 'vaccination_record' as the ID
            documentTypeMappings['vaccination_record'] = 'vaccination_record';
            documentTypeMappings['vaccination record'] = 'vaccination_record';
            documentTypeMappings['Vaccination Record'] = 'vaccination_record';
            
            // Store this for consistency
            window.vaccinationRecordType = 'vaccination_record';
            window.vaccinationRecordDisplayName = 'Vaccination Record';
          }
          
          logData('Updated document type mappings', documentTypeMappings);
        }
        
        // Store child document types if provided
        if (event.data.childTypes && Array.isArray(event.data.childTypes) && mapping?.nurseioType) {
          childDocumentTypesByParent[mapping.nurseioType] = event.data.childTypes;
          
          // Store location-specific child types for mandatory documents
          if (mapping.nurseioType === 'mandatory' && locationInfo) {
            const locationKey = `${mapping.nurseioType}_${locationInfo.locationName.toLowerCase()}`;
            childDocumentTypesByParent[locationKey] = event.data.childTypes;
            console.log(`Stored child types for ${locationKey}:`, event.data.childTypes);
          }
          
          // For vaccination records, ensure we store these types under all possible parent type IDs
          if (mapping.nurseioType === 'vaccination_record' || 
              mapping.coreVerifyType === 'Vaccination Record' ||
              mapping.nurseioType?.toLowerCase()?.includes('vaccination')) {
            
            // Always store using the consistent ID
            childDocumentTypesByParent['vaccination_record'] = event.data.childTypes;
            
            // Also store for backward compatibility with any code that might still use display names
            childDocumentTypesByParent['Vaccination Record'] = event.data.childTypes;
            childDocumentTypesByParent['vaccination record'] = event.data.childTypes;
            
            // Store a global reference for easy access
            window.vaccinationRecordChildTypes = event.data.childTypes;
            
            console.log('Stored vaccination record child types consistently as vaccination_record');
          }
          
          logData('Updated child document types', childDocumentTypesByParent);
        }
        
        // Log any debug information
        if (event.data.debug) {
          console.log('Debug information from type mapping:', event.data.debug);
        }
      }
      
      // Handle explicit child document types messages
      if (event.data && event.data.type === 'CHILD_DOCUMENT_TYPES') {
        logData('Received child document types from parent', event.data);
        
        if (event.data.parentType && event.data.childTypes && Array.isArray(event.data.childTypes)) {
          childDocumentTypesByParent[event.data.parentType] = event.data.childTypes;
          
          // Also update type mapping if provided
          if (event.data.coreVerifyParentType && event.data.parentType) {
            documentTypeMappings[event.data.parentType] = event.data.coreVerifyParentType;
          }
          
          logData('Updated child document types', {
            childTypesByParent: childDocumentTypesByParent,
            mappings: documentTypeMappings
          });
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
      <div className="iframe-uploader-container nurseio-theme" style={{ height: '100vh', maxHeight: '100vh' }}>
        <div className="error-container m-4">
          <SkeletonLoader isVisible={false} />
          <div className="alert alert-danger">
          <h4>Authentication Error</h4>
          <p>{tokenError}</p>
          <p>Please contact support if this issue persists.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="iframe-uploader-container nurseio-theme" style={{ height: '100vh', maxHeight: '100vh' }}>
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