/**
 * Script to list all tables in the database
 */

const { PrismaClient } = require('@prisma/client');

async function listTables() {
  const prisma = new PrismaClient();
  
  try {
    console.log('Connecting to database...');
    
    // List all tables in the database
    const tables = await prisma.$queryRaw`SELECT tablename FROM pg_tables WHERE schemaname='public';`;
    
    console.log('Tables in the database:');
    console.log(tables);
    
  } catch (error) {
    console.error('Error listing tables:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the function
listTables()
  .then(() => console.log('Done'))
  .catch(err => console.error('Script failed:', err)); 