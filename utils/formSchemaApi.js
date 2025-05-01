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
 * @param {Object} options - Additional options like locationId, childTypeId
 * @returns {Promise<Object>} - Form schema or error
 */
export const fetchFormSchema = async (documentType = 'certificate', options = {}) => {
  try {
    logData('FETCHING_FORM_SCHEMA', { 
      documentType,
      locationId: options.locationId,
      childTypeId: options.childTypeId
    });
    
    // Determine the base URL (different in development vs production)
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    
    // Build URL with all query parameters
    let url;
    
    // If childTypeId is provided, use the specific endpoint
    if (options.childTypeId) {
      url = `${baseUrl}/api/form-schema/${documentType}/${options.childTypeId}`;
    } else {
      url = `${baseUrl}/api/form-schema?type=${documentType}`;
    }
    
    // Add locationId if provided
    if (options.locationId) {
      // Use ? or & depending on whether the URL already has parameters
      const separator = url.includes('?') ? '&' : '?';
      url += `${separator}locationId=${options.locationId}`;
    }
    
    const response = await fetch(url, {
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
      childTypeId: options.childTypeId,
      locationId: options.locationId,
      fieldCount: data.fields ? data.fields.length : (data.schema ? data.schema.fields.length : 0),
      usingDefault: data.usingDefault || false
    });
    
    // Return either the schema object directly or nested schema property
    return data.schema || data;
  } catch (error) {
    logData('SCHEMA_FETCH_ERROR', {
      documentType,
      childTypeId: options.childTypeId,
      locationId: options.locationId,
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
 * Fetches all child document type schemas for a parent document type
 * @param {string} parentTypeId - Parent document type ID
 * @param {Object} options - Additional options like locationId
 * @returns {Promise<Object>} - Object with child type IDs as keys and schemas as values
 */
export const fetchAllChildSchemas = async (parentTypeId, options = {}) => {
  try {
    logData('FETCHING_ALL_CHILD_SCHEMAS', { 
      parentTypeId,
      locationId: options.locationId,
      isVaccinationRecord: options.isVaccinationRecord
    });
    
    // Special handling for vaccination records
    let adjustedParentTypeId = parentTypeId;
    if (options.isVaccinationRecord || 
        parentTypeId === 'vaccination_record' || 
        parentTypeId === 'Vaccination Record' ||
        parentTypeId.toLowerCase().includes('vaccination')) {
      
      console.log('Special handling for vaccination record type');
      
      // Try multiple variants of the vaccination record ID
      const possibleIds = [
        'Vaccination Record', 
        'vaccination_record',
        'vaccination record'
      ];
      
      // Check if any global vaccination record type is set by the iframe
      if (typeof window !== 'undefined' && window.vaccinationRecordType) {
        adjustedParentTypeId = window.vaccinationRecordType;
        console.log(`Using window.vaccinationRecordType: ${adjustedParentTypeId}`);
      } else {
        // Otherwise use the first possible ID
        adjustedParentTypeId = possibleIds[0];
        console.log(`Using default vaccination record type: ${adjustedParentTypeId}`);
      }
    }
    
    // Determine the base URL (different in development vs production)
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    
    // Build URL that requests all child schemas at once
    let url = `${baseUrl}/api/form-schema/${adjustedParentTypeId}/all?multipleTypes=true`;
    
    // Add locationId if provided
    if (options.locationId) {
      url += `&locationId=${options.locationId}`;
    }
    
    // Add logging flag for debugging
    url += '&log=true';
    
    console.log(`Fetching all child schemas from: ${url}`);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      logData('ALL_CHILD_SCHEMAS_FETCH_ERROR', errorData);
      console.error(`Error fetching schemas: ${errorData.message || 'Unknown error'}`);
      throw new Error(errorData.message || 'Failed to fetch child schemas');
    }
    
    const data = await response.json();
    logData('ALL_CHILD_SCHEMAS_FETCH_SUCCESS', {
      parentTypeId: adjustedParentTypeId,
      originalParentTypeId: parentTypeId,
      locationId: options.locationId,
      childSchemaCount: Object.keys(data).length
    });
    
    return data;
  } catch (error) {
    logData('ALL_CHILD_SCHEMAS_FETCH_ERROR', {
      parentTypeId,
      locationId: options.locationId,
      error: error.message
    });
    
    console.error(`Error fetching child schemas: ${error.message}`);
    
    // Return empty object on failure
    return {};
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

/**
 * Fetches location-specific document types from the API
 * @param {string} locationId - Location ID
 * @returns {Promise<Object>} - Document types data
 */
export const fetchLocationDocumentTypes = async (locationId) => {
  try {
    if (!locationId) {
      return null;
    }
    
    logData('FETCHING_LOCATION_DOCUMENT_TYPES', { locationId });
    
    // Determine the base URL (different in development vs production)
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    const url = `${baseUrl}/api/location-document-types/${locationId}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      logData('LOCATION_DOCUMENT_TYPES_ERROR', errorData);
      return null;
    }
    
    const data = await response.json();
    logData('LOCATION_DOCUMENT_TYPES_SUCCESS', {
      locationId,
      documentTypeCount: Object.keys(data.documentTypes || {}).length
    });
    
    return data;
  } catch (error) {
    logData('LOCATION_DOCUMENT_TYPES_ERROR', {
      locationId,
      error: error.message
    });
    return null;
  }
}; 