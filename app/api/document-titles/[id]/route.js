import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma';
import { logData } from '@/utils/logUtils';

const prisma = new PrismaClient();

// GET a single document title by ID
export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id);
    
    const documentTitle = await prisma.documentTitle.findUnique({
      where: { id },
      include: {
        documentType: true
      }
    });
    
    if (!documentTitle) {
      return NextResponse.json({ error: 'Document title not found' }, { status: 404 });
    }
    
    return NextResponse.json(documentTitle);
  } catch (error) {
    console.error('Error fetching document title:', error);
    return NextResponse.json({ error: 'Error fetching document title' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// PUT (update) a document title
export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id);
    const data = await request.json();
    
    logData('UPDATING_DOCUMENT_TITLE', {
      id,
      data: {
        ...data,
        formFields: data.formFields ? '[FORM_FIELDS_JSON]' : null // Don't log the full JSON
      }
    });
    
    // Prepare the update data
    const updateData = {
      title: data.title,
      description: data.description,
      documentTypeId: data.documentTypeId,
      shareable: data.shareable,
      requireNumber: data.requireNumber,
      requireValidDate: data.requireValidDate,
      requireExpireDate: data.requireExpireDate,
      requireDocData: data.requireDocData,
      docDataOptions: data.docDataOptions,
      docDataName: data.docDataName,
      formTitle: data.formTitle,
      formDescription: data.formDescription
    };
    
    // Handle formFields JSON
    if (data.formFields) {
      // Convert formFields to proper JSON format
      if (Array.isArray(data.formFields)) {
        updateData.formFields = data.formFields;
      } else if (typeof data.formFields === 'string') {
        try {
          updateData.formFields = JSON.parse(data.formFields);
        } catch (e) {
          return NextResponse.json({ error: 'Invalid formFields JSON format' }, { status: 400 });
        }
      } else {
        updateData.formFields = data.formFields;
      }
    }
    
    // Update the document title
    const updatedDocumentTitle = await prisma.documentTitle.update({
      where: { id },
      data: updateData,
      include: {
        documentType: true
      }
    });
    
    logData('DOCUMENT_TITLE_UPDATED', {
      id,
      title: updatedDocumentTitle.title
    });
    
    return NextResponse.json(updatedDocumentTitle);
  } catch (error) {
    console.error('Error updating document title:', error);
    return NextResponse.json({ error: 'Error updating document title', details: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// DELETE a document title
export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id);
    
    // Check if the document title exists
    const documentTitle = await prisma.documentTitle.findUnique({
      where: { id }
    });
    
    if (!documentTitle) {
      return NextResponse.json({ error: 'Document title not found' }, { status: 404 });
    }
    
    // Delete the document title
    await prisma.documentTitle.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true, message: 'Document title deleted successfully' });
  } catch (error) {
    console.error('Error deleting document title:', error);
    return NextResponse.json({ error: 'Error deleting document title' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
} 