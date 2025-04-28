'use client';

// Helper function to log data
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
};

/**
 * Fetches form schema from the API
 * @param {string} documentType - Type of document (certificate, medical, document, other)
 * @returns {Promise<Object>} - Form schema or error
 */
export const fetchFormSchema = async (documentType = 'certificate') => {
  try {
    logData('FETCHING_FORM_SCHEMA', { documentType });
    
    // Determine the base URL (different in development vs production)
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    const response = await fetch(`${baseUrl}/api/form-schema?type=${documentType}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      logData('SCHEMA_FETCH_ERROR', errorData);
      throw new Error(errorData.message || 'Failed to fetch form schema');
    }
    
    const data = await response.json();
    logData('SCHEMA_FETCH_SUCCESS', {
      documentType,
      fieldCount: data.schema.fields.length,
      usingDefault: data.usingDefault || false
    });
    
    return data.schema;
  } catch (error) {
    logData('SCHEMA_FETCH_ERROR', {
      documentType,
      error: error.message
    });
    
    // Return a minimal default schema in case of failure
    return {
      title: `${documentType.charAt(0).toUpperCase() + documentType.slice(1)} Form Schema`,
      description: `Default schema for ${documentType} upload form fields`,
      formId: `${documentType}-form`,
      documentType,
      fields: [
        {
          id: "certificateAbbreviation",
          name: "certificateAbbreviation",
          type: "text",
          label: "Document Title",
          placeholder: "Enter title",
          required: true,
          order: 1,
          fullWidth: true
        },
        {
          id: "fileUpload",
          name: "fileUpload",
          type: "file",
          label: "Upload Document (PDF, JPG, PNG)",
          accept: ".pdf,.jpg,.jpeg,.png",
          required: true,
          order: 2,
          fullWidth: true
        }
      ],
      submitButtonText: "Upload Document",
      cancelButtonText: "Cancel",
      errorMessage: "There was an error uploading your document. Please try again."
    };
  }
};

/**
 * Submits custom schema or extensions to the API
 * @param {string} documentType - Type of document
 * @param {Array} customFields - Custom fields to add/override
 * @returns {Promise<Object>} - Validated schema or error
 */
export const validateCustomSchema = async (documentType = 'certificate', customFields = []) => {
  try {
    logData('VALIDATING_CUSTOM_SCHEMA', {
      documentType,
      customFieldCount: customFields.length
    });
    
    // Determine the base URL (different in development vs production)
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    const response = await fetch(`${baseUrl}/api/form-schema`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        documentType,
        customFields
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      logData('CUSTOM_SCHEMA_VALIDATION_ERROR', errorData);
      throw new Error(errorData.message || 'Failed to validate custom schema');
    }
    
    const data = await response.json();
    logData('CUSTOM_SCHEMA_VALIDATION_SUCCESS', {
      documentType,
      fieldCount: data.schema.fields.length,
      customized: data.customized || false
    });
    
    return data.schema;
  } catch (error) {
    logData('CUSTOM_SCHEMA_VALIDATION_ERROR', {
      documentType,
      error: error.message
    });
    
    // Return null on failure, as we don't want to provide a default for custom schema
    // The calling code should handle this and fall back to the standard schema
    return null;
  }
}; 