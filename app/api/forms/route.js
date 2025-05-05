import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../app/generated/prisma';

const prisma = new PrismaClient();

/**
 * GET - Get all form templates
 */
export async function GET(request) {
  try {
    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const activeOnly = searchParams.get('activeOnly') !== 'false';
    
    // Get all form templates
    const formTemplates = await prisma.formTemplate.findMany({
      where: activeOnly ? { is_active: true } : {},
      include: {
        form_fields: {
          orderBy: { order: 'asc' },
          include: {
            field_options: {
              orderBy: { order: 'asc' }
            }
          }
        },
        document_types: {
          select: {
            id: true,
            parent_type_id: true,
            parent_name: true,
            child_type_id: true,
            child_name: true,
            name: true
          }
        }
      },
      orderBy: { name: 'asc' }
    });

    // Transform the data to a more friendly format
    const transformedTemplates = formTemplates.map(template => ({
      id: template.id,
      key: template.form_key,
      name: template.name,
      description: template.description,
      version: template.version,
      isActive: template.is_active,
      fields: template.form_fields.map(field => ({
        id: field.field_id,
        name: field.field_name,
        type: field.field_type,
        label: field.label,
        placeholder: field.placeholder,
        required: field.required,
        order: field.order,
        hidden: field.is_hidden,
        fullWidth: field.full_width,
        options: field.field_options?.map(option => ({
          value: option.option_value,
          label: option.option_label
        }))
      })),
      documentTypes: template.document_types.map(docType => ({
        id: docType.id,
        parentTypeId: docType.parent_type_id,
        parentName: docType.parent_name,
        childTypeId: docType.child_type_id,
        childName: docType.child_name,
        name: docType.name
      }))
    }));

    return NextResponse.json(transformedTemplates);
  } catch (error) {
    console.error('Error fetching form templates:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * POST - Create a new form template
 */
export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validate request body
    if (!data || !data.id || !data.name) {
      return NextResponse.json(
        { error: 'Invalid form data. ID and name are required.' },
        { status: 400 }
      );
    }
    
    // Create the form template
    const formTemplate = await prisma.formTemplate.create({
      data: {
        form_key: data.id,
        name: data.name,
        description: data.description || null,
        version: 1,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      }
    });
    
    // If parent and child document types are provided, create or update document type
    if (data.parentType && data.childType) {
      await prisma.documentType.upsert({
        where: {
          parent_type_id_child_type_id: {
            parent_type_id: data.parentType.id,
            child_type_id: data.childType.id
          }
        },
        update: {
          parent_name: data.parentType.name,
          child_name: data.childType.name,
          form_template: {
            connect: {
              id: formTemplate.id
            }
          },
          updatedAt: new Date()
        },
        create: {
          name: `${data.parentType.name} - ${data.childType.name}`,
          parent_type_id: data.parentType.id,
          parent_name: data.parentType.name,
          child_type_id: data.childType.id,
          child_name: data.childType.name,
          form_template: {
            connect: {
              id: formTemplate.id
            }
          },
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });
    }
    
    return NextResponse.json({
      id: formTemplate.form_key,
      name: formTemplate.name,
      description: formTemplate.description,
      version: formTemplate.version,
      isActive: formTemplate.is_active
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating form template:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 