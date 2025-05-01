/**
 * Enhanced database setup script for the optimized schema
 */
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Path to database
const dbPath = path.resolve(process.cwd(), 'prisma/dev.db');
console.log(`Creating database at: ${dbPath}`);

// Ensure prisma directory exists
if (!fs.existsSync(path.dirname(dbPath))) {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
}

// Remove existing database if it exists
if (fs.existsSync(dbPath)) {
  fs.unlinkSync(dbPath);
  console.log('Removed existing database');
}

// Create and connect to database
const db = new Database(dbPath);
console.log('Created new database');

// Generate UUID for each entity
const generateId = () => uuidv4();

// Helper for timestamp
const now = () => new Date().toISOString();

try {
  // Begin transaction
  db.exec('BEGIN TRANSACTION');

  // Create tables
  console.log('Creating tables...');

  // Create document_types table
  db.exec(`
    CREATE TABLE document_types (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL UNIQUE,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create document_titles table
  db.exec(`
    CREATE TABLE document_titles (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      shareable BOOLEAN NOT NULL DEFAULT 0,
      document_type_id TEXT NOT NULL,
      is_display BOOLEAN NOT NULL DEFAULT 1,
      require_number BOOLEAN NOT NULL DEFAULT 0,
      require_valid_date BOOLEAN NOT NULL DEFAULT 0,
      require_expire_date BOOLEAN NOT NULL DEFAULT 0,
      require_doc_data BOOLEAN NOT NULL DEFAULT 0,
      doc_data_options TEXT,
      doc_data_name TEXT,
      require_attachment_front BOOLEAN NOT NULL DEFAULT 0,
      require_attachment_back BOOLEAN NOT NULL DEFAULT 0,
      FOREIGN KEY (document_type_id) REFERENCES document_types(id) ON DELETE CASCADE
    )
  `);

  // Create document_fields table
  db.exec(`
    CREATE TABLE document_fields (
      id TEXT PRIMARY KEY,
      field_id TEXT NOT NULL,
      name TEXT NOT NULL,
      label TEXT NOT NULL,
      type TEXT NOT NULL,
      placeholder TEXT,
      required BOOLEAN NOT NULL DEFAULT 0,
      "order" INTEGER NOT NULL,
      full_width BOOLEAN NOT NULL DEFAULT 1,
      hidden BOOLEAN NOT NULL DEFAULT 0,
      default_value TEXT,
      options TEXT,
      validation TEXT,
      conditional_display TEXT,
      help_text TEXT,
      document_type_id TEXT NOT NULL,
      document_title_id TEXT,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (document_type_id) REFERENCES document_types(id) ON DELETE CASCADE,
      FOREIGN KEY (document_title_id) REFERENCES document_titles(id) ON DELETE SET NULL
    )
  `);

  // Create regions table
  db.exec(`
    CREATE TABLE regions (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      code TEXT NOT NULL UNIQUE,
      country TEXT NOT NULL DEFAULT 'US',
      active BOOLEAN NOT NULL DEFAULT 1,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create document_configurations table
  db.exec(`
    CREATE TABLE document_configurations (
      id TEXT PRIMARY KEY,
      region_id TEXT NOT NULL,
      document_type_id TEXT NOT NULL,
      document_title_id TEXT NOT NULL,
      type_of_condition INTEGER NOT NULL DEFAULT 0,
      active BOOLEAN NOT NULL DEFAULT 1,
      priority INTEGER NOT NULL DEFAULT 0,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (region_id) REFERENCES regions(id) ON DELETE CASCADE,
      FOREIGN KEY (document_type_id) REFERENCES document_types(id) ON DELETE CASCADE,
      FOREIGN KEY (document_title_id) REFERENCES document_titles(id) ON DELETE CASCADE,
      UNIQUE(region_id, document_title_id)
    )
  `);

  // Create indexes
  console.log('Creating indexes...');
  
  db.exec(`CREATE INDEX "document_titles_document_type_id" ON document_titles(document_type_id)`);
  db.exec(`CREATE INDEX "document_fields_document_type_id" ON document_fields(document_type_id)`);
  db.exec(`CREATE INDEX "document_fields_document_title_id" ON document_fields(document_title_id)`);
  db.exec(`CREATE INDEX "document_configurations_document_type_id" ON document_configurations(document_type_id)`);
  db.exec(`CREATE INDEX "document_configurations_document_title_id" ON document_configurations(document_title_id)`);
  db.exec(`CREATE INDEX "document_configurations_region_id" ON document_configurations(region_id)`);

  console.log('Tables created successfully');

  // Insert basic data
  console.log('Inserting initial data...');

  // Generate IDs
  const docTypeIds = {
    certificate: generateId(),
    medical: generateId(),
    document: generateId(),
    other: generateId()
  };

  const docTitleIds = {
    certificate: generateId(),
    medical: generateId(),
    document: generateId(),
    other: generateId()
  };

  const regionIds = {
    california: generateId(),
    newYork: generateId(),
    texas: generateId(),
    florida: generateId()
  };

  // Insert document types
  const insertDocType = db.prepare(`
    INSERT INTO document_types (id, name, updated_at)
    VALUES (?, ?, datetime('now'))
  `);
  
  insertDocType.run(docTypeIds.certificate, 'Certificate');
  insertDocType.run(docTypeIds.medical, 'Medical');
  insertDocType.run(docTypeIds.document, 'Document');
  insertDocType.run(docTypeIds.other, 'Other');

  // Insert document titles
  const insertDocTitle = db.prepare(`
    INSERT INTO document_titles (
      id, title, updated_at, shareable, document_type_id,
      is_display, require_number, require_valid_date, require_expire_date,
      require_doc_data, doc_data_name, require_attachment_front, require_attachment_back
    )
    VALUES (?, ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  insertDocTitle.run(
    docTitleIds.certificate,   // id
    'Certificate',             // title
    1,                         // shareable
    docTypeIds.certificate,    // document_type_id
    1,                         // is_display
    1,                         // require_number
    1,                         // require_valid_date
    1,                         // require_expire_date
    0,                         // require_doc_data
    null,                      // doc_data_name
    1,                         // require_attachment_front
    0                          // require_attachment_back
  );

  insertDocTitle.run(
    docTitleIds.medical,       // id
    'Medical Record',          // title
    1,                         // shareable
    docTypeIds.medical,        // document_type_id
    1,                         // is_display
    1,                         // require_number
    1,                         // require_valid_date
    1,                         // require_expire_date
    1,                         // require_doc_data
    'Medical Record Type',     // doc_data_name
    1,                         // require_attachment_front
    1                          // require_attachment_back
  );

  insertDocTitle.run(
    docTitleIds.document,      // id
    'General Document',        // title
    1,                         // shareable
    docTypeIds.document,       // document_type_id
    1,                         // is_display
    0,                         // require_number
    1,                         // require_valid_date
    0,                         // require_expire_date
    0,                         // require_doc_data
    null,                      // doc_data_name
    1,                         // require_attachment_front
    0                          // require_attachment_back
  );

  insertDocTitle.run(
    docTitleIds.other,         // id
    'Other Document',          // title
    1,                         // shareable
    docTypeIds.other,          // document_type_id
    1,                         // is_display
    0,                         // require_number
    0,                         // require_valid_date
    0,                         // require_expire_date
    1,                         // require_doc_data
    'Document Category',       // doc_data_name
    1,                         // require_attachment_front
    0                          // require_attachment_back
  );

  // Set docDataOptions for Medical and Other
  const updateDocOptions = db.prepare(`
    UPDATE document_titles
    SET doc_data_options = ?
    WHERE id = ?
  `);

  updateDocOptions.run(JSON.stringify({
    options: [
      { value: 'vaccination', label: 'Vaccination' },
      { value: 'test_result', label: 'Test Result' },
      { value: 'tb_test', label: 'TB Test' },
      { value: 'doctors_note', label: "Doctor's Note" },
      { value: 'prescription', label: 'Prescription' }
    ]
  }), docTitleIds.medical);

  updateDocOptions.run(JSON.stringify({
    options: [
      { value: 'personal', label: 'Personal Document' },
      { value: 'legal', label: 'Legal Document' },
      { value: 'financial', label: 'Financial Document' },
      { value: 'educational', label: 'Educational Document' },
      { value: 'other', label: 'Other' }
    ]
  }), docTitleIds.other);

  // Insert regions
  const insertRegion = db.prepare(`
    INSERT INTO regions (id, name, code, country, active, updated_at)
    VALUES (?, ?, ?, ?, ?, datetime('now'))
  `);

  insertRegion.run(regionIds.california, 'California', 'CA', 'US', 1);
  insertRegion.run(regionIds.newYork, 'New York', 'NY', 'US', 1);
  insertRegion.run(regionIds.texas, 'Texas', 'TX', 'US', 1);
  insertRegion.run(regionIds.florida, 'Florida', 'FL', 'US', 1);

  // Insert document fields
  const insertDocField = db.prepare(`
    INSERT INTO document_fields (
      id, field_id, name, label, type, placeholder, 
      required, "order", full_width, hidden, document_type_id, 
      document_title_id, updated_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
  `);

  // Certificate fields
  insertDocField.run(
    generateId(),                // id
    'licenseNumber',             // field_id
    'licenseNumber',             // name
    'License Number',            // label
    'text',                      // type
    'Enter license number',      // placeholder
    1,                           // required
    1,                           // order
    1,                           // full_width
    0,                           // hidden
    docTypeIds.certificate,      // document_type_id
    docTitleIds.certificate,     // document_title_id
  );

  insertDocField.run(
    generateId(),                // id
    'issueDate',                 // field_id
    'issueDate',                 // name
    'Issue Date',                // label
    'date',                      // type
    'Select issue date',         // placeholder
    1,                           // required
    2,                           // order
    1,                           // full_width
    0,                           // hidden
    docTypeIds.certificate,      // document_type_id
    docTitleIds.certificate,     // document_title_id
  );

  insertDocField.run(
    generateId(),                // id
    'expireDate',                // field_id
    'expireDate',                // name
    'Expiration Date',           // label
    'date',                      // type
    'Select expiration date',    // placeholder
    1,                           // required
    3,                           // order
    1,                           // full_width
    0,                           // hidden
    docTypeIds.certificate,      // document_type_id
    docTitleIds.certificate,     // document_title_id
  );

  // Medical fields
  const medicalFieldId = generateId();
  insertDocField.run(
    medicalFieldId,              // id
    'recordType',                // field_id
    'recordType',                // name
    'Record Type',               // label
    'select',                    // type
    'Select record type',        // placeholder
    1,                           // required
    1,                           // order
    1,                           // full_width
    0,                           // hidden
    docTypeIds.medical,          // document_type_id
    docTitleIds.medical,         // document_title_id
  );

  // Set options for select field
  const updateFieldOptions = db.prepare(`
    UPDATE document_fields
    SET options = ?
    WHERE id = ?
  `);

  updateFieldOptions.run(JSON.stringify([
    { value: 'vaccination', label: 'Vaccination' },
    { value: 'test_result', label: 'Test Result' },
    { value: 'tb_test', label: 'TB Test' },
    { value: 'doctors_note', label: "Doctor's Note" },
    { value: 'prescription', label: 'Prescription' }
  ]), medicalFieldId);

  // Document fields
  insertDocField.run(
    generateId(),                // id
    'documentName',              // field_id
    'documentName',              // name
    'Document Name',             // label
    'text',                      // type
    'Enter document name',       // placeholder
    1,                           // required
    1,                           // order
    1,                           // full_width
    0,                           // hidden
    docTypeIds.document,         // document_type_id
    docTitleIds.document,        // document_title_id
  );

  // Other document fields
  const otherFieldId = generateId();
  insertDocField.run(
    otherFieldId,                // id
    'documentCategory',          // field_id
    'documentCategory',          // name
    'Document Category',         // label
    'select',                    // type
    'Select category',           // placeholder
    1,                           // required
    1,                           // order
    1,                           // full_width
    0,                           // hidden
    docTypeIds.other,            // document_type_id
    docTitleIds.other,           // document_title_id
  );

  updateFieldOptions.run(JSON.stringify([
    { value: 'personal', label: 'Personal Document' },
    { value: 'legal', label: 'Legal Document' },
    { value: 'financial', label: 'Financial Document' },
    { value: 'educational', label: 'Educational Document' },
    { value: 'other', label: 'Other' }
  ]), otherFieldId);

  // Setup document configurations for each region
  const insertDocConfig = db.prepare(`
    INSERT INTO document_configurations (
      id, region_id, document_type_id, document_title_id, 
      type_of_condition, priority, active, updated_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'))
  `);

  // California requires all certificate documents
  insertDocConfig.run(
    generateId(),                // id
    regionIds.california,        // region_id
    docTypeIds.certificate,      // document_type_id  
    docTitleIds.certificate,     // document_title_id
    0,                           // type_of_condition (0: Required)
    10,                          // priority
    1                            // active
  );

  // California requires medical documents
  insertDocConfig.run(
    generateId(),                // id
    regionIds.california,        // region_id
    docTypeIds.medical,          // document_type_id  
    docTitleIds.medical,         // document_title_id
    0,                           // type_of_condition (0: Required)
    20,                          // priority
    1                            // active
  );

  // New York requires certificate documents
  insertDocConfig.run(
    generateId(),                // id
    regionIds.newYork,           // region_id
    docTypeIds.certificate,      // document_type_id  
    docTitleIds.certificate,     // document_title_id
    0,                           // type_of_condition (0: Required)
    10,                          // priority
    1                            // active
  );

  // Texas makes other documents optional
  insertDocConfig.run(
    generateId(),                // id
    regionIds.texas,             // region_id
    docTypeIds.other,            // document_type_id  
    docTitleIds.other,           // document_title_id
    1,                           // type_of_condition (1: Optional)
    30,                          // priority
    1                            // active
  );

  // Commit transaction
  db.exec('COMMIT');
  console.log('Database setup completed successfully!');

} catch (error) {
  // Rollback on error
  db.exec('ROLLBACK');
  console.error('Error setting up database:', error);
} finally {
  db.close();
} 