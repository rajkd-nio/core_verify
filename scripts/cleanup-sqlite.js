/**
 * Cleanup script to remove SQLite database files after PostgreSQL migration
 * Run with: node scripts/cleanup-sqlite.js
 */
const fs = require('fs');
const path = require('path');

// Path to SQLite database
const SQLITE_DB_PATH = path.join(__dirname, '../prisma/dev.db');
const SQLITE_DB_JOURNAL = path.join(__dirname, '../prisma/dev.db-journal');
const SQLITE_SCHEMA_BACKUP = path.join(__dirname, '../prisma/schema.prisma.sqlite');
const SQLITE_MIGRATIONS = path.join(__dirname, '../prisma/migrations');

// Function to safely delete a file if it exists
function safelyDeleteFile(filePath) {
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`Deleted file: ${filePath}`);
      return true;
    } catch (error) {
      console.error(`Error deleting file ${filePath}:`, error.message);
      return false;
    }
  } else {
    console.log(`File not found, skipping: ${filePath}`);
    return true;
  }
}

// Function to safely delete a directory and its contents
function safelyDeleteDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    try {
      // Check if we need to recursively delete contents
      const stat = fs.statSync(dirPath);
      if (stat.isDirectory()) {
        // Get all files in the directory
        const files = fs.readdirSync(dirPath);
        
        // Recursively delete each file/subdirectory
        for (const file of files) {
          const filePath = path.join(dirPath, file);
          
          // Check if it's a directory or file
          if (fs.statSync(filePath).isDirectory()) {
            safelyDeleteDir(filePath);
          } else {
            fs.unlinkSync(filePath);
          }
        }
        
        // Now remove the empty directory
        fs.rmdirSync(dirPath);
        console.log(`Deleted directory: ${dirPath}`);
      }
      return true;
    } catch (error) {
      console.error(`Error deleting directory ${dirPath}:`, error.message);
      return false;
    }
  } else {
    console.log(`Directory not found, skipping: ${dirPath}`);
    return true;
  }
}

// Main cleanup function
function cleanupSqlite() {
  console.log('Starting SQLite cleanup...');
  
  // First, try to backup SQLite schema if needed
  const needBackup = fs.existsSync(SQLITE_DB_PATH) && !fs.existsSync(SQLITE_SCHEMA_BACKUP);
  if (needBackup) {
    try {
      console.log('Backing up SQLite schema...');
      const schemaPath = path.join(__dirname, '../prisma/schema.prisma');
      if (fs.existsSync(schemaPath)) {
        fs.copyFileSync(schemaPath, SQLITE_SCHEMA_BACKUP);
        console.log('Schema backup created successfully!');
      }
    } catch (error) {
      console.error('Error backing up SQLite schema:', error.message);
    }
  }
  
  // Delete the SQLite database files
  const dbDeleted = safelyDeleteFile(SQLITE_DB_PATH);
  const journalDeleted = safelyDeleteFile(SQLITE_DB_JOURNAL);
  
  // Delete or backup the migrations if PostgreSQL migrations were created
  const pgMigrationsExist = fs.existsSync(path.join(SQLITE_MIGRATIONS, '..', 'postgresql-migrations-created.flag'));
  if (pgMigrationsExist && fs.existsSync(SQLITE_MIGRATIONS)) {
    console.log('Cleaning up SQLite migrations...');
    
    // Option: Backup migrations first
    const backupDir = path.join(__dirname, '../prisma/migrations-sqlite-backup');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    
    // Copy migrations to backup
    const files = fs.readdirSync(SQLITE_MIGRATIONS);
    for (const file of files) {
      const srcPath = path.join(SQLITE_MIGRATIONS, file);
      const destPath = path.join(backupDir, file);
      
      if (fs.statSync(srcPath).isDirectory()) {
        fs.mkdirSync(destPath, { recursive: true });
        const subfiles = fs.readdirSync(srcPath);
        for (const subfile of subfiles) {
          const subSrcPath = path.join(srcPath, subfile);
          const subDestPath = path.join(destPath, subfile);
          fs.copyFileSync(subSrcPath, subDestPath);
        }
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
    
    // Now delete the migrations directory
    safelyDeleteDir(SQLITE_MIGRATIONS);
  }
  
  console.log('\nSQLite cleanup completed!');
  
  if (dbDeleted && journalDeleted) {
    console.log('\nAll SQLite database files have been removed.');
    console.log('The project is now fully migrated to PostgreSQL.');
  } else {
    console.log('\nSome SQLite files could not be removed. Check the logs for details.');
  }
}

// Run the cleanup
cleanupSqlite(); 