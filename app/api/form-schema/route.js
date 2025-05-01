import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { DocumentService } from '../../services/documentService';
import { logData } from '../../../utils/logUtils';

// Helper function to log data for debugging
const logDebug = (label, data) => {
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
    // Parse query parameters
    const { searchParams } = new URL(request.url);
    const documentType = searchParams.get('type') || 'certificate';
    const locationId = searchParams.get('locationId');
    const childTypeId = searchParams.get('childTypeId');
    
    logDebug('FORM_SCHEMA_REQUEST', { 
      documentType, 
      locationId,
      childTypeId,
      url: request.url
    });
    
    try {
      // If childTypeId is provided, get schema for specific child type
      if (childTypeId) {
        const schema = await DocumentService.getFormSchemaByTypeAndSubType(
          documentType, 
          childTypeId, 
          { locationId: locationId ? parseInt(locationId) : null }
        );
        
        if (!schema) {
          return NextResponse.json(
            { 
              error: 'Failed to fetch form schema',
              message: `No schema found for document type: ${documentType}, child type: ${childTypeId}`
            },
            { status: 404 }
          );
        }
        
        logDebug('CHILD_SCHEMA_FOUND', {
          documentType,
          childTypeId,
          fieldCount: schema.fields.length
        });
        
        return NextResponse.json(schema);
      }
      
      // Otherwise fetch parent document type schema
      const schema = await DocumentService.getFormSchemaByTypeId(documentType, { 
        locationId: locationId ? parseInt(locationId) : null 
      });
      
      if (!schema) {
        return NextResponse.json(
          { 
            error: 'Failed to fetch form schema',
            message: `No schema found for document type: ${documentType}`
          },
          { status: 404 }
        );
      }
      
      logDebug('SCHEMA_FOUND_IN_DB', {
        documentType,
        isChildTypeSelector: schema.isChildTypeSelector || false,
        fieldCount: schema.fields.length
      });
      
      return NextResponse.json({ 
        schema,
        locationId: locationId ? parseInt(locationId) : null
      });
    } catch (dbError) {
      logDebug('SCHEMA_NOT_FOUND_IN_DB', {
        documentType,
        error: dbError.message
      });
      
      // Try to load from configuration file first
      try {
        const schemaFromConfig = await DocumentService.getFormSchemaByTypeId(documentType, { 
          locationId: locationId ? parseInt(locationId) : null,
          useConfigOnly: true
        });
        
        if (schemaFromConfig) {
          logDebug('USING_CONFIG_SCHEMA', {
            documentType,
            isChildTypeSelector: schemaFromConfig.isChildTypeSelector || false,
            fieldCount: schemaFromConfig.fields.length
          });
          
          return NextResponse.json({ 
            schema: schemaFromConfig,
            locationId: locationId ? parseInt(locationId) : null,
            usingConfig: true
          });
        }
      } catch (configError) {
        logDebug('CONFIG_SCHEMA_NOT_FOUND', {
          documentType,
          error: configError.message
        });
      }
      
      // Fall back to JSON file if database and config fail
      try {
        // Get the path to the schema file
        const schemaDirectory = path.join(process.cwd(), 'formdata');
        const schemaPath = path.join(schemaDirectory, `${documentType}.json`);
        
        // Read the schema file
        const fileContents = await fs.readFile(schemaPath, 'utf8');
        const schema = JSON.parse(fileContents);
        
        logDebug('FALLBACK_TO_FILE_SCHEMA', {
          documentType,
          fieldCount: schema.fields.length
        });
        
        return NextResponse.json({ 
          schema,
          locationId: locationId ? parseInt(locationId) : null,
          usingFallback: true
        });
      } catch (fileError) {
        // If both database and file fail, try to use default
        if (documentType !== 'certificate') {
          try {
            const defaultSchema = await DocumentService.getFormSchemaByTypeId('certificate');
            
            logDebug('USING_DEFAULT_SCHEMA', {
              documentType: 'certificate',
              fieldCount: defaultSchema.fields.length
            });
            
            return NextResponse.json({ 
              schema: defaultSchema,
              locationId: locationId ? parseInt(locationId) : null,
              usingDefault: true
            });
          } catch (defaultError) {
            // If even default DB schema fails, try file
            const defaultSchemaPath = path.join(process.cwd(), 'formdata', 'certificate.json');
            const defaultFileContents = await fs.readFile(defaultSchemaPath, 'utf8');
            const defaultSchema = JSON.parse(defaultFileContents);
            
            logDebug('USING_DEFAULT_FILE_SCHEMA', {
              documentType: 'certificate',
              fieldCount: defaultSchema.fields.length
            });
            
            return NextResponse.json({ 
              schema: defaultSchema,
              locationId: locationId ? parseInt(locationId) : null,
              usingDefault: true,
              usingFallback: true
            });
          }
        }
        
        // Return error if neither the requested schema nor default schema can be found
        return NextResponse.json({ 
          error: 'Schema not found',
          message: `No schema found for document type: ${documentType}`,
          locationId: locationId ? parseInt(locationId) : null
        }, { status: 404 });
      }
    }
  } catch (error) {
    logDebug('FORM_SCHEMA_ERROR', { error: error.message });
    
    return NextResponse.json({ 
      error: 'Error fetching form schema',
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
    const data = await request.json();
    const { documentType, customFields, locationId } = data;
    
    logDebug('CUSTOM_FORM_SCHEMA_REQUEST', { 
      documentType, 
      customFieldCount: customFields ? customFields.length : 0,
      locationId
    });
    
    try {
      // Fetch base schema from database
      const baseSchema = await DocumentService.getFormSchemaByTypeId(documentType, { locationId });
      
      if (!baseSchema) {
        return NextResponse.json(
          { 
            error: 'Failed to fetch base form schema',
            message: `No schema found for document type: ${documentType}`
          },
          { status: 404 }
        );
      }
      
      // If no custom fields, just return the base schema
      if (!customFields || customFields.length === 0) {
        return NextResponse.json({ schema: baseSchema });
      }
      
      // Merge custom fields with base schema
      // This is a simplified implementation - in a real app you'd want more validation
      const mergedSchema = {
        ...baseSchema,
        fields: [...baseSchema.fields]
      };
      
      // Process custom fields
      customFields.forEach(customField => {
        const existingFieldIndex = mergedSchema.fields.findIndex(f => f.id === customField.id);
        
        if (existingFieldIndex >= 0) {
          // Update existing field
          mergedSchema.fields[existingFieldIndex] = {
            ...mergedSchema.fields[existingFieldIndex],
            ...customField
          };
        } else {
          // Add new field
          mergedSchema.fields.push(customField);
        }
      });
      
      return NextResponse.json({ 
        schema: mergedSchema,
        customized: true,
        locationId: locationId ? parseInt(locationId) : null
      });
    } catch (dbError) {
      // Fall back to file if database fails
      const schemaDirectory = path.join(process.cwd(), 'formdata');
      const schemaPath = path.join(schemaDirectory, `${documentType || 'certificate'}.json`);
      const fileContents = await fs.readFile(schemaPath, 'utf8');
      const baseSchema = JSON.parse(fileContents);
      
      logDebug('FALLBACK_TO_FILE_FOR_CUSTOM_SCHEMA', {
        documentType,
        error: dbError.message
      });
      
      return NextResponse.json({
        schema: baseSchema,
        customized: false,
        usingFallback: true,
        locationId: locationId ? parseInt(locationId) : null,
        message: 'Schema customization is not yet supported (using fallback)'
      });
    }
  } catch (error) {
    logDebug('CUSTOM_FORM_SCHEMA_ERROR', { error: error.message });
    
    return NextResponse.json({ 
      error: 'Error processing custom form schema',
      message: error.message
    }, { status: 500 });
  }
} 