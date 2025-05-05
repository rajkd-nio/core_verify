import { PrismaClient } from '../../../app/generated/prisma';

const prisma = new PrismaClient();

/**
 * API endpoint to get document types with form template information
 * @param {object} req - Next.js request object
 * @param {object} res - Next.js response object
 */
export default async function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

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

    return res.status(200).json(transformedTypes);
  } catch (error) {
    console.error('Error fetching document types:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 