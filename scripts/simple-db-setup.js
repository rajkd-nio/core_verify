/**
 * Simple database setup script
 */
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

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
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

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

  // Create indexes
  db.exec(`CREATE INDEX "document_titles_documentTypeId" ON document_titles("documentTypeId")`);
  db.exec(`CREATE INDEX "document_fields_documentTypeId" ON document_fields("documentTypeId")`);

  console.log('Tables created successfully');

  // Insert basic data
  console.log('Inserting initial data...');

  // Insert document types
  db.exec(`
    INSERT INTO document_types (id, name, "updatedAt") VALUES
    ('1', 'Certificate', datetime('now')),
    ('2', 'Medical', datetime('now')),
    ('3', 'Document', datetime('now')),
    ('4', 'Other', datetime('now'))
  `);

  // Insert document titles
  db.exec(`
    INSERT INTO document_titles (
      id, title, "updatedAt", shareable, "documentTypeId",
      "isDisplay", "requireNumber", "requireValidDate", "requireExpireDate",
      "requireDocData", "docDataName", "requireAttachmentFront", "requireAttachmentBack"
    ) VALUES
    ('1', 'Certificate', datetime('now'), 1, '1', 1, 1, 1, 1, 0, NULL, 1, 0),
    ('2', 'Medical Record', datetime('now'), 1, '2', 1, 1, 1, 1, 1, 'Medical Record Type', 1, 1),
    ('3', 'General Document', datetime('now'), 1, '3', 1, 0, 1, 0, 0, NULL, 1, 0),
    ('4', 'Other Document', datetime('now'), 1, '4', 1, 0, 0, 0, 1, 'Document Category', 1, 0)
  `);

  // Set docDataOptions for Medical and Other
  db.prepare(`
    UPDATE document_titles
    SET "docDataOptions" = ?
    WHERE id = '2'
  `).run(JSON.stringify({
    options: [
      { value: 'vaccination', label: 'Vaccination' },
      { value: 'test_result', label: 'Test Result' },
      { value: 'tb_test', label: 'TB Test' },
      { value: 'doctors_note', label: "Doctor's Note" },
      { value: 'prescription', label: 'Prescription' }
    ]
  }));

  db.prepare(`
    UPDATE document_titles
    SET "docDataOptions" = ?
    WHERE id = '4'
  `).run(JSON.stringify({
    options: [
      { value: 'personal', label: 'Personal Document' },
      { value: 'legal', label: 'Legal Document' },
      { value: 'financial', label: 'Financial Document' },
      { value: 'educational', label: 'Educational Document' },
      { value: 'other', label: 'Other' }
    ]
  }));

  // Insert some basic document fields
  db.exec(`
    INSERT INTO document_fields (
      id, "fieldId", name, label, type, placeholder, 
      required, "order", "fullWidth", hidden, "documentTypeId"
    ) VALUES
    ('101', 'licenseNumber', 'licenseNumber', 'License Number', 'text', 'Enter license number', 1, 1, 1, 0, '1'),
    ('102', 'issueDate', 'issueDate', 'Issue Date', 'date', 'Select issue date', 1, 2, 1, 0, '1'),
    ('103', 'expireDate', 'expireDate', 'Expiration Date', 'date', 'Select expiration date', 1, 3, 1, 0, '1'),
    ('201', 'recordType', 'recordType', 'Record Type', 'select', 'Select record type', 1, 1, 1, 0, '2'),
    ('301', 'documentName', 'documentName', 'Document Name', 'text', 'Enter document name', 1, 1, 1, 0, '3'),
    ('401', 'documentCategory', 'documentCategory', 'Document Category', 'select', 'Select category', 1, 1, 1, 0, '4')
  `);

  // Add options for select fields
  db.prepare(`
    UPDATE document_fields
    SET options = ?
    WHERE id = '201'
  `).run(JSON.stringify([
    { value: 'vaccination', label: 'Vaccination' },
    { value: 'test_result', label: 'Test Result' },
    { value: 'tb_test', label: 'TB Test' },
    { value: 'doctors_note', label: "Doctor's Note" },
    { value: 'prescription', label: 'Prescription' }
  ]));

  db.prepare(`
    UPDATE document_fields
    SET options = ?
    WHERE id = '401'
  `).run(JSON.stringify([
    { value: 'personal', label: 'Personal Document' },
    { value: 'legal', label: 'Legal Document' },
    { value: 'financial', label: 'Financial Document' },
    { value: 'educational', label: 'Educational Document' },
    { value: 'other', label: 'Other' }
  ]));

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