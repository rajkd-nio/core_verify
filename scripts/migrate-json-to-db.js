#!/usr/bin/env node

/**
 * Migration script to convert form definitions from JSON to database records
 * This script reads from the documentTypes.json file and creates database records
 * using Prisma ORM
 */

const { PrismaClient } = require('../app/generated/prisma');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

// Helper function to read JSON file
function readJsonFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

/**
 * Migrate form definitions from JSON to database
 */
async function migrateJsonToDb() {
  try {
    console.log('Starting migration from JSON to database...');
    
    // Get the document types JSON configuration
    const configPath = path.join(__dirname, '..', 'config', 'documentTypes.json');
    const configData = readJsonFile(configPath);
    
    if (!configData || !configData.documentTypes) {
      console.error('Invalid document types configuration');
      return;
    }

    // Process each parent document type
    for (const parentType of configData.documentTypes) {
      console.log(`Processing parent document type: ${parentType.name}`);
      
      // Process each child document type
      if (parentType.childTypes && Array.isArray(parentType.childTypes)) {
        for (const childType of parentType.childTypes) {
          console.log(`Processing child document type: ${childType.name}`);
          
          // 1. Create form template
          const formTemplate = await prisma.formTemplate.upsert({
            where: { form_key: childType.id },
            update: {
              name: childType.name,
              description: `${parentType.name} - ${childType.name}`,
              version: { increment: 1 },
              updated_at: new Date()
            },
            create: {
              form_key: childType.id,
              name: childType.name,
              description: `${parentType.name} - ${childType.name}`,
              version: 1,
              is_active: true,
              created_at: new Date(),
              updated_at: new Date()
            }
          });
          
          console.log(`Created/updated form template: ${formTemplate.name} (ID: ${formTemplate.id})`);
          
          // 2. Create document type record
          const documentType = await prisma.documentType.upsert({
            where: {
              parent_type_id_child_type_id: {
                parent_type_id: parentType.id,
                child_type_id: childType.id
              }
            },
            update: {
              parent_name: parentType.name,
              child_name: childType.name,
              form_template: {
                connect: {
                  id: formTemplate.id
                }
              },
              updatedAt: new Date()
            },
            create: {
              name: `${parentType.name} - ${childType.name}`,
              parent_type_id: parentType.id,
              parent_name: parentType.name,
              child_type_id: childType.id,
              child_name: childType.name,
              description: parentType.description || null,
              form_template: {
                connect: {
                  id: formTemplate.id
                }
              },
              createdAt: new Date(),
              updatedAt: new Date()
            }
          });
          
          console.log(`Created/updated document type: ${documentType.child_name}`);
          
          // 3. Create document type location mappings
          if (childType.locations && Array.isArray(childType.locations)) {
            // First, delete existing mappings to avoid duplicates
            await prisma.documentTypeLocation.deleteMany({
              where: { document_type_id: documentType.id }
            });
            
            // Then create new mappings
            for (const locationId of childType.locations) {
              await prisma.documentTypeLocation.create({
                data: {
                  document_type: {
                    connect: { id: documentType.id }
                  },
                  location_id: locationId,
                  created_at: new Date(),
                  updated_at: new Date()
                }
              });
              console.log(`Created location mapping for document type ${childType.name} in location ${locationId}`);
            }
          }
          
          // 4. Process fields
          if (childType.fields && Array.isArray(childType.fields)) {
            // First, delete existing fields to avoid duplicates
            const existingFields = await prisma.formField.findMany({
              where: { template_id: formTemplate.id },
              select: { id: true }
            });
            
            const existingFieldIds = existingFields.map(field => field.id);
            
            // Delete existing options for these fields
            if (existingFieldIds.length > 0) {
              await prisma.fieldOption.deleteMany({
                where: { field_id: { in: existingFieldIds } }
              });
            }
            
            // Delete existing fields
            await prisma.formField.deleteMany({
              where: { template_id: formTemplate.id }
            });
            
            // Create fields
            for (const field of childType.fields) {
              try {
                // Convert validation and display conditions to JSONB
                const validationRules = field.validation || null;
                const displayConditions = field.conditionalShow || null;
                
                // Create form field
                const formField = await prisma.formField.create({
                  data: {
                    form_template: {
                      connect: { id: formTemplate.id }
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
                    display_conditions: displayConditions,
                    validation_rules: validationRules,
                    created_at: new Date(),
                    updated_at: new Date()
                  }
                });
                
                console.log(`Created form field: ${field.name} for ${formTemplate.name}`);
                
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
                  console.log(`Created ${field.options.length} options for field ${field.name}`);
                }
              } catch (fieldError) {
                console.error(`Error creating form field ${field.name}:`, fieldError.message);
              }
            }
          }
        }
      }
    }
    
    console.log('JSON to database migration completed successfully!');
  } catch (error) {
    console.error('Error during migration:', error);
    console.error('Stack trace:', error.stack);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the migration
migrateJsonToDb()
  .then(() => {
    console.log('Migration script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Migration script failed:', error);
    process.exit(1);
  }); 