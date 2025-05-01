import { NextResponse } from 'next/server';
import { DocumentService } from '../../../../services/documentService';

// Helper function to log data
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
};

/**
 * GET handler to fetch document data options for a document type
 * @param {Request} request - Request object
 * @param {Object} params - URL params
 * @returns {NextResponse} - Response with document data options
 */
export async function GET(request, { params }) {
  try {
    const { typeId } = params;
    
    logData('FETCHING_DOC_DATA_OPTIONS', { typeId });
    
    // Get document data fields
    const docDataFields = await DocumentService.getDocDataFields(typeId);
    
    logData('DOC_DATA_OPTIONS_FOUND', {
      typeId,
      fieldCount: docDataFields.length
    });
    
    return NextResponse.json({
      success: true,
      doc_data_fields: docDataFields
    });
  } catch (error) {
    logData('ERROR_FETCHING_DOC_DATA_OPTIONS', {
      error: error.message,
      stack: error.stack
    });
    
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch document data options',
      message: error.message
    }, { status: 500 });
  }
} 