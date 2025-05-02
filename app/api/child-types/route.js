import { DocumentService } from '../../services/documentService';
import { NextResponse } from 'next/server';
import { logDebug } from '@/utils/logUtils';

/**
 * GET handler to fetch child document types based on parent type and location
 * @param {Request} request - Request object
 * @returns {NextResponse} - Response with child document types or error
 */
export async function GET(request) {
  try {
    // Parse query parameters
    const { searchParams } = new URL(request.url);
    const typeId = searchParams.get('typeId');
    const locationId = searchParams.get('locationId');
    const enableLogging = searchParams.get('log') === 'true';

    if (!typeId) {
      return NextResponse.json({ 
        error: 'Missing typeId parameter',
        message: 'Document type ID is required'
      }, { status: 400 });
    }

    logDebug('CHILD_TYPES_REQUEST', { 
      typeId,
      locationId,
      url: request.url
    });

    try {
      // Get child document types from the service
      const childTypes = await DocumentService.getChildDocumentTypes(
        typeId, 
        { locationId: locationId ? parseInt(locationId, 10) : null }
      );
      
      if (!childTypes || childTypes.length === 0) {
        if (enableLogging) {
          console.log(`No child types found for parent type: ${typeId}`);
        }
        
        return NextResponse.json(
          { 
            error: 'Failed to fetch child document types',
            message: `No child types found for parent type: ${typeId}`
          },
          { status: 404 }
        );
      }
      
      if (enableLogging) {
        console.log(`Found ${childTypes.length} child types for ${typeId}: ${childTypes.map(t => t.id).join(', ')}`);
      }

      // Filter fingerprint_clearance based on location
      const filteredChildTypes = childTypes.filter(childType => {
        // Only include fingerprint_clearance for NY (locationId = 2)
        if (childType.id === 'fingerprint_clearance') {
          return locationId && parseInt(locationId, 10) === 2;
        }
        return true;
      });
      
      logDebug('CHILD_TYPES_FOUND', {
        parentType: typeId,
        childTypeCount: filteredChildTypes.length,
        locationId: locationId ? parseInt(locationId, 10) : null
      });
      
      return NextResponse.json(filteredChildTypes);
    } catch (error) {
      logDebug('CHILD_TYPES_ERROR', {
        error: error.message,
        parentType: typeId
      });
      
      if (enableLogging) {
        console.error(`Error fetching child types: ${error.message}`);
      }
      
      return NextResponse.json({ 
        error: 'Error fetching child document types',
        message: error.message,
        typeId
      }, { status: 500 });
    }
  } catch (error) {
    logDebug('CHILD_TYPES_ROUTE_ERROR', { error: error.message });
    
    return NextResponse.json({ 
      error: 'Error processing request',
      message: error.message
    }, { status: 500 });
  }
} 