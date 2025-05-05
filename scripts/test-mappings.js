/**
 * Script to test how Prisma maps model names to database tables
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function testMappings() {
  try {
    console.log('Testing Prisma model to table mappings...');
    
    // List all available models in the Prisma client
    console.log('Available models in Prisma client:');
    const models = Object.keys(prisma).filter(key => 
      typeof prisma[key] === 'object' && 
      prisma[key] !== null && 
      !key.startsWith('_') && 
      !key.startsWith('$')
    );
    
    console.log(models);
    
    // Try to access the documentTitles model directly
    console.log('\nTrying to access documentTitles:');
    try {
      // This should work if the model name matches the table name
      const titles = await prisma.documentTitles.findMany({ take: 1 });
      console.log('Success! Found documentTitles:', titles);
    } catch (error) {
      console.error('Error accessing documentTitles:', error.message);
    }
    
    // Try to access using the documentTitle model
    console.log('\nTrying to access documentTitle:');
    try {
      // This should work if the model is named differently but mapped correctly
      const titles = await prisma.documentTitle.findMany({ take: 1 });
      console.log('Success! Found documentTitle:', titles);
    } catch (error) {
      console.error('Error accessing documentTitle:', error.message);
    }
    
    // Print all models with their execution methods
    for (const model of models) {
      console.log(`\nMethods for ${model}:`);
      try {
        const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(prisma[model]))
          .filter(method => !method.startsWith('_') && method !== 'constructor');
        console.log(methods);
      } catch (error) {
        console.error(`Error getting methods for ${model}:`, error.message);
      }
    }
    
    await prisma.$disconnect();
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testMappings()
  .then(() => {
    console.log('Test completed');
    process.exit(0);
  })
  .catch(error => {
    console.error('Script failed:', error);
    process.exit(1);
  }); 