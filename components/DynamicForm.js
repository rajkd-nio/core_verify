'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Row, Col, FormGroup, Label, Input, Button, Alert, FormFeedback, Progress } from 'reactstrap';
import moment from 'moment';
import { extractDocumentData } from '../utils/api';
import LoadingOverlay from './LoadingOverlay';
import DragDropFileUpload from './DragDropFileUpload';
import { useDocumentExtraction } from '../hooks';
import '../styles/DragDropFileUpload.css';
import '../styles/FormStyles.css';

// Helper function to log data
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
};

/**
 * Dynamically generate a Zod schema based on the form schema
 */
const generateZodSchema = (formSchema) => {
  if (!formSchema || !formSchema.fields) return z.object({});

  const validationObj = {};

  // Filter out hidden fields
  const visibleFields = formSchema.fields.filter(field => field && field.id && field.hidden !== true);

  visibleFields.forEach(field => {
    const { id, name, type, required, validation } = field;
    
    // Skip fields without an ID
    if (!id) return;

    // Base validation
    let fieldValidation;

    switch (type) {
      case 'text':
      case 'textarea':
        fieldValidation = z.string().trim();
        
        // Add string-specific validations
        if (validation) {
          if (validation.minLength) {
            fieldValidation = fieldValidation.min(validation.minLength, {
              message: validation.message || `${field.label} must be at least ${validation.minLength} characters`
            });
          }
          
          if (validation.maxLength) {
            fieldValidation = fieldValidation.max(validation.maxLength, {
              message: validation.message || `${field.label} must be at most ${validation.maxLength} characters`
            });
          }
          
          if (validation.pattern) {
            fieldValidation = fieldValidation.regex(new RegExp(validation.pattern), {
              message: validation.message || `${field.label} has an invalid format`
            });
          }

          if (validation.email) {
            fieldValidation = fieldValidation.email({
              message: validation.message || `${field.label} must be a valid email address`
            });
          }
        }
        
        if (required) {
          fieldValidation = fieldValidation.min(1, { 
            message: validation?.message || `${field.label} is required`
          });
        } else {
          fieldValidation = fieldValidation.optional();
        }
        break;
        
      case 'select':
        fieldValidation = z.string();
        
        if (required) {
          fieldValidation = fieldValidation.min(1, { 
            message: validation?.message || `${field.label} is required`
          });
        } else {
          fieldValidation = fieldValidation.optional();
        }
        break;
        
      case 'date':
        fieldValidation = z.string();
        
        // Add date-specific validations
        if (validation) {
          if (validation.notInFuture) {
            // This will be handled in component-level validation
            // Zod doesn't check across fields easily
          }
          
          // afterField validation is handled separately
        }
        
        if (required) {
          fieldValidation = fieldValidation.min(1, { 
            message: validation?.message || `${field.label} is required`
          });
        } else {
          fieldValidation = fieldValidation.optional();
        }
        break;
        
      case 'checkbox':
        fieldValidation = z.enum(['true', 'false']).optional();
        break;
        
      case 'file':
        // File validation is handled separately since it's not part of the form data
        fieldValidation = z.any().optional();
        break;
        
      default:
        fieldValidation = z.any().optional();
    }

    validationObj[name] = fieldValidation;
  });

  // Create a schema with these validations
  return z.object(validationObj);
};

/**
 * Convert MM/DD/YYYY format to YYYY-MM-DD for HTML date input
 * @param {string} dateStr - Date string in MM/DD/YYYY format
 * @returns {string} - Date string in YYYY-MM-DD format for input[type="date"]
 */
const formatDateForInput = (dateStr) => {
  if (!dateStr) return '';
  
  // If already in YYYY-MM-DD format, return as is
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return dateStr;
  }
  
  // First try to parse as MM/DD/YYYY
  const formats = [
    'MM/DD/YYYY', 
    'M/D/YYYY',
    'MM-DD-YYYY',
    'M-D-YYYY'
  ];
  
  // Try each format until one works
  for (const format of formats) {
    const parsed = moment(dateStr, format, true); // strict parsing
    if (parsed.isValid()) {
      return parsed.format('YYYY-MM-DD');
    }
  }
  
  // If none of our explicit formats worked, try a flexible parse
  const parsed = moment(dateStr);
  if (parsed.isValid()) {
    return parsed.format('YYYY-MM-DD');
  }
  
  // Return empty if parsing fails
  console.warn(`Could not parse date for input: ${dateStr}`);
  return '';
};

/**
 * Convert YYYY-MM-DD format from HTML date input to MM/DD/YYYY for display/storage
 * @param {string} dateStr - Date string in YYYY-MM-DD format
 * @returns {string} - Date string in MM/DD/YYYY format
 */
const formatDateFromInput = (dateStr) => {
  if (!dateStr) return '';
  
  // Parse as YYYY-MM-DD (the format from HTML date input)
  const parsed = moment(dateStr, 'YYYY-MM-DD', true);
  if (parsed.isValid()) {
    return parsed.format('MM/DD/YYYY');
  }
  
  // Try flexible parsing as fallback
  const flexParsed = moment(dateStr);
  if (flexParsed.isValid()) {
    return flexParsed.format('MM/DD/YYYY');
  }
  
  // If parsing fails, log and return empty
  console.warn(`Could not parse date from input: ${dateStr}`);
  return '';
};

/**
 * Dynamic Form component that builds a form based on a JSON schema
 */
const DynamicForm = ({
  schema,
  onSubmit,
  onCancel,
  initialValues = {},
  isSubmitting = false,
  error = '',
  success = '',
  className = ''
}) => {
  // Add more detailed logging to help debug document type issues
  console.log('DynamicForm schema details:', {
    documentType: schema?.documentType,
    childDocumentType: schema?.childDocumentType,
    formId: schema?.formId,
    title: schema?.title,
    fieldCount: schema?.fields?.length || 0
  });

  // State for file uploads - use a Map to track files by field name
  const [fileMap, setFileMap] = useState({});
  const [fileUrlMap, setFileUrlMap] = useState({});
  const [validationErrors, setValidationErrors] = useState(null);
  
  // Use the document extraction hook
  const {
    extracting,
    extractionError,
    extractedData,
    extractDataFromFile,
    resetExtraction,
    setExtractionSuccess,
    extractionSuccess,
    extractionProgress
  } = useDocumentExtraction();
  
  // Generate Zod schema based on the form schema
  const zodSchema = useMemo(() => generateZodSchema(schema), [schema]);
  
  // Initialize React Hook Form with Zod resolver
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm({
    defaultValues: { ...initialValues },
    resolver: zodResolver(zodSchema)
  });
  
  // Watch all form values for conditional display
  const watchedValues = watch();
  
  // Sort fields by order and filter out any null or undefined fields
  // Also filter out fields with hidden: true or conditional display rules
  const sortedFields = useMemo(() => {
    const fields = [...(schema?.fields || [])];
    
    return fields
    .filter(field => {
      // Filter out null, undefined fields
      if (!field || !field.id) return false;
        
      // Filter out fields with hidden: true
      if (field.hidden === true) return false;
      
      // Handle conditional display based on field values
      if (field.conditionalDisplay) {
        const { conditionalDisplay } = field;
        const dependentFieldValue = watchedValues[conditionalDisplay.field];
        
        // Skip this condition if the dependent field doesn't exist
        if (conditionalDisplay.field && conditionalDisplay.field in watchedValues) {
          if (conditionalDisplay.equal && dependentFieldValue !== conditionalDisplay.equal) {
            return false;
          }
          
          if (conditionalDisplay.notEqual && dependentFieldValue === conditionalDisplay.notEqual) {
            return false;
          }
        }
      }
      
      return true;
    })
    .sort((a, b) => a.order - b.order);
  }, [schema, watchedValues]);
  
  // Initialize form with initial values
  useEffect(() => {
    if (initialValues && Object.keys(initialValues).length > 0) {
      logData('SETTING_INITIAL_VALUES', initialValues);
      reset(initialValues);
    }
  }, [initialValues, reset]);
  
  // Create file preview URLs when files are selected
  useEffect(() => {
    // Cleanup function to track URLs to revoke
    const urlsToRevoke = [];
    
    // Create blob URLs for all files in the map
    Object.entries(fileMap).forEach(([fieldName, file]) => {
      if (file && !fileUrlMap[fieldName]) {
        // Create a new blob URL for this file
        const fileUrl = URL.createObjectURL(file);
        urlsToRevoke.push(fileUrl);
        
        // Update the URL map
        setFileUrlMap(prev => ({
          ...prev,
          [fieldName]: fileUrl
        }));
      }
    });
    
    // Cleanup function to revoke URLs when component unmounts or files change
    return () => {
      urlsToRevoke.forEach(url => {
        URL.revokeObjectURL(url);
      });
    };
  }, [fileMap, fileUrlMap]);
  
  // Custom validation for fields that can't be easily handled by Zod
  const validateDateFields = (data) => {
    const dateValidationErrors = {};
    
    // Find date fields with validations
    sortedFields
      .filter(field => field.type === 'date' && field.validation)
      .forEach(field => {
        const { name, validation } = field;
        const dateValue = data[name];
        
        // Check afterField validation
        if (validation.afterField) {
          const compareValue = data[validation.afterField];
          
          if (dateValue && compareValue) {
            // Parse both dates with moment to compare them correctly
            const date1 = moment(dateValue, 'MM/DD/YYYY');
            const date2 = moment(compareValue, 'MM/DD/YYYY');
            
            if (!date1.isAfter(date2)) {
              dateValidationErrors[name] = validation.message;
            }
          }
        }
        
        // Check notInFuture validation
        if (validation.notInFuture && dateValue) {
          const today = moment().startOf('day');
          const date = moment(dateValue, 'MM/DD/YYYY');
          
          if (date.isAfter(today)) {
            dateValidationErrors[name] = validation.message || `${field.label} cannot be in the future`;
          }
        }
        
        // Check maxMonths validation
        if (validation.maxMonths && dateValue) {
          if (validation.afterField) {
            // If afterField is specified, calculate maxMonths from that date
            const compareValue = data[validation.afterField];
            if (compareValue) {
              const baseDate = moment(compareValue, 'MM/DD/YYYY');
              const maxAllowedDate = baseDate.add(validation.maxMonths, 'months');
              const date = moment(dateValue, 'MM/DD/YYYY');
              
              if (date.isAfter(maxAllowedDate)) {
                dateValidationErrors[name] = validation.message || `${field.label} cannot be more than ${validation.maxMonths} months from the start date`;
              }
            }
          } else {
            // Otherwise, calculate from current date
            const maxAllowedDate = moment().add(validation.maxMonths, 'months');
            const date = moment(dateValue, 'MM/DD/YYYY');
            
            if (date.isAfter(maxAllowedDate)) {
              dateValidationErrors[name] = validation.message || `${field.label} cannot be more than ${validation.maxMonths} months in the future`;
            }
          }
        }
      });
    
    return dateValidationErrors;
  };
  
  // Validate file uploads
  const validateFileUpload = (file, fieldName) => {
    const fieldConfig = sortedFields.find(field => field.name === fieldName);
    if (!fieldConfig || !fieldConfig.validation) return null;
    
    const { validation } = fieldConfig;
    
    // Check file size if specified
    if (validation.maxSize && file.size > validation.maxSize) {
      return validation.message || `File size exceeds the limit of ${Math.round(validation.maxSize / 1000000)}MB`;
    }
    
    // Check file type if specified
    if (validation.fileTypes && validation.fileTypes.length > 0) {
      // Skip file type validation for now as it's causing issues
      // Instead, just log the type for debugging
      logData('FILE_TYPE_CHECK', {
        fileType: file.type,
        expectedTypes: validation.fileTypes
      });
    }
    
    return null;
  };
  
  // Handle file selection with validation and preview
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const { name: fieldName } = e.target;
      
      // Validate file
      const fileError = validateFileUpload(file, fieldName);
      
      if (fileError) {
        // Set file validation error
        setValidationErrors(prev => ({
          ...(prev || {}),
          [fieldName]: fileError
        }));
        return;
      }
      
      // Reset extraction state when file changes, but keep the files
      resetExtraction(true);
      
      // Update the file map with the new file for this field
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
      
      logData('FILE_SELECTED', {
        fieldName,
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type
      });
      
      // Clear file validation error if any
      if (validationErrors && validationErrors[fieldName]) {
        setValidationErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[fieldName];
          return Object.keys(newErrors).length > 0 ? newErrors : null;
        });
      }
    }
  };
  
  // Handle form submission
  const handleFormSubmit = async (data) => {
    // Format any date fields to ensure consistency
    sortedFields.forEach(field => {
      if (field.type === 'date' && data[field.name]) {
        // Make sure date is properly formatted as MM/DD/YYYY
        const dateValue = data[field.name];
        if (dateValue) {
          const formattedDate = moment(dateValue, [
            'MM/DD/YYYY', // Already correct format
            'YYYY-MM-DD', // ISO format
            'M/D/YYYY'    // Partial format
          ], true);
          
          if (formattedDate.isValid()) {
            // Consistently format as MM/DD/YYYY
            data[field.name] = formattedDate.format('MM/DD/YYYY');
          } else {
            console.warn(`Invalid date in field ${field.name}: ${dateValue}`);
          }
        }
      }
    });
    
    // Validate date fields
    const dateErrors = validateDateFields(data);
    
    // Log the formatted data for debugging
    logData('FORM_DATA_WITH_FORMATTED_DATES', data);
    
    // Check if file is required but not provided
    const fileErrors = {};
    const fileFields = sortedFields.filter(field => field.type === 'file');
    
    fileFields.forEach(field => {
      const { name, label, required } = field;
      
      if (required && !fileMap[name] && (!fileUrlMap[name])) {
        fileErrors[name] = `${label} is required`;
      }
    });
    
    // Combine all validation errors
    const allErrors = { ...dateErrors, ...fileErrors };
    
    if (Object.keys(allErrors).length > 0) {
      setValidationErrors(allErrors);
      return;
    }
    
    // Clear any previous validation errors
    setValidationErrors(null);
    
    // Extract file data for submission
    const fileData = {};
    
    // Process any unprocessed files for fingerprint clearance
    if (watchedValues.documentType === 'finger_print_clearance' && !extractedData) {
      const frontAttachment = fileMap['fileUpload'];
      
      if (frontAttachment) {
        try {
          const extractedFields = await extractDataFromFile(frontAttachment, 'fileUpload');
          
          // Map extracted data to the form data
          Object.entries(extractedFields).forEach(([field, value]) => {
            if (value) {
              data[field] = value;
              
              // Also set the field in the form state so it's visible if needed
              setValue(field, value);
            }
          });
          
          // Set extraction success message to show date fields
          setExtractionSuccess("Document processed for submission! Date fields extracted.");
        } catch (error) {
          console.error("Error during document extraction:", error);
          // Continue submission even if extraction fails
        }
      }
    }
    
    logData('FORM_SUBMISSION', data);
    
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
  };
  
  // Process document data separately with a button click
  const handleProcessDocument = async (file, fieldName) => {
    // Use the provided file or get it from the fileMap
    const currentFile = file || fileMap[fieldName];
    
    if (!currentFile) {
      console.warn(`No file available for processing in field ${fieldName}`);
      return;
    }
    
    // Don't process again if already extracting
    if (extracting) {
      console.log(`Already processing document for ${fieldName}, skipping duplicate request`);
      return;
    }
    
    try {
      // Store reference to the current file
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
      
      // Log what we're processing
      logData('PROCESSING_DOCUMENT', {
        fieldName,
        fileName: currentFile.name,
        fileSize: currentFile.size,
        fileType: currentFile.type,
        documentType: watchedValues.documentType
      });
      
      // Process the document data
      const extractedFields = await extractDataFromFile(currentFile, fieldName);
      
      // Apply extracted fields to the form
      Object.entries(extractedFields).forEach(([field, value]) => {
        if (value) {
          setValue(field, value);
          logData('SETTING_FIELD', { field, value });
        }
      });
      
      console.log(`Document processing complete for ${fieldName}`);
    } catch (error) {
      console.error(`Error processing document for ${fieldName}:`, error);
      setExtractionError("There was a problem processing the document. You can enter the information manually.");
    }
  };
  
  // Helper function to render all form fields
  const renderFields = () => {
    // Sort fields by order if specified
    const sortedFields = schema.fields
      .filter(field => field && field.id && field.hidden !== true)
      .sort((a, b) => {
        // If order is specified, use it
        if (a.order !== undefined && b.order !== undefined) {
          return a.order - b.order;
        }
        // Otherwise maintain original order
        return 0;
      });
    
    return sortedFields.map(field => renderField(field));
  };

  /**
   * Render an individual form field based on its type
   */
  const renderField = (field) => {
    const {
      id,
      name,
      type,
      label,
      placeholder,
      required,
      options,
      rows,
      accept,
      validation,
      fullWidth
    } = field;
    
    // Column width based on fullWidth property
    const colWidth = fullWidth ? 12 : 6;
    
    // Check for combined errors (from React Hook Form and custom validation)
    const hasError = !!errors[name] || (validationErrors && !!validationErrors[name]);
    const errorMessage = 
      (errors[name]?.message) || 
      (validationErrors && validationErrors[name]) || 
      '';
    
    return (
      <Col md={colWidth} key={id}>
        <FormGroup>
          <Label htmlFor={id}>
            {label} {required && <span className="text-danger">*</span>}
          </Label>
          <div>
            {type === 'text' && (
              <Controller
                name={name}
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      {...field}
                      id={id}
                      type="text"
                      placeholder={placeholder}
                      invalid={hasError}
                    />
                    {hasError && <FormFeedback>{errorMessage}</FormFeedback>}
                  </>
                )}
              />
            )}
            
            {type === 'textarea' && (
              <Controller
                name={name}
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      {...field}
                      id={id}
                      type="textarea"
                      rows={rows || 3}
                      placeholder={placeholder}
                      invalid={hasError}
                    />
                    {hasError && <FormFeedback>{errorMessage}</FormFeedback>}
                  </>
                )}
              />
            )}
            
            {type === 'select' && (
              <Controller
                name={name}
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      {...field}
                      id={id}
                      type="select"
                      invalid={hasError}
                    >
                      <option value="">{placeholder}</option>
                      {options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Input>
                    {hasError && <FormFeedback>{errorMessage}</FormFeedback>}
                  </>
                )}
              />
            )}
            
            {type === 'date' && (
              <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value, ...field } }) => {
                  // Calculate max date if needed
                  let maxDate = null;
                  
                  if (validation && validation.maxMonths) {
                    // If using afterField, calculate from that field's value
                    if (validation.afterField && watchedValues[validation.afterField]) {
                      const baseDate = moment(watchedValues[validation.afterField], 'MM/DD/YYYY');
                      maxDate = baseDate.add(validation.maxMonths, 'months').format('YYYY-MM-DD');
                    } else {
                      // Otherwise calculate from today
                      maxDate = moment().add(validation.maxMonths, 'months').format('YYYY-MM-DD');
                    }
                  }
                  
                  // Convert MM/DD/YYYY to YYYY-MM-DD for HTML date input
                  const formattedValue = formatDateForInput(value);
                  
                  return (
                    <>
                      <Input
                        {...field}
                        id={id}
                        type="date"
                        placeholder={placeholder}
                        invalid={hasError}
                        max={maxDate}
                        value={formattedValue}
                        onChange={(e) => {
                          // Get raw value from input
                          const rawValue = e.target.value;
                          
                          // Convert YYYY-MM-DD back to MM/DD/YYYY when saving to form state
                          const newValue = rawValue ? formatDateFromInput(rawValue) : '';
                          
                          // Update form state with MM/DD/YYYY format
                          onChange(newValue);
                        }}
                      />
                      {/* Add helper text for date format */}
                      <small className="form-text text-muted mt-1">Format: MM/DD/YYYY</small>
                      {hasError && <FormFeedback>{errorMessage}</FormFeedback>}
                    </>
                  );
                }}
              />
            )}
            
            {type === 'checkbox' && (
              <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value, ...field } }) => (
                  <div className="form-check">
                    <Input
                      {...field}
                      id={id}
                      type="checkbox"
                      checked={value === true || value === 'true'}
                      onChange={(e) => onChange(e.target.checked ? 'true' : 'false')}
                      invalid={hasError}
                    />
                    <Label className="form-check-label" for={id}>
                      {label}
                    </Label>
                    {hasError && <FormFeedback>{errorMessage}</FormFeedback>}
                  </div>
                )}
              />
            )}
            
            {type === 'file' && (
              <div className="file-input-container">
                <DragDropFileUpload
                  id={id}
                  name={name}
                  accept={accept}
                  onChange={handleFileChange}
                  invalid={validationErrors && validationErrors[name]}
                  disabled={extracting}
                  errorMessage={validationErrors && validationErrors[name]}
                  onProcessDocument={(file) => handleProcessDocument(file, name)}
                  showProcessButton={true}
                  externalSelectedFile={fileMap[name]}
                />
                
                {/* Show extraction message */}
                {extractionSuccess && !extracting && (
                  <div className="text-success mt-2">
                    <small>{extractionSuccess}</small>
                  </div>
                )}
                
                {/* Show extraction error */}
                {extractionError && !extracting && (
                  <div className="text-danger mt-2">
                    <small>{extractionError}</small>
                  </div>
                )}
                
                {/* Show extraction loading */}
                {extracting && (
                  <div className="text-primary mt-2">
                    <small>Processing document...</small>
                  </div>
                )}
              </div>
            )}
          </div>
        </FormGroup>
      </Col>
    );
  };

  if (!schema) {
    return (
      <Alert color="danger">
        <h4>Form Schema Missing</h4>
        <p>Unable to load form. Please try refreshing the page.</p>
      </Alert>
    );
  }

  return (
    <div className={`dynamic-form form-container ${className}`} style={{ position: 'relative' }}>
      {/* Loading overlay */}
      {(extracting || isSubmitting) && (
        <LoadingOverlay 
          message={extracting ? "Processing document..." : "Submitting form..."}
          progress={extracting ? Math.floor(extractionProgress * 100) : undefined}
        />
      )}
      
      {/* Error alert */}
      {error && (
        <Alert color="danger" className="compact-alert mt-3 mb-3">
          <div className="error-icon mr-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z" fill="#d32f2f"/>
            </svg>
          </div>
          <div>
            <h5 className="mb-1">Error</h5>
            <p className="mb-0 small">{error}</p>
          </div>
        </Alert>
      )}
      
      {/* Success alert */}
      {success && (
        <Alert color="success" className="compact-alert mt-3 mb-3">
          <div className="success-icon mr-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20ZM11.003 16L6.76 11.757L8.174 10.343L11.003 13.172L16.242 7.93L17.656 9.344L11.003 16Z" fill="#388e3c"/>
            </svg>
          </div>
          <div>
            <h5 className="mb-1">Success</h5>
            <p className="mb-0 small">{success}</p>
          </div>
        </Alert>
      )}
      
      {/* Main form */}
      <form id="document-upload-form" onSubmit={handleSubmit(handleFormSubmit)} className="form-fields-container">
        {/* Document type selection or display */}
        {schema && schema.documentTypeDisplay && (
          <div className="form-section-title">
            {schema.documentTypeDisplay}
          </div>
        )}
        
        {/* Visible form fields */}
        {schema && schema.fields && renderFields()}
        
        {/* Form submission buttons (only shown if schema specifies to show form buttons) */}
        {schema && schema.showFormButtons !== false && (
          <div className="form-buttons">
            {schema.showCancelButton !== false && (
              <Button
                outline
                color="secondary"
                type="button"
                className="btn-rounded font-weight-bold"
                onClick={onCancel}
                style={{ borderColor: '#FF69B4', color: '#FF69B4' }}
              >
                {schema.cancelButtonText || 'Cancel'}
              </Button>
            )}
            
            <Button
              color="primary"
              type="submit"
              className="btn-rounded font-weight-bold"
              disabled={isSubmitting || Object.keys(errors).length > 0}
              style={{ backgroundColor: '#FF69B4', borderColor: '#FF69B4' }}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                  {schema.submittingButtonText || 'Processing...'}
                </>
              ) : (
                schema.submitButtonText || 'Submit'
              )}
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default DynamicForm; 