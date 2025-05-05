'use client';

import React, { useState } from 'react';
import DynamicForm from './DynamicForm';
import InlineSkeletonLoader from './InlineSkeletonLoader';

/**
 * FormSelector component that uses the standard DynamicForm for all document types
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
  onSchemaLoaded,
  prioritizeUploadFields = false
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
  
  // Use the standard DynamicForm for all document types
  console.log('Rendering standard DynamicForm component for all document types');
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
      prioritizeUploadFields={prioritizeUploadFields}
    />
  );
};

export default FormSelector; 