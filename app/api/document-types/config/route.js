import { NextResponse } from 'next/server';
import { DocumentService } from '../../../../services/documentService';

/**
 * GET document types configuration
 * @returns {Promise<NextResponse>} Response with document types configuration
 */
export async function GET(request) {
  try {
    // Get search params (if any)
    const url = new URL(request.url);
    const parentTypeId = url.searchParams.get('parentTypeId');
    
    // If parentTypeId is provided, get child types
    if (parentTypeId) {
      const childTypes = await DocumentService.getChildDocumentTypes(parentTypeId);
      return NextResponse.json({ 
        parentTypeId, 
        childTypes 
      });
    } 
    // Otherwise get the full configuration by using private method via a custom method
    else {
      const config = DocumentService._loadDocumentTypesConfig();
      return NextResponse.json(config);
    }
  } catch (error) {
    console.error('Error fetching document types configuration:', error);
    return NextResponse.json({ error: 'Failed to fetch document types configuration' }, { status: 500 });
  }
} 