'use client';

import React from 'react';
import DynamicDocumentUploader from './DynamicDocumentUploader';

/**
 * Main entry point for document uploaders
 * Now exclusively uses the dynamic document uploader powered by JSON schema
 */
const DocumentUploaderWrapper = (props) => {
  // Extract document type from props
  const documentType = props.config?.documentType || props.verifyConfig?.documentType || 'certificate';
  
  // Use the dynamic document uploader
  return <DynamicDocumentUploader {...props} documentType={documentType} />;
};

// Export both the wrapper and the dynamic uploader
export default DocumentUploaderWrapper;
export { DynamicDocumentUploader }; 