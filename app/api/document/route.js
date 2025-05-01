import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import formidable from 'formidable';
import { v4 as uuidv4 } from 'uuid';
import { DocumentService } from '../../services/documentService';

// Helper for parsing multipart form data
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper function to log data
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
};

/**
 * Parse multipart form data
 * @param {Request} req - Request object
 * @returns {Promise<{fields: Object, files: Object}>} - Parsed fields and files
 */
const parseFormData = async (req) => {
  return new Promise((resolve, reject) => {
    const form = formidable({
      maxFileSize: 10 * 1024 * 1024, // 10MB max file size
      uploadDir: path.join(process.cwd(), 'uploads'),
      keepExtensions: true,
      filename: (name, ext) => `${Date.now()}_${uuidv4()}${ext}`,
      createDirs: true,
    });

    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ fields, files });
    });
  });
};

/**
 * Validate license field for medical documents
 * @param {string} documentType - Document type
 * @param {Object} fields - Form fields
 * @returns {Promise<{isValid: boolean, error: string|null}>} - Validation result
 */
const validateLicenseField = async (documentType, fields) => {
  try {
    // Check if this document type requires a license
    const requiresLicense = await DocumentService.requiresLicense(documentType);
    
    if (requiresLicense) {
      // If license is required, validate it
      if (!fields.require_license || fields.require_license === '') {
        return {
          isValid: false,
          error: 'License type is required for this document'
        };
      }
      
      // Get valid license options
      const licenseOptions = await DocumentService.getLicenseOptions(documentType);
      const validValues = licenseOptions.map(option => option.value);
      
      // Check if the provided license type is valid
      if (!validValues.includes(fields.require_license)) {
        return {
          isValid: false,
          error: 'Invalid license type'
        };
      }
    }
    
    return { isValid: true, error: null };
  } catch (error) {
    logData('LICENSE_VALIDATION_ERROR', { error: error.message });
    return { isValid: true, error: null }; // Default to valid if check fails
  }
};

/**
 * Validate TB test document data fields
 * @param {string} documentType - Document type
 * @param {Object} fields - Form fields
 * @param {Object} files - Uploaded files
 * @returns {Promise<{isValid: boolean, error: string|null}>} - Validation result
 */
const validateTbTestData = async (documentType, fields, files) => {
  try {
    // Only validate if it's a medical document with recordType=tb_test
    if (documentType !== 'medical' || fields.recordType?.[0] !== 'tb_test') {
      return { isValid: true, error: null };
    }
    
    // Get document data fields for this document type
    const docDataFields = await DocumentService.getDocDataFields(documentType);
    
    // If no document data fields found, nothing to validate
    if (!docDataFields || docDataFields.length === 0) {
      return { isValid: true, error: null };
    }
    
    // Get TB test field
    const tbTestField = docDataFields.find(field => field.fieldId === 'tb_test_data');
    
    if (!tbTestField || !tbTestField.options || !tbTestField.options.options) {
      return { isValid: true, error: null };
    }
    
    // Get required options
    const requiredOptions = tbTestField.options.options.filter(option => option.required);
    
    // Validate each required option
    for (const option of requiredOptions) {
      switch (option.key) {
        case 'require_attach_front':
          if (!files.frontSideUpload) {
            return {
              isValid: false,
              error: 'Front side image is required for TB test'
            };
          }
          break;
          
        case 'require_attach_back':
          if (!files.backSideUpload) {
            return {
              isValid: false,
              error: 'Back side image is required for TB test'
            };
          }
          break;
          
        case 'require_test_date':
          if (!fields.testDate?.[0]) {
            return {
              isValid: false,
              error: 'Test date is required for TB test'
            };
          }
          break;
          
        case 'require_result_date':
          if (!fields.resultDate?.[0]) {
            return {
              isValid: false,
              error: 'Result date is required for TB test'
            };
          }
          
          // Also validate that result date is after test date
          if (fields.testDate?.[0] && fields.resultDate?.[0]) {
            const testDate = new Date(fields.testDate[0]);
            const resultDate = new Date(fields.resultDate[0]);
            
            if (resultDate < testDate) {
              return {
                isValid: false,
                error: 'Result date must be after test date'
              };
            }
          }
          break;
      }
    }
    
    return { isValid: true, error: null };
  } catch (error) {
    logData('TB_TEST_VALIDATION_ERROR', { error: error.message });
    return { isValid: true, error: null }; // Default to valid if check fails
  }
};

/**
 * POST handler for document upload
 * @param {Request} request - Request object
 * @returns {NextResponse} - Response with upload result
 */
export async function POST(request) {
  try {
    // Parse form data
    const { fields, files } = await parseFormData(request);
    
    // Extract document type
    const documentType = fields.documentType?.[0] || 'certificate';
    
    logData('DOCUMENT_UPLOAD_REQUEST', {
      documentType,
      fieldCount: Object.keys(fields).length,
      fileCount: Object.keys(files).length
    });
    
    // Validate license field for medical documents
    const licenseValidation = await validateLicenseField(documentType, fields);
    
    if (!licenseValidation.isValid) {
      return NextResponse.json({
        success: false,
        error: 'Validation error',
        message: licenseValidation.error
      }, { status: 400 });
    }
    
    // Validate TB test document data
    const tbTestValidation = await validateTbTestData(documentType, fields, files);
    
    if (!tbTestValidation.isValid) {
      return NextResponse.json({
        success: false,
        error: 'TB Test validation error',
        message: tbTestValidation.error
      }, { status: 400 });
    }
    
    // Process the uploaded files (in production, would store in cloud storage)
    const fileKeys = {};
    
    for (const [fieldName, fileList] of Object.entries(files)) {
      const file = fileList[0]; // formidable returns files as arrays
      
      // Generate a permanent ID for this file
      const fileId = uuidv4();
      
      // Store file key for response
      fileKeys[fieldName] = {
        id: fileId,
        name: file.originalFilename,
        path: file.filepath,
        type: file.mimetype || 'application/octet-stream',
        size: file.size
      };
    }
    
    // Prepare response data
    const responseData = {
      documentId: uuidv4(),
      documentType,
      ...Object.fromEntries(
        Object.entries(fields).map(([key, value]) => [key, value[0]])
      ),
      files: fileKeys
    };
    
    // If this document requires a license, add it to the response
    if (await DocumentService.requiresLicense(documentType)) {
      const licenseOptions = await DocumentService.getLicenseOptions(documentType);
      const selectedLicense = licenseOptions.find(
        option => option.value === fields.require_license?.[0]
      );
      
      if (selectedLicense) {
        responseData.require_license = fields.require_license?.[0];
        responseData.require_license_label = selectedLicense.label;
      }
    }
    
    // If this is a TB test, add TB test data to the response
    if (documentType === 'medical' && fields.recordType?.[0] === 'tb_test') {
      responseData.is_tb_test = true;
      
      // Add TB test specific data
      if (fields.testDate?.[0]) {
        responseData.test_date = fields.testDate[0];
      }
      
      if (fields.resultDate?.[0]) {
        responseData.result_date = fields.resultDate[0];
      }
      
      // Add file references
      if (files.frontSideUpload) {
        responseData.front_side_image = fileKeys.frontSideUpload;
      }
      
      if (files.backSideUpload) {
        responseData.back_side_image = fileKeys.backSideUpload;
      }
    }
    
    logData('DOCUMENT_UPLOAD_SUCCESS', {
      documentId: responseData.documentId,
      documentType,
      fileCount: Object.keys(fileKeys).length
    });
    
    return NextResponse.json({
      success: true,
      document: responseData
    });
  } catch (error) {
    logData('DOCUMENT_UPLOAD_ERROR', {
      error: error.message,
      stack: error.stack
    });
    
    return NextResponse.json({
      success: false,
      error: 'Upload failed',
      message: error.message
    }, { status: 500 });
  }
} 