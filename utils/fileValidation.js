'use client';

// Supported file types
export const SUPPORTED_FORMATS = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
  'image/jpg',
  'image/png'
];

// File extensions
export const SUPPORTED_EXTENSIONS = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png'];

// Max file size - 5MB
export const MAX_FILE_SIZE = 5 * 1024 * 1024;

/**
 * Validates a file based on size and format
 * @param {File} file - The file to validate
 * @returns {Object} - Validation result with isValid and error message
 */
export const validateFile = (file) => {
  // Check if file exists
  if (!file) {
    return { 
      isValid: false, 
      error: 'No file provided' 
    };
  }

  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    return { 
      isValid: false, 
      error: `File size too large (max ${MAX_FILE_SIZE / (1024 * 1024)}MB)` 
    };
  }

  // Check file type
  if (!SUPPORTED_FORMATS.includes(file.type)) {
    return { 
      isValid: false, 
      error: `Unsupported file format. Please use: ${SUPPORTED_EXTENSIONS.join(', ')}` 
    };
  }

  return { isValid: true };
}; 