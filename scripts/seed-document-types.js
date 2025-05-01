/**
 * Script to seed document types and titles into the database
 * This will read from the formdata JSON files and create corresponding database records
 */

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

// Document type mapping from original file names to new document types
const DOCUMENT_TYPE_MAPPING = {
  'certificate': 'Mandatory',
  'document': 'Documents',
  'medical': 'Vaccination Record',
  'other': 'Other'
};

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

// Main function to seed database
async function seedDocumentTypes() {
  try {
    console.log('Starting document types and titles seeding...');
    
    // Get the formdata directory
    const formdataDir = path.join(__dirname, '..', 'formdata');
    
    // Create document types
    for (const [fileKey, typeName] of Object.entries(DOCUMENT_TYPE_MAPPING)) {
      console.log(`Processing document type: ${typeName}`);
      
      // First check if document type exists
      let documentType = await prisma.documentType.findUnique({
        where: { name: typeName }
      });
      
      if (documentType) {
        console.log(`Document type already exists: ${documentType.id} - ${documentType.name}`);
      } else {
        // Create document type
        documentType = await prisma.documentType.create({
          data: {
            name: typeName,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        });
        console.log(`Document type created: ${documentType.id} - ${documentType.name}`);
      }
      
      // Read the corresponding JSON file
      const filePath = path.join(formdataDir, `${fileKey}.json`);
      const jsonData = readJsonFile(filePath);
      
      if (!jsonData) {
        console.error(`Skipping ${fileKey} due to error reading file`);
        continue;
      }
      
      // Create document title
      const titleData = {
        title: jsonData.title,
        documentTypeId: documentType.id,
        shareable: jsonData.shareable || false,
        isDisplay: jsonData.is_display !== false,
        requireNumber: jsonData.require_number || false,
        requireValidDate: jsonData.require_valid_date || false,
        requireExpireDate: jsonData.require_expire_date || false,
        requireAttachmentFront: true, // Default to true
        requireAttachmentBack: jsonData.require_attachment_back || false,
        requireDocData: jsonData.require_doc_data || false,
        docDataName: jsonData.doc_data_name || null,
        docDataOptions: jsonData.doc_data_options ? JSON.stringify(jsonData.doc_data_options) : null,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      // First check if a document title already exists for this document type
      const existingTitle = await prisma.documentTitle.findFirst({
        where: {
          documentTypeId: documentType.id,
          title: jsonData.title
        }
      });
      
      if (existingTitle) {
        // Update existing title
        const documentTitle = await prisma.documentTitle.update({
          where: { id: existingTitle.id },
          data: titleData
        });
        console.log(`Document title updated: ${documentTitle.id} - ${documentTitle.title}`);
      } else {
        // Create new title
        const documentTitle = await prisma.documentTitle.create({
          data: titleData
        });
        console.log(`Document title created: ${documentTitle.id} - ${documentTitle.title}`);
      }
    }
    
    console.log('Document types and titles seeding completed successfully');
  } catch (error) {
    console.error('Error seeding document types and titles:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seeding function
seedDocumentTypes()
  .then(() => {
    console.log('Seed script completed');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Seed script failed:', error);
    process.exit(1);
  }); 