'use client';

import React, { useState, useEffect } from 'react';
import { Row, Col, FormGroup, Label, Input, Button, Alert, FormFeedback, Form } from 'reactstrap';
import DragDropFileUpload from './DragDropFileUpload';
import { useDocumentExtraction } from '../hooks';
import { useLoading } from '../context/LoadingContext';
import moment from 'moment';
import '../styles/DragDropFileUpload.css';

const FingerPrintClearanceForm = ({ 
  schema, 
  onSubmit, 
  onCancel, 
  initialValues = {},
  isSubmitting = false,
  error = '',
  success = '',
  className = ''
}) => {
  // State for file uploads
  const [fileMap, setFileMap] = useState({});
  const [fileUrlMap, setFileUrlMap] = useState({});
  const [validationErrors, setValidationErrors] = useState(null);
  const [fingerprintProcessed, setFingerprintProcessed] = useState(false);
  const [localError, setLocalError] = useState('');
  const [localSuccess, setLocalSuccess] = useState('');
  
  // Use the global loading context
  const { setLoading, setLoadingMessage } = useLoading();
  
  // Use the document extraction hook
  const {
    extracting,
    extractionError,
    extractedData,
    extractDataFromFile,
    resetExtraction,
    setExtractionSuccess,
    extractionSuccess,
    setExtractionError
  } = useDocumentExtraction();
  
  // State for tracking if form was successfully submitted
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Update the global loading state when extraction state changes
  useEffect(() => {
    setLoading(extracting);
    if (extracting) {
      setLoadingMessage('Processing fingerprint clearance document...');
    }
  }, [extracting, setLoading, setLoadingMessage]);
  
  // Helper to format dates from MM/DD/YYYY to YYYY-MM-DD for input fields
  const formatDateForInput = (dateStr) => {
    if (!dateStr) return '';
    
    // If already in YYYY-MM-DD format, return as is
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      return dateStr;
    }
    
    // Parse as MM/DD/YYYY
    const parsed = moment(dateStr, 'MM/DD/YYYY', true);
    if (parsed.isValid()) {
      return parsed.format('YYYY-MM-DD');
    }
    
    // Try parsing with other common formats
    const otherFormats = ['M/D/YYYY', 'MM-DD-YYYY', 'YYYY/MM/DD'];
    for (const format of otherFormats) {
      const altParsed = moment(dateStr, format, true);
      if (altParsed.isValid()) {
        return altParsed.format('YYYY-MM-DD');
      }
    }
    
    // If all parsing fails, try flexible parsing
    const flexibleParsed = moment(dateStr);
    if (flexibleParsed.isValid()) {
      return flexibleParsed.format('YYYY-MM-DD');
    }
    
    return '';
  };
  
  // Helper to format dates from YYYY-MM-DD to MM/DD/YYYY when saving
  const formatDateFromInput = (dateStr) => {
    if (!dateStr) return '';
    
    // Parse date from HTML date input (YYYY-MM-DD)
    const parsed = moment(dateStr, 'YYYY-MM-DD', true);
    if (parsed.isValid()) {
      return parsed.format('MM/DD/YYYY');
    }
    
    // If for some reason it's already in MM/DD/YYYY format, keep it
    const alreadyFormatted = moment(dateStr, 'MM/DD/YYYY', true);
    if (alreadyFormatted.isValid()) {
      return dateStr;
    }
    
    return '';
  };
  
  // Handle file selection
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const { name: fieldName } = e.target;
      
      // Reset extraction state when file changes
      resetExtraction(true);
      
      // Update the file map with the new file
      setFileMap(prev => ({
        ...prev,
        [fieldName]: file
      }));
      
      // If there's an existing URL, revoke it before creating a new one
      if (fileUrlMap[fieldName]) {
        URL.revokeObjectURL(fileUrlMap[fieldName]);
      }
      
      // Create a new URL for this file
      const newUrl = URL.createObjectURL(file);
      setFileUrlMap(prev => ({
        ...prev,
        [fieldName]: newUrl
      }));
      
      // Clear any previous validation errors
      if (validationErrors && validationErrors[fieldName]) {
        setValidationErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[fieldName];
          return Object.keys(newErrors).length > 0 ? newErrors : null;
        });
      }
      
      // Reset the fingerprintProcessed state when the primary file changes
      if (fieldName === "fileUpload") {
        console.log("New file selected, resetting processing state");
        setFingerprintProcessed(false);
        setExtractionSuccess(null);
        setExtractionError(null);
        setLocalSuccess('');
        setLocalError('');
      }
    }
  };
  
  // Process document
  const handleProcessDocument = async (file, fieldName) => {
    // Use the provided file or get it from the fileMap
    const currentFile = file || fileMap[fieldName];
    
    if (!currentFile) {
      console.warn(`No file available for processing in field ${fieldName}`);
      setExtractionError("No file selected. Please upload a document first.");
      return;
    }
    
    // Don't process again if already extracting
    if (extracting) {
      console.log(`Already processing document for ${fieldName}, skipping duplicate request`);
      return;
    }
    
    console.log(`Starting document processing for ${fieldName}`);
    
    // Set global loading state
    setLoading(true);
    setLoadingMessage('Extracting data from fingerprint clearance document...');
    
    // Clear any previous success or error messages
    setExtractionSuccess(null);
    setExtractionError(null);
    setLocalSuccess('');
    setLocalError('');
    
    try {
      // Store reference to the current file if needed
      const shouldUpdateFileMap = !fileMap[fieldName] || 
                             fileMap[fieldName].name !== currentFile.name || 
                             fileMap[fieldName].size !== currentFile.size || 
                             fileMap[fieldName].lastModified !== currentFile.lastModified;
      
      if (shouldUpdateFileMap) {
        console.log(`Updating file map for ${fieldName}`);
        setFileMap(prev => ({
          ...prev,
          [fieldName]: currentFile
        }));
      }
      
      // Start a timeout to detect slow API responses
      const timeoutId = setTimeout(() => {
        console.log('Document extraction is taking longer than expected...');
        setLoadingMessage('Document extraction is taking longer than expected. Please wait...');
      }, 10000); // 10 seconds timeout
      
      try {
        // Process the document data
        const extractedFields = await extractDataFromFile(currentFile, fieldName);
        
        // Clear the timeout since we got a response
        clearTimeout(timeoutId);
        
        console.log(`Document processing completed for ${fieldName}`, extractedFields);
        
        // Get available form fields
        const availableFields = schema?.fields.map(field => field.name) || [];
        
        let foundDateData = false;
        
        // Map extracted data to correct form fields
        if (extractedFields.effectiveDate || extractedFields.issueDate) {
          const issueFieldName = availableFields.includes('issueDate') ? 'issueDate' : 
                              availableFields.includes('effectiveDate') ? 'effectiveDate' : null;
          
          if (issueFieldName) {
            const dateValue = extractedFields.effectiveDate || extractedFields.issueDate;
            console.log(`Setting ${issueFieldName} to ${dateValue} (should be MM/DD/YYYY format)`);
            
            // Verify the date format is MM/DD/YYYY
            const isMMDDYYYY = /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateValue);
            if (!isMMDDYYYY) {
              console.warn(`Issue date ${dateValue} is not in MM/DD/YYYY format, attempting to convert`);
              const converted = moment(dateValue).format('MM/DD/YYYY');
              if (moment(converted, 'MM/DD/YYYY', true).isValid()) {
                console.log(`Converted issue date to MM/DD/YYYY format: ${converted}`);
                setFormData(prev => ({
                  ...prev,
                  [issueFieldName]: converted
                }));
              } else {
                console.error(`Could not convert issue date ${dateValue} to MM/DD/YYYY format`);
                setFormData(prev => ({
                  ...prev,
                  [issueFieldName]: dateValue
                }));
              }
            } else {
              setFormData(prev => ({
                ...prev,
                [issueFieldName]: dateValue
              }));
            }
            
            foundDateData = true;
            console.log(`Set issue date: ${dateValue}`);
          }
        }
        
        // Apply expiration date if available
        if (extractedFields.expirationDate) {
          const expirationFieldName = availableFields.includes('expirationDate') ? 'expirationDate' : null;
          
          if (expirationFieldName) {
            const dateValue = extractedFields.expirationDate;
            console.log(`Setting ${expirationFieldName} to ${dateValue} (should be MM/DD/YYYY format)`);
            
            // Verify the date format is MM/DD/YYYY
            const isMMDDYYYY = /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateValue);
            if (!isMMDDYYYY) {
              console.warn(`Expiration date ${dateValue} is not in MM/DD/YYYY format, attempting to convert`);
              const converted = moment(dateValue).format('MM/DD/YYYY');
              if (moment(converted, 'MM/DD/YYYY', true).isValid()) {
                console.log(`Converted expiration date to MM/DD/YYYY format: ${converted}`);
                setFormData(prev => ({
                  ...prev,
                  [expirationFieldName]: converted
                }));
              } else {
                console.error(`Could not convert expiration date ${dateValue} to MM/DD/YYYY format`);
                setFormData(prev => ({
                  ...prev,
                  [expirationFieldName]: dateValue
                }));
              }
            } else {
              setFormData(prev => ({
                ...prev,
                [expirationFieldName]: dateValue
              }));
            }
            
            foundDateData = true;
            console.log(`Set expiration date: ${dateValue}`);
          }
        }
        
        // Always show date fields after processing
        console.log('Setting fingerprintProcessed to true');
        setFingerprintProcessed(true);
        
        // Set success message based on whether dates were found
        if (foundDateData) {
          setExtractionSuccess("Document processed successfully! Date fields extracted and can now be edited if needed.");
        } else {
          setExtractionSuccess("Document processed, but no date information was found. Please enter dates in the fields above.");
        }
        
      } catch (error) {
        // Clear the timeout if there was an error
        clearTimeout(timeoutId);
        
        console.error(`Error processing document for ${fieldName}:`, error);
        setExtractionError("Document extraction unsuccessful. Please enter the information in the date fields above.");
        
        // Always show date fields even if processing fails
        console.log('Setting fingerprintProcessed to true despite error');
        setFingerprintProcessed(true);
        
        // Set appropriate error message
        setLocalError("Document extraction was unsuccessful. Please enter the date information in the fields above.");
      }
    } catch (error) {
      console.error(`Fatal error in document processing for ${fieldName}:`, error);
      setExtractionError("Document extraction failed. Please check the document and try again.");
      setLocalError("Document extraction failed. Please check the document and try again.");
      
      // Still show date fields even in case of fatal error
      setFingerprintProcessed(true);
    } finally {
      // Ensure global loading is cleared
      setLoading(false);
    }
    
    // Add a final check to ensure extracting is set to false
    if (extracting) {
      console.log('Ensuring extracting state is reset to false');
      setTimeout(() => {
        if (extracting) {
          // Use the resetExtraction function to ensure state is consistent
          resetExtraction(true); // Keep the file
          // Also ensure global loading is reset
          setLoading(false);
        }
      }, 100);
    }
  };
  
  // Form state
  const [formData, setFormData] = useState(initialValues || {});
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create payload with files and all form data
    const payload = {
      ...formData,
      files: fileMap,
      fileUploadKeys: fileUrlMap,
      documentType: schema.documentType,
      fingerprintProcessed,
      extractedData: extractedData || {},
      // Include timestamp for tracking
      submittedAt: new Date().toISOString()
    };
    
    // Add auth data if available in schema
    if (schema.authData) {
      payload.authData = schema.authData;
    }
    
    // Add action info if available in schema
    if (schema.action) {
      payload.action = schema.action;
    }
    
    // Add locationId if available
    if (schema.locationId) {
      payload.locationId = schema.locationId;
    }
    
    // Log the complete payload to console
    console.log('=====FINGERPRINT CLEARANCE FORM SUBMISSION=====');
    console.log(JSON.stringify(payload, null, 2));
    console.log('=============================================');
    
    // Send data to parent window if in iframe
    if (window.parent && window !== window.parent) {
      try {
        // Send message to parent window with form data
        window.parent.postMessage({
          type: 'DOCUMENT_SUBMISSION',
          data: payload,
          documentType: schema.documentType,
          success: true,
          timestamp: new Date().toISOString()
        }, '*');
        
        // Also send in the older format for compatibility
        window.parent.postMessage(JSON.stringify({
          action: 'success',
          documentType: schema.documentType,
          data: payload,
          event: 'document_submitted'
        }), '*');
        
        console.log('Form data successfully sent to parent window');
        
        // Mark the form as successfully submitted
        setFormSubmitted(true);
      } catch (error) {
        console.error('Error sending data to parent window:', error);
      }
    }
    
    if (onSubmit) {
      onSubmit(payload);
    }
  };
  
  // Effect to close parent iframe after successful submission
  useEffect(() => {
    if (formSubmitted && window.parent && window !== window.parent) {
      // Add a small delay to ensure NurseIO receives the data first
      const closeTimer = setTimeout(() => {
        try {
          console.log('Attempting to close parent iframe after successful submission');
          
          // Try different methods to close the iframe
          // Method 1: postMessage
          window.parent.postMessage({
            type: 'CLOSE_IFRAME',
            reason: 'Document submitted successfully',
            success: true,
            timestamp: new Date().toISOString()
          }, '*');
          
          // Method 2: JSON string format
          window.parent.postMessage(JSON.stringify({
            action: 'close',
            reason: 'success',
            event: 'document_submitted'
          }), '*');
          
          // Method 3: Direct function calls
          if (typeof window.parent.closeIframe === 'function') {
            window.parent.closeIframe(true); // true indicates success
          }
          if (typeof window.parent.closeModal === 'function') {
            window.parent.closeModal(true);
          }
          if (typeof window.parent.closeVerifyModal === 'function') {
            window.parent.closeVerifyModal(true);
          }
        } catch (error) {
          console.error('Error closing parent iframe:', error);
        }
      }, 500); // 500ms delay
      
      return () => clearTimeout(closeTimer);
    }
  }, [formSubmitted]);
  
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    if (type === 'date') {
      // Log the date value for debugging
      console.log(`Date field ${name} changed to: ${value} (input)`);
      
      // Convert date format for storing
      const formattedDate = formatDateFromInput(value);
      console.log(`Formatted date for storage: ${formattedDate}`);
      
      setFormData(prev => ({
        ...prev,
        [name]: formattedDate
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  // Filter fields for rendering: now we always show date fields above file uploads
  const renderFields = () => {
    const fileFields = schema?.fields.filter(field => 
      field.type === 'file' && !field.hidden
    ) || [];
    
    const dateFields = schema?.fields.filter(field =>
      (field.type === 'date' || field.name === 'issueDate' || field.name === 'expirationDate' || field.name === 'effectiveDate') && 
      !field.hidden
    ) || [];
    
    const otherFields = schema?.fields.filter(field =>
      field.type !== 'file' && 
      field.type !== 'date' && 
      field.name !== 'issueDate' && 
      field.name !== 'expirationDate' && 
      field.name !== 'effectiveDate' && 
      !field.hidden
    ) || [];
    
    return (
      <Row>
        {/* Only render date fields if document has been processed */}
        {fingerprintProcessed && dateFields.map(field => renderField(field))}
        
        {/* Always render file fields */}
        {fileFields.map(field => renderField(field))}
        
        {/* Always render other fields */}
        {otherFields.map(field => renderField(field))}
      </Row>
    );
  };
  
  // Render individual form field
  const renderField = (field) => {
    const {
      id,
      name,
      type,
      label,
      placeholder,
      required,
      fullWidth,
      options,
      rows
    } = field;
    
    // Column width based on fullWidth property
    const colWidth = fullWidth ? 12 : 6;
    
    // Check if this is a date field that's been processed
    const isProcessedDateField = 
      fingerprintProcessed && 
      (type === 'date' || name === 'issueDate' || name === 'expirationDate' || name === 'effectiveDate');
    
    return (
      <Col md={colWidth} key={id}>
        <FormGroup>
          <Label htmlFor={id}>
            {label} {required && <span className="text-danger">*</span>}
            
            {/* Show green check mark for successfully extracted date fields */}
            {isProcessedDateField && formData[name] && (
              <span className="text-success ml-2" title="This field was automatically extracted from your document">
                <i className="fas fa-check-circle"></i>
              </span>
            )}
          </Label>
          
          <div>
            {type === 'text' && (
              <Input
                id={id}
                name={name}
                type="text"
                placeholder={placeholder}
                value={formData[name] || ''}
                onChange={handleChange}
                invalid={validationErrors && !!validationErrors[name]}
              />
            )}
            
            {type === 'textarea' && (
              <Input
                id={id}
                name={name}
                type="textarea"
                rows={rows || 3}
                placeholder={placeholder}
                value={formData[name] || ''}
                onChange={handleChange}
                invalid={validationErrors && !!validationErrors[name]}
              />
            )}
            
            {type === 'select' && (
              <Input
                id={id}
                name={name}
                type="select"
                value={formData[name] || ''}
                onChange={handleChange}
                invalid={validationErrors && !!validationErrors[name]}
              >
                <option value="">{placeholder}</option>
                {options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Input>
            )}
            
            {type === 'date' && (
              <>
                <Input
                  id={id}
                  name={name}
                  type="date"
                  placeholder="MM/DD/YYYY"
                  title="Please enter date in MM/DD/YYYY format"
                  value={formatDateForInput(formData[name] || '')}
                  onChange={handleChange}
                  invalid={validationErrors && !!validationErrors[name]}
                  className={isProcessedDateField ? 'extracted-date-field' : ''}
                />
              </>
            )}
            
            {type === 'file' && (
              <div className="file-input-container">
                <DragDropFileUpload
                  id={id}
                  name={name}
                  accept="application/pdf, image/jpeg, image/png"
                  error={validationErrors && validationErrors[name]}
                  onChange={handleFileChange}
                  onProcessDocument={handleProcessDocument}
                  // Show a process button for the primary file upload
                  showProcessButton={name === "fileUploadBack" ? false : true}
                  externalSelectedFile={fileMap[name]}
                  // Pass fingerprintProcessed state to show success state
                  documentProcessed={name === "fileUpload" ? fingerprintProcessed : false}
                  // Disable process button if no file or if a file hasn't changed since last processing
                  disableProcessButton={name === "fileUpload" && (!fileMap[name] || fingerprintProcessed)}
                />
                
                {/* Show extraction message only for the field that has a file */}
                {extractionSuccess && !extracting && fileMap[name] && (
                  <div className="text-success mt-2">
                    <small>{extractionSuccess}</small>
                  </div>
                )}
                
                {/* Show extraction error only for the field that has a file */}
                {extractionError && !extracting && fileMap[name] && (
                  <div className="text-danger mt-2">
                    <small>{extractionError}</small>
                  </div>
                )}
                
                {/* Show extraction loading */}
                {extracting && (name === "fileUpload" || name === "fileUploadBack") && (
                  <div className="text-primary mt-2">
                    <small>Processing document...</small>
                  </div>
                )}
                
                {/* Add a prompt to process document for the first file upload */}
                {name === "fileUpload" && !fingerprintProcessed && !extracting && !extractionError && (
                  <div className="text-info mt-2">
                    <small>Upload and process document to extract date information automatically. Date fields will appear after processing.</small>
                  </div>
                )}
              </div>
            )}
            
            {validationErrors && validationErrors[name] && (
              <FormFeedback>{validationErrors[name]}</FormFeedback>
            )}
          </div>
        </FormGroup>
      </Col>
    );
  };
  
  // Show success/error messages
  useEffect(() => {
    if (extractionSuccess) {
      setLocalSuccess(extractionSuccess);
      // Clear success message after 5 seconds
      const timer = setTimeout(() => {
        setLocalSuccess('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [extractionSuccess]);

  useEffect(() => {
    if (extractionError) {
      setLocalError(extractionError);
      // Clear error message after 5 seconds
      const timer = setTimeout(() => {
        setLocalError('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [extractionError]);

  // Add clear UI messages when extracting status changes
  useEffect(() => {
    if (extracting) {
      // When extraction starts, show a message
      setLocalSuccess('Processing your document, please wait...');
      setLocalError('');
    } else if (fingerprintProcessed) {
      // When extraction finishes, check if success message is already set
      if (!localSuccess && !localError) {
        setLocalSuccess('Document processed. Please review the information.');
      }
    }
  }, [extracting, fingerprintProcessed, localSuccess, localError]);
  
  // Use this JSX template for the processing status messages
  const processingStatusJsx = (
    <>
      {localSuccess && (
        <Alert color="success" className="mb-4">
          <p>{localSuccess}</p>
        </Alert>
      )}
      
      {localError && (
        <Alert color="danger" className="mb-4">
          <p>{localError}</p>
        </Alert>
      )}
    </>
  );
  
  if (!schema) {
    return (
      <Alert color="danger">
        <h4>Form Schema Missing</h4>
        <p>Unable to load form. Please try refreshing the page.</p>
      </Alert>
    );
  }
  
  return (
    <div className={`fingerprint-clearance-form ${className}`} style={{ position: 'relative' }}>
      {/* Processing status and messages */}
      {processingStatusJsx}
      
      <Form id="document-upload-form" onSubmit={handleSubmit}>
        {renderFields()}
        
        {/* Only show submit button if explicitly requested */}
        {schema.showFormButtons && (
          <div className="form-actions mt-4">
            <Button
              type="button"
              color="secondary"
              outline
              onClick={() => onCancel && onCancel()}
              className="mr-2"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              color="primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : schema.submitButtonText || 'Submit'}
            </Button>
          </div>
        )}
      </Form>
    </div>
  );
};

export default FingerPrintClearanceForm; 