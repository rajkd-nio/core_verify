import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

// Helper function to log data in a structured way
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
};

export async function POST(request) {
  try {
    // With App Router we need to handle multipart/form-data differently
    const formData = await request.formData();
    
    // Extract file if it exists
    const file = formData.get('file');
    
    // Extract other fields
    const token = formData.get('token');
    const name = formData.get('name');
    const type = formData.get('type');
    const description = formData.get('description') || '';
    const date = formData.get('date') || new Date().toISOString();
    
    // Process verification data if provided
    let verifyConfig = null;
    const verifyConfigRaw = formData.get('verifyConfig');
    if (verifyConfigRaw) {
      try {
        verifyConfig = typeof verifyConfigRaw === 'string' 
          ? JSON.parse(verifyConfigRaw) 
          : verifyConfigRaw;
        logData('PROCESSING_VERIFICATION_DATA', verifyConfig);
      } catch (error) {
        console.error('Error parsing verifyConfig:', error);
      }
    }
    
    // Generate unique ID for the document
    const documentId = uuidv4();
    
    // Create document record
    const document = {
      id: documentId,
      name,
      type,
      description,
      date,
      uploadDate: new Date().toISOString(),
      url: `/api/documents/${documentId}`, // Would be a real URL in production
      verificationInfo: verifyConfig
    };
    
    // If file was uploaded, add file details
    if (file && file instanceof File) {
      document.fileName = file.name;
      document.fileSize = file.size;
      document.fileType = file.type;
    }
    
    // Log the processed document
    logData('DOCUMENT_UPLOAD_PROCESSED', document);
    
    // Return success response
    return NextResponse.json({
      success: true,
      document,
      verifyConfig
    });
  } catch (error) {
    console.error('Upload error:', error);
    
    // Log error details
    logData('UPLOAD_ERROR', {
      message: error.message,
      stack: error.stack
    });
    
    // Return an error response
    return NextResponse.json(
      { success: false, message: 'Upload failed', error: error.message },
      { status: 500 }
    );
  }
} 