// Test SQLite directly without Prisma
const Database = require('better-sqlite3');
const path = require('path');

// Initialize database connection
const dbPath = path.resolve(process.cwd(), 'prisma/dev.db');
const db = new Database(dbPath);

try {
  console.log('Testing direct SQLite access...');
  
  // Query document types
  const documentTypes = db.prepare('SELECT * FROM document_types').all();
  console.log(`Found ${documentTypes.length} document types:`);
  
  // Display each document type
  for (const docType of documentTypes) {
    console.log(`\nDocument Type ID: ${docType.id}`);
    console.log(`Name: ${docType.name}`);
    console.log(`Created At: ${docType.createdAt}`);
    console.log(`Updated At: ${docType.updatedAt}`);
    
    // Query titles for this document type
    const titles = db.prepare('SELECT * FROM document_titles WHERE documentTypeId = ?').all(docType.id);
    console.log(`Has ${titles.length} document title(s):`);
    
    for (const title of titles) {
      console.log(`  - Title ID: ${title.id}`);
      console.log(`    Title: ${title.title}`);
      console.log(`    Shareable: ${title.shareable}`);
      console.log(`    Document Type ID: ${title.documentTypeId}`);
      console.log(`    Requires Number: ${title.requireNumber}`);
      console.log(`    Requires Valid Date: ${title.requireValidDate}`);
      console.log(`    Requires Expire Date: ${title.requireExpireDate}`);
      console.log(`    Requires Doc Data: ${title.requireDocData}`);
      
      if (title.docDataOptions) {
        console.log(`    Doc Data Options: ${title.docDataOptions}`);
      }
      if (title.docDataName) {
        console.log(`    Doc Data Name: ${title.docDataName}`);
      }
      
      console.log(`    Requires Attachment Front: ${title.requireAttachmentFront}`);
      console.log(`    Requires Attachment Back: ${title.requireAttachmentBack}`);
    }
  }
  
  console.log('\nTest completed successfully!');
} catch (error) {
  console.error('Error testing document types:', error);
} finally {
  db.close();
} 