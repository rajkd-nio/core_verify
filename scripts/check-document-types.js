/**
 * Script to check document types and titles in the database
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkDocumentTypes() {
  try {
    console.log('Fetching all document types and their titles...');
    
    // Get all document types with their titles
    const documentTypes = await prisma.documentType.findMany({
      include: {
        documentTitles: true
      }
    });
    
    // Display the results in a structured way
    console.log('\n=== Document Types and Titles ===\n');
    
    for (const docType of documentTypes) {
      console.log(`Document Type ID: ${docType.id}`);
      console.log(`Name: ${docType.name}`);
      console.log(`Created: ${docType.createdAt}`);
      console.log(`Updated: ${docType.updatedAt}`);
      
      console.log('\nAssociated Titles:');
      
      if (docType.documentTitles.length === 0) {
        console.log('  No titles found for this document type');
      } else {
        for (const title of docType.documentTitles) {
          console.log(`  Title ID: ${title.id}`);
          console.log(`  Title: ${title.title}`);
          console.log(`  Require Number: ${title.requireNumber}`);
          console.log(`  Require Valid Date: ${title.requireValidDate}`);
          console.log(`  Require Expire Date: ${title.requireExpireDate}`);
          console.log(`  Require Doc Data: ${title.requireDocData}`);
          console.log(`  Doc Data Name: ${title.docDataName || 'None'}`);
          
          if (title.docDataOptions) {
            console.log('  Doc Data Options:');
            const options = typeof title.docDataOptions === 'string' 
              ? JSON.parse(title.docDataOptions) 
              : title.docDataOptions;
              
            if (options.options) {
              console.log(`    ${options.options.length} options available`);
              options.options.slice(0, 3).forEach(opt => {
                console.log(`    - ${opt.label} (${opt.value})`);
              });
              if (options.options.length > 3) {
                console.log(`    - ... and ${options.options.length - 3} more`);
              }
            }
          } else {
            console.log('  Doc Data Options: None');
          }
          
          console.log('  -----------------------');
        }
      }
      
      console.log('\n==============================\n');
    }
    
  } catch (error) {
    console.error('Error checking document types:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the function
checkDocumentTypes()
  .then(() => console.log('Script completed'))
  .catch(error => console.error('Script failed:', error)); 