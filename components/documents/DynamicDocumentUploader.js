'use client';

import React, { useState, useEffect } from 'react';
import FormSelector from '../FormSelector';
import { fetchFormSchema, fetchLocationDocumentTypes } from '../../utils/formSchemaApi';
import { uploadFile } from '../../utils/api';
import { Alert, Button } from 'reactstrap';
import DocumentTypeSelector from '../../app/iframe-uploader/DocumentTypeSelector';
import SkeletonLoader from '../SkeletonLoader';
import '../../styles/FormStyles.css'; // Import our custom form styles

// Version info for tracking integration
const COMPONENT_VERSION = '1.0.1';

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
  
  // Add a new state for location document types
  const [locationDocumentTypes, setLocationDocumentTypes] = useState(null);
  
  // Add new states for child document type selection
  const [isChildTypeSelector, setIsChildTypeSelector] = useState(false);
  const [childTypeOptions, setChildTypeOptions] = useState([]);
  const [selectedChildType, setSelectedChildType] = useState('');
  const [childFormSchemas, setChildFormSchemas] = useState({});
  
  // Fetch form schema on component mount or when document type changes
  useEffect(() => {
    const fetchSchema = async () => {
      try {
        setLoading(true);
        setError('');
        
        // Get document type from props or from config
        let docType = documentType;
        if (!docType && config && config.documentType) {
          docType = config.documentType;
        } else if (!docType && verifyConfig && verifyConfig.documentType) {
          docType = verifyConfig.documentType;
        }
        if (!docType) {
          docType = 'certificate';
        }
        
        // Get location ID from config
        let locationId = null;
        if (config && config.locationId) {
          locationId = config.locationId;
        } else if (verifyConfig && verifyConfig.locationId) {
          locationId = verifyConfig.locationId;
        }
        
        // Get child type ID from config (if available)
        let childTypeId = null;
        if (config && config.childTypeId) {
          childTypeId = config.childTypeId;
        } else if (verifyConfig && verifyConfig.childTypeId) {
          childTypeId = verifyConfig.childTypeId;
        }
        
        // Store current selected child type in a local var to avoid dependency issues
        const currentSelectedType = selectedChildType;
        
        logData('FETCHING_SCHEMA_FOR_DOCUMENT_TYPE', { 
          docType,
          locationId,
          childTypeId: childTypeId || currentSelectedType
        });
        
        // Fetch schema from API with locationId if available
        const options = { locationId };
        
        // Use the selected child type if no child type is in the config
        if (childTypeId) {
          options.childTypeId = childTypeId;
        } else if (currentSelectedType) {
          options.childTypeId = currentSelectedType;
        }
        
        const formSchema = await fetchFormSchema(docType, options);
        
        if (formSchema) {
          // Check if this schema is a child type selector
          if (formSchema.isChildTypeSelector) {
            setIsChildTypeSelector(true);
            if (formSchema.fields && formSchema.fields.length > 0) {
              const selectField = formSchema.fields.find(f => f.id === 'childDocumentType');
              if (selectField && selectField.options) {
                setChildTypeOptions(selectField.options);
              }
            }
          } else {
            setIsChildTypeSelector(false);
          }
          
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
            childDocumentType: formSchema.childDocumentType,
            locationId,
            fieldCount: formSchema.fields.length,
            showFormButtons: formSchema.showFormButtons,
            isChildTypeSelector: formSchema.isChildTypeSelector
          });
        } else {
          setError('Failed to load form schema');
        }
      } catch (err) {
        logData('SCHEMA_FETCH_ERROR', { error: err.message });
        // Handle incorrect parent/child type combination specifically
        if (err.message && err.message.includes('belongs to parent type')) {
          const errorParts = err.message.match(/Child document type "([^"]+)" belongs to parent type "([^"]+)", not "([^"]+)"/);
          if (errorParts && errorParts.length >= 4) {
            const [_, childType, correctParent, currentParent] = errorParts;
            setError(`The document type "${childType}" belongs to "${correctParent}" category, not "${currentParent}". Please select the correct document type.`);
          } else {
            setError(`Failed to load form: ${err.message}`);
          }
        } else {
          setError(`Failed to load form: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchSchema();
    // Remove selectedChildType from the dependency array to prevent infinite loops
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documentType, config, verifyConfig]);
  
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
  
  // Add a new useEffect to fetch location-specific document types
  useEffect(() => {
    const fetchLocationTypes = async () => {
      // Get location ID from config
      let locationId = null;
      if (config && config.locationId) {
        locationId = config.locationId;
      } else if (verifyConfig && verifyConfig.locationId) {
        locationId = verifyConfig.locationId;
      }
      
      if (locationId) {
        try {
          const result = await fetchLocationDocumentTypes(locationId);
          if (result) {
            logData('LOCATION_DOCUMENT_TYPES_LOADED', {
              locationId,
              documentTypeCount: Object.keys(result.documentTypes || {}).length
            });
            setLocationDocumentTypes(result);
          }
        } catch (error) {
          logData('ERROR_FETCHING_LOCATION_DOCUMENT_TYPES', { error: error.message });
        }
      }
    };
    
    fetchLocationTypes();
  }, [config, verifyConfig]);
  
  // Add a new useEffect to automatically select the first child type when options are loaded
  useEffect(() => {
    // Only auto-select if we have child type options, are in child type selector mode,
    // and no child type is currently selected
    if (isChildTypeSelector && childTypeOptions.length > 0 && !selectedChildType) {
      // Select the first option by default
      const firstChildType = childTypeOptions[0].value;
      handleChildTypeSelect(firstChildType);
      
      logData('AUTO_SELECTED_FIRST_CHILD_TYPE', { 
        childType: firstChildType,
        availableOptions: childTypeOptions.length
      });
    }
  }, [isChildTypeSelector, childTypeOptions, selectedChildType]);
  
  // Handler for child document type selection
  const handleChildTypeSelect = async (childTypeId, formData = null) => {
    try {
      // Only update if the selected type has changed
      if (childTypeId !== selectedChildType) {
        setSelectedChildType(childTypeId);
        
        // Update config to include child type ID
        if (config) {
          config.childTypeId = childTypeId;
        } else if (verifyConfig) {
          verifyConfig.childTypeId = childTypeId;
        }
        
        logData('CHILD_DOCUMENT_TYPE_SELECTED', { childTypeId });
      }
      
      // If form data was provided (from the updated selector), process it directly
      if (formData) {
        setLoading(true);
        // Skip fetching schema again since we already have it
        handleFormSubmit(formData);
      }
    } catch (error) {
      setError(`Error selecting document type: ${error.message}`);
      setLoading(false);
    }
  };
  
  // Handler for schemas loaded from DocumentTypeSelector
  const handleSchemasLoaded = (schemas) => {
    // Only update if schemas object is different to avoid unnecessary re-renders
    if (JSON.stringify(childFormSchemas) !== JSON.stringify(schemas)) {
      setChildFormSchemas(schemas);
    }
  };
  
  // Handler for canceling child type selection
  const handleChildTypeCancel = (action) => {
    // Close the iframe if cancel_and_close action is specified
    if (action === 'cancel_and_close' && isEmbedded && window.parent) {
      const messageToParent = {
        action: 'cancel',
        documentType: documentType,
        event: 'user_cancelled'
      };
      
      logData('SENDING_CANCEL_TO_PARENT', {
        message: messageToParent,
        parentOrigin: secureParentOrigin
      });
      
      // Post message to parent window to close iframe
      window.parent.postMessage(JSON.stringify(messageToParent), secureParentOrigin);
    }
    
    if (onError) {
      onError('Document type selection canceled');
    }
  };
  
  // Handle form submission
  const handleFormSubmit = async (formData) => {
    try {
      setSubmitting(true);
      setError('');
      setSuccess('');
      
      // Add child document type to form data if it was selected
      if (selectedChildType) {
        formData.childDocumentType = selectedChildType;
      }
      
      // Check if using location-specific document type
      if (formData.docData && formData.docData.startsWith('doc_title_') && locationDocumentTypes) {
        // Format is 'doc_title_123' where 123 is the document title ID
        const titleId = formData.docData.replace('doc_title_', '');
        logData('USING_LOCATION_SPECIFIC_DOCUMENT_TITLE', { 
          titleId,
          locationId: config?.locationId || verifyConfig?.locationId
        });
      }
      
      // Create submission payload
      const payload = {
        ...formData,
        token,
        verifyConfig: verifyConfig || {},
        config: config || {},
        locationDocumentTypes: locationDocumentTypes, // Include location document types
        componentVersion: COMPONENT_VERSION,
        isEmbedded,
        timestamp: new Date().toISOString()
      };
      
      logData('SUBMITTING_DOCUMENT', {
        documentType: payload.documentType,
        childDocumentType: payload.childDocumentType,
        title: payload.certificateAbbreviation,
        fileName: payload.file ? payload.file.name : null,
        locationId: config?.locationId || verifyConfig?.locationId
      });
      
      // Submit the data
      const response = await uploadFile(payload);
      
      logData('UPLOAD_RESPONSE', response);
      
      // Set success message
      setSuccess(schema.successMessage || 'Document uploaded successfully!');
      
      // Notify parent of success
      if (onSuccess) {
        onSuccess(response);
      }
      
      // Reset the form if needed
      // ...
    } catch (err) {
      logData('UPLOAD_ERROR', { error: err.message });
      setError(`Failed to upload document: ${err.message}`);
      
      // Notify parent of error
      if (onError) {
        onError(err.message);
      }
    } finally {
      setSubmitting(false);
    }
  };
  
  // Handle cancel action
  const handleCancel = (action) => {
    // If the component is embedded, send message to parent
    if (isEmbedded && window.parent) {
      const messageToParent = {
        action: 'cancel',
        documentType: documentType,
        event: action || 'cancel'
      };
      
      logData('SENDING_CANCEL_TO_PARENT', {
        message: messageToParent,
        parentOrigin: secureParentOrigin
      });
      
      // Post message to parent window
      window.parent.postMessage(JSON.stringify(messageToParent), secureParentOrigin);
    }
    
    // Also call the onError callback if provided
    if (onError) {
      onError(action === 'cancel_and_close' ? 'User cancelled and closed the operation' : 'User cancelled the operation');
    }
  };
  
  // Add a property to expose active child document type and form schema
  useEffect(() => {
    if (onSchemaLoaded) {
      // Create helper functions first to ensure they exist
      const submitFormAction = () => {
        const form = document.getElementById('document-upload-form');
        if (form) {
          form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
          return true;
        }
        return false;
      };
      
      const getSubmitButtonText = () => {
        if (isChildTypeSelector && selectedChildType && childFormSchemas && childFormSchemas[selectedChildType]) {
          return childFormSchemas[selectedChildType].submitButtonText || 'Upload Document';
        } else if (schema) {
          return schema.submitButtonText || 'Upload Document';
        }
        return 'Upload Document';
      };
      
      const hasValidForm = () => {
        return isChildTypeSelector ? 
          (selectedChildType && childFormSchemas && !!childFormSchemas[selectedChildType]) : 
          !!schema;
      };
      
      // Pass both the schema and action info
      const actionInfo = {
        schema: schema,
        isChildTypeSelector,
        selectedChildType,
        childTypeOptions,
        childFormSchemas,
        submitFormAction,
        getSubmitButtonText,
        hasValidForm
      };
      
      // Log before sending for debugging
      console.log('Sending actionInfo to parent:', actionInfo);
      
      onSchemaLoaded(actionInfo);
    }
  // Remove childFormSchemas from the dependency array to prevent infinite loop
  }, [schema, onSchemaLoaded, isChildTypeSelector, selectedChildType, childTypeOptions]);
  
  // Show loading indicator while fetching schema
  if (loading) {
    return (
      <div className="text-center my-5">
        <SkeletonLoader isVisible={true} message="Loading document form..." />
      </div>
    );
  }
  
  // Show error message if schema failed to load
  if (error && !schema) {
    return (
      <Alert color="danger" className="my-3">
        <h5>Error</h5>
        <p>{error}</p>
        <button
          className="btn btn-outline-danger mt-2"
          onClick={handleCancel}
        >
          Close
        </button>
      </Alert>
    );
  }
  
  // If no schema is available, show error
  if (!schema) {
    return (
      <Alert color="warning" className="my-3">
        <h5>Form Not Available</h5>
        <p>The document upload form could not be loaded.</p>
        <button
          className="btn btn-outline-warning mt-2"
          onClick={handleCancel}
        >
          Close
        </button>
      </Alert>
    );
  }
  
  // If this is a child type selector, render the selector component
  if (isChildTypeSelector) {
    return (
      <div className="dynamic-document-uploader">
        <div className="document-content">
          <DocumentTypeSelector
            parentTypeId={documentType}
            options={childTypeOptions}
            onSelect={handleChildTypeSelect}
            onCancel={handleChildTypeCancel}
            onSchemasLoaded={handleSchemasLoaded}
            defaultSelectedType={selectedChildType}
          />
        </div>
      </div>
    );
  }
  
  // Render the dynamic form
  return (
    <div className="dynamic-document-uploader">
      <div className="document-content">
        <FormSelector
          schema={{
            ...schema,
            // Set documentType to fingerprint_clearance if selectedChildType is fingerprint_clearance
            documentType: selectedChildType === 'fingerprint_clearance' ? 'fingerprint_clearance' : schema.documentType,
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
    </div>
  );
};

export default DynamicDocumentUploader; 