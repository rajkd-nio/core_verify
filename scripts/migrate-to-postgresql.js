/**
 * Migration script to transfer data from SQLite to PostgreSQL
 * Run with: node scripts/migrate-to-postgresql.js
 */
const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');
const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: '.env.postgres' });

// Initialize Prisma client with PostgreSQL connection
const prisma = new PrismaClient();

// Path to SQLite database
const SQLITE_DB_PATH = path.join(__dirname, '../prisma/dev.db');

// Check if SQLite database exists
if (!fs.existsSync(SQLITE_DB_PATH)) {
  console.error(`SQLite database not found at: ${SQLITE_DB_PATH}`);
  process.exit(1);
}

// Connect to SQLite database
const sqliteDb = new Database(SQLITE_DB_PATH);
console.log(`Connected to SQLite database at: ${SQLITE_DB_PATH}`);

/**
 * Read JSON files from formdata directory (as backup source of data)
 */
async function readJsonFiles() {
  try {
    const formdataDir = path.join(__dirname, '../formdata');
    
    // Get all JSON files
    const files = await fs.promises.readdir(formdataDir);
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    
    const formData = {};
    
    // Read each JSON file
    for (const file of jsonFiles) {
      const fileContent = await fs.promises.readFile(path.join(formdataDir, file), 'utf8');
      const data = JSON.parse(fileContent);
      const documentType = file.replace('.json', '');
      formData[documentType] = data;
    }
    
    return formData;
  } catch (error) {
    console.error('Error reading JSON files:', error);
    throw error;
  }
}

/**
 * Check if a table exists in SQLite
 */
function tableExists(tableName) {
  const result = sqliteDb.prepare(`
    SELECT name FROM sqlite_master 
    WHERE type='table' AND name=?
  `).all(tableName);
  return result.length > 0;
}

/**
 * Migrate data from SQLite to PostgreSQL
 */
async function migrateToPostgres() {
  try {
    console.log('Starting migration from SQLite to PostgreSQL...');
    
    // Verify SQLite tables existence
    const docTypesExists = tableExists('document_types');
    const docTitlesExists = tableExists('document_titles');
    const docFieldsExists = tableExists('document_fields');
    const regionsExists = tableExists('regions');
    const docConfigsExists = tableExists('document_configurations');
    
    if (!docTypesExists || !docTitlesExists) {
      console.error('Required SQLite tables not found. Will attempt to use JSON files instead.');
    }
    
    // Start PostgreSQL transaction
    await prisma.$transaction(async (tx) => {
      // Clear existing PostgreSQL tables to avoid duplicates
      if (docConfigsExists) {
        await tx.documentConfiguration.deleteMany({});
        console.log('Cleared document_configurations table in PostgreSQL');
      }
      
      if (docFieldsExists) {
        await tx.documentField.deleteMany({});
        console.log('Cleared document_fields table in PostgreSQL');
      }
      
      if (docTitlesExists) {
        await tx.documentTitle.deleteMany({});
        console.log('Cleared document_titles table in PostgreSQL');
      }
      
      if (docTypesExists) {
        await tx.documentType.deleteMany({});
        console.log('Cleared document_types table in PostgreSQL');
      }
      
      if (regionsExists) {
        await tx.region.deleteMany({});
        console.log('Cleared regions table in PostgreSQL');
      }
      
      // Migrate document types
      if (docTypesExists) {
        const documentTypes = sqliteDb.prepare('SELECT * FROM document_types').all();
        console.log(`Found ${documentTypes.length} document types in SQLite`);
        
        for (const docType of documentTypes) {
          await tx.documentType.create({
            data: {
              id: docType.id,
              name: docType.name,
              createdAt: new Date(docType.created_at || docType.createdAt),
              updatedAt: new Date(docType.updated_at || docType.updatedAt)
            }
          });
        }
        console.log(`Migrated ${documentTypes.length} document types to PostgreSQL`);
      } else {
        // Use JSON files as backup
        const formData = await readJsonFiles();
        const documentTypesJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../formdata/documentTypes.json'), 'utf8'));
        
        for (const docType of documentTypesJson) {
          await tx.documentType.create({
            data: {
              id: String(docType.id),
              name: docType.name,
              createdAt: new Date(),
              updatedAt: new Date()
            }
          });
        }
        console.log(`Migrated ${documentTypesJson.length} document types from JSON to PostgreSQL`);
      }
      
      // Migrate document titles
      if (docTitlesExists) {
        const documentTitles = sqliteDb.prepare('SELECT * FROM document_titles').all();
        console.log(`Found ${documentTitles.length} document titles in SQLite`);
        
        for (const docTitle of documentTitles) {
          // Handle JSON fields for PostgreSQL
          let docDataOptions = null;
          if (docTitle.doc_data_options || docTitle.docDataOptions) {
            try {
              docDataOptions = JSON.parse(docTitle.doc_data_options || docTitle.docDataOptions);
            } catch (e) {
              console.warn(`Invalid JSON for doc_data_options in title ${docTitle.id}:`, e.message);
            }
          }
          
          await tx.documentTitle.create({
            data: {
              id: docTitle.id,
              title: docTitle.title,
              createdAt: new Date(docTitle.created_at || docTitle.createdAt),
              updatedAt: new Date(docTitle.updated_at || docTitle.updatedAt),
              shareable: Boolean(docTitle.shareable),
              documentTypeId: String(docTitle.document_type_id || docTitle.documentTypeId),
              isDisplay: Boolean(docTitle.is_display || docTitle.isDisplay),
              requireNumber: Boolean(docTitle.require_number || docTitle.requireNumber),
              requireValidDate: Boolean(docTitle.require_valid_date || docTitle.requireValidDate),
              requireExpireDate: Boolean(docTitle.require_expire_date || docTitle.requireExpireDate),
              requireDocData: Boolean(docTitle.require_doc_data || docTitle.requireDocData),
              docDataOptions: docDataOptions,
              docDataName: docTitle.doc_data_name || docTitle.docDataName,
              requireAttachmentFront: Boolean(docTitle.require_attachment_front || docTitle.requireAttachmentFront),
              requireAttachmentBack: Boolean(docTitle.require_attachment_back || docTitle.requireAttachmentBack)
            }
          });
        }
        console.log(`Migrated ${documentTitles.length} document titles to PostgreSQL`);
      } else {
        // Use JSON files as backup
        const documentTitlesJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../formdata/documentTitles.json'), 'utf8'));
        
        for (const docTitle of documentTitlesJson) {
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
        console.log(`Migrated ${documentTitlesJson.length} document titles from JSON to PostgreSQL`);
      }
      
      // Migrate document fields if they exist
      if (docFieldsExists) {
        const documentFields = sqliteDb.prepare('SELECT * FROM document_fields').all();
        console.log(`Found ${documentFields.length} document fields in SQLite`);
        
        for (const field of documentFields) {
          // Handle JSON fields for PostgreSQL
          let options = null;
          let validation = null;
          let conditionalDisplay = null;
          
          try {
            if (field.options) options = JSON.parse(field.options);
            if (field.validation) validation = JSON.parse(field.validation);
            if (field.conditional_display || field.conditionalDisplay) {
              conditionalDisplay = JSON.parse(field.conditional_display || field.conditionalDisplay);
            }
          } catch (e) {
            console.warn(`Invalid JSON in field ${field.id}:`, e.message);
          }
          
          await tx.documentField.create({
            data: {
              id: field.id,
              fieldId: field.field_id || field.fieldId,
              name: field.name,
              label: field.label,
              type: field.type,
              placeholder: field.placeholder,
              required: Boolean(field.required),
              order: field.order,
              fullWidth: Boolean(field.full_width || field.fullWidth),
              hidden: Boolean(field.hidden),
              defaultValue: field.default_value || field.defaultValue,
              options: options,
              validation: validation,
              conditionalDisplay: conditionalDisplay,
              helpText: field.help_text || field.helpText,
              documentTypeId: field.document_type_id || field.documentTypeId,
              documentTitleId: field.document_title_id || field.documentTitleId,
              createdAt: new Date(field.created_at || field.createdAt),
              updatedAt: new Date(field.updated_at || field.updatedAt)
            }
          });
        }
        console.log(`Migrated ${documentFields.length} document fields to PostgreSQL`);
      }
      
      // Migrate regions if they exist
      if (regionsExists) {
        const regions = sqliteDb.prepare('SELECT * FROM regions').all();
        console.log(`Found ${regions.length} regions in SQLite`);
        
        for (const region of regions) {
          await tx.region.create({
            data: {
              id: region.id,
              name: region.name,
              code: region.code,
              country: region.country,
              active: Boolean(region.active),
              createdAt: new Date(region.created_at || region.createdAt),
              updatedAt: new Date(region.updated_at || region.updatedAt)
            }
          });
        }
        console.log(`Migrated ${regions.length} regions to PostgreSQL`);
      }
      
      // Migrate document configurations if they exist
      if (docConfigsExists) {
        const docConfigs = sqliteDb.prepare('SELECT * FROM document_configurations').all();
        console.log(`Found ${docConfigs.length} document configurations in SQLite`);
        
        for (const config of docConfigs) {
          await tx.documentConfiguration.create({
            data: {
              id: config.id,
              regionId: config.region_id || config.regionId,
              documentTypeId: config.document_type_id || config.documentTypeId,
              documentTitleId: config.document_title_id || config.documentTitleId,
              typeOfCondition: config.type_of_condition || config.typeOfCondition,
              active: Boolean(config.active),
              priority: config.priority,
              createdAt: new Date(config.created_at || config.createdAt),
              updatedAt: new Date(config.updated_at || config.updatedAt)
            }
          });
        }
        console.log(`Migrated ${docConfigs.length} document configurations to PostgreSQL`);
      }
    });
    
    console.log('Migration from SQLite to PostgreSQL completed successfully!');
  } catch (error) {
    console.error('Error during migration:', error);
    throw error;
  } finally {
    // Close connections
    await prisma.$disconnect();
    sqliteDb.close();
  }
}

// Run the migration
migrateToPostgres()
  .catch(error => {
    console.error('Migration failed:', error);
    process.exit(1);
  }); 