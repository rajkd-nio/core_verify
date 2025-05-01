/**
 * Migrate data from old document schema to new document_types and document_titles tables
 */
const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

// Paths
const DB_PATH = path.join(__dirname, '../prisma/dev.db');
const DOCUMENT_TYPES_PATH = path.join(__dirname, '../formdata/documentTypes.json');
const DOCUMENT_TITLES_PATH = path.join(__dirname, '../formdata/documentTitles.json');

console.log(`Working on database at: ${DB_PATH}`);

// Check if database exists
if (!fs.existsSync(DB_PATH)) {
  console.error(`Database not found at: ${DB_PATH}`);
  process.exit(1);
}

// Check if JSON files exist
if (!fs.existsSync(DOCUMENT_TYPES_PATH) || !fs.existsSync(DOCUMENT_TITLES_PATH)) {
  console.error('Document JSON files not found!');
  process.exit(1);
}

// Load document data from JSON files
let documentTypes = [];
let documentTitles = [];

try {
  documentTypes = JSON.parse(fs.readFileSync(DOCUMENT_TYPES_PATH, 'utf8'));
  documentTitles = JSON.parse(fs.readFileSync(DOCUMENT_TITLES_PATH, 'utf8'));
  console.log(`Loaded ${documentTypes.length} document types and ${documentTitles.length} document titles from JSON files`);
} catch (error) {
  console.error('Error loading JSON files:', error.message);
  process.exit(1);
}

// Connect to the database
const db = new Database(DB_PATH, { verbose: console.log });

// Begin transaction
let transaction;
try {
  transaction = db.transaction(() => {
    // Create document_types table if it doesn't exist
    db.exec(`
      CREATE TABLE IF NOT EXISTS document_types (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create document_titles table if it doesn't exist
    db.exec(`
      CREATE TABLE IF NOT EXISTS document_titles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        shareable BOOLEAN DEFAULT 0,
        document_type_id INTEGER,
        is_display BOOLEAN DEFAULT 1,
        require_number BOOLEAN DEFAULT 1,
        require_valid_date BOOLEAN DEFAULT 1,
        require_expire_date BOOLEAN DEFAULT 1,
        require_doc_data BOOLEAN DEFAULT 0,
        doc_data_options TEXT,
        doc_data_name TEXT,
        require_attachment_front BOOLEAN DEFAULT 1,
        require_attachment_back BOOLEAN DEFAULT 0,
        FOREIGN KEY (document_type_id) REFERENCES document_types (id)
      )
    `);

    // Clear existing data and reset auto-increment
    db.exec('DELETE FROM document_titles');
    db.exec('DELETE FROM document_types');
    db.exec('DELETE FROM sqlite_sequence WHERE name="document_titles" OR name="document_types"');

    // Insert document types
    const insertDocumentType = db.prepare(`
      INSERT INTO document_types (id, name, created_at, updated_at) 
      VALUES (?, ?, datetime('now'), datetime('now'))
    `);

    documentTypes.forEach(docType => {
      insertDocumentType.run(docType.id, docType.name);
    });
    console.log(`Inserted ${documentTypes.length} document types`);

    // Insert document titles
    const insertDocumentTitle = db.prepare(`
      INSERT INTO document_titles (
        id, title, shareable, document_type_id, is_display, 
        require_number, require_valid_date, require_expire_date, 
        require_doc_data, doc_data_options, doc_data_name,
        require_attachment_front, require_attachment_back,
        created_at, updated_at
      ) VALUES (
        ?, ?, ?, ?, ?, 
        ?, ?, ?, 
        ?, ?, ?,
        ?, ?,
        datetime('now'), datetime('now')
      )
    `);

    documentTitles.forEach(title => {
      insertDocumentTitle.run(
        title.id,
        title.title,
        title.shareable ? 1 : 0,
        title.document_type_id,
        title.is_display ? 1 : 0,
        title.require_number ? 1 : 0,
        title.require_valid_date ? 1 : 0,
        title.require_expire_date ? 1 : 0,
        title.require_doc_data ? 1 : 0,
        title.doc_data_options ? JSON.stringify(title.doc_data_options) : null,
        title.doc_data_name || null,
        title.require_attachment_front ? 1 : 0,
        title.require_attachment_back ? 1 : 0
      );
    });
    console.log(`Inserted ${documentTitles.length} document titles`);
  });

  // Execute transaction
  transaction();
  console.log('Migration completed successfully!');
} catch (error) {
  console.error('Error during migration:', error.message);
  process.exit(1);
} finally {
  // Close database connection
  db.close();
} 