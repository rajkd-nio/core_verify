// Create a fresh database with the necessary tables using sqlite3
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

// Ensure prisma directory exists
const prismaDir = path.join(__dirname, '../prisma');
if (!fs.existsSync(prismaDir)) {
  fs.mkdirSync(prismaDir);
}

// Database file path
const dbPath = path.join(prismaDir, 'dev.db');
console.log(`Creating database at: ${dbPath}`);

// Remove existing database if it exists
if (fs.existsSync(dbPath)) {
  fs.unlinkSync(dbPath);
  console.log('Removed existing database file');
}

// Create and connect to the database
const db = new sqlite3.Database(dbPath);
console.log('Created new database');

// Helper function to run SQL commands with Promise
function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function(err) {
      if (err) {
        reject(err);
        return;
      }
      resolve(this);
    });
  });
}

// Begin transaction and create tables
async function setupDatabase() {
  try {
    console.log('Creating new SQLite database...');
    
    // Begin transaction
    await run('BEGIN TRANSACTION');
    
    // Create document_types table
    await run(`
      CREATE TABLE document_types (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Create document_titles table
    await run(`
      CREATE TABLE document_titles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
        shareable INTEGER DEFAULT 0,
        document_type_id INTEGER NOT NULL,
        is_display INTEGER DEFAULT 1,
        require_number INTEGER DEFAULT 0,
        require_valid_date INTEGER DEFAULT 0,
        require_expire_date INTEGER DEFAULT 0,
        require_doc_data INTEGER DEFAULT 0,
        doc_data_options TEXT,
        doc_data_name TEXT,
        require_attachment_front INTEGER DEFAULT 0,
        require_attachment_back INTEGER DEFAULT 0,
        FOREIGN KEY (document_type_id) REFERENCES document_types (id)
      )
    `);
    
    // Create index on document_titles
    await run('CREATE INDEX idx_document_titles_type_id ON document_titles(document_type_id)');
    
    // Insert document types
    const documentTypes = [
      { id: 1, name: 'Certificate' },
      { id: 2, name: 'Medical Record' },
      { id: 3, name: 'General Document' },
      { id: 4, name: 'Other Document' }
    ];
    
    for (const type of documentTypes) {
      await run(
        'INSERT INTO document_types (id, name) VALUES (?, ?)',
        [type.id, type.name]
      );
    }
    
    // Insert document titles
    const documentTitles = [
      {
        id: 1,
        title: 'RN License',
        document_type_id: 1,
        shareable: 1,
        is_display: 1,
        require_number: 1,
        require_valid_date: 0,
        require_expire_date: 1,
        require_doc_data: 0,
        doc_data_options: null,
        doc_data_name: null,
        require_attachment_front: 1,
        require_attachment_back: 0
      },
      {
        id: 2,
        title: 'Compact/Multi-State License',
        document_type_id: 1,
        shareable: 1,
        is_display: 1,
        require_number: 1,
        require_valid_date: 0,
        require_expire_date: 1,
        require_doc_data: 1,
        doc_data_options: JSON.stringify(['Yes', 'No', 'Not Applicable']),
        doc_data_name: 'Is this a multi-state license?',
        require_attachment_front: 1,
        require_attachment_back: 0
      },
      {
        id: 3,
        title: 'CNA License',
        document_type_id: 1,
        shareable: 1,
        is_display: 1,
        require_number: 1,
        require_valid_date: 0,
        require_expire_date: 1,
        require_doc_data: 0,
        doc_data_options: null,
        doc_data_name: null,
        require_attachment_front: 1,
        require_attachment_back: 0
      },
      {
        id: 4,
        title: 'BLS/CPR',
        document_type_id: 1,
        shareable: 1,
        is_display: 1,
        require_number: 0,
        require_valid_date: 0,
        require_expire_date: 1,
        require_doc_data: 0,
        doc_data_options: null,
        doc_data_name: null,
        require_attachment_front: 1,
        require_attachment_back: 0
      },
      {
        id: 5,
        title: 'ACLS',
        document_type_id: 1,
        shareable: 1,
        is_display: 1,
        require_number: 0,
        require_valid_date: 0,
        require_expire_date: 1,
        require_doc_data: 0,
        doc_data_options: null,
        doc_data_name: null,
        require_attachment_front: 1,
        require_attachment_back: 0
      },
      {
        id: 6,
        title: 'PALS',
        document_type_id: 1,
        shareable: 1,
        is_display: 1,
        require_number: 0,
        require_valid_date: 0,
        require_expire_date: 1,
        require_doc_data: 0,
        doc_data_options: null,
        doc_data_name: null,
        require_attachment_front: 1,
        require_attachment_back: 0
      },
      {
        id: 7,
        title: 'Physical',
        document_type_id: 2,
        shareable: 1,
        is_display: 1,
        require_number: 0,
        require_valid_date: 0,
        require_expire_date: 1,
        require_doc_data: 0,
        doc_data_options: null,
        doc_data_name: null,
        require_attachment_front: 1,
        require_attachment_back: 0
      },
      {
        id: 8,
        title: 'TB Test',
        document_type_id: 2,
        shareable: 1,
        is_display: 1,
        require_number: 0,
        require_valid_date: 1,
        require_expire_date: 0,
        require_doc_data: 0,
        doc_data_options: null,
        doc_data_name: null,
        require_attachment_front: 1,
        require_attachment_back: 0
      },
      {
        id: 9,
        title: 'Driver\'s License',
        document_type_id: 3,
        shareable: 1,
        is_display: 1,
        require_number: 1,
        require_valid_date: 0,
        require_expire_date: 1,
        require_doc_data: 0,
        doc_data_options: null,
        doc_data_name: null,
        require_attachment_front: 1,
        require_attachment_back: 1
      },
      {
        id: 10,
        title: 'Social Security Card',
        document_type_id: 3,
        shareable: 1,
        is_display: 1,
        require_number: 1,
        require_valid_date: 0,
        require_expire_date: 0,
        require_doc_data: 0,
        doc_data_options: null,
        doc_data_name: null,
        require_attachment_front: 1,
        require_attachment_back: 0
      },
      {
        id: 11,
        title: 'Other Certificate',
        document_type_id: 4,
        shareable: 1,
        is_display: 1,
        require_number: 0,
        require_valid_date: 0,
        require_expire_date: 0,
        require_doc_data: 0,
        doc_data_options: null,
        doc_data_name: null,
        require_attachment_front: 1,
        require_attachment_back: 0
      }
    ];
    
    for (const title of documentTitles) {
      await run(
        `INSERT INTO document_titles (
          id, title, document_type_id, shareable, is_display, 
          require_number, require_valid_date, require_expire_date, 
          require_doc_data, doc_data_options, doc_data_name, 
          require_attachment_front, require_attachment_back
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          title.id, title.title, title.document_type_id, title.shareable, title.is_display,
          title.require_number, title.require_valid_date, title.require_expire_date,
          title.require_doc_data, title.doc_data_options, title.doc_data_name,
          title.require_attachment_front, title.require_attachment_back
        ]
      );
    }
    
    // Commit transaction
    await run('COMMIT');
    console.log('Database setup completed successfully!');
  } catch (error) {
    // Rollback in case of error
    await run('ROLLBACK');
    console.error('Error setting up database:', error);
    process.exit(1);
  } finally {
    // Close database connection
    db.close();
  }
}

// Run the setup
setupDatabase(); 