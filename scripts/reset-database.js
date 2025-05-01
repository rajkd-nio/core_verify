// Script to completely reset the database and create new tables
const Database = require('better-sqlite3');
const fs = require('fs').promises;
const path = require('path');

// Database file path
const dbPath = path.resolve(process.cwd(), 'prisma/dev.db');
console.log(`Using database at: ${dbPath}`);

// Remove all database files
async function removeDbFiles() {
  const dbDir = path.dirname(dbPath);
  const dbName = path.basename(dbPath);
  
  try {
    const files = await fs.readdir(dbDir);
    
    // Find and delete all db files including journal, shm, wal files
    const dbFiles = files.filter(file => 
      file === dbName || 
      file.startsWith(`${dbName}.`) || 
      file.startsWith(`${dbName}-journal`) ||
      file.endsWith('.sqlite3-wal') ||
      file.endsWith('.sqlite3-shm')
    );
    
    // Create backup of main DB file first
    if (dbFiles.includes(dbName)) {
      const backupPath = `${dbPath}.backup-${Date.now()}`;
      await fs.copyFile(path.join(dbDir, dbName), backupPath);
      console.log(`Database backed up to ${backupPath}`);
    }
    
    // Delete all DB files
    for (const file of dbFiles) {
      try {
        await fs.unlink(path.join(dbDir, file));
        console.log(`Deleted: ${file}`);
      } catch (err) {
        console.log(`Could not delete ${file}: ${err.message}`);
      }
    }
    
    return true;
  } catch (error) {
    console.error('Error removing database files:', error);
    return false;
  }
}

// Reset the database
async function resetDatabase() {
  // Remove all database files
  const filesRemoved = await removeDbFiles();
  if (!filesRemoved) {
    console.error('Failed to remove database files, aborting reset');
    return;
  }
  
  // Create a new database
  const db = new Database(dbPath);
  console.log('Created new database');

  try {
    // Begin transaction
    db.exec('BEGIN TRANSACTION');
    
    // Create document_types table
    db.exec(`
      CREATE TABLE document_types (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" DATETIME NOT NULL
      )
    `);
    console.log('Created document_types table');

    // Create document_titles table
    db.exec(`
      CREATE TABLE document_titles (
        id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" DATETIME NOT NULL,
        shareable BOOLEAN NOT NULL DEFAULT false,
        "documentTypeId" INTEGER NOT NULL,
        "isDisplay" BOOLEAN NOT NULL DEFAULT true,
        "requireNumber" BOOLEAN NOT NULL DEFAULT false,
        "requireValidDate" BOOLEAN NOT NULL DEFAULT false,
        "requireExpireDate" BOOLEAN NOT NULL DEFAULT false,
        "requireDocData" BOOLEAN NOT NULL DEFAULT false,
        "docDataOptions" TEXT,
        "docDataName" TEXT,
        "requireAttachmentFront" BOOLEAN NOT NULL DEFAULT false,
        "requireAttachmentBack" BOOLEAN NOT NULL DEFAULT false,
        FOREIGN KEY ("documentTypeId") REFERENCES document_types(id) ON DELETE CASCADE
      )
    `);
    console.log('Created document_titles table');

    // Create index on document_titles
    db.exec(`
      CREATE INDEX "document_titles_documentTypeId" 
      ON document_titles("documentTypeId")
    `);
    console.log('Created index on document_titles');
    
    // Insert sample data
    const insertDocType = db.prepare(`
      INSERT INTO document_types (id, name, "createdAt", "updatedAt")
      VALUES (?, ?, datetime(?), datetime(?))
    `);
    
    const insertDocTitle = db.prepare(`
      INSERT INTO document_titles (
        id, title, "createdAt", "updatedAt", shareable, "documentTypeId",
        "isDisplay", "requireNumber", "requireValidDate", "requireExpireDate",
        "requireDocData", "docDataOptions", "docDataName",
        "requireAttachmentFront", "requireAttachmentBack"
      )
      VALUES (?, ?, datetime(?), datetime(?), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    
    // Certificate
    insertDocType.run(
      1, 
      'Certificate', 
      '2023-08-01T00:00:00Z', 
      '2023-08-01T00:00:00Z'
    );
    
    insertDocTitle.run(
      1,
      'Certificate',
      '2023-08-01T00:00:00Z',
      '2023-08-01T00:00:00Z',
      1, // shareable
      1, // documentTypeId
      1, // isDisplay
      1, // requireNumber
      1, // requireValidDate
      1, // requireExpireDate
      0, // requireDocData
      null, // docDataOptions
      null, // docDataName
      1, // requireAttachmentFront
      0  // requireAttachmentBack
    );
    
    // Medical
    insertDocType.run(
      2, 
      'Medical', 
      '2023-08-01T00:00:00Z', 
      '2023-08-01T00:00:00Z'
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
      2,
      'Medical Record',
      '2023-08-01T00:00:00Z',
      '2023-08-01T00:00:00Z',
      1, // shareable
      2, // documentTypeId
      1, // isDisplay
      1, // requireNumber
      1, // requireValidDate
      1, // requireExpireDate
      1, // requireDocData
      medicalOptions, // docDataOptions
      'Medical Record Type', // docDataName
      1, // requireAttachmentFront
      1  // requireAttachmentBack
    );
    
    // Document
    insertDocType.run(
      3, 
      'Document', 
      '2023-08-01T00:00:00Z', 
      '2023-08-01T00:00:00Z'
    );
    
    insertDocTitle.run(
      3,
      'General Document',
      '2023-08-01T00:00:00Z',
      '2023-08-01T00:00:00Z',
      1, // shareable
      3, // documentTypeId
      1, // isDisplay
      0, // requireNumber
      1, // requireValidDate
      0, // requireExpireDate
      0, // requireDocData
      null, // docDataOptions
      null, // docDataName
      1, // requireAttachmentFront
      0  // requireAttachmentBack
    );
    
    // Other
    insertDocType.run(
      4, 
      'Other', 
      '2023-08-01T00:00:00Z', 
      '2023-08-01T00:00:00Z'
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
      4,
      'Other Document',
      '2023-08-01T00:00:00Z',
      '2023-08-01T00:00:00Z',
      1, // shareable
      4, // documentTypeId
      1, // isDisplay
      0, // requireNumber
      0, // requireValidDate
      0, // requireExpireDate
      1, // requireDocData
      otherOptions, // docDataOptions
      'Document Category', // docDataName
      1, // requireAttachmentFront
      0  // requireAttachmentBack
    );
    
    // Commit transaction
    db.exec('COMMIT');
    console.log('Sample data inserted successfully');
    
    console.log('Database reset successful!');
  } catch (error) {
    // Rollback transaction
    db.exec('ROLLBACK');
    console.error('Error resetting database:', error);
  } finally {
    db.close();
  }
}

// Run the database reset
resetDatabase().then(() => {
  console.log('Database reset process completed.');
}); 