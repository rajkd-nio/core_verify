import { NextResponse } from 'next/server';
import { DocumentService } from '../../../../services/documentService';
import { logDebug } from '@/utils/logUtils';

/**
 * GET handler to fetch form schema for specific parent and child document types
 * @param {Request} request - Request object
 * @param {Object} params - URL parameters (typeId and childTypeId)
 * @returns {NextResponse} - Response with form schema or error
 */
export async function GET(request, { params }) {
  try {
    const { typeId, childTypeId } = params;
    
    // Parse query parameters
    const { searchParams } = new URL(request.url);
    const locationId = searchParams.get('locationId');
    const multipleTypes = searchParams.get('multipleTypes') === 'true';
    const enableLogging = searchParams.get('log') === 'true';
    
    // Check if this is a vaccination record type
    const isVaccinationRecord = 
      typeId.toLowerCase() === 'vaccination_record' || 
      typeId.toLowerCase() === 'medical';
      
    if (isVaccinationRecord || enableLogging) {
      console.log(`Processing ${isVaccinationRecord ? 'vaccination record' : ''} request for: ${typeId}/${childTypeId}`);
    }
    
    logDebug('CHILD_FORM_SCHEMA_REQUEST', { 
      typeId,
      childTypeId,
      locationId,
      multipleTypes,
      url: request.url,
      isVaccinationRecord
    });
    
    // Special handling for vaccination_record to ensure proper mapping
    let processedTypeId = typeId;
    if (isVaccinationRecord) {
      // Always use consistent ID format
      processedTypeId = 'vaccination_record';
      console.log(`Using consistent vaccination_record ID: ${processedTypeId}`);
    }
    
    try {
      // If multipleTypes is true and childTypeId is "all", fetch schemas for all child types
      if (childTypeId === 'all' || multipleTypes) {
        const childTypes = await DocumentService.getChildDocumentTypes(
          processedTypeId, 
          { locationId: locationId ? parseInt(locationId) : null }
        );
        
        if (!childTypes || childTypes.length === 0) {
          if (enableLogging || isVaccinationRecord) {
            console.log(`No child types found for parent type: ${processedTypeId}`);
          }
          
          return NextResponse.json(
            { 
              error: 'Failed to fetch child document types',
              message: `No child types found for parent type: ${processedTypeId}`
            },
            { status: 404 }
          );
        }
        
        if (enableLogging || isVaccinationRecord) {
          console.log(`Found ${childTypes.length} child types for ${processedTypeId}: ${childTypes.map(t => t.id).join(', ')}`);
        }
        
        const schemas = {};
        
        for (const childType of childTypes) {
          try {
            if (enableLogging || isVaccinationRecord) {
              console.log(`Fetching schema for ${processedTypeId}/${childType.id}`);
            }
            
            const schema = await DocumentService.getFormSchemaByTypeAndSubType(
              processedTypeId,
              childType.id,
              { locationId: locationId ? parseInt(locationId) : null }
            );
            
            if (schema) {
              schemas[childType.id] = schema;
              
              if (enableLogging || isVaccinationRecord) {
                console.log(`Successfully loaded schema for ${childType.id} with ${schema.fields?.length || 0} fields`);
              }
            }
          } catch (error) {
            logDebug('ERROR_FETCHING_CHILD_SCHEMA', {
              parentType: processedTypeId,
              childType: childType.id,
              error: error.message
            });
            
            if (enableLogging || isVaccinationRecord) {
              console.error(`Error fetching schema for ${childType.id}: ${error.message}`);
            }
            // Continue with other child types even if one fails
          }
        }
        
        if (Object.keys(schemas).length === 0) {
          if (enableLogging || isVaccinationRecord) {
            console.log(`No schemas found for parent type: ${processedTypeId}`);
          }
          
          return NextResponse.json(
            { 
              error: 'Failed to fetch form schemas',
              message: `No schemas found for parent type: ${processedTypeId}`
            },
            { status: 404 }
          );
        }
        
        logDebug('MULTIPLE_CHILD_SCHEMAS_FOUND', {
          parentType: processedTypeId,
          schemaCount: Object.keys(schemas).length
        });
        
        return NextResponse.json(schemas);
      }
      
      // Fetch schema for the specific child document type
      if (enableLogging || isVaccinationRecord) {
        console.log(`Fetching single schema for ${processedTypeId}/${childTypeId}`);
      }
      
      let finalLocationId = locationId ? parseInt(locationId) : null;
      
      const schema = await DocumentService.getFormSchemaByTypeAndSubType(
        processedTypeId, 
        childTypeId, 
        { locationId: finalLocationId }
      );
      
      if (!schema) {
        if (enableLogging || isVaccinationRecord) {
          console.log(`No schema found for ${processedTypeId}/${childTypeId}`);
        }
        
        return NextResponse.json(
          { 
            error: 'Failed to fetch form schema',
            message: `No schema found for parent type: ${processedTypeId}, child type: ${childTypeId}`
          },
          { status: 404 }
        );
      }
      
      if (enableLogging || isVaccinationRecord) {
        console.log(`Successfully loaded schema for ${childTypeId} with ${schema.fields?.length || 0} fields`);
      }
      
      logDebug('CHILD_SCHEMA_FOUND', {
        parentType: processedTypeId,
        childType: childTypeId,
        fieldCount: schema.fields.length
      });
      
      return NextResponse.json(schema);
    } catch (error) {
      logDebug('CHILD_SCHEMA_ERROR', {
        error: error.message,
        parentType: processedTypeId,
        childType: childTypeId
      });
      
      if (enableLogging || isVaccinationRecord) {
        console.error(`Error processing schema request: ${error.message}`);
      }
      
      return NextResponse.json({ 
        error: 'Error fetching child form schema',
        message: error.message,
        typeId: processedTypeId,
        childTypeId
      }, { status: 500 });
    }
  } catch (error) {
    logDebug('FORM_SCHEMA_ROUTE_ERROR', { error: error.message });
    
    return NextResponse.json({ 
      error: 'Error processing request',
      message: error.message
    }, { status: 500 });
  }
} 