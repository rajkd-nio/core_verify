'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Form, FormGroup, Label, Input, Alert, Card, CardBody } from 'reactstrap';
import DynamicForm from '../../components/DynamicForm';
import { fetchAllChildSchemas } from '../../utils/formSchemaApi';

/**
 * Component for selecting a child document type and displaying its form
 * @param {Object} props - Component props
 * @param {string} props.parentTypeId - Parent document type ID
 * @param {Array} props.options - Options for child document types
 * @param {Function} props.onSelect - Callback when child type is selected
 * @param {Function} props.onCancel - Callback when selection is cancelled
 * @param {Function} props.onSchemasLoaded - Callback when schemas are loaded
 * @param {string} props.defaultSelectedType - Optional pre-selected type from parent
 */
const DocumentTypeSelector = ({
  parentTypeId,
  options,
  onSelect,
  onCancel,
  onSchemasLoaded,
  defaultSelectedType
}) => {
  const [selectedType, setSelectedType] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [childFormSchemas, setChildFormSchemas] = useState({});
  const [loadingSchemas, setLoadingSchemas] = useState(false);
  const [schemasLoaded, setSchemasLoaded] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Update selected type if defaultSelectedType changes
  useEffect(() => {
    if (defaultSelectedType && defaultSelectedType !== selectedType) {
      setSelectedType(defaultSelectedType);
    }
  }, [defaultSelectedType, selectedType]);
  
  // Select the first option by default whenever options change or on first render
  useEffect(() => {
    if (options && options.length > 0 && !isInitialized) {
      // Use defaultSelectedType if provided, otherwise use first option
      const typeToSelect = defaultSelectedType || options[0].value;
      setSelectedType(typeToSelect);
      setIsInitialized(true);
      
      // Notify parent about initial selection, but only if we're not using defaultSelectedType
      // to avoid circular updates
      if (onSelect && !defaultSelectedType) {
        onSelect(typeToSelect);
      }
    }
  }, [options, onSelect, isInitialized, defaultSelectedType]);
  
  // Memoize the callback function to prevent it from changing on every render
  const notifySchemasLoaded = useCallback((schemas) => {
    if (onSchemasLoaded && typeof onSchemasLoaded === 'function') {
      onSchemasLoaded(schemas);
    }
  }, [onSchemasLoaded]);
  
  // Fetch all child form schemas when component mounts
  useEffect(() => {
    // Only fetch if schemas haven't been loaded yet and we have the necessary data
    if (schemasLoaded || !options || options.length === 0 || !parentTypeId) return;
    
    const fetchAllSchemas = async () => {
      // Prevent multiple simultaneous fetches
      if (loadingSchemas) return;
      
      setLoadingSchemas(true);
      
      try {
        console.log(`Fetching all child schemas for parent type: ${parentTypeId}`);
        
        // Special check for vaccination record types
        const isVaccinationRecord = 
          parentTypeId === 'vaccination_record' || 
          parentTypeId === 'Vaccination Record' || 
          parentTypeId === 'medical';
          
        if (isVaccinationRecord) {
          console.log('Fetching schemas for vaccination record');
        }
        
        // Use the utility function to fetch all schemas at once
        const locationId = new URLSearchParams(window.location.search).get('locationId');
        const schemas = await fetchAllChildSchemas(parentTypeId, { 
          locationId: locationId ? parseInt(locationId) : null,
          isVaccinationRecord: isVaccinationRecord
        });
        
        let loadedSchemas = {};
        
        if (Object.keys(schemas).length > 0) {
          loadedSchemas = schemas;
          setChildFormSchemas(schemas);
          console.log(`Successfully loaded ${Object.keys(schemas).length} schemas for ${parentTypeId}`);
          console.log(`Schema keys: ${Object.keys(schemas).join(', ')}`);
        } else {
          console.log(`No schemas were returned for ${parentTypeId}, falling back to individual fetches`);
          // Fall back to fetching schemas individually
          const individualSchemas = {};
          for (const option of options) {
            console.log(`Fetching individual schema for ${parentTypeId}/${option.value}`);
            const response = await fetch(`/api/form-schema/${parentTypeId}/${option.value}?log=true`);
            if (response.ok) {
              const schema = await response.json();
              individualSchemas[option.value] = schema;
              console.log(`Successfully loaded schema for ${option.value}`);
            } else {
              console.error(`Failed to fetch schema for ${option.value}`);
            }
          }
          loadedSchemas = individualSchemas;
          setChildFormSchemas(individualSchemas);
          console.log(`Loaded ${Object.keys(individualSchemas).length} individual schemas`);
        }
        
        // Notify parent component about loaded schemas once
        notifySchemasLoaded(loadedSchemas);
        setSchemasLoaded(true);
      } catch (error) {
        console.error(`Error loading form schemas: ${error.message}`);
        setError(`Error loading form schemas: ${error.message}`);
      } finally {
        setLoadingSchemas(false);
      }
    };
    
    fetchAllSchemas();
  }, [parentTypeId, options, notifySchemasLoaded, schemasLoaded, loadingSchemas]);
  
  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setSelectedType(newType);
    
    // Notify parent about selection, but don't pass form data here
    if (newType && onSelect) {
      onSelect(newType);
    }
  };
  
  const handleFormSubmit = (data) => {
    setLoading(true);
    
    try {
      // Add the child type ID to the form data
      const submissionData = {
        ...data,
        childDocumentType: selectedType
      };
      
      onSelect(selectedType, submissionData);
    } catch (error) {
      setError(error.message || 'Error submitting form');
      setLoading(false);
    }
  };
  
  // Get title for the selected document type
  const getSelectedDocumentTitle = () => {
    if (!selectedType) return '';
    const option = options.find(opt => opt.value === selectedType);
    return option ? option.label : '';
  };
  
  return (
    <div className="document-type-selector p-3">
      <Form>
        <FormGroup>
          <Label for="childDocumentType" className="fw-bold">Document Type</Label>
          <Input
            type="select"
            id="childDocumentType"
            name="childDocumentType"
            value={selectedType}
            onChange={handleTypeChange}
            disabled={loading || loadingSchemas}
            className="mb-4"
          >
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Input>
        </FormGroup>
      </Form>
      
      {error && <Alert color="danger">{error}</Alert>}
      
      {selectedType && (
        <div className="selected-form mt-4">
          <h5>{getSelectedDocumentTitle()} Form</h5>
          
          {loadingSchemas ? (
            <div className="text-center my-4">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading form fields...</p>
            </div>
          ) : childFormSchemas[selectedType] ? (
            <Card className="border-0">
              <CardBody className="px-0">
                <DynamicForm
                  schema={{
                    ...childFormSchemas[selectedType],
                    showFormButtons: false // Handle buttons in parent component
                  }}
                  initialValues={{}}
                  onSubmit={handleFormSubmit}
                  onCancel={onCancel}
                  isSubmitting={loading}
                />
              </CardBody>
            </Card>
          ) : (
            <div className="text-center my-3">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading form...</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DocumentTypeSelector; 