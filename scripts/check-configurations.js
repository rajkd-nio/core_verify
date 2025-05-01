/**
 * Script to check document configurations in database
 */
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkConfigurations() {
  try {
    console.log('Regions:');
    const regions = await prisma.region.findMany({
      orderBy: { id: 'asc' }
    });
    console.table(regions);

    console.log('\nDocument Configurations:');
    const configs = await prisma.documentConfiguration.findMany({
      include: {
        region: true,
        documentTitle: true,
        documentType: true
      }
    });
    
    console.table(configs.map(c => ({
      id: c.id,
      regionName: c.region.name,
      documentType: c.documentType.name,
      documentTitle: c.documentTitle.title,
      typeOfCondition: c.typeOfCondition === 0 ? 'Required' : 'Optional',
      active: c.active,
      priority: c.priority
    })));
    
    console.log(`\nTotal configurations: ${configs.length}`);
  } catch (error) {
    console.error('Error checking configurations:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the check function
checkConfigurations()
  .catch(console.error); 