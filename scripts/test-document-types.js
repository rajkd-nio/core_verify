// Test script to verify that document types and titles are accessible
const { PrismaClient } = require('../app/generated/prisma');
const prisma = new PrismaClient();

async function testDocumentTypes() {
  try {
    console.log('Testing access to document types and titles...');
    
    // Fetch all document types
    const documentTypes = await prisma.documentType.findMany({
      include: {
        documentTitles: true
      }
    });
    
    console.log(`Found ${documentTypes.length} document types:`);
    
    // Display each document type and its titles
    for (const docType of documentTypes) {
      console.log(`\nDocument Type ID: ${docType.id}`);
      console.log(`Name: ${docType.name}`);
      console.log(`Created At: ${docType.createdAt}`);
      console.log(`Updated At: ${docType.updatedAt}`);
      
      console.log(`Has ${docType.documentTitles.length} document title(s):`);
      
      for (const title of docType.documentTitles) {
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
    await prisma.$disconnect();
  }
}

// Run the test
testDocumentTypes(); 