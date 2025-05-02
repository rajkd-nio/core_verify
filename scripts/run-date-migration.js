#!/usr/bin/env node

/**
 * Script to run the date format migration
 */
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// ANSI color codes for better console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

// Log with color
function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

// Execute shell command and return output
function executeCommand(command) {
  try {
    log(`Executing: ${command}`, colors.blue);
    const output = execSync(command, { encoding: 'utf8' });
    return { success: true, output };
  } catch (error) {
    return { 
      success: false, 
      error: error.message,
      stdout: error.stdout,
      stderr: error.stderr
    };
  }
}

// Main function to run the migration
async function main() {
  log('=== CoreVerify Date Format Migration Tool ===', colors.cyan);
  log('This script will update the database to ensure consistent MM/DD/YYYY date formats', colors.yellow);
  
  // Check if prisma is installed
  const prismaCheck = executeCommand('npx prisma -v');
  if (!prismaCheck.success) {
    log('Error: Prisma CLI not found. Please install it with "npm install prisma --save-dev"', colors.red);
    process.exit(1);
  }
  
  // Create migrations directory if it doesn't exist
  const migrationsDir = path.join(process.cwd(), 'prisma', 'migrations');
  if (!fs.existsSync(migrationsDir)) {
    log('Creating migrations directory...', colors.yellow);
    fs.mkdirSync(migrationsDir, { recursive: true });
  }

  // Run the migration
  log('Running date format migration...', colors.yellow);
  
  // Apply the migration without generating a new one
  const applyResult = executeCommand('npx prisma migrate resolve --applied 20240615000000_update_date_formats');
  
  if (!applyResult.success) {
    log('Error applying migration:', colors.red);
    log(applyResult.stderr || applyResult.error, colors.red);
    process.exit(1);
  }
  
  // Now run the SQL directly
  const migrationSqlPath = path.join(migrationsDir, '20240615000000_update_date_formats', 'migration.sql');
  
  if (!fs.existsSync(migrationSqlPath)) {
    log(`Error: Migration SQL file not found at ${migrationSqlPath}`, colors.red);
    process.exit(1);
  }
  
  // Run the SQL using prisma db execute
  const sqlContent = fs.readFileSync(migrationSqlPath, 'utf8');
  
  // Write to a temporary file to avoid command line length issues
  const tempSqlPath = path.join(process.cwd(), 'temp_migration.sql');
  fs.writeFileSync(tempSqlPath, sqlContent);
  
  const executeResult = executeCommand(`npx prisma db execute --file=${tempSqlPath} --schema=./prisma/schema.prisma`);
  
  // Clean up temp file
  if (fs.existsSync(tempSqlPath)) {
    fs.unlinkSync(tempSqlPath);
  }
  
  if (!executeResult.success) {
    log('Error executing migration SQL:', colors.red);
    log(executeResult.stderr || executeResult.error, colors.red);
    process.exit(1);
  }
  
  log('Migration completed successfully!', colors.green);
  log('All date formats should now consistently use MM/DD/YYYY format.', colors.green);
}

// Run the main function
main().catch(error => {
  log('Unexpected error:', colors.red);
  log(error.message, colors.red);
  process.exit(1);
}); 