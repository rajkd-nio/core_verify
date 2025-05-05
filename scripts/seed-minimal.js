/**
 * Minimal seed script to test Prisma functionality
 */

// Direct import from the generated Prisma client
const { PrismaClient } = require('../app/generated/prisma');
const prisma = new PrismaClient();

async function seedMinimal() {
  try {
    console.log('Starting minimal seed...');
    
    // Find existing document type
    let documentType = await prisma.documentType.findFirst();
    
    if (!documentType) {
      console.log('No document type found. Creating a new one...');
      documentType = await prisma.documentType.create({
        data: {
          name: 'Test Document Type ' + Date.now() // Make the name unique
        }
      });
    }
    
    console.log('Using document type:', documentType);
    
    // Now try to create a document title
    const documentTitle = await prisma.documentTitle.create({
      data: {
        title: 'Test Document Title ' + Date.now(), // Make the title unique
        updated_at: new Date(),
        shareable: true,
        is_display: true,
        // Other required fields
        require_number: false,
        require_valid_date: false,
        require_expire_date: false,
        require_doc_data: false,
        require_attachment_front: true,
        require_attachment_back: false,
        // Connect to the document type using the proper relation field
        document_type_id: documentType.id
      }
    });
    
    console.log('Created document title:', documentTitle);
    
    console.log('Seed completed successfully');
  } catch (error) {
    console.error('Error during seed:', error);
    console.error('Error details:', error.stack);
  } finally {
    await prisma.$disconnect();
  }
}

seedMinimal()
  .then(() => {
    console.log('Seed script completed');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Seed script failed:', error);
    process.exit(1);
  }); 