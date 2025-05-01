/**
 * API Route to fetch document types by location
 * GET /api/location-document-types/[locationId]
 */
import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma';
import { logData } from '@/utils/logUtils';

const prisma = new PrismaClient();

// Location code mapping (NurseIO location ID to region code)
const LOCATION_MAP = {
  '1': 'CA', // California
  '2': 'NY', // New York
  '3': 'TX', // Texas
  '4': 'FL', // Florida
  '5': 'WA'  // Washington
};

/**
 * Get document types and titles configured for a specific location
 */
export async function GET(request, { params }) {
  try {
    const locationId = params.locationId;
    
    logData('GET_DOCUMENT_TYPES_BY_LOCATION', { locationId });
    
    if (!locationId || !LOCATION_MAP[locationId]) {
      return NextResponse.json(
        { error: 'Invalid location ID' },
        { status: 400 }
      );
    }
    
    const regionCode = LOCATION_MAP[locationId];
    
    // Find the region record
    const region = await prisma.region.findFirst({
      where: { code: regionCode }
    });
    
    if (!region) {
      return NextResponse.json(
        { error: 'Region not found' },
        { status: 404 }
      );
    }
    
    // Get document configurations for this region
    const documentConfigurations = await prisma.documentConfiguration.findMany({
      where: {
        regionId: region.id,
        active: true
      },
      include: {
        documentType: true,
        documentTitle: true
      },
      orderBy: {
        priority: 'desc'
      }
    });
    
    // Transform to expected format
    const result = {
      locationId: parseInt(locationId),
      locationName: region.name,
      documentTypes: {}
    };
    
    // Group by document type
    const documentTypeMap = {};
    
    for (const config of documentConfigurations) {
      const typeId = config.documentType.name.toLowerCase();
      
      if (!documentTypeMap[typeId]) {
        documentTypeMap[typeId] = {
          id: typeId,
          name: config.documentType.name,
          titles: []
        };
      }
      
      documentTypeMap[typeId].titles.push({
        id: config.documentTitle.id,
        title: config.documentTitle.title,
        requireNumber: config.documentTitle.requireNumber,
        requireValidDate: config.documentTitle.requireValidDate,
        requireExpireDate: config.documentTitle.requireExpireDate,
        requireDocData: config.documentTitle.requireDocData,
        docDataName: config.documentTitle.docDataName,
        docDataOptions: config.documentTitle.docDataOptions,
        requireAttachmentFront: config.documentTitle.requireAttachmentFront,
        requireAttachmentBack: config.documentTitle.requireAttachmentBack,
        typeOfCondition: config.typeOfCondition
      });
    }
    
    result.documentTypes = documentTypeMap;
    
    logData('DOCUMENT_TYPES_BY_LOCATION', {
      locationId,
      documentTypeCount: Object.keys(documentTypeMap).length,
      documentTitleCount: documentConfigurations.length
    });
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching document types by location:', error);
    
    return NextResponse.json(
      { error: 'Error fetching document types', details: error.message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 