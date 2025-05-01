import { NextResponse } from 'next/server';
import { DocumentService } from '../../../../services/documentService';

// Helper function to log data
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
};

/**
 * GET handler to fetch license options for a document type
 * @param {Request} request - Request object
 * @param {Object} params - URL params
 * @returns {NextResponse} - Response with license options
 */
export async function GET(request, { params }) {
  try {
    const { typeId } = params;
    
    logData('FETCHING_LICENSE_OPTIONS', { typeId });
    
    // Check if document type requires license
    const requiresLicense = await DocumentService.requiresLicense(typeId);
    
    if (!requiresLicense) {
      return NextResponse.json({
        success: true,
        require_license: false,
        license_options: []
      });
    }
    
    // Get license options
    const licenseOptions = await DocumentService.getLicenseOptions(typeId);
    
    logData('LICENSE_OPTIONS_FOUND', {
      typeId,
      optionCount: licenseOptions.length
    });
    
    return NextResponse.json({
      success: true,
      require_license: true,
      license_options: licenseOptions
    });
  } catch (error) {
    logData('ERROR_FETCHING_LICENSE_OPTIONS', {
      error: error.message,
      stack: error.stack
    });
    
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch license options',
      message: error.message
    }, { status: 500 });
  }
} 