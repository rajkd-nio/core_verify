import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Helper function to log data
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
};

/**
 * GET handler to fetch form schema
 * @param {Request} request - Request object
 * @returns {NextResponse} - Response with form schema or error
 */
export async function GET(request) {
  try {
    // Get document type from query params
    const { searchParams } = new URL(request.url);
    const documentType = searchParams.get('type') || 'certificate';
    
    logData('FETCHING_SCHEMA', { documentType });
    
    // Get the path to the schema file
    const schemaDirectory = path.join(process.cwd(), 'formdata');
    const schemaPath = path.join(schemaDirectory, `${documentType}.json`);
    
    try {
      // Read the schema file
      const fileContents = await fs.readFile(schemaPath, 'utf8');
      const schema = JSON.parse(fileContents);
      
      logData('SCHEMA_FOUND', {
        documentType,
        fieldCount: schema.fields.length
      });
      
      // Return the schema
      return NextResponse.json({ 
        success: true, 
        schema 
      });
    } catch (fileError) {
      logData('SCHEMA_NOT_FOUND', {
        documentType,
        error: fileError.message
      });
      
      // If file not found, try to get the default schema
      if (documentType !== 'certificate') {
        const defaultSchemaPath = path.join(schemaDirectory, 'certificate.json');
        const defaultFileContents = await fs.readFile(defaultSchemaPath, 'utf8');
        const defaultSchema = JSON.parse(defaultFileContents);
        
        logData('USING_DEFAULT_SCHEMA', {
          documentType: 'certificate',
          fieldCount: defaultSchema.fields.length
        });
        
        return NextResponse.json({ 
          success: true, 
          schema: defaultSchema,
          usingDefault: true
        });
      }
      
      // Return error if neither the requested schema nor default schema can be found
      return NextResponse.json({ 
        success: false, 
        error: 'Schema not found',
        message: `No schema found for document type: ${documentType}`
      }, { status: 404 });
    }
  } catch (error) {
    logData('API_ERROR', {
      error: error.message,
      stack: error.stack
    });
    
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error',
      message: error.message
    }, { status: 500 });
  }
}

/**
 * POST handler to validate schema extensions or customizations
 * Can be used for future enhancements like custom field validation
 */
export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();
    const { documentType, customFields } = body;
    
    logData('VALIDATING_CUSTOM_SCHEMA', {
      documentType,
      customFieldCount: customFields?.length || 0
    });
    
    // Get the base schema
    const schemaDirectory = path.join(process.cwd(), 'formdata');
    const schemaPath = path.join(schemaDirectory, `${documentType || 'certificate'}.json`);
    const fileContents = await fs.readFile(schemaPath, 'utf8');
    const baseSchema = JSON.parse(fileContents);
    
    // Merge base schema with custom fields
    // For now just return the base schema, but this can be extended
    // to allow customizing the form schema via API
    
    return NextResponse.json({
      success: true,
      schema: baseSchema,
      customized: false,
      message: 'Schema customization is not yet supported'
    });
  } catch (error) {
    logData('API_ERROR', {
      error: error.message,
      stack: error.stack
    });
    
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error',
      message: error.message
    }, { status: 500 });
  }
} 