'use client';

import axios from 'axios';

// Helper function to log data in a structured way
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
};

export const uploadFile = async (formData) => {
  try {
    // Log the data being submitted
    logData('SUBMITTING DOCUMENT DATA', formData);
    
    // Use the correct API endpoint path (added /api prefix)
    const response = await axios.post('/api/document-upload', formData);
    
    // If there's a 404, try the full path
    if (!response || response.status === 404) {
      logData('RETRYING WITH ABSOLUTE PATH', { endpoint: '/api/document-upload' });
      // Try with the full path
      return await axios.post('/api/document-upload', formData);
    }
    
    // Log successful response
    logData('DOCUMENT UPLOAD RESPONSE', response.data);
    
    return response;
  } catch (error) {
    console.error('Error uploading document:', error.message);
    
    // If we got a 404, try the alternative path
    if (error.response && error.response.status === 404) {
      try {
        logData('TRYING ALTERNATIVE ENDPOINT', { endpoint: window.location.origin + '/api/document-upload' });
        
        // Try with absolute URL
        const retryResponse = await axios.post(window.location.origin + '/api/document-upload', formData);
        
        // Log successful response
        logData('DOCUMENT UPLOAD RESPONSE (RETRY)', retryResponse.data);
        
        return retryResponse;
      } catch (retryError) {
        // Log retry error
        logData('DOCUMENT UPLOAD RETRY ERROR', {
          message: retryError.message,
          stack: retryError.stack,
          status: retryError.response?.status,
          data: retryError.response?.data
        });
        
        throw retryError;
      }
    }
    
    // Log error details
    logData('DOCUMENT UPLOAD ERROR', {
      message: error.message,
      stack: error.stack,
      status: error.response?.status,
      data: error.response?.data
    });
    
    throw error;
  }
};

export const validateToken = async (token) => {
  try {
    logData('VALIDATING TOKEN', { token });
    
    // For demo purposes, always return valid
    return { valid: true };
  } catch (error) {
    console.error('Token validation error:', error.message);
    return { valid: false };
  }
};

export const extractDocumentData = async (file) => {
  try {
    // Log the file being submitted
    logData('EXTRACTING_DOCUMENT_DATA', { fileName: file.name, fileSize: file.size, fileType: file.type });
    
    // Create a Blob with the file's data
    const blob = new Blob([file], { type: file.type });
    
    // Log what we're sending
    logData('SENDING_BINARY_DATA', { 
      size: file.size,
      type: file.type,
      name: file.name
    });
    
    // Configure axios to handle binary data properly
    const config = {
      headers: {
        'Content-Type': file.type || 'application/octet-stream'
      },
      responseType: 'json',
      transformRequest: [function (data) {
        return data; // Don't transform the data
      }]
    };
    
    // Track API call performance
    const startTime = performance.now();
    
    // Send the binary data directly using axios
    const response = await axios.post(
      'https://nioverify-8e04598db370.herokuapp.com/fileToStandardJson',
      file, // Send the raw file object
      config
    );
    
    // Calculate elapsed time
    const endTime = performance.now();
    const elapsed = endTime - startTime;
    
    // Enhanced logging of the NIOVerify response
    logData('NIOVERIFY_RESPONSE_STATUS', {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      responseTime: `${elapsed.toFixed(2)}ms`
    });
    
    logData('NIOVERIFY_RESPONSE_DATA', response.data);
    
    // Add some context about what we found in the response
    if (response.data && response.data.standardized_fields) {
      logData('NIOVERIFY_EXTRACTED_FIELDS', {
        fields_found: Object.keys(response.data.standardized_fields),
        fields_count: Object.keys(response.data.standardized_fields).length
      });
    } else {
      logData('NIOVERIFY_EXTRACTION_WARNING', {
        message: 'No standardized fields found in response',
        responseShape: typeof response.data
      });
      
      // Instead of returning demo data, throw an error
      throw new Error('No standardized fields found in the NIOVerify response');
    }
    
    return response.data;
  } catch (error) {
    console.error('Error extracting document data:', error.message);
    
    // Enhanced error logging
    logData('NIOVERIFY_API_ERROR', {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      responseData: error.response?.data,
      requestConfig: error.config
    });
    
    // Throw the error instead of returning demo data
    throw error;
  }
}; 