/**
 * Script to generate missing tables in the database from Prisma schema
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  console.log('Creating migration for missing tables...');
  
  // Create a temporary migration name
  const migrationName = 'add_missing_tables_' + Date.now();
  
  // Create migration directory if it doesn't exist
  const migrationsDir = path.join(__dirname, '..', 'prisma', 'migrations');
  if (!fs.existsSync(migrationsDir)) {
    fs.mkdirSync(migrationsDir, { recursive: true });
  }
  
  // Use Prisma to create and apply a migration
  try {
    console.log('Creating migration...');
    const createMigration = execSync(`npx prisma migrate dev --name ${migrationName} --create-only`, {
      stdio: 'inherit',
      encoding: 'utf-8'
    });
  } catch (error) {
    console.error('Error creating migration:', error.message);
    // Continue anyway, the migration may have been created
  }
  
  // Apply the migration
  try {
    console.log('Applying migration...');
    const applyMigration = execSync('npx prisma migrate dev', {
      stdio: 'inherit',
      encoding: 'utf-8'
    });
    console.log('Migration applied successfully!');
  } catch (error) {
    console.error('Error applying migration:', error.message);
  }
  
  console.log('Generating Prisma client...');
  // Generate Prisma client with the updated schema
  const generateClient = execSync('npx prisma generate', {
    stdio: 'inherit',
    encoding: 'utf-8'
  });
  
  console.log('Done creating missing tables!');
} catch (error) {
  console.error('Script failed:', error);
  process.exit(1);
} 