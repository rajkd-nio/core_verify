/**
 * Seed script for PostgreSQL database with simplified transaction handling
 * Run with: node scripts/seed-postgres.js
 */
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

// Initialize Prisma client
const prisma = new PrismaClient();

/**
 * Read JSON files from formdata directory
 */
async function readJsonData() {
  try {
    const documentTypes = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../formdata/documentTypes.json'), 'utf8')
    );
    
    const documentTitles = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../formdata/documentTitles.json'), 'utf8')
    );
    
    return { documentTypes, documentTitles };
  } catch (error) {
    console.error('Error reading JSON data:', error);
    throw error;
  }
}

/**
 * Clear existing data
 */
async function clearData() {
  try {
    console.log('Clearing existing data...');
    
    // Clear tables in correct order (to avoid foreign key constraints)
    await prisma.documentConfiguration.deleteMany({});
    console.log('- Cleared document configurations');
    
    await prisma.documentField.deleteMany({});
    console.log('- Cleared document fields');
    
    await prisma.documentTitle.deleteMany({});
    console.log('- Cleared document titles');
    
    await prisma.documentType.deleteMany({});
    console.log('- Cleared document types');
    
    await prisma.region.deleteMany({});
    console.log('- Cleared regions');
    
    console.log('All data cleared successfully');
    
  } catch (error) {
    console.error('Error clearing data:', error);
    throw error;
  }
}

/**
 * Insert document types
 */
async function insertDocumentTypes(documentTypes) {
  try {
    console.log(`Inserting ${documentTypes.length} document types...`);
    
    const docTypeMap = {};
    
    for (const docType of documentTypes) {
      const newDocType = await prisma.documentType.create({
        data: {
          id: docType.id, // Use the existing ID as-is (should be an integer)
          name: docType.name,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });
      docTypeMap[docType.id] = newDocType.id;
    }
    
    console.log('Document types inserted successfully');
    return docTypeMap;
  } catch (error) {
    console.error('Error inserting document types:', error);
    throw error;
  }
}

/**
 * Insert document titles
 */
async function insertDocumentTitles(documentTitles, docTypeMap) {
  try {
    console.log(`Inserting ${documentTitles.length} document titles...`);
    
    const docTitleMap = {};
    
    for (const docTitle of documentTitles) {
      const newDocTitle = await prisma.documentTitle.create({
        data: {
          id: docTitle.id, // Use the existing ID as-is (should be an integer)
          title: docTitle.title,
          createdAt: new Date(),
          updatedAt: new Date(),
          shareable: Boolean(docTitle.shareable),
          documentTypeId: docTitle.document_type_id, // Use the existing ID as-is
          isDisplay: Boolean(docTitle.is_display),
          requireNumber: Boolean(docTitle.require_number),
          requireValidDate: Boolean(docTitle.require_valid_date),
          requireExpireDate: Boolean(docTitle.require_expire_date),
          requireDocData: Boolean(docTitle.require_doc_data),
          docDataOptions: docTitle.doc_data_options || null,
          docDataName: docTitle.doc_data_name || null,
          requireAttachmentFront: Boolean(docTitle.require_attachment_front),
          requireAttachmentBack: Boolean(docTitle.require_attachment_back)
        }
      });
      docTitleMap[docTitle.id] = newDocTitle.id;
    }
    
    console.log('Document titles inserted successfully');
    return docTitleMap;
  } catch (error) {
    console.error('Error inserting document titles:', error);
    throw error;
  }
}

/**
 * Insert default document fields
 */
async function insertDefaultFields(docTypeMap, docTitleMap) {
  try {
    console.log('Creating default document fields...');
    
    // Default fields by document type
    const defaultFields = [
      // License type (id: 1)
      {
        fieldId: 'licenseNumber',
        name: 'licenseNumber',
        label: 'License Number',
        type: 'text',
        placeholder: 'Enter license number',
        required: true,
        order: 1,
        fullWidth: true,
        hidden: false,
        documentTypeId: 1
      },
      {
        fieldId: 'issueDate',
        name: 'issueDate',
        label: 'Issue Date',
        type: 'date',
        placeholder: 'Select issue date',
        required: true,
        order: 2,
        fullWidth: true,
        hidden: false,
        documentTypeId: 1
      },
      {
        fieldId: 'expirationDate',
        name: 'expirationDate',
        label: 'Expiration Date',
        type: 'date',
        placeholder: 'Select expiration date',
        required: true,
        order: 3,
        fullWidth: true,
        hidden: false,
        documentTypeId: 1
      },
      
      // Education type (id: 2)
      {
        fieldId: 'institution',
        name: 'institution',
        label: 'Institution',
        type: 'text',
        placeholder: 'Enter institution name',
        required: true,
        order: 1,
        fullWidth: true,
        hidden: false,
        documentTypeId: 2
      },
      {
        fieldId: 'completionDate',
        name: 'completionDate',
        label: 'Completion Date',
        type: 'date',
        placeholder: 'Select completion date',
        required: true,
        order: 2,
        fullWidth: true,
        hidden: false,
        documentTypeId: 2
      },
      
      // Certification type (id: 3)
      {
        fieldId: 'certNumber',
        name: 'certNumber',
        label: 'Certification Number',
        type: 'text',
        placeholder: 'Enter certification number',
        required: true,
        order: 1,
        fullWidth: true,
        hidden: false,
        documentTypeId: 3
      }
    ];
    
    for (const field of defaultFields) {
      await prisma.documentField.create({
        data: {
          fieldId: field.fieldId,
          name: field.name,
          label: field.label,
          type: field.type,
          placeholder: field.placeholder,
          required: field.required,
          order: field.order,
          fullWidth: field.fullWidth,
          hidden: field.hidden,
          defaultValue: field.defaultValue,
          options: field.options,
          documentTypeId: field.documentTypeId, // Already an integer
          documentTitleId: field.documentTitleId,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });
    }
    
    console.log('Default document fields created successfully');
  } catch (error) {
    console.error('Error creating default fields:', error);
    throw error;
  }
}

/**
 * Insert regions and configurations
 */
async function insertRegionsAndConfigs(docTypeMap, docTitleMap) {
  try {
    console.log('Creating regions and document configurations...');
    
    // Create some basic regions
    const regions = [
      { id: 1, name: 'East Coast', code: 'EC', country: 'US' },
      { id: 2, name: 'West Coast', code: 'WC', country: 'US' }
    ];
    
    const regionMap = {};
    
    for (const region of regions) {
      const newRegion = await prisma.region.create({
        data: {
          id: region.id,
          name: region.name,
          code: region.code,
          country: region.country,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });
      regionMap[region.name] = newRegion.id;
    }
    
    // Create document configurations
    const documentConfigs = [
      { regionId: 1, documentTypeId: 1, documentTitleId: 1, typeOfCondition: 0 },
      { regionId: 2, documentTypeId: 2, documentTitleId: 4, typeOfCondition: 0 }
    ];
    
    for (const [index, config] of documentConfigs.entries()) {
      await prisma.documentConfiguration.create({
        data: {
          regionId: config.regionId,
          documentTypeId: config.documentTypeId,
          documentTitleId: config.documentTitleId,
          typeOfCondition: config.typeOfCondition,
          active: true,
          priority: index,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });
    }
    
    console.log('Regions and configurations created successfully');
  } catch (error) {
    console.error('Error creating regions and configurations:', error);
    throw error;
  }
}

/**
 * Main function to seed the database
 */
async function seedDatabase() {
  try {
    console.log('Starting PostgreSQL database seeding...');
    
    const { documentTypes, documentTitles } = await readJsonData();
    
    // Perform operations sequentially to avoid transaction timeouts
    await clearData();
    const docTypeMap = await insertDocumentTypes(documentTypes);
    const docTitleMap = await insertDocumentTitles(documentTitles, docTypeMap);
    await insertDefaultFields(docTypeMap, docTitleMap);
    await insertRegionsAndConfigs(docTypeMap, docTitleMap);
    
    console.log('PostgreSQL database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seed operation
seedDatabase(); 