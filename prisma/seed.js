// Import Prisma client
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Simple empty seed function
 */
async function main() {
  console.log('Seed function called - no action taken');
  
  // The actual data seeding is handled by the seed-postgres.js script
  console.log('To seed the database, run: npm run db:seed-postgres');
}

// Run seed
main()
  .catch((e) => {
    console.error('Error in seed function:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 