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
    // Parse the request body
    const formData = await request.json();
    
    // Log the received data
    logData('API_DOCUMENT_UPLOAD_RECEIVED', formData);
    
    // Generate a random document ID
    const documentId = `doc-${uuidv4().substring(0, 8)}`;
    
    // Simulate server processing delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return a success response
    const response = {
      success: true,
      message: 'Document received successfully',
      document: {
        id: documentId,
        ...formData,
        receivedAt: new Date().toISOString(),
        status: 'verified'
      }
    };
    
    logData('API_DOCUMENT_UPLOAD_RESPONSE', response);
    
    return NextResponse.json(response);
  } catch (error) {
    console.error('[API] Error processing document upload:', error);
    
    // Log error details
    logData('API_DOCUMENT_UPLOAD_ERROR', {
      message: error.message,
      stack: error.stack
    });
    
    // Return an error response
    return NextResponse.json({
      success: false,
      message: 'Error processing document upload',
      error: error.message
    }, { status: 500 });
  }
} 