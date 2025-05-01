/**
 * Script to run the migration to the new schema
 * Run with: node scripts/run-migration.js
 */

const { spawn } = require('child_process');
const path = require('path');

// Paths to the migration files
const migrationPath = path.join(__dirname, '../prisma/migrations/migrate_to_new_schema.js');

console.log('Running migration to new schema...');

// Run the migration script
const migration = spawn('node', [migrationPath], {
  stdio: 'inherit'
});

migration.on('close', (code) => {
  if (code === 0) {
    console.log('✅ Migration completed successfully!');
  } else {
    console.error(`❌ Migration failed with code ${code}`);
    process.exit(1);
  }
}); 