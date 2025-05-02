'use client';

import React from 'react';
import DynamicForm from './DynamicForm';
import FingerPrintClearanceForm from './FingerPrintClearanceForm';

/**
 * FormSelector component that chooses between DynamicForm and FingerPrintClearanceForm
 * based on the document type
 */
const FormSelector = (props) => {
  const { schema } = props;
  
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
    return <FingerPrintClearanceForm {...props} />;
  }
  
  // For all other document types, use the standard DynamicForm
  console.log('Rendering standard DynamicForm component');
  return <DynamicForm {...props} />;
};

export default FormSelector; 