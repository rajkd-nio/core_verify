/**
 * Script to check database contents
 */
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkData() {
  try {
    console.log('Document Types:');
    const types = await prisma.documentType.findMany({
      orderBy: { id: 'asc' }
    });
    console.table(types);

    console.log('\nDocument Titles:');
    const titles = await prisma.documentTitle.findMany({
      orderBy: { documentTypeId: 'asc' }
    });
    
    console.table(titles.map(t => ({
      id: t.id,
      title: t.title,
      typeId: t.documentTypeId,
      requireNumber: t.requireNumber,
      requireValidDate: t.requireValidDate,
      requireExpireDate: t.requireExpireDate
    })));
  } catch (error) {
    console.error('Error checking database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the check function
checkData()
  .catch(console.error); 