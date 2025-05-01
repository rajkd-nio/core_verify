import { NextResponse } from 'next/server';
import formidable from 'formidable';
import { logData } from '@/utils/logUtils';

// This is needed for formidable to work with Next.js
export const config = {
  api: {
    bodyParser: false,
  },
};

/**
 * Process the document and extract information
 * For demonstration, this simulates parsing a fingerprint document
 */
async function processDocument(file) {
  // This would actually call an OCR service or other document processing API
  // For demo, we'll simulate a successful parse with random dates
  
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Generate random dates - issue date is today minus 1-30 days
  const today = new Date();
  const issueDateObj = new Date(today);
  issueDateObj.setDate(today.getDate() - Math.floor(Math.random() * 30) - 1);
  
  // Expiration date is 1-3 years in the future
  const expirationDateObj = new Date(today);
  expirationDateObj.setFullYear(today.getFullYear() + Math.floor(Math.random() * 3) + 1);
  
  // Format dates as YYYY-MM-DD
  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };
  
  // Generate a random document number
  const documentNumber = 'FP' + Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
  
  return {
    success: true,
    documentNumber: documentNumber,
    issueDate: formatDate(issueDateObj),
    expirationDate: formatDate(expirationDateObj),
    confidenceScore: Math.floor(Math.random() * 30) + 70, // Random score between 70-99
  };
}

export async function POST(req) {
  try {
    logData('DOCUMENT_OCR_REQUEST', { method: 'POST' });
    
    // Parse form data
    const formData = await req.formData();
    const file = formData.get('file');
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }
    
    // Log file information
    logData('FILE_RECEIVED', {
      name: file.name,
      type: file.type,
      size: file.size
    });
    
    // Process the document
    const result = await processDocument(file);
    
    logData('DOCUMENT_PROCESSING_RESULT', result);
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error processing document:', error);
    
    return NextResponse.json(
      { error: 'Error processing document', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
} 