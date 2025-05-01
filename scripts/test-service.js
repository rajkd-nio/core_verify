// Test script for document service using direct SQLite
const Database = require('better-sqlite3');
const path = require('path');

// Path to database
const dbPath = path.resolve(process.cwd(), 'prisma/dev.db');
console.log(`Using database at: ${dbPath}`);

/**
 * Log data in a formatted way
 */
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
};

/**
 * DocumentService simplified for testing
 */
class DocumentService {
  /**
   * Get all document types 
   */
  static async getAllDocumentTypes() {
    try {
      // Use direct SQLite query
      const db = new Database(dbPath);
      
      try {
        // Query document types and titles
        const query = `
          SELECT dt.id, dt.name, dt.createdAt, dt.updatedAt,
                 dtl.id as title_id, dtl.title, 
                 dtl.requireDocData, dtl.docDataOptions
          FROM document_types dt
          LEFT JOIN document_titles dtl ON dt.id = dtl.documentTypeId
          ORDER BY dt.name ASC
        `;
        
        const results = db.prepare(query).all();
        
        // Transform to expected format
        const transformedTypes = results.map(row => {
          return {
            id: row.id.toString(),
            typeId: row.name.toLowerCase(),
            name: row.title || row.name,
            description: `${row.name} documents`,
            color: this._getColorForType(row.name.toLowerCase()),
            require_license: row.requireDocData === 1,
            require_license_options: row.docDataOptions
          };
        });
        
        logData('FETCHED_ALL_DOCUMENT_TYPES_SQLITE', { count: transformedTypes.length });
        
        return transformedTypes;
      } finally {
        db.close();
      }
    } catch (error) {
      console.error('ERROR_FETCHING_DOCUMENT_TYPES', error);
      throw new Error(`Failed to fetch document types: ${error.message}`);
    }
  }

  /**
   * Get document type by ID
   */
  static async getDocumentTypeByTypeId(typeId) {
    try {
      // Use direct SQLite query
      const db = new Database(dbPath);
      
      try {
        // Query document type and title
        const capitalizedTypeId = this._capitalizeFirstLetter(typeId);
        const query = `
          SELECT dt.id, dt.name, dt.createdAt, dt.updatedAt,
                dtl.id as title_id, dtl.title, 
                dtl.requireDocData, dtl.docDataOptions
          FROM document_types dt
          LEFT JOIN document_titles dtl ON dt.id = dtl.documentTypeId
          WHERE LOWER(dt.name) = LOWER(?)
        `;
        
        const result = db.prepare(query).get(capitalizedTypeId);
        
        if (!result) {
          throw new Error(`Document type not found: ${typeId}`);
        }
        
        // Transform to expected format
        const transformedType = {
          id: result.id.toString(),
          typeId: result.name.toLowerCase(),
          name: result.title || result.name,
          description: `${result.name} documents`,
          color: this._getColorForType(result.name.toLowerCase()),
          require_license: result.requireDocData === 1,
          require_license_options: result.docDataOptions
        };
        
        logData('FETCHED_DOCUMENT_TYPE_SQLITE', { typeId, id: transformedType.id });
        
        return transformedType;
      } finally {
        db.close();
      }
    } catch (error) {
      console.error('ERROR_FETCHING_DOCUMENT_TYPE', error);
      throw new Error(`Failed to fetch document type: ${error.message}`);
    }
  }

  /**
   * Get color for document type
   */
  static _getColorForType(typeId) {
    const colors = {
      certificate: 'success', 
      medical: 'info',
      document: 'primary',
      other: 'secondary'
    };
    
    return colors[typeId] || 'primary';
  }
  
  /**
   * Capitalize first letter
   */
  static _capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

// Run tests
async function runTests() {
  try {
    console.log('Testing getAllDocumentTypes...');
    const types = await DocumentService.getAllDocumentTypes();
    console.log(`Found ${types.length} document types\n`);
    
    console.log('Testing getDocumentTypeByTypeId for "certificate"...');
    const certificate = await DocumentService.getDocumentTypeByTypeId('certificate');
    console.log(`Found certificate with ID: ${certificate.id}\n`);
    
    console.log('Testing getDocumentTypeByTypeId for "medical"...');
    const medical = await DocumentService.getDocumentTypeByTypeId('medical');
    console.log(`Found medical with ID: ${medical.id}\n`);
    
    console.log('Tests completed successfully!');
  } catch (error) {
    console.error('Test failed:', error);
  }
}

// Run the tests
runTests(); 