/**
 * Script to check the contents of database tables
 * Usage: node scripts/check-tables.js
 */

const Database = require('better-sqlite3');
const path = require('path');

// Initialize SQLite database
const dbPath = path.resolve(process.cwd(), 'prisma/dev.db');
console.log(`Using database at: ${dbPath}`);
const db = new Database(dbPath);

try {
  // Check document_types table
  console.log('\n=== DOCUMENT TYPES ===');
  const docTypes = db.prepare('SELECT * FROM document_types').all();
  console.log(`Found ${docTypes.length} records in document_types`);
  if (docTypes.length > 0) {
    console.table(docTypes);
  }

  // Check document_titles table
  console.log('\n=== DOCUMENT TITLES ===');
  const docTitles = db.prepare('SELECT * FROM document_titles').all();
  console.log(`Found ${docTitles.length} records in document_titles`);
  if (docTitles.length > 0) {
    console.table(docTitles);
  }

  // Check document_fields table
  console.log('\n=== DOCUMENT FIELDS ===');
  const docFields = db.prepare('SELECT * FROM document_fields').all();
  console.log(`Found ${docFields.length} records in document_fields`);
  if (docFields.length > 0) {
    // Just show the first 5 records to avoid overwhelming output
    console.table(docFields.slice(0, 5));
    if (docFields.length > 5) {
      console.log(`... and ${docFields.length - 5} more records`);
    }
  }

  // Check table structure
  console.log('\n=== TABLE STRUCTURE ===');
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  for (const table of tables) {
    if (table.name.startsWith('sqlite_') || table.name === '_prisma_migrations') continue;
    console.log(`\nStructure for table: ${table.name}`);
    const tableInfo = db.prepare(`PRAGMA table_info(${table.name})`).all();
    console.table(tableInfo);
  }

} catch (error) {
  console.error('Error checking database:', error);
} finally {
  // Close the database connection
  db.close();
} 