/**
 * Script to check what models are available in the Prisma client
 */

const { PrismaClient } = require('@prisma/client');

async function checkPrismaModels() {
  try {
    console.log('Checking Prisma client models...');
    
    const prisma = new PrismaClient();
    
    // Print all model names available in the Prisma client
    console.log('Available models in Prisma client:');
    const models = Object.keys(prisma);
    
    models.forEach(model => {
      if (typeof prisma[model] === 'object' && prisma[model] !== null) {
        console.log(`- ${model}`);
      }
    });
    
    // Try to examine a specific model
    console.log('\nExamining DocumentType model:');
    const documentType = await prisma.documentType.findFirst();
    console.log('First DocumentType record:', documentType);
    
    // Check available methods
    console.log('\nMethods available on DocumentType:');
    const documentTypeMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(prisma.documentType));
    console.log(documentTypeMethods);
    
    await prisma.$disconnect();
  } catch (error) {
    console.error('Error checking Prisma models:', error);
  }
}

checkPrismaModels()
  .then(() => {
    console.log('Done checking models');
    process.exit(0);
  })
  .catch(error => {
    console.error('Script failed:', error);
    process.exit(1);
  }); 