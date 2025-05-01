import { NextResponse } from 'next/server';
import { DocumentService } from '../../services/documentService';

// Helper function to log data
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
};

/**
 * GET handler to fetch all document types
 * @param {Request} request - Request object
 * @returns {NextResponse} - Response with document types
 */
export async function GET(request) {
  try {
    logData('FETCHING_ALL_DOCUMENT_TYPES', {});
    
    // Fetch all document types from the database
    const documentTypes = await DocumentService.getAllDocumentTypes();
    
    // Transform for API response
    const formattedTypes = documentTypes.map(docType => ({
      id: docType.typeId,
      name: docType.name,
      description: docType.description,
      color: docType.color || 'primary',
      require_license: docType.require_license,
      createdAt: docType.createdAt,
    }));
    
    logData('DOCUMENT_TYPES_FOUND', {
      count: formattedTypes.length
    });
    
    return NextResponse.json({
      success: true,
      documentTypes: formattedTypes
    });
  } catch (error) {
    logData('ERROR_FETCHING_DOCUMENT_TYPES', {
      error: error.message,
      stack: error.stack
    });
    
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch document types',
      message: error.message
    }, { status: 500 });
  }
} 