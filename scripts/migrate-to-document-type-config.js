/**
 * Migration script to move from individual document types to the central configuration
 * This script:
 * 1. Loads existing document types from database
 * 2. Creates an initial document types configuration file
 * 3. Validates the configuration against the database
 */

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

/**
 * Map field type to desired format
 * @param {String} fieldType - Original field type
 * @returns {String} - Mapped field type
 */
const mapFieldType = (fieldType) => {
  const typeMap = {
    'string': 'text',
    'number': 'number',
    'boolean': 'checkbox',
    'array': 'select',
    'object': 'fieldset',
    'date': 'date',
    'file': 'file',
    'textarea': 'textarea'
  };
  
  return typeMap[fieldType] || fieldType;
};

/**
 * Convert DocumentTitle to child type structure
 * @param {Object} documentTitle - Document title record
 * @param {Array} formFields - Form fields (if any)
 * @returns {Object} - Child type configuration
 */
const convertToChildType = (documentTitle, formFields = []) => {
  // Create unique ID from title (lowercase, replace spaces with underscores)
  const id = documentTitle.title
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
  
  // Default fields for this child type
  let fields = [];
  
  // If we have form fields from JSON, use those
  if (documentTitle.formFields) {
    try {
      const parsedFields = typeof documentTitle.formFields === 'string'
        ? JSON.parse(documentTitle.formFields)
        : documentTitle.formFields;
      
      if (Array.isArray(parsedFields)) {
        fields = parsedFields;
      } else if (parsedFields && parsedFields.fields && Array.isArray(parsedFields.fields)) {
        fields = parsedFields.fields;
      }
    } catch (e) {
      console.error(`Error parsing formFields for ${documentTitle.title}:`, e);
    }
  } 
  // If we have separate form fields, use those
  else if (formFields && formFields.length > 0) {
    fields = formFields.map(field => ({
      id: field.fieldName,
      name: field.fieldName,
      type: mapFieldType(field.type),
      label: field.label,
      placeholder: field.placeholder || `Enter ${field.label.toLowerCase()}`,
      required: field.required,
      order: field.order,
      fullWidth: field.fullWidth,
      hidden: field.hidden,
      defaultValue: field.defaultValue,
      options: field.options,
      validation: field.validation,
      conditionalDisplay: field.conditionalShow,
      helpText: field.helpText
    }));
  } 
  // Otherwise, create standard fields based on document title properties
  else {
    // Add fields based on requirements
    if (documentTitle.requireNumber) {
      fields.push({
        id: "documentNumber",
        name: "documentNumber",
        type: "text",
        label: "Document Number",
        placeholder: "Enter document number",
        required: true,
        order: 1,
        fullWidth: true
      });
    }
    
    if (documentTitle.requireValidDate) {
      fields.push({
        id: "validDate",
        name: "validDate",
        type: "date",
        label: "Valid Date",
        placeholder: "Select valid date",
        required: true,
        order: 2,
        fullWidth: true
      });
    }
    
    if (documentTitle.requireExpireDate) {
      fields.push({
        id: "expirationDate",
        name: "expirationDate",
        type: "date",
        label: "Expiration Date",
        placeholder: "Select expiration date",
        required: true,
        order: 3,
        fullWidth: true
      });
    }
    
    if (documentTitle.requireDocData && documentTitle.docDataName) {
      let options = [];
      try {
        if (documentTitle.docDataOptions) {
          if (typeof documentTitle.docDataOptions === 'string') {
            options = JSON.parse(documentTitle.docDataOptions);
          } else {
            options = documentTitle.docDataOptions.options || documentTitle.docDataOptions;
          }
        }
      } catch (e) {
        console.error(`Error parsing docDataOptions for ${documentTitle.title}:`, e);
      }
      
      fields.push({
        id: "docData",
        name: "docData",
        type: "select",
        label: documentTitle.docDataName,
        placeholder: `Select ${documentTitle.docDataName.toLowerCase()}`,
        required: true,
        order: 4,
        fullWidth: true,
        options: options
      });
    }
  }
  
  return {
    id,
    name: documentTitle.title,
    fields
  };
};

/**
 * Map document type name to parent type
 * @param {String} typeName - Document type name
 * @returns {String} - Parent type ID
 */
const mapToParentType = (typeName) => {
  const typeLower = typeName.toLowerCase();
  
  if (typeLower.includes('mandatory') || typeLower.includes('certificate') || typeLower.includes('license')) {
    return 'mandatory';
  } else if (typeLower.includes('document')) {
    return 'documents';
  } else if (typeLower.includes('vaccination') || typeLower.includes('medical')) {
    return 'vaccination_record';
  } else {
    return 'other';
  }
};

/**
 * Main migration function
 */
async function migrateToConfig() {
  try {
    console.log('Starting migration to document type configuration...');
    
    // 1. Load existing document types and titles
    const documentTypes = await prisma.documentType.findMany({
      include: {
        documentTitles: {
          where: { isDisplay: true }
        }
      }
    });
    
    console.log(`Found ${documentTypes.length} document types`);
    
    // 2. Initialize parent document types
    const parentTypes = [
      {
        id: 'mandatory',
        name: 'Mandatory',
        description: 'Essential professional documents',
        childTypes: []
      },
      {
        id: 'documents',
        name: 'Documents',
        description: 'General supporting documents',
        childTypes: []
      },
      {
        id: 'vaccination_record',
        name: 'Vaccination Record',
        description: 'Medical and vaccination records',
        childTypes: []
      },
      {
        id: 'other',
        name: 'Other',
        description: 'Additional supporting documents',
        childTypes: []
      }
    ];
    
    // 3. Load all form fields
    const formFields = await prisma.formField.findMany();
    console.log(`Found ${formFields.length} form fields`);
    
    // Group form fields by document title ID
    const fieldsByTitleId = {};
    formFields.forEach(field => {
      if (!fieldsByTitleId[field.documentTitleId]) {
        fieldsByTitleId[field.documentTitleId] = [];
      }
      fieldsByTitleId[field.documentTitleId].push(field);
    });
    
    // 4. Convert document types to child types
    for (const docType of documentTypes) {
      const parentTypeId = mapToParentType(docType.name);
      console.log(`Mapping "${docType.name}" to parent type "${parentTypeId}"`);
      
      // Find the parent type
      const parentType = parentTypes.find(pt => pt.id === parentTypeId);
      if (!parentType) {
        console.warn(`Could not find parent type for "${docType.name}", skipping...`);
        continue;
      }
      
      // Create child types from document titles
      for (const title of docType.documentTitles) {
        const titleFields = fieldsByTitleId[title.id] || [];
        const childType = convertToChildType(title, titleFields);
        
        // Add to parent type's childTypes
        parentType.childTypes.push(childType);
        
        console.log(`Added child type "${childType.name}" to parent "${parentType.name}"`);
      }
    }
    
    // 5. Save the configuration to a file
    const configDir = path.join(process.cwd(), 'config');
    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true });
    }
    
    const configPath = path.join(configDir, 'documentTypes.json');
    fs.writeFileSync(
      configPath, 
      JSON.stringify({ documentTypes: parentTypes }, null, 2)
    );
    
    console.log(`Configuration saved to ${configPath}`);
    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the migration
migrateToConfig(); 