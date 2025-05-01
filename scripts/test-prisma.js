// Test script for Prisma integration
const { PrismaClient } = require('../app/generated/prisma');

async function testPrisma() {
  console.log('Testing Prisma access...');
  
  // Initialize Prisma client
  const prisma = new PrismaClient();
  
  try {
    // Test querying document types
    console.log('Querying document types...');
    const documentTypes = await prisma.documentType.findMany({
      include: {
        documentTitles: true
      }
    });
    
    console.log(`Found ${documentTypes.length} document types.`);
    
    // Display document types
    for (const type of documentTypes) {
      console.log(`\nDocument Type ID: ${type.id}`);
      console.log(`Name: ${type.name}`);
      console.log(`Created At: ${type.createdAt}`);
      console.log(`Updated At: ${type.updatedAt}`);
      
      console.log(`Has ${type.documentTitles.length} document title(s):`);
      
      for (const title of type.documentTitles) {
        console.log(`  - Title: ${title.title}`);
      }
    }
    
    // Find a single document type
    console.log('\nFinding certificate document type...');
    const certificate = await prisma.documentType.findFirst({
      where: {
        name: 'Certificate'
      },
      include: {
        documentTitles: true
      }
    });
    
    console.log(`Found certificate with ID: ${certificate.id}`);
    
    console.log('Prisma test completed successfully!');
  } catch (error) {
    console.error('Prisma test error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the test
testPrisma(); 