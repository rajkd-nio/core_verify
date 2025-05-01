import { NextResponse } from 'next/server';
import { DocumentService } from '../../services/documentService';

// Helper function to log data
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
};

/**
 * GET handler for document templates API
 * @param {Request} request - The request object
 * @returns {Promise<Response>} - API response
 */
export async function GET(request) {
  try {
    // For now, this endpoint just returns a 501 Not Implemented
    // TODO: Implement fetching document templates
    return NextResponse.json({
      success: false,
      error: "Not implemented yet"
    }, { status: 501 });
  } catch (error) {
    logData('GET_ERROR', { error: error.message });
    
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

/**
 * POST handler for document templates API
 * Creates a new document data template
 * @param {Request} request - The request object
 * @returns {Promise<Response>} - API response
 */
export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate request
    if (!body.name || !body.label || !body.templateId || !body.optionType) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields: name, label, templateId, optionType'
      }, { status: 400 });
    }
    
    // Prepare template data
    const templateData = {
      name: body.name,
      label: body.label,
      templateId: body.templateId,
      optionType: body.optionType,
      options: body.options || null,
      attachmentFields: body.attachmentFields || null,
      dateFields: body.dateFields || null
    };
    
    // Extract document type IDs to associate with
    const documentTypeIds = body.documentTypeIds || [];
    
    // Create template
    const template = await DocumentService.createDocDataTemplate(templateData, documentTypeIds);
    
    return NextResponse.json({
      success: true,
      data: template
    });
  } catch (error) {
    logData('POST_ERROR', { error: error.message });
    
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

/**
 * PUT handler for document templates API
 * Associates a template with a document type
 * @param {Request} request - The request object
 * @returns {Promise<Response>} - API response
 */
export async function PUT(request) {
  try {
    const body = await request.json();
    
    // Validate request
    if (!body.templateId || !body.documentTypeId) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields: templateId, documentTypeId'
      }, { status: 400 });
    }
    
    // Connect template to document type
    await DocumentService.connectTemplateToDocType(body.templateId, body.documentTypeId);
    
    return NextResponse.json({
      success: true,
      message: `Template ${body.templateId} connected to document type ${body.documentTypeId}`
    });
  } catch (error) {
    logData('PUT_ERROR', { error: error.message });
    
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
} 