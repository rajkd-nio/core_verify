/**
 * Initialize PostgreSQL database with seed data directly using Prisma
 * Run with: node scripts/init-postgres-db.js
 */
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env.postgres
dotenv.config({ path: '.env.postgres' });

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
 * Initialize the database with seed data
 */
async function initializeDatabase() {
  try {
    console.log('Initializing PostgreSQL database with seed data...');
    
    const { documentTypes, documentTitles } = await readJsonData();
    
    // Begin transaction for data consistency
    await prisma.$transaction(async (tx) => {
      // Clear existing data if any
      await tx.documentConfiguration.deleteMany({});
      await tx.documentField.deleteMany({});
      await tx.documentTitle.deleteMany({});
      await tx.documentType.deleteMany({});
      await tx.region.deleteMany({});
      
      console.log('Cleared existing data from database');
      
      // Insert document types
      console.log(`Inserting ${documentTypes.length} document types...`);
      for (const docType of documentTypes) {
        await tx.documentType.create({
          data: {
            id: String(docType.id),
            name: docType.name,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        });
      }
      
      // Insert document titles
      console.log(`Inserting ${documentTitles.length} document titles...`);
      for (const docTitle of documentTitles) {
        await tx.documentTitle.create({
          data: {
            id: String(docTitle.id),
            title: docTitle.title,
            createdAt: new Date(),
            updatedAt: new Date(),
            shareable: Boolean(docTitle.shareable),
            documentTypeId: String(docTitle.document_type_id),
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
      }
      
      // Insert default document fields for each document type
      console.log('Creating default document fields...');
      
      // Default fields by document type
      const defaultFields = [
        // License type (id: 1)
        {
          id: '1_field_1',
          fieldId: 'licenseNumber',
          name: 'licenseNumber',
          label: 'License Number',
          type: 'text',
          placeholder: 'Enter license number',
          required: true,
          order: 1,
          fullWidth: true,
          hidden: false,
          documentTypeId: '1'
        },
        {
          id: '1_field_2',
          fieldId: 'issueDate',
          name: 'issueDate',
          label: 'Issue Date',
          type: 'date',
          placeholder: 'Select issue date',
          required: true,
          order: 2,
          fullWidth: true,
          hidden: false,
          documentTypeId: '1'
        },
        {
          id: '1_field_3',
          fieldId: 'expirationDate',
          name: 'expirationDate',
          label: 'Expiration Date',
          type: 'date',
          placeholder: 'Select expiration date',
          required: true,
          order: 3,
          fullWidth: true,
          hidden: false,
          documentTypeId: '1'
        },
        
        // Education type (id: 2)
        {
          id: '2_field_1',
          fieldId: 'institution',
          name: 'institution',
          label: 'Institution',
          type: 'text',
          placeholder: 'Enter institution name',
          required: true,
          order: 1,
          fullWidth: true,
          hidden: false,
          documentTypeId: '2'
        },
        {
          id: '2_field_2',
          fieldId: 'completionDate',
          name: 'completionDate',
          label: 'Completion Date',
          type: 'date',
          placeholder: 'Select completion date',
          required: true,
          order: 2,
          fullWidth: true,
          hidden: false,
          documentTypeId: '2'
        },
        
        // Certification type (id: 3)
        {
          id: '3_field_1',
          fieldId: 'certNumber',
          name: 'certNumber',
          label: 'Certification Number',
          type: 'text',
          placeholder: 'Enter certification number',
          required: true,
          order: 1,
          fullWidth: true,
          hidden: false,
          documentTypeId: '3'
        },
        {
          id: '3_field_2',
          fieldId: 'issueDate',
          name: 'issueDate',
          label: 'Issue Date',
          type: 'date',
          placeholder: 'Select issue date',
          required: true,
          order: 2,
          fullWidth: true,
          hidden: false,
          documentTypeId: '3'
        },
        {
          id: '3_field_3',
          fieldId: 'expirationDate',
          name: 'expirationDate',
          label: 'Expiration Date',
          type: 'date',
          placeholder: 'Select expiration date',
          required: true,
          order: 3,
          fullWidth: true,
          hidden: false,
          documentTypeId: '3'
        }
      ];
      
      for (const field of defaultFields) {
        await tx.documentField.create({
          data: {
            id: field.id,
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
            documentTypeId: field.documentTypeId,
            documentTitleId: field.documentTitleId,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        });
      }
      
      // Create some basic regions
      console.log('Creating default regions...');
      const regions = [
        { id: 'us-east', name: 'East Coast', code: 'EC', country: 'US' },
        { id: 'us-west', name: 'West Coast', code: 'WC', country: 'US' },
        { id: 'us-central', name: 'Central', code: 'CN', country: 'US' },
        { id: 'us-south', name: 'South', code: 'SO', country: 'US' }
      ];
      
      for (const region of regions) {
        await tx.region.create({
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
      }
      
      // Create some example document configurations
      console.log('Creating default document configurations...');
      const documentConfigs = [
        { regionId: 'us-east', documentTypeId: '1', documentTitleId: '1', typeOfCondition: 0 },
        { regionId: 'us-east', documentTypeId: '2', documentTitleId: '4', typeOfCondition: 0 },
        { regionId: 'us-west', documentTypeId: '1', documentTitleId: '2', typeOfCondition: 0 },
        { regionId: 'us-central', documentTypeId: '3', documentTitleId: '5', typeOfCondition: 0 }
      ];
      
      for (const [index, config] of documentConfigs.entries()) {
        await tx.documentConfiguration.create({
          data: {
            id: `config_${index + 1}`,
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
    });
    
    console.log('PostgreSQL database initialized successfully!');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the initialization
initializeDatabase()
  .catch(error => {
    console.error('Database initialization failed:', error);
    process.exit(1);
  }); 