/**
 * Updated script to seed document types and titles into the database
 * This reads from the documentTypes.json configuration file and creates corresponding database records
 */

// Direct import from the generated Prisma client
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

// Function to create regions if they don't exist
async function seedRegions() {
  console.log('Creating regions...');
  const regions = [
    { id: 1, name: 'California', code: 'CA', country: 'US' },
    { id: 2, name: 'New York', code: 'NY', country: 'US' },
    { id: 3, name: 'Texas', code: 'TX', country: 'US' },
    { id: 4, name: 'Florida', code: 'FL', country: 'US' },
    { id: 5, name: 'Washington', code: 'WA', country: 'US' }
  ];

  for (const region of regions) {
    const existingRegion = await prisma.region.findUnique({
      where: { code: region.code }
    });

    if (!existingRegion) {
      await prisma.region.create({
        data: {
          name: region.name,
          code: region.code,
          country: region.country,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });
      console.log(`Created region: ${region.name} (${region.code})`);
    } else {
      console.log(`Region already exists: ${region.name} (${region.code})`);
    }
  }
}

// Main function to seed document types and titles
async function seedDocumentTypes() {
  try {
    console.log('Starting document types and titles seeding...');
    
    // First, create regions
    await seedRegions();
    
    // Get the document types JSON configuration
    const configPath = path.join(__dirname, '..', 'config', 'documentTypes.json');
    const configData = readJsonFile(configPath);
    
    if (!configData || !configData.documentTypes) {
      console.error('Invalid document types configuration');
      return;
    }
    
    // Loop through each document type
    for (const docType of configData.documentTypes) {
      console.log(`Processing document type: ${docType.name}`);
      
      // Create or update the document type
      let documentType = await prisma.documentType.findUnique({
        where: { name: docType.name }
      });
      
      if (!documentType) {
        // Only use fields that are in the Prisma schema
        documentType = await prisma.documentType.create({
          data: {
            name: docType.name,
            formId: null,
            hideHeader: false,
            showFormButtons: true,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        });
        console.log(`Created document type: ${documentType.name}`);
      } else {
        console.log(`Document type already exists: ${documentType.name}`);
      }
      
      // Process child types
      if (docType.childTypes && Array.isArray(docType.childTypes)) {
        for (const childType of docType.childTypes) {
          console.log(`Processing document title: ${childType.name}`);
          
          // Check if the document title already exists
          const existingTitle = await prisma.documentTitle.findFirst({
            where: {
              title: childType.name,
              document_type_id: documentType.id
            }
          });
          
          if (existingTitle) {
            console.log(`Document title already exists: ${childType.name}`);
            continue;
          }
          
          // Determine if this child type requires number, valid date and expire date
          const requiresNumber = childType.fields.some(f => 
            f.id === 'licenseNumber' || f.id === 'certificationNumber');
            
          const requiresValidDate = childType.fields.some(f => 
            f.id === 'issueDate');
            
          const requiresExpireDate = childType.fields.some(f => 
            f.id === 'expirationDate');
          
          // Create the document title
          const documentTitle = await prisma.documentTitle.create({
            data: {
              title: childType.name,
              document_type_id: documentType.id,
              shareable: true,
              is_display: true,
              require_number: requiresNumber,
              require_valid_date: requiresValidDate,
              require_expire_date: requiresExpireDate,
              require_doc_data: false,
              require_attachment_front: true,
              require_attachment_back: childType.id === 'drivers_license' || childType.id === 'fingerprint_clearance',
              description: `${docType.name} - ${childType.name}`,
              form_description: `Upload your ${childType.name} document`,
              form_title: childType.name,
              created_at: new Date(),
              updated_at: new Date()
            }
          });
          
          console.log(`Created document title: ${documentTitle.title}`);
          
          // Create form fields for this document title
          for (const field of childType.fields) {
            if (field.type !== 'file') {  // Skip file fields as they're handled differently
              try {
                // Handle options separately, as they need to be converted to JSON properly
                const fieldOptions = field.options ? field.options : null;
                
                await prisma.formField.create({
                  data: {
                    document_title_id: documentTitle.id,
                    field_name: field.name,
                    label: field.label,
                    type: field.type,
                    placeholder: field.placeholder || null,
                    required: field.required || false,
                    order: field.order || 0,
                    full_width: field.fullWidth || true,
                    hidden: field.hidden || false,
                    options: fieldOptions,
                    created_at: new Date(),
                    updated_at: new Date()
                  }
                });
                console.log(`Created form field: ${field.name} for ${documentTitle.title}`);
              } catch (fieldError) {
                console.error(`Error creating form field ${field.name}:`, fieldError.message);
              }
            }
          }
          
          // Create document configurations for each location
          if (childType.locations && Array.isArray(childType.locations)) {
            for (const locationId of childType.locations) {
              try {
                await prisma.documentConfiguration.create({
                  data: {
                    region_id: locationId,
                    document_type_id: documentType.id,
                    document_title_id: documentTitle.id,
                    active: true,
                    priority: 0,
                    type_of_condition: 0,
                    created_at: new Date(),
                    updated_at: new Date()
                  }
                });
                console.log(`Created document configuration for title ${documentTitle.title} in region ${locationId}`);
              } catch (configError) {
                console.error(`Error creating document configuration for region ${locationId}:`, configError.message);
              }
            }
          }
        }
      }
    }
    
    console.log('Document types and titles seeding completed successfully');
  } catch (error) {
    console.error('Error seeding document types and titles:', error);
    console.error('Error details:', error.stack);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seeding function
seedDocumentTypes()
  .then(() => {
    console.log('Seed script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Seed script failed:', error);
    process.exit(1);
  }); 