/**
 * Fix column mapping issues between Prisma schema and SQLite database
 */
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

// Path to database
const dbPath = path.resolve(process.cwd(), 'prisma/dev.db');
console.log(`Working on database at: ${dbPath}`);

if (!fs.existsSync(dbPath)) {
  console.error('Database file not found!');
  process.exit(1);
}

// Create and connect to database
const db = new Database(dbPath);
console.log('Connected to database');

try {
  // Begin transaction
  db.exec('BEGIN TRANSACTION');

  // Get current table structure
  console.log('Checking current table structure...');
  
  // Table mapping data - maps the table name and column mapping
  const tableMappings = [
    {
      table: 'document_types',
      columns: [
        { from: 'created_at', to: 'createdAt' },
        { from: 'updated_at', to: 'updatedAt' }
      ]
    },
    {
      table: 'document_titles',
      columns: [
        { from: 'created_at', to: 'createdAt' },
        { from: 'updated_at', to: 'updatedAt' },
        { from: 'document_type_id', to: 'documentTypeId' },
        { from: 'is_display', to: 'isDisplay' },
        { from: 'require_number', to: 'requireNumber' },
        { from: 'require_valid_date', to: 'requireValidDate' },
        { from: 'require_expire_date', to: 'requireExpireDate' },
        { from: 'require_doc_data', to: 'requireDocData' },
        { from: 'doc_data_options', to: 'docDataOptions' },
        { from: 'doc_data_name', to: 'docDataName' },
        { from: 'require_attachment_front', to: 'requireAttachmentFront' },
        { from: 'require_attachment_back', to: 'requireAttachmentBack' }
      ]
    },
    {
      table: 'document_fields',
      columns: [
        { from: 'created_at', to: 'createdAt' },
        { from: 'updated_at', to: 'updatedAt' },
        { from: 'field_id', to: 'fieldId' },
        { from: 'full_width', to: 'fullWidth' },
        { from: 'default_value', to: 'defaultValue' },
        { from: 'conditional_display', to: 'conditionalDisplay' },
        { from: 'help_text', to: 'helpText' },
        { from: 'document_type_id', to: 'documentTypeId' },
        { from: 'document_title_id', to: 'documentTitleId' }
      ]
    },
    {
      table: 'document_configurations',
      columns: [
        { from: 'created_at', to: 'createdAt' },
        { from: 'updated_at', to: 'updatedAt' },
        { from: 'region_id', to: 'regionId' },
        { from: 'document_type_id', to: 'documentTypeId' },
        { from: 'document_title_id', to: 'documentTitleId' },
        { from: 'type_of_condition', to: 'typeOfCondition' }
      ]
    },
    {
      table: 'regions',
      columns: [
        { from: 'created_at', to: 'createdAt' },
        { from: 'updated_at', to: 'updatedAt' }
      ]
    }
  ];

  // Check each table and modify if needed
  for (const mapping of tableMappings) {
    const tableName = mapping.table;
    console.log(`\nProcessing table: ${tableName}`);
    
    // Check if table exists
    const tableExists = db.prepare(`
      SELECT name FROM sqlite_master WHERE type='table' AND name=?
    `).get(tableName);
    
    if (!tableExists) {
      console.log(`Table ${tableName} does not exist, skipping...`);
      continue;
    }
    
    // Get table columns
    const tableInfo = db.prepare(`PRAGMA table_info(${tableName})`).all();
    console.log(`Found ${tableInfo.length} columns in ${tableName}`);
    
    // Check if columns from mappings exist in the table
    const columnsToRename = [];
    for (const col of mapping.columns) {
      const columnExists = tableInfo.some(info => info.name === col.from);
      const columnAlreadyRenamed = tableInfo.some(info => info.name === col.to);
      
      if (columnExists && !columnAlreadyRenamed) {
        columnsToRename.push(col);
      } else if (columnAlreadyRenamed) {
        console.log(`Column ${col.to} already exists, skipping...`);
      } else if (!columnExists) {
        console.log(`Column ${col.from} does not exist in table ${tableName}, skipping...`);
      }
    }
    
    if (columnsToRename.length === 0) {
      console.log(`No columns to rename in ${tableName}, skipping...`);
      continue;
    }
    
    // Create a new table with correct column names
    const tempTableName = `${tableName}_temp`;
    console.log(`Creating temporary table ${tempTableName}...`);
    
    // Get CREATE TABLE statement
    const createTableStmt = db.prepare(`
      SELECT sql FROM sqlite_master WHERE type='table' AND name=?
    `).get(tableName);
    
    if (!createTableStmt) {
      console.error(`Could not get CREATE TABLE statement for ${tableName}`);
      continue;
    }
    
    // Modify CREATE TABLE statement to use new column names
    let newCreateTableStmt = createTableStmt.sql;
    for (const col of columnsToRename) {
      newCreateTableStmt = newCreateTableStmt.replace(
        new RegExp(`"${col.from}"`, 'g'), 
        `"${col.to}"`
      );
    }
    
    // Create temporary table with new column names
    newCreateTableStmt = newCreateTableStmt.replace(
      new RegExp(`CREATE TABLE ${tableName}`, 'i'),
      `CREATE TABLE ${tempTableName}`
    );
    
    db.exec(newCreateTableStmt);
    console.log(`Created temporary table ${tempTableName}`);
    
    // Copy data from old table to new table
    // Get column list for both tables
    const oldColumns = tableInfo.map(col => `"${col.name}"`).join(', ');
    
    // Create renamed column list, keeping original names for columns that aren't being renamed
    const newColumns = tableInfo.map(col => {
      const renamed = columnsToRename.find(r => r.from === col.name);
      return renamed ? `"${renamed.to}"` : `"${col.name}"`;
    }).join(', ');
    
    // Insert data with correct column mapping
    try {
      db.exec(`
        INSERT INTO ${tempTableName} (${newColumns})
        SELECT ${oldColumns} FROM ${tableName}
      `);
      console.log(`Copied data from ${tableName} to ${tempTableName}`);
      
      // Drop old table
      db.exec(`DROP TABLE ${tableName}`);
      console.log(`Dropped old table ${tableName}`);
      
      // Rename new table
      db.exec(`ALTER TABLE ${tempTableName} RENAME TO ${tableName}`);
      console.log(`Renamed ${tempTableName} to ${tableName}`);
      
      // Recreate indexes
      const indexes = db.prepare(`
        SELECT name, sql FROM sqlite_master 
        WHERE type='index' AND tbl_name=? AND name NOT LIKE 'sqlite_%'
      `).all(tableName);
      
      for (const index of indexes) {
        if (!index.sql) continue;
        
        let newIndexStmt = index.sql;
        for (const col of columnsToRename) {
          newIndexStmt = newIndexStmt.replace(
            new RegExp(`"${col.from}"`, 'g'), 
            `"${col.to}"`
          );
        }
        
        db.exec(newIndexStmt);
        console.log(`Recreated index ${index.name}`);
      }
    } catch (err) {
      console.error(`Error copying data for table ${tableName}:`, err);
      throw err;
    }
  }
  
  // Commit transaction
  db.exec('COMMIT');
  console.log('\nDatabase structure successfully updated to match Prisma schema!');
  
} catch (error) {
  // Rollback on error
  db.exec('ROLLBACK');
  console.error('Error updating database structure:', error);
  process.exit(1);
} finally {
  db.close();
} 