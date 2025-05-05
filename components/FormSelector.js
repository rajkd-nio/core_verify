'use client';

import React, { useState } from 'react';
import DynamicForm from './DynamicForm';
import FingerPrintClearanceForm from './FingerPrintClearanceForm';
import DriversLicenseForm from './documents/DriversLicenseForm';
import InlineSkeletonLoader from './InlineSkeletonLoader';

/**
 * FormSelector component that chooses between different form types
 * based on the document type
 */
const FormSelector = ({ 
  schema, 
  initialValues, 
  onSubmit, 
  onCancel, 
  isSubmitting, 
  error, 
  success,
  className = '',
  onSchemaLoaded
}) => {
  const [loading, setLoading] = useState(false);
  
  // Show loading state
  if (!schema || loading) {
    return (
      <div className={`form-selector-loading ${className}`}>
        <InlineSkeletonLoader count={3} height="20px" />
        <InlineSkeletonLoader count={1} height="40px" style={{ marginTop: '10px' }} />
        <InlineSkeletonLoader count={3} height="20px" style={{ marginTop: '20px' }} />
        <InlineSkeletonLoader count={1} height="100px" style={{ marginTop: '10px' }} />
      </div>
    );
  }
  
  // Add detailed logging for debugging
  console.log('FormSelector received schema:', { 
    documentType: schema?.documentType,
    childDocumentType: schema?.childDocumentType,
    formId: schema?.formId,
    fieldCount: schema?.fields?.length || 0
  });
  
  // Check if this is a fingerprint clearance form - improve detection logic
  const isFingerPrintClearanceForm = 
    schema?.documentType === 'finger_print_clearance' || 
    schema?.documentType === 'fingerprint_clearance' ||
    schema?.childDocumentType === 'fingerprint_clearance' ||
    schema?.childDocumentType === 'finger_print_clearance' ||
    schema?.documentType?.toLowerCase().replace(/\s+/g, '_') === 'finger_print_clearance' ||
    /finger\s*print\s*clearance/i.test(schema?.documentType) ||
    /finger\s*print\s*clearance/i.test(schema?.title || '') ||
    (schema?.formId && /fingerprint/i.test(schema?.formId));
  
  // Check if this is a driver's license form
  const isDriversLicenseForm = 
    schema?.childDocumentType === 'drivers_license' ||
    schema?.formId?.includes('drivers_license') ||
    /driver('?s)?\s*license/i.test(schema?.title || '');
  
  console.log('FormSelector form type check:', { 
    isFingerPrintClearanceForm, 
    isDriversLicenseForm,
    documentType: schema?.documentType,
    childDocumentType: schema?.childDocumentType,
    title: schema?.title 
  });
  
  // Add onSchemaLoaded callback to schema for driver's license and other forms
  const enhancedSchema = {
    ...schema,
    onSchemaLoaded: onSchemaLoaded
  };
  
  // Render the appropriate form based on document type
  if (isFingerPrintClearanceForm) {
    console.log('Rendering FingerPrintClearanceForm component');
    return (
      <FingerPrintClearanceForm
        schema={enhancedSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
        onCancel={onCancel}
        isSubmitting={isSubmitting}
        error={error}
        success={success}
        className={className}
      />
    );
  }
  
  // Render the driver's license form
  if (isDriversLicenseForm) {
    console.log('Rendering DriversLicenseForm component');
    return (
      <DriversLicenseForm
        schema={enhancedSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
        onCancel={onCancel}
        isSubmitting={isSubmitting}
        error={error}
        success={success}
        className={className}
      />
    );
  }
  
  // For all other document types, use the standard DynamicForm
  console.log('Rendering standard DynamicForm component');
  return (
    <DynamicForm
      schema={enhancedSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
      onCancel={onCancel}
      isSubmitting={isSubmitting}
      error={error}
      success={success}
      className={className}
    />
  );
};

export default FormSelector; 