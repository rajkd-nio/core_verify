/**
 * Script to check the actual model names in the Prisma client
 */

const { PrismaClient } = require('@prisma/client');

async function checkModelNames() {
  try {
    const prisma = new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
    });
    
    console.log('Inspecting Prisma client...');
    
    // Get the dmmf from Prisma client
    // @ts-ignore - Accessing internal property
    const dmmf = prisma._baseDmmf || prisma._dmmf;
    
    if (dmmf) {
      console.log('DMMF Models:');
      dmmf.modelMap.forEach((model, modelName) => {
        console.log(`- Model Name: ${modelName}`);
        console.log(`  DB Name: ${model.dbName || 'Same as model name'}`);
      });
    } else {
      console.log('Unable to access DMMF data');
    }
    
    // List normal models
    console.log('\nStandard models by direct access:');
    const clientModels = Object.keys(prisma).filter(key => 
      typeof prisma[key] === 'object' && 
      prisma[key] !== null && 
      !key.startsWith('_') && 
      !key.startsWith('$')
    );
    console.log(clientModels);
    
    await prisma.$disconnect();
  } catch (error) {
    console.error('Error checking model names:', error);
  }
}

checkModelNames()
  .then(() => {
    console.log('Done checking model names');
    process.exit(0);
  })
  .catch(error => {
    console.error('Script failed:', error);
    process.exit(1);
  }); 