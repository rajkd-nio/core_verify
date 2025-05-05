import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Form, FormGroup, Label, Input, Alert, Row, Col, FormFeedback } from 'reactstrap';
import DragDropFileUpload from '../DragDropFileUpload';
import { useDocumentExtraction } from '../../hooks';
import LoadingOverlay from '../LoadingOverlay';
import moment from 'moment';
import { useLoading } from '../../context/LoadingContext';
import '../../styles/FormStyles.css';

/**
 * Special form component for Driver's License that initially only shows file upload
 * and then reveals other fields after document extraction
 */
const DriversLicenseForm = ({
  schema,
  initialValues = {},
  onSubmit,
  onCancel,
  isSubmitting = false,
  error = '',
  success = '',
  className = ''
}) => {
  // Global loading context
  const { setLoading, setLoadingMessage } = useLoading();

  // Form state
  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
    defaultValues: initialValues
  });
  
  // State for file management
  const [fileMap, setFileMap] = useState({});
  const [fileUrlMap, setFileUrlMap] = useState({});
  
  // State to control form visibility
  const [showAllFields, setShowAllFields] = useState(false);
  
  // Document extraction hook
  const {
    extracting,
    extractionError,
    extractedData,
    extractDataFromFile,
    setExtractionSuccess,
    extractionSuccess,
    extractionProgress
  } = useDocumentExtraction();
  
  // Handle file upload changes
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    
    if (files && files.length > 0) {
      const file = files[0];
      
      // Update file map
      setFileMap(prev => ({
        ...prev,
        [name]: file
      }));
      
      // Create a URL for the file
      const fileUrl = URL.createObjectURL(file);
      setFileUrlMap(prev => ({
        ...prev,
        [name]: fileUrl
      }));
      
      // Automatically process the document when a file is selected
      handleProcessDocument(file, name);
    }
  };
  
  // Map the API response fields to our form fields
  const mapExtractedDataToForm = (data) => {
    const formData = {};
    
    // Handle license number (directly)
    if (data.license_number) {
      formData.licenseNumber = data.license_number;
    }
    
    // Handle state extraction
    if (data.address) {
      // Extract state from address (usually last 2 characters)
      const stateMatch = data.address.match(/[A-Z]{2}(?=\s+\d{5}|\s*$)/);
      if (stateMatch && stateMatch[0]) {
        formData.state = stateMatch[0];
      }
    }
    
    // Handle issue date
    if (data.issue_date) {
      formData.issueDate = data.issue_date;
    }
    
    // Handle expiration date
    if (data.valid_until) {
      formData.expirationDate = data.valid_until;
    }
    
    console.log('Mapped extracted data to form fields:', formData);
    return formData;
  };
  
  // Process document data
  const handleProcessDocument = async (file, fieldName) => {
    try {
      // Show global loading
      setLoading(true);
      setLoadingMessage("Processing driver's license...");
      
      // Process the document
      const extractedFields = await extractDataFromFile(file, fieldName);
      console.log('Raw extracted fields:', extractedFields);
      
      // Map the API response fields to our form fields
      const mappedFields = mapExtractedDataToForm(extractedFields);
      
      // Apply extracted fields to the form
      Object.entries(mappedFields).forEach(([field, value]) => {
        if (value) {
          setValue(field, value);
          console.log(`Setting field ${field} to ${value}`);
        }
      });
      
      // Set extraction success message
      setExtractionSuccess("Document processed successfully. Please review the extracted information.");
      
      // Show all fields now that we have data
      setShowAllFields(true);
    } catch (error) {
      console.error(`Error processing document for ${fieldName}:`, error);
    } finally {
      // Turn off global loading
      setLoading(false);
    }
  };
  
  // Convert MM/DD/YYYY to YYYY-MM-DD for date inputs
  const formatDateForInput = (dateStr) => {
    if (!dateStr) return '';
    
    // If already in YYYY-MM-DD format, return as is
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      return dateStr;
    }
    
    // Try to parse as MM/DD/YYYY
    const parsed = moment(dateStr, 'MM/DD/YYYY', true);
    if (parsed.isValid()) {
      return parsed.format('YYYY-MM-DD');
    }
    
    return '';
  };
  
  // Convert YYYY-MM-DD to MM/DD/YYYY for form submission
  const formatDateFromInput = (dateStr) => {
    if (!dateStr) return '';
    
    const parsed = moment(dateStr, 'YYYY-MM-DD', true);
    if (parsed.isValid()) {
      return parsed.format('MM/DD/YYYY');
    }
    
    return '';
  };
  
  // Handle form submission
  const handleFormSubmit = async (data) => {
    // Show global loading
    setLoading(true);
    setLoadingMessage("Submitting driver's license...");
    
    try {
      // Create file upload keys for submission
      const fileUploadKeys = {};
      Object.entries(fileUrlMap).forEach(([fieldName, url]) => {
        fileUploadKeys[fieldName] = url;
      });
      
      // Create payload with files
      const payload = {
        ...data,
        files: fileMap,
        fileUploadKeys,
        documentType: schema.documentType
      };
      
      if (onSubmit) {
        onSubmit(payload);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Turn off global loading on error
      setLoading(false);
    }
  };
  
  // Find the upload field from schema
  const uploadField = schema?.fields?.find(f => f.type === 'file' && f.id === 'fileUpload');
  const uploadBackField = schema?.fields?.find(f => f.type === 'file' && f.id === 'fileUploadBack');
  
  // Get the rest of the fields (non-file fields)
  const dataFields = schema?.fields?.filter(f => 
    f.type !== 'file' && 
    f.id !== 'fileUpload' && 
    f.id !== 'fileUploadBack' &&
    !f.hidden
  ).sort((a, b) => a.order - b.order);
  
  // Export actions to parent component via schema
  useEffect(() => {
    // If we have a parent component with onSchemaLoaded callback (like DynamicDocumentModal)
    if (schema && schema.onSchemaLoaded) {
      // Define actions that can be called by the parent component
      const submitFormAction = () => {
        const form = document.getElementById('document-upload-form');
        if (form) {
          form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
          return true;
        }
        return false;
      };
      
      const hasValidForm = () => {
        // Check if we have required files uploaded
        const hasRequiredFiles = uploadField ? !!fileMap[uploadField.name] : true;
        const hasRequiredBackFiles = uploadBackField ? !!fileMap[uploadBackField.name] : true;
        
        // Check form validation state
        const hasNoErrors = Object.keys(errors).length === 0;
        
        return hasRequiredFiles && hasRequiredBackFiles && hasNoErrors;
      };
      
      const getSubmitButtonText = () => {
        return schema.submitButtonText || 'Submit';
      };
      
      // Call the parent's schema loaded function with our actions
      schema.onSchemaLoaded({
        submitFormAction,
        hasValidForm,
        getSubmitButtonText,
        // Include form state info for parent component
        isDriversLicenseForm: true,
        showAllFields,
        extracting
      });
    }
  }, [schema, errors, fileMap, showAllFields, extracting]);
  
  return (
    <div className={`drivers-license-form ${className}`} style={{ position: 'relative' }}>
      {/* Local processing indicator - using local state only, global loading is managed separately */}
      {(extracting || isSubmitting) && (
        <LoadingOverlay 
          message={extracting ? "Processing driver's license..." : "Submitting form..."}
          progress={extracting ? Math.floor(extractionProgress * 100) : undefined}
        />
      )}
      
      {/* Error alert */}
      {error && (
        <Alert color="danger" className="mb-3">
          {error}
        </Alert>
      )}
      
      {/* Success alert */}
      {success && (
        <Alert color="success" className="mb-3">
          {success}
        </Alert>
      )}
      
      {/* Extraction error */}
      {extractionError && !extracting && (
        <Alert color="warning" className="mb-3">
          {extractionError}
        </Alert>
      )}
      
      {/* Main form */}
      <Form id="document-upload-form" onSubmit={handleSubmit(handleFormSubmit)}>
        <Row>
          {/* Upload field section */}
          <Col md={12}>
            <h5 className="mb-3">Upload Driver's License</h5>
            
            {uploadField && (
              <FormGroup>
                <Label>{uploadField.label}</Label>
                <DragDropFileUpload
                  id={uploadField.id}
                  name={uploadField.name}
                  accept={uploadField.accept}
                  onChange={handleFileChange}
                  disabled={extracting}
                  showProcessButton={true}
                  onProcessDocument={(file) => handleProcessDocument(file, uploadField.name)}
                  externalSelectedFile={fileMap[uploadField.name]}
                />
              </FormGroup>
            )}
            
            {uploadBackField && (
              <FormGroup>
                <Label>{uploadBackField.label}</Label>
                <DragDropFileUpload
                  id={uploadBackField.id}
                  name={uploadBackField.name}
                  accept={uploadBackField.accept}
                  onChange={handleFileChange}
                  disabled={extracting}
                  showProcessButton={true}
                  onProcessDocument={(file) => handleProcessDocument(file, uploadBackField.name)}
                  externalSelectedFile={fileMap[uploadBackField.name]}
                />
              </FormGroup>
            )}
            
            {/* Success message after extraction */}
            {extractionSuccess && !extracting && (
              <Alert color="success" className="mb-3">
                {extractionSuccess}
              </Alert>
            )}
          </Col>
        </Row>
        
        {/* Data fields section - only show after extraction */}
        {showAllFields && dataFields && dataFields.length > 0 && (
          <Row className="mt-4">
            <Col md={12}>
              <h5 className="mb-3">License Information</h5>
              
              {dataFields.map(field => (
                <Col md={field.fullWidth ? 12 : 6} key={field.id}>
                  <FormGroup>
                    <Label for={field.id}>
                      {field.label} {field.required && <span className="text-danger">*</span>}
                    </Label>
                    
                    {field.type === 'text' && (
                      <Controller
                        name={field.name}
                        control={control}
                        rules={{ required: field.required }}
                        render={({ field: { onChange, value, ...rest } }) => (
                          <>
                            <Input
                              {...rest}
                              id={field.id}
                              type="text"
                              placeholder={field.placeholder}
                              value={value || ''}
                              onChange={onChange}
                              invalid={!!errors[field.name]}
                            />
                            {errors[field.name] && (
                              <FormFeedback>{errors[field.name].message || `${field.label} is required`}</FormFeedback>
                            )}
                          </>
                        )}
                      />
                    )}
                    
                    {field.type === 'select' && (
                      <Controller
                        name={field.name}
                        control={control}
                        rules={{ required: field.required }}
                        render={({ field: { onChange, value, ...rest } }) => (
                          <>
                            <Input
                              {...rest}
                              id={field.id}
                              type="select"
                              value={value || ''}
                              onChange={onChange}
                              invalid={!!errors[field.name]}
                            >
                              <option value="">{field.placeholder}</option>
                              {field.options?.map(option => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </Input>
                            {errors[field.name] && (
                              <FormFeedback>{errors[field.name].message || `${field.label} is required`}</FormFeedback>
                            )}
                          </>
                        )}
                      />
                    )}
                    
                    {field.type === 'date' && (
                      <Controller
                        name={field.name}
                        control={control}
                        rules={{ required: field.required }}
                        render={({ field: { onChange, value, ...rest } }) => (
                          <>
                            <Input
                              {...rest}
                              id={field.id}
                              type="date"
                              value={formatDateForInput(value) || ''}
                              onChange={(e) => {
                                const rawValue = e.target.value;
                                const newValue = rawValue ? formatDateFromInput(rawValue) : '';
                                onChange(newValue);
                              }}
                              invalid={!!errors[field.name]}
                            />
                            <small className="form-text text-muted">Format: MM/DD/YYYY</small>
                            {errors[field.name] && (
                              <FormFeedback>{errors[field.name].message || `${field.label} is required`}</FormFeedback>
                            )}
                          </>
                        )}
                      />
                    )}
                  </FormGroup>
                </Col>
              ))}
            </Col>
          </Row>
        )}
      </Form>
    </div>
  );
};

export default DriversLicenseForm; 