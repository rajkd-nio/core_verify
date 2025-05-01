// Create a fresh database with the necessary tables
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Path to database
const dbPath = path.resolve(process.cwd(), 'prisma/dev.db');
console.log(`Creating database at: ${dbPath}`);

// Ensure the prisma directory exists
const prismaDir = path.dirname(dbPath);
if (!fs.existsSync(prismaDir)) {
  fs.mkdirSync(prismaDir, { recursive: true });
  console.log(`Created directory: ${prismaDir}`);
}

// Remove existing database if it exists
if (fs.existsSync(dbPath)) {
  fs.unlinkSync(dbPath);
  console.log('Removed existing database');
}

// Create and initialize database
const db = new Database(dbPath);
console.log('Created new database');

try {
  // Begin transaction
  db.exec('BEGIN TRANSACTION');
  
  // Create document_types table
  db.exec(`
    CREATE TABLE document_types (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL UNIQUE,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);
  console.log('Created document_types table');

  // Create document_titles table
  db.exec(`
    CREATE TABLE document_titles (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      shareable BOOLEAN NOT NULL DEFAULT 0,
      "documentTypeId" TEXT NOT NULL,
      "isDisplay" BOOLEAN NOT NULL DEFAULT 1,
      "requireNumber" BOOLEAN NOT NULL DEFAULT 0,
      "requireValidDate" BOOLEAN NOT NULL DEFAULT 0,
      "requireExpireDate" BOOLEAN NOT NULL DEFAULT 0,
      "requireDocData" BOOLEAN NOT NULL DEFAULT 0,
      "docDataOptions" TEXT,
      "docDataName" TEXT,
      "requireAttachmentFront" BOOLEAN NOT NULL DEFAULT 0,
      "requireAttachmentBack" BOOLEAN NOT NULL DEFAULT 0,
      FOREIGN KEY ("documentTypeId") REFERENCES document_types(id) ON DELETE CASCADE
    )
  `);
  console.log('Created document_titles table');

  // Create document_fields table
  db.exec(`
    CREATE TABLE document_fields (
      id TEXT PRIMARY KEY,
      "fieldId" TEXT NOT NULL,
      name TEXT NOT NULL,
      label TEXT NOT NULL,
      type TEXT NOT NULL,
      placeholder TEXT,
      required BOOLEAN NOT NULL DEFAULT 0,
      "order" INTEGER NOT NULL,
      "fullWidth" BOOLEAN NOT NULL DEFAULT 1,
      hidden BOOLEAN NOT NULL DEFAULT 0,
      "defaultValue" TEXT,
      options TEXT,
      validation TEXT,
      "conditionalDisplay" TEXT,
      "documentTypeId" TEXT NOT NULL,
      FOREIGN KEY ("documentTypeId") REFERENCES document_types(id) ON DELETE CASCADE
    )
  `);
  console.log('Created document_fields table');

  // Create indexes on document_titles and document_fields
  db.exec(`
    CREATE INDEX "document_titles_documentTypeId" 
    ON document_titles("documentTypeId")
  `);
  console.log('Created index on document_titles');
  
  db.exec(`
    CREATE INDEX "document_fields_documentTypeId" 
    ON document_fields("documentTypeId")
  `);
  console.log('Created index on document_fields');
  
  // Insert data
  
  // Insert document types
  const insertDocType = db.prepare(`
    INSERT INTO document_types (id, name, "updatedAt")
    VALUES (?, ?, datetime('now'))
  `);
  
  // Insert document titles
  const insertDocTitle = db.prepare(`
    INSERT INTO document_titles (
      id, title, "updatedAt", shareable, "documentTypeId",
      "isDisplay", "requireNumber", "requireValidDate", "requireExpireDate",
      "requireDocData", "docDataOptions", "docDataName",
      "requireAttachmentFront", "requireAttachmentBack"
    )
    VALUES (?, ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  // Insert document fields
  const insertDocField = db.prepare(`
    INSERT INTO document_fields (
      id, "fieldId", name, label, type, placeholder, required, "order", 
      "fullWidth", hidden, "defaultValue", options, validation, 
      "conditionalDisplay", "documentTypeId"
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  
  // 1. Certificate
  const certificateId = '1';
  insertDocType.run(
    certificateId,
    'Certificate'
  );
  
  insertDocTitle.run(
    '1',                   // id
    'Certificate',         // title
    'now',                 // updatedAt
    1,                     // shareable
    certificateId,         // documentTypeId
    1,                     // isDisplay
    1,                     // requireNumber
    1,                     // requireValidDate
    1,                     // requireExpireDate
    0,                     // requireDocData
    null,                  // docDataOptions
    null,                  // docDataName
    1,                     // requireAttachmentFront
    0                      // requireAttachmentBack
  );
  console.log(`Created Certificate type with ID: ${certificateId}`);

  // Add certificate fields
  insertDocField.run(
    '101',                 // id
    'licenseNumber',       // fieldId
    'licenseNumber',       // name
    'License Number',      // label
    'text',                // type
    'Enter license number', // placeholder
    1,                     // required
    1,                     // order
    1,                     // fullWidth
    0,                     // hidden
    null,                  // defaultValue
    null,                  // options
    null,                  // validation
    null,                  // conditionalDisplay
    certificateId          // documentTypeId
  );

  insertDocField.run(
    '102',                 // id
    'issueDate',           // fieldId
    'issueDate',           // name
    'Issue Date',          // label
    'date',                // type
    'Select issue date',   // placeholder
    1,                     // required
    2,                     // order
    1,                     // fullWidth
    0,                     // hidden
    null,                  // defaultValue
    null,                  // options
    null,                  // validation
    null,                  // conditionalDisplay
    certificateId          // documentTypeId
  );

  insertDocField.run(
    '103',                 // id
    'expireDate',          // fieldId
    'expireDate',          // name
    'Expiration Date',     // label
    'date',                // type
    'Select expiration date', // placeholder
    1,                     // required
    3,                     // order
    1,                     // fullWidth
    0,                     // hidden
    null,                  // defaultValue
    null,                  // options
    null,                  // validation
    null,                  // conditionalDisplay
    certificateId          // documentTypeId
  );
  
  // 2. Medical
  const medicalId = '2';
  insertDocType.run(
    medicalId,
    'Medical'
  );
  
  const medicalOptions = JSON.stringify({
    options: [
      { value: 'vaccination', label: 'Vaccination' },
      { value: 'test_result', label: 'Test Result' },
      { value: 'tb_test', label: 'TB Test' },
      { value: 'doctors_note', label: "Doctor's Note" },
      { value: 'prescription', label: 'Prescription' }
    ]
  });
  
  insertDocTitle.run(
    '2',                   // id
    'Medical Record',      // title
    'now',                 // updatedAt
    1,                     // shareable
    medicalId,             // documentTypeId
    1,                     // isDisplay
    1,                     // requireNumber
    1,                     // requireValidDate
    1,                     // requireExpireDate
    1,                     // requireDocData
    medicalOptions,        // docDataOptions
    'Medical Record Type', // docDataName
    1,                     // requireAttachmentFront
    1                      // requireAttachmentBack
  );
  console.log(`Created Medical type with ID: ${medicalId}`);

  // Add medical fields
  insertDocField.run(
    '201',                 // id
    'recordType',          // fieldId
    'recordType',          // name
    'Record Type',         // label
    'select',              // type
    'Select record type',  // placeholder
    1,                     // required
    1,                     // order
    1,                     // fullWidth
    0,                     // hidden
    null,                  // defaultValue
    JSON.stringify([
      { value: 'vaccination', label: 'Vaccination' },
      { value: 'test_result', label: 'Test Result' },
      { value: 'tb_test', label: 'TB Test' },
      { value: 'doctors_note', label: "Doctor's Note" },
      { value: 'prescription', label: 'Prescription' }
    ]),                    // options
    null,                  // validation
    null,                  // conditionalDisplay
    medicalId              // documentTypeId
  );

  insertDocField.run(
    '202',                 // id
    'medicalDate',         // fieldId
    'medicalDate',         // name
    'Date of Record',      // label
    'date',                // type
    'Enter medical record date', // placeholder
    1,                     // required
    2,                     // order
    1,                     // fullWidth
    0,                     // hidden
    null,                  // defaultValue
    null,                  // options
    null,                  // validation
    null,                  // conditionalDisplay
    medicalId              // documentTypeId
  );

  insertDocField.run(
    '203',                 // id
    'expiryDate',          // fieldId
    'expiryDate',          // name
    'Expiration Date',     // label
    'date',                // type
    'Enter expiration date', // placeholder
    1,                     // required
    3,                     // order
    1,                     // fullWidth
    0,                     // hidden
    null,                  // defaultValue
    null,                  // options
    null,                  // validation
    JSON.stringify({
      field: 'recordType',
      notEqual: 'tb_test'
    }),                    // conditionalDisplay
    medicalId              // documentTypeId
  );
  
  // 3. Document
  const documentId = '3';
  insertDocType.run(
    documentId,
    'Document'
  );
  
  insertDocTitle.run(
    '3',                   // id
    'General Document',    // title
    'now',                 // updatedAt
    1,                     // shareable
    documentId,            // documentTypeId
    1,                     // isDisplay
    0,                     // requireNumber
    1,                     // requireValidDate
    0,                     // requireExpireDate
    0,                     // requireDocData
    null,                  // docDataOptions
    null,                  // docDataName
    1,                     // requireAttachmentFront
    0                      // requireAttachmentBack
  );
  console.log(`Created Document type with ID: ${documentId}`);

  // Add document fields
  insertDocField.run(
    '301',                 // id
    'documentName',        // fieldId
    'documentName',        // name
    'Document Name',       // label
    'text',                // type
    'Enter document name', // placeholder
    1,                     // required
    1,                     // order
    1,                     // fullWidth
    0,                     // hidden
    null,                  // defaultValue
    null,                  // options
    null,                  // validation
    null,                  // conditionalDisplay
    documentId             // documentTypeId
  );

  insertDocField.run(
    '302',                 // id
    'issueDate',           // fieldId
    'issueDate',           // name
    'Issue Date',          // label
    'date',                // type
    'Select issue date',   // placeholder
    1,                     // required
    2,                     // order
    1,                     // fullWidth
    0,                     // hidden
    null,                  // defaultValue
    null,                  // options
    null,                  // validation
    null,                  // conditionalDisplay
    documentId             // documentTypeId
  );
  
  // 4. Other
  const otherId = '4';
  insertDocType.run(
    otherId,
    'Other'
  );
  
  const otherOptions = JSON.stringify({
    options: [
      { value: 'personal', label: 'Personal Document' },
      { value: 'legal', label: 'Legal Document' },
      { value: 'financial', label: 'Financial Document' },
      { value: 'educational', label: 'Educational Document' },
      { value: 'other', label: 'Other' }
    ]
  });
  
  insertDocTitle.run(
    '4',                   // id
    'Other Document',      // title
    'now',                 // updatedAt
    1,                     // shareable
    otherId,               // documentTypeId
    1,                     // isDisplay
    0,                     // requireNumber
    0,                     // requireValidDate
    0,                     // requireExpireDate
    1,                     // requireDocData
    otherOptions,          // docDataOptions
    'Document Category',   // docDataName
    1,                     // requireAttachmentFront
    0                      // requireAttachmentBack
  );
  console.log(`Created Other type with ID: ${otherId}`);

  // Add other fields
  insertDocField.run(
    '401',                 // id
    'documentCategory',    // fieldId
    'documentCategory',    // name
    'Document Category',   // label
    'select',              // type
    'Select category',     // placeholder
    1,                     // required
    1,                     // order
    1,                     // fullWidth
    0,                     // hidden
    null,                  // defaultValue
    JSON.stringify([
      { value: 'personal', label: 'Personal Document' },
      { value: 'legal', label: 'Legal Document' },
      { value: 'financial', label: 'Financial Document' },
      { value: 'educational', label: 'Educational Document' },
      { value: 'other', label: 'Other' }
    ]),                    // options
    null,                  // validation
    null,                  // conditionalDisplay
    otherId                // documentTypeId
  );

  insertDocField.run(
    '402',                 // id
    'documentDescription', // fieldId
    'documentDescription', // name
    'Document Description', // label
    'textarea',            // type
    'Enter document description', // placeholder
    0,                     // required
    2,                     // order
    1,                     // fullWidth
    0,                     // hidden
    null,                  // defaultValue
    null,                  // options
    null,                  // validation
    null,                  // conditionalDisplay
    otherId                // documentTypeId
  );
  
  // Commit transaction
  db.exec('COMMIT');
  
  console.log('Database created and populated successfully!');
} catch (error) {
  // Rollback transaction on error
  db.exec('ROLLBACK');
  console.error('Error creating database:', error);
} finally {
  db.close();
} 