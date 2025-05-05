/**
 * Form Template Service
 * Provides methods for managing form templates and their fields in the database
 */

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

class FormTemplateService {
  /**
   * Get a form template by key
   * @param {string} formKey - The unique key of the form template
   * @returns {Promise<Object>} - The form template with fields and options
   */
  async getFormTemplateByKey(formKey) {
    try {
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
          }
        }
      });

      if (!formTemplate) {
        return null;
      }

      // Transform the data to match the expected format in the frontend
      return {
        id: formTemplate.form_key,
        name: formTemplate.name,
        description: formTemplate.description,
        version: formTemplate.version,
        fields: formTemplate.form_fields.map(field => ({
          id: field.field_id,
          name: field.field_name,
          type: field.field_type,
          label: field.label,
          placeholder: field.placeholder,
          required: field.required,
          order: field.order,
          fullWidth: field.full_width,
          hidden: field.is_hidden,
          validation: field.validation_rules,
          conditionalShow: field.display_conditions,
          options: field.field_options.map(option => ({
            value: option.option_value,
            label: option.option_label
          }))
        }))
      };
    } catch (error) {
      console.error('Error fetching form template:', error);
      throw error;
    }
  }

  /**
   * Get a form template by document type
   * @param {string} parentTypeId - The parent document type ID
   * @param {string} childTypeId - The child document type ID
   * @returns {Promise<Object>} - The form template with fields and options
   */
  async getFormTemplateByDocumentType(parentTypeId, childTypeId) {
    try {
      const documentType = await prisma.documentType.findUnique({
        where: {
          parent_type_id_child_type_id: {
            parent_type_id: parentTypeId,
            child_type_id: childTypeId
          }
        },
        include: {
          form_template: {
            include: {
              form_fields: {
                orderBy: { order: 'asc' },
                include: {
                  field_options: {
                    orderBy: { order: 'asc' }
                  }
                }
              }
            }
          }
        }
      });

      if (!documentType || !documentType.form_template) {
        return null;
      }

      const formTemplate = documentType.form_template;

      // Transform the data to match the expected format in the frontend
      return {
        id: formTemplate.form_key,
        name: formTemplate.name,
        description: formTemplate.description,
        version: formTemplate.version,
        parentType: {
          id: parentTypeId,
          name: documentType.parent_name
        },
        childType: {
          id: childTypeId,
          name: documentType.child_name
        },
        fields: formTemplate.form_fields.map(field => ({
          id: field.field_id,
          name: field.field_name,
          type: field.field_type,
          label: field.label,
          placeholder: field.placeholder,
          required: field.required,
          order: field.order,
          fullWidth: field.full_width,
          hidden: field.is_hidden,
          validation: field.validation_rules,
          conditionalShow: field.display_conditions,
          options: field.field_options.map(option => ({
            value: option.option_value,
            label: option.option_label
          }))
        }))
      };
    } catch (error) {
      console.error('Error fetching form template by document type:', error);
      throw error;
    }
  }

  /**
   * Get all form templates
   * @param {boolean} activeOnly - Whether to return only active templates
   * @returns {Promise<Array>} - Array of form templates
   */
  async getAllFormTemplates(activeOnly = true) {
    try {
      const formTemplates = await prisma.formTemplate.findMany({
        where: activeOnly ? { is_active: true } : {},
        orderBy: { name: 'asc' },
        include: {
          document_types: true
        }
      });

      return formTemplates.map(template => ({
        id: template.id,
        key: template.form_key,
        name: template.name,
        description: template.description,
        version: template.version,
        isActive: template.is_active,
        documentTypes: template.document_types.map(dt => ({
          parentTypeId: dt.parent_type_id,
          parentName: dt.parent_name,
          childTypeId: dt.child_type_id,
          childName: dt.child_name
        }))
      }));
    } catch (error) {
      console.error('Error fetching all form templates:', error);
      throw error;
    }
  }

  /**
   * Create or update a form template
   * @param {Object} formTemplate - The form template data
   * @returns {Promise<Object>} - The created/updated form template
   */
  async saveFormTemplate(formTemplate) {
    const { id, name, description, fields, ...rest } = formTemplate;

    try {
      // Begin a transaction
      return await prisma.$transaction(async (tx) => {
        // Create or update the form template
        const savedTemplate = await tx.formTemplate.upsert({
          where: { form_key: id },
          update: {
            name,
            description,
            version: { increment: 1 },
            updated_at: new Date()
          },
          create: {
            form_key: id,
            name,
            description,
            version: 1,
            is_active: true,
            created_at: new Date(),
            updated_at: new Date()
          }
        });

        // Handle document type association if provided
        if (rest.parentType && rest.childType) {
          await tx.documentType.upsert({
            where: {
              parent_type_id_child_type_id: {
                parent_type_id: rest.parentType.id,
                child_type_id: rest.childType.id
              }
            },
            update: {
              parent_name: rest.parentType.name,
              child_name: rest.childType.name,
              form_template_id: savedTemplate.id,
              updated_at: new Date()
            },
            create: {
              parent_type_id: rest.parentType.id,
              parent_name: rest.parentType.name,
              child_type_id: rest.childType.id,
              child_name: rest.childType.name,
              description: description,
              form_template_id: savedTemplate.id,
              created_at: new Date(),
              updated_at: new Date()
            }
          });
        }

        // Delete existing fields to avoid duplicates
        if (fields && Array.isArray(fields)) {
          const existingFields = await tx.formField.findMany({
            where: { template_id: savedTemplate.id },
            select: { id: true }
          });
          
          const existingFieldIds = existingFields.map(field => field.id);
          
          // Delete existing options for these fields
          if (existingFieldIds.length > 0) {
            await tx.fieldOption.deleteMany({
              where: { field_id: { in: existingFieldIds } }
            });
          }
          
          // Delete existing fields
          await tx.formField.deleteMany({
            where: { template_id: savedTemplate.id }
          });
          
          // Create new fields
          for (const field of fields) {
            // Create form field
            const formField = await tx.formField.create({
              data: {
                template_id: savedTemplate.id,
                field_id: field.id,
                field_name: field.name,
                field_type: field.type,
                label: field.label,
                placeholder: field.placeholder || null,
                required: field.required || false,
                is_hidden: field.hidden || false,
                order: field.order || 0,
                full_width: field.fullWidth || true,
                display_conditions: field.conditionalShow || null,
                validation_rules: field.validation || null,
                created_at: new Date(),
                updated_at: new Date()
              }
            });
            
            // Create field options if applicable
            if (field.options && Array.isArray(field.options)) {
              for (let i = 0; i < field.options.length; i++) {
                const option = field.options[i];
                await tx.fieldOption.create({
                  data: {
                    field_id: formField.id,
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

        return this.getFormTemplateByKey(id);
      });
    } catch (error) {
      console.error('Error saving form template:', error);
      throw error;
    }
  }

  /**
   * Delete a form template
   * @param {string} formKey - The unique key of the form template
   * @returns {Promise<boolean>} - Success indicator
   */
  async deleteFormTemplate(formKey) {
    try {
      // Find the template first
      const template = await prisma.formTemplate.findUnique({
        where: { form_key: formKey },
        include: {
          document_types: true
        }
      });

      if (!template) {
        return false;
      }

      // Begin transaction for deletion
      await prisma.$transaction(async (tx) => {
        // Remove document type associations
        if (template.document_types.length > 0) {
          for (const docType of template.document_types) {
            await tx.documentType.update({
              where: { id: docType.id },
              data: { form_template_id: null }
            });
          }
        }

        // Get all fields
        const fields = await tx.formField.findMany({
          where: { template_id: template.id },
          select: { id: true }
        });

        // Delete field options
        if (fields.length > 0) {
          await tx.fieldOption.deleteMany({
            where: { field_id: { in: fields.map(f => f.id) } }
          });
        }

        // Delete form fields
        await tx.formField.deleteMany({
          where: { template_id: template.id }
        });

        // Delete form template
        await tx.formTemplate.delete({
          where: { id: template.id }
        });
      });

      return true;
    } catch (error) {
      console.error('Error deleting form template:', error);
      throw error;
    }
  }
}

module.exports = new FormTemplateService(); 