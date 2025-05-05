import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../app/generated/prisma';

const prisma = new PrismaClient();

/**
 * GET - Get a form template by key
 */
export async function GET(request, { params }) {
  const formKey = params.formKey;
  
  if (!formKey) {
    return NextResponse.json(
      { error: 'Form key is required' },
      { status: 400 }
    );
  }

  try {
    // Get the form template
    const formTemplate = await prisma.formTemplate.findUnique({
      where: { form_key: formKey },
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
      }
    });

    if (!formTemplate) {
      return NextResponse.json(
        { error: 'Form template not found' },
        { status: 404 }
      );
    }

    // Transform the data to a more friendly format
    const transformedTemplate = {
      id: formTemplate.form_key,
      name: formTemplate.name,
      description: formTemplate.description,
      version: formTemplate.version,
      isActive: formTemplate.is_active,
      fields: formTemplate.form_fields.map(field => ({
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
      documentTypes: formTemplate.document_types.map(docType => ({
        id: docType.id,
        parentTypeId: docType.parent_type_id,
        parentName: docType.parent_name,
        childTypeId: docType.child_type_id,
        childName: docType.child_name,
        name: docType.name
      }))
    };

    return NextResponse.json(transformedTemplate);
  } catch (error) {
    console.error('Error fetching form template:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * PUT - Update a form template
 */
export async function PUT(request, { params }) {
  const formKey = params.formKey;
  
  if (!formKey) {
    return NextResponse.json(
      { error: 'Form key is required' },
      { status: 400 }
    );
  }

  try {
    const data = await request.json();
    
    // Validate request body
    if (!data || !data.name) {
      return NextResponse.json(
        { error: 'Form name is required' },
        { status: 400 }
      );
    }

    // Check if the form template exists
    const existingTemplate = await prisma.formTemplate.findUnique({
      where: { form_key: formKey },
      include: {
        form_fields: {
          select: { id: true }
        }
      }
    });

    if (!existingTemplate) {
      return NextResponse.json(
        { error: 'Form template not found' },
        { status: 404 }
      );
    }

    // Update the form template
    const updatedTemplate = await prisma.formTemplate.update({
      where: { form_key: formKey },
      data: {
        name: data.name,
        description: data.description || null,
        version: { increment: 1 },
        updated_at: new Date()
      }
    });

    // Process fields
    if (data.fields && Array.isArray(data.fields)) {
      // Get existing field IDs
      const existingFieldIds = existingTemplate.form_fields.map(f => f.id);
      
      // Delete existing fields to avoid duplicates
      await prisma.formField.deleteMany({
        where: { template_id: existingTemplate.id }
      });
      
      // Create new fields
      for (const field of data.fields) {
        const fieldData = {
          form_template: {
            connect: { id: existingTemplate.id }
          },
          field_id: field.id,
          field_name: field.name,
          field_type: field.type,
          label: field.label,
          placeholder: field.placeholder || null,
          required: field.required || false,
          is_hidden: field.hidden || false,
          order: field.order || 0,
          full_width: field.fullWidth || true,
          display_conditions: field.displayConditions || null,
          validation_rules: field.validationRules || null,
          created_at: new Date(),
          updated_at: new Date()
        };
        
        const formField = await prisma.formField.create({
          data: fieldData
        });
        
        // Create field options if applicable
        if (field.options && Array.isArray(field.options)) {
          for (let i = 0; i < field.options.length; i++) {
            const option = field.options[i];
            await prisma.fieldOption.create({
              data: {
                form_field: {
                  connect: { id: formField.id }
                },
                option_value: option.value,
                option_label: option.label,
                order: i,
                created_at: new Date(),
                updated_at: new Date()
              }
            });
          }
        }
      }
    }

    return NextResponse.json({
      id: updatedTemplate.form_key,
      name: updatedTemplate.name,
      description: updatedTemplate.description,
      version: updatedTemplate.version,
      isActive: updatedTemplate.is_active
    });
  } catch (error) {
    console.error('Error updating form template:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * DELETE - Delete a form template
 */
export async function DELETE(request, { params }) {
  const formKey = params.formKey;
  
  if (!formKey) {
    return NextResponse.json(
      { error: 'Form key is required' },
      { status: 400 }
    );
  }

  try {
    // Check if the form template exists
    const formTemplate = await prisma.formTemplate.findUnique({
      where: { form_key: formKey },
      include: {
        document_types: true
      }
    });

    if (!formTemplate) {
      return NextResponse.json(
        { error: 'Form template not found' },
        { status: 404 }
      );
    }

    // Check if the form is associated with any document types
    if (formTemplate.document_types.length > 0) {
      return NextResponse.json(
        { error: 'Cannot delete form template that is associated with document types' },
        { status: 400 }
      );
    }

    // Delete form fields and options
    const fields = await prisma.formField.findMany({
      where: { template_id: formTemplate.id },
      select: { id: true }
    });

    const fieldIds = fields.map(f => f.id);
    
    // Delete field options
    await prisma.fieldOption.deleteMany({
      where: { field_id: { in: fieldIds } }
    });
    
    // Delete form fields
    await prisma.formField.deleteMany({
      where: { template_id: formTemplate.id }
    });
    
    // Delete form template
    await prisma.formTemplate.delete({
      where: { id: formTemplate.id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting form template:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 