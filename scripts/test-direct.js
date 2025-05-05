/**
 * Test script using direct path to the Prisma client
 */

// Direct import from the generated Prisma client
const { PrismaClient } = require('../app/generated/prisma');
const prisma = new PrismaClient();

async function testDirectImport() {
  try {
    console.log('Testing direct Prisma client import...');
    
    // Check available models
    const models = Object.keys(prisma).filter(key => 
      typeof prisma[key] === 'object' && 
      prisma[key] !== null && 
      !key.startsWith('_') && 
      !key.startsWith('$')
    );
    
    console.log('Available models:', models);
    
    // Try to access the DocumentTitle model
    try {
      const titles = await prisma.documentTitle.findMany({ take: 1 });
      console.log('Found document titles:', titles);
    } catch (error) {
      console.error('Error finding document titles:', error.message);
    }
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testDirectImport()
  .then(() => console.log('Test completed'))
  .catch(error => console.error('Script failed:', error)); 