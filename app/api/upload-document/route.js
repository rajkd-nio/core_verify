/**
 * API Route for document uploads
 * POST /api/upload-document
 */
import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma';
import { logData } from '@/utils/logUtils';

const prisma = new PrismaClient();

// This is the modern way to configure API routes in App Router
export const dynamic = 'force-dynamic';
export const maxDuration = 10; // Max duration in seconds
export const runtime = 'nodejs';

export async function POST(request) {
  try {
    const data = await request.json();
    
    logData('DOCUMENT_UPLOAD_REQUEST', { 
      documentType: data.documentType,
      locationId: data.locationId
    });
    
    // Check if we have a location-specific document title ID
    let documentTitleId = null;
    
    if (data.docData && data.docData.startsWith('doc_title_')) {
      // Extract the document title ID from the value
      documentTitleId = parseInt(data.docData.replace('doc_title_', ''), 10);
      
      logData('LOCATION_SPECIFIC_DOCUMENT_TITLE', {
        documentTitleId,
        docData: data.docData
      });
    } else {
      // Handle regular document upload with standard document type
      // This would use your existing document type lookup logic
      logData('STANDARD_DOCUMENT_UPLOAD', {
        documentType: data.documentType,
        docData: data.docData
      });
      
      // Your existing logic to map document type
      // ...
    }
    
    // Process the upload with the document title ID if we have one
    if (documentTitleId) {
      // Get the document title details
      const documentTitle = await prisma.documentTitle.findUnique({
        where: { id: documentTitleId },
        include: { documentType: true }
      });
      
      if (!documentTitle) {
        return NextResponse.json(
          { error: 'Document title not found' },
          { status: 404 }
        );
      }
      
      // Use the document title properties for validation
      // ... Your existing document upload logic with validation based on document title properties
      
      // For example, if requireNumber is true, ensure certLicenseNumber is provided
      if (documentTitle.requireNumber && !data.certLicenseNumber) {
        return NextResponse.json(
          { error: 'Certificate/license number is required' },
          { status: 400 }
        );
      }
      
      // Mock a successful upload for demonstration
      const uploadResult = {
        success: true,
        documentId: `doc-${Math.floor(Math.random() * 10000)}`,
        documentType: documentTitle.documentType.name,
        documentTitle: documentTitle.title,
        fileName: data.file && data.file.name ? data.file.name : 'document.pdf',
        uploadDate: new Date().toISOString(),
        locationId: data.locationId,
        locationSpecific: true
      };
      
      logData('LOCATION_SPECIFIC_DOCUMENT_UPLOADED', uploadResult);
      
      return NextResponse.json(uploadResult);
    } else {
      // Handle standard document uploads
      // ... Your existing document upload logic
      
      // Mock a successful upload for demonstration
      const uploadResult = {
        success: true,
        documentId: `doc-${Math.floor(Math.random() * 10000)}`,
        documentType: data.documentType,
        documentTitle: data.certificateAbbreviation || 'Document',
        fileName: data.file && data.file.name ? data.file.name : 'document.pdf',
        uploadDate: new Date().toISOString()
      };
      
      logData('STANDARD_DOCUMENT_UPLOADED', uploadResult);
      
      return NextResponse.json(uploadResult);
    }
  } catch (error) {
    console.error('Error uploading document:', error);
    
    return NextResponse.json(
      { error: 'Error uploading document', details: error.message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
} 