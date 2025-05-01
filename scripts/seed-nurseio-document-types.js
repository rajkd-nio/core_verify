/**
 * Script to seed NurseIO document types and titles to the database
 * 
 * Compatible with Node.js v12
 */

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

// Map original NurseIO document types to new document types
const DOCUMENT_TYPE_MAPPING = {
  'cpr': 'CPR',
  'license': 'License',
  'certifications': 'Certifications',
  'id': 'Identification',
  'immunization': 'Immunization',
  'insurance': 'Insurance',
  'medical': 'Medical',
  'background': 'Background Check',
  'employment': 'Employment',
  'education': 'Education'
};

// Helper function to read JSON files
function readJsonFile(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error reading JSON file ${filePath}:`, error);
    return null;
  }
}

// Main function to seed document types
async function seedNurseIODocumentTypes() {
  try {
    console.log('Starting to seed NurseIO document types and titles...');
    
    const formdataDir = path.join(__dirname, '..', 'formdata');
    
    // Process each document type
    for (const [filePrefix, typeName] of Object.entries(DOCUMENT_TYPE_MAPPING)) {
      console.log(`Processing document type: ${typeName}`);
      
      // Create or update document type
      const documentType = await prisma.documentType.upsert({
        where: { name: typeName },
        update: {},
        create: {
          name: typeName,
        },
      });
      
      console.log(`Document type "${typeName}" created with ID: ${documentType.id}`);
      
      // Read corresponding JSON file
      const jsonFilePath = path.join(formdataDir, `${filePrefix}.json`);
      const documentData = readJsonFile(jsonFilePath);
      
      if (!documentData) {
        console.log(`No data found for ${filePrefix}.json, skipping...`);
        continue;
      }
      
      // Process document titles from the JSON file
      if (Array.isArray(documentData)) {
        for (const item of documentData) {
          if (item && item.title) {
            const titleData = {
              title: item.title,
              shareable: item.shareable !== undefined ? item.shareable : true,
              document_type_id: documentType.id,
              is_display: item.is_display !== undefined ? item.is_display : true,
              require_number: item.require_number !== undefined ? item.require_number : false,
              require_valid_date: item.require_valid_date !== undefined ? item.require_valid_date : false,
              require_expire_date: item.require_expire_date !== undefined ? item.require_expire_date : false,
              require_doc_data: item.require_doc_data !== undefined ? item.require_doc_data : false,
            };
            
            // Add optional fields if present
            if (item.doc_data_options) {
              titleData.doc_data_options = item.doc_data_options;
            }
            
            if (item.doc_data_name) {
              titleData.doc_data_name = item.doc_data_name;
            }
            
            if (item.require_attachment_front !== undefined) {
              titleData.require_attachment_front = item.require_attachment_front;
            }
            
            if (item.require_attachment_back !== undefined) {
              titleData.require_attachment_back = item.require_attachment_back;
            }
            
            // Create or update document title
            await prisma.documentTitle.upsert({
              where: {
                title_document_type_id: {
                  title: item.title,
                  document_type_id: documentType.id
                }
              },
              update: titleData,
              create: titleData,
            });
            
            console.log(`  Document title "${item.title}" processed`);
          }
        }
      } else {
        console.log(`  Data in ${filePrefix}.json is not an array, skipping...`);
      }
    }
    
    console.log('NurseIO document types and titles seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding NurseIO document types:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seeding function
seedNurseIODocumentTypes()
  .catch(error => {
    console.error('Fatal error during seeding:', error);
    process.exit(1);
  }); 