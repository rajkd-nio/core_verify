// Basic test script that imports Prisma directly from node_modules
const { PrismaClient } = require('@prisma/client');

async function main() {
  console.log('Starting direct Prisma test...');
  
  try {
    // Initialize Prisma client
    const prisma = new PrismaClient();
    
    console.log('Successfully initialized Prisma client');
    
    // Test simple query
    const documentTypes = await prisma.documentType.findMany();
    
    console.log(`Found ${documentTypes.length} document types:`);
    documentTypes.forEach(type => {
      console.log(`- ID: ${type.id}, Name: ${type.name}`);
    });
    
    // Close connection
    await prisma.$disconnect();
    console.log('Test completed successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
}

main(); 