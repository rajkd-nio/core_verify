'use client';

import React, { useState, useEffect } from 'react';
import DynamicForm from '../DynamicForm';
import { fetchFormSchema } from '../../utils/formSchemaApi';
import { uploadFile } from '../../utils/api';
import { Alert, Spinner } from 'reactstrap';

// Version info for tracking integration
const COMPONENT_VERSION = '1.0.0';

// Helper function to log data
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
};

/**
 * Dynamic Document Uploader component that fetches the appropriate form schema
 * and renders a dynamic form for uploading documents
 */
const DynamicDocumentUploader = ({
  token = '',
  documentType = 'certificate',
  modalType = 'edit',
  onSuccess,
  onError,
  data = null,
  config = null,
  verifyConfig = null,
  isEmbedded = false,
  parentOrigin = '*',
  hideHeader = false,
  onSchemaLoaded = null
}) => {
  // Component state
  const [schema, setSchema] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [initialValues, setInitialValues] = useState({});
  
  // For security, store the allowed origin internally
  const [secureParentOrigin] = useState(parentOrigin);
  
  // Fetch form schema on component mount or when document type changes
  useEffect(() => {
    const fetchSchema = async () => {
      try {
        setLoading(true);
        setError('');
        
        // Get document type from props or from config
        const docType = documentType || config?.documentType || verifyConfig?.documentType || 'certificate';
        
        logData('FETCHING_SCHEMA_FOR_DOCUMENT_TYPE', { docType });
        
        // Fetch schema from API
        const formSchema = await fetchFormSchema(docType);
        
        if (formSchema) {
          // Keep the original showFormButtons value from the schema
          const modifiedSchema = {
            ...formSchema
          };
          
          setSchema(modifiedSchema);
          
          // Notify parent component about the schema
          if (onSchemaLoaded) {
            onSchemaLoaded(modifiedSchema);
          }
          
          logData('SCHEMA_LOADED', {
            documentType: formSchema.documentType,
            fieldCount: formSchema.fields.length,
            showFormButtons: formSchema.showFormButtons
          });
        } else {
          setError('Failed to load form schema');
        }
      } catch (err) {
        logData('SCHEMA_FETCH_ERROR', { error: err.message });
        setError(`Failed to load form: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
    
    fetchSchema();
  }, [documentType, config?.documentType, verifyConfig?.documentType]);
  
  // Prepare initial values when data or config changes
  useEffect(() => {
    const computeInitialValues = () => {
      // Start with empty object
      let values = {};
      
      // If we have data (for edit mode), use it as base
      if (data) {
        values = { ...data };
      }
      
      // Use either verifyConfig or config, with config taking precedence
      const configToApply = config || verifyConfig;
      
      if (configToApply && configToApply !== data) {
        logData('APPLYING_CONFIG_TO_FORM', configToApply);
        
        // Map config values to form fields
        if (configToApply.documentType) {
          values.documentType = configToApply.documentType;
        } else if (documentType) {
          // Use the documentType prop if passed
          values.documentType = documentType;
        }
        
        if (configToApply.userId) {
          values.userId = configToApply.userId;
        }
        
        // Use either documentName or certificateAbbreviation
        if (configToApply.documentName) {
          values.certificateAbbreviation = configToApply.documentName;
        }
        
        // Map date fields
        if (configToApply.documentDate) {
          values.effectiveDate = configToApply.documentDate;
        }
        
        if (configToApply.expirationDate) {
          values.expirationDate = configToApply.expirationDate;
        }
        
        // Map ID fields
        if (configToApply.documentNumber) {
          values.certLicenseNumber = configToApply.documentNumber;
          values.documentId = configToApply.documentNumber;
        }
        
        // Other common fields
        if (configToApply.jurisdiction) {
          values.jurisdiction = configToApply.jurisdiction;
        }
        
        if (configToApply.specialities) {
          values.specialities = configToApply.specialities;
        }
        
        if (configToApply.issuer) {
          values.issuer = configToApply.issuer;
        }
        
        if (configToApply.recipient) {
          values.recipient = configToApply.recipient;
        }
        
        if (configToApply.notes) {
          values.notes = configToApply.notes;
        }
        
        if (configToApply.tags) {
          values.tags = configToApply.tags;
        }
        
        if (configToApply.customType) {
          values.customType = configToApply.customType;
        }
        
        if (configToApply.category) {
          values.category = configToApply.category;
        }
        
        // Boolean fields
        if (configToApply.shareable !== undefined) {
          values.shareable = String(configToApply.shareable);
        } else if (!values.shareable) {
          // Default to true if not specified
          values.shareable = 'true';
        }
        
        if (configToApply.public !== undefined) {
          values.public = String(configToApply.public);
        }
        
        if (configToApply.confidential !== undefined) {
          values.confidential = String(configToApply.confidential);
        }
      }
      
      logData('INITIAL_FORM_VALUES', values);
      setInitialValues(values);
    };
    
    computeInitialValues();
  }, [data, config, verifyConfig, documentType]);
  
  // Handle form submission
  const handleFormSubmit = async (formData) => {
    try {
      setSubmitting(true);
      setError('');
      setSuccess('');
      
      // Create submission payload
      const payload = {
        ...formData,
        token,
        verifyConfig: verifyConfig || {},
        config: config || {},
        componentVersion: COMPONENT_VERSION,
        isEmbedded,
        timestamp: new Date().toISOString()
      };
      
      logData('SUBMITTING_DOCUMENT', {
        documentType: payload.documentType,
        title: payload.certificateAbbreviation,
        fileName: payload.file?.name
      });
      
      // Submit the data
      const response = await uploadFile(payload);
      
      logData('UPLOAD_RESPONSE', response);
      
      // Set success message
      setSuccess(schema.successMessage || 'Document uploaded successfully!');
      
      // Send message to parent window if in iframe
      if (window.parent && window.parent !== window && isEmbedded) {
        try {
          const messageData = {
            type: 'DOCUMENT_UPLOADED',
            data: response.data,
            timestamp: new Date().toISOString()
          };
          
          logData('SENDING_TO_PARENT', {
            targetOrigin: secureParentOrigin,
            messageData
          });
          
          window.parent.postMessage(messageData, secureParentOrigin);
        } catch (err) {
          console.error('Error sending to parent:', err);
        }
      }
      
      // Call success callback if provided
      if (onSuccess) {
        onSuccess(response.data);
      }
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccess('');
      }, 3000);
    } catch (err) {
      logData('UPLOAD_ERROR', {
        error: err.message,
        stack: err.stack
      });
      
      setError(err.message || schema.errorMessage || 'Failed to upload document');
      
      // Call error callback if provided
      if (onError) {
        onError(err);
      }
    } finally {
      setSubmitting(false);
    }
  };
  
  // Handle form cancellation
  const handleCancel = (action) => {
    // Check if this is a delete action
    const isDelete = action === 'delete';
    
    // Send message to parent window if in iframe
    if (window.parent && window.parent !== window && isEmbedded) {
      try {
        const messageData = {
          type: isDelete ? 'DOCUMENT_DELETED' : 'UPLOAD_CANCELLED',
          cancelled: !isDelete,
          deleted: isDelete,
          reason: isDelete ? 'User deleted document' : 'User cancelled form',
          timestamp: new Date().toISOString()
        };
        
        logData(isDelete ? 'SENDING_DELETE_TO_PARENT' : 'SENDING_CANCEL_TO_PARENT', {
          targetOrigin: secureParentOrigin,
          messageData
        });
        
        window.parent.postMessage(messageData, secureParentOrigin);
        
        // Also send a MODAL_CLOSED message to ensure iframe is closed
        window.parent.postMessage({
          type: 'MODAL_CLOSED', 
          success: false,
          cancelled: !isDelete,
          deleted: isDelete,
          timestamp: new Date().toISOString()
        }, secureParentOrigin);
      } catch (err) {
        console.error('Error sending to parent:', err);
      }
    }
    
    // Call error callback with appropriate message
    if (onError) {
      onError(new Error(isDelete ? 'Document deleted by user' : 'Upload cancelled by user'));
    }
  };
  
  // Show loading state
  if (loading) {
    return (
      <div className="text-center p-5">
        <Spinner color="primary" />
        <p className="mt-2">Loading form...</p>
      </div>
    );
  }
  
  // Show error state if schema failed to load
  if (!schema && error) {
    return (
      <Alert color="danger">
        <h4>Error</h4>
        <p>{error}</p>
        <p>Please try refreshing the page or contact support.</p>
      </Alert>
    );
  }
  
  // Render the dynamic form
  return (
    <div className="dynamic-document-uploader">
      <DynamicForm
        schema={{
          ...schema,
          showFormButtons: false // Always hide form buttons as they're in the modal footer
        }}
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        onCancel={handleCancel}
        isSubmitting={submitting}
        error={error}
        success={success}
        className="px-3"
      />
    </div>
  );
};

export default DynamicDocumentUploader; 