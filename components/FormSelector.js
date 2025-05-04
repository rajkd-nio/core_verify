'use client';

import React, { useState } from 'react';
import DynamicForm from './DynamicForm';
import FingerPrintClearanceForm from './FingerPrintClearanceForm';
import InlineSkeletonLoader from './InlineSkeletonLoader';

/**
 * FormSelector component that chooses between DynamicForm and FingerPrintClearanceForm
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
  className = '' 
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
    formId: schema?.formId,
    fieldCount: schema?.fields?.length || 0
  });
  
  // Check if this is a fingerprint clearance form
  const isFingerPrintClearanceForm = 
    schema?.documentType === 'finger_print_clearance' || 
    schema?.documentType === 'fingerprint_clearance' ||
    schema?.documentType?.toLowerCase().replace(/\s+/g, '_') === 'finger_print_clearance' ||
    /finger\s*print\s*clearance/i.test(schema?.documentType);
  
  console.log('FormSelector isFingerPrintClearanceForm:', isFingerPrintClearanceForm);
  
  // Render the appropriate form based on document type
  if (isFingerPrintClearanceForm) {
    console.log('Rendering FingerPrintClearanceForm component');
    return (
      <FingerPrintClearanceForm
        schema={schema}
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
      schema={schema}
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