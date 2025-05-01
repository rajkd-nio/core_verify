import { NextResponse } from 'next/server';
import { processFile } from '../../utils/documentUpload';
import { DocumentService } from '../../services/documentService';
import { PrismaClient } from '../../../app/generated/prisma';

// Initialize Prisma client
const prisma = new PrismaClient();

// Helper function to log data
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
};

/**
 * GET handler for documents API
 * @param {Request} request - The request object
 * @returns {Promise<Response>} - API response
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const documentType = searchParams.get('documentType');
    const templateId = searchParams.get('templateId');
    
    // Handle template endpoint
    if (templateId) {
      const template = await DocumentService.getDocDataTemplateByTemplateId(templateId);
      
      return NextResponse.json({
        success: true,
        data: template
      });
    }
    
    // Handle license options endpoint
    if (documentType && searchParams.has('license')) {
      const licensesRequired = await DocumentService.requiresLicense(documentType);
      const licenseOptions = await DocumentService.getLicenseOptions(documentType);
      
      return NextResponse.json({
        success: true,
        data: {
          requires_license: licensesRequired,
          license_options: licenseOptions
        }
      });
    }
    
    // Handle document data fields endpoint
    if (documentType && searchParams.has('docData')) {
      const docDataFields = await DocumentService.getDocDataFields(documentType);
      
      return NextResponse.json({
        success: true,
        data: docDataFields
      });
    }
    
    // Get form schema for document type
    if (documentType) {
      const formSchema = await DocumentService.getFormSchemaByTypeId(documentType);
      
      return NextResponse.json({
        success: true,
        data: formSchema
      });
    }
    
    // Get all document types
    const documentTypes = await DocumentService.getAllDocumentTypes();
    
    return NextResponse.json({
      success: true,
      data: documentTypes
    });
  } catch (error) {
    logData('GET_ERROR', { error: error.message });
    
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

/**
 * POST handler for documents API
 * @param {Request} request - The request object
 * @returns {Promise<Response>} - API response
 */
export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // Get document type
    const documentType = formData.get('documentType');
    
    if (!documentType) {
      return NextResponse.json({
        success: false,
        error: 'Document type is required'
      }, { status: 400 });
    }
    
    // Check if this is a TB test document
    const isTbTest = documentType === 'medical' && formData.get('recordType') === 'tb_test';
    
    // Get main document file 
    let documentFile;
    if (!isTbTest) {
      documentFile = formData.get('file');
      if (!documentFile || !(documentFile instanceof Blob)) {
        return NextResponse.json({
          success: false,
          error: 'Document file is required'
        }, { status: 400 });
      }
    }
    
    // Get all form data
    const formDataObject = {};
    for (const [key, value] of formData.entries()) {
      // Skip file fields, we'll handle them separately
      if (!(value instanceof Blob)) {
        formDataObject[key] = value;
      }
    }
    
    // For TB test documents, we need to check for required_doc_data_option
    if (isTbTest) {
      const testType = formData.get('required_doc_data_option');
      if (!testType) {
        return NextResponse.json({
          success: false,
          error: 'TB Test document type is required'
        }, { status: 400 });
      }
      
      // Also check for required attachments
      const tbTestTemplate = await DocumentService.getDocDataTemplateByTemplateId('tb_test_doc');
      
      if (tbTestTemplate.attachmentFields) {
        const attachmentFields = JSON.parse(tbTestTemplate.attachmentFields);
        
        for (const field of attachmentFields) {
          if (field.required) {
            const attachment = formData.get(field.key);
            if (!attachment || !(attachment instanceof Blob)) {
              return NextResponse.json({
                success: false,
                error: `${field.label} is required`
              }, { status: 400 });
            }
          }
        }
      }
      
      // And required date fields
      if (tbTestTemplate.dateFields) {
        const dateFields = JSON.parse(tbTestTemplate.dateFields);
        
        for (const field of dateFields) {
          if (field.required && !formData.get(field.key)) {
            return NextResponse.json({
              success: false,
              error: `${field.label} is required`
            }, { status: 400 });
          }
        }
      }
    }
    
    // Upload document(s) and create record
    let documentId;
    
    // Handle regular document upload
    if (!isTbTest) {
      // TODO: Implement actual document upload
      // This is a placeholder that just returns a success response
      documentId = 'DOC' + Math.floor(Math.random() * 1000000);
    } else {
      // Handle TB test document upload with multiple attachments
      // Create a merged document ID for all uploads
      documentId = 'TBTEST' + Math.floor(Math.random() * 1000000);
      
      // Log the TB test document data
      logData('TB_TEST_DOC_DATA', {
        documentType,
        recordType: formData.get('recordType'),
        required_doc_data_option: formData.get('required_doc_data_option'),
        test_date: formData.get('test_date'),
        result_date: formData.get('result_date'),
        has_front_side: Boolean(formData.get('front_side')),
        has_back_side: Boolean(formData.get('back_side'))
      });
    }
    
    return NextResponse.json({
      success: true,
      data: {
        documentId
      },
      message: 'Document uploaded successfully'
    });
  } catch (error) {
    logData('POST_ERROR', { error: error.message });
    
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
} 