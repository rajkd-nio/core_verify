import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../app/generated/prisma';

const prisma = new PrismaClient();

/**
 * GET - Get all document types with form template information
 */
export async function GET(request) {
  try {
    // Get all document types that have parent_type_id and child_type_id
    const documentTypes = await prisma.documentType.findMany({
      where: {
        parent_type_id: { not: null },
        child_type_id: { not: null }
      },
      include: {
        form_template: true,
        locations: true
      },
      orderBy: [
        { parent_name: 'asc' },
        { child_name: 'asc' }
      ]
    });

    // Transform the data to a more friendly format
    const transformedTypes = documentTypes.map(docType => ({
      id: docType.id,
      parentTypeId: docType.parent_type_id,
      parentName: docType.parent_name,
      childTypeId: docType.child_type_id,
      childName: docType.child_name,
      name: docType.name,
      description: docType.description,
      formTemplate: docType.form_template ? {
        id: docType.form_template.id,
        form_key: docType.form_template.form_key,
        name: docType.form_template.name,
        description: docType.form_template.description,
        version: docType.form_template.version,
        is_active: docType.form_template.is_active
      } : null,
      locations: docType.locations
    }));

    return NextResponse.json(transformedTypes);
  } catch (error) {
    console.error('Error fetching document types:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 