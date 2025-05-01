import { PrismaClient } from '../../app/generated/prisma';
const fs = require('fs');
const path = require('path');

// Initialize Prisma client
const prisma = new PrismaClient();

/**
 * Helper function to log data
 * @param {string} label - Log label
 * @param {any} data - Data to log
 */
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
};

/**
 * Map NurseIO document types to CoreVerify document types
 * @param {string} nurseIOType - NurseIO document type
 * @returns {string} - CoreVerify document type name
 */
const mapDocumentType = (nurseIOType) => {
  // Map from NurseIO type to CoreVerify type
  const typeMap = {
    // Original mappings
    'certificate': 'mandatory',
    'document': 'documents',
    'medical': 'vaccination_record',
    'other': 'other',
    
    // New mappings (since NurseIO now uses the same names as CoreVerify)
    'mandatory': 'mandatory',
    'documents': 'documents',
    'vaccination_record': 'vaccination_record'
    // 'other' already maps to 'other'
  };
  
  // Check if the nurseIOType is in the map
  const mappedType = typeMap[nurseIOType] || nurseIOType;
  
  // Log the mapping for debugging
  console.log(`Mapping document type: ${nurseIOType} -> ${mappedType}`);
  
  return mappedType;
};

/**
 * Convert DocType/DocTitle to form schema format
 * @param {Object} documentType - Document type record from database
 * @param {Object} documentTitle - Document title record from database
 * @returns {Object} - Form schema
 */
const convertToFormSchema = (documentType, documentTitle) => {
  const typeId = documentType.name.toLowerCase();
  
  try {
    // Generate a dynamic form schema based on document title properties
  const formSchema = {
      title: `${documentTitle.title} Form Schema`,
      description: `Schema for ${documentTitle.title.toLowerCase()} upload form fields`,
      formId: `${typeId}-form`,
      documentType: typeId,
    hideHeader: true,
    showFormButtons: false,
    fields: []
  };

    // Add title field (always required)
    formSchema.fields.push({
      id: "certificateAbbreviation",
      name: "certificateAbbreviation",
      type: "text",
      label: `${documentTitle.title} Title`,
      placeholder: `Enter ${documentTitle.title.toLowerCase()} title`,
      required: true,
      order: 1,
      fullWidth: true,
      validation: {
        minLength: 3,
        maxLength: 100,
        pattern: "^[A-Za-z0-9\\s\\-\\.\\(\\)]+$",
        message: `Title must be between 3-100 characters`
      }
    });
    
    // Add specialities/categories field
    formSchema.fields.push({
      id: "specialities",
      name: "specialities",
      type: "text",
      label: documentType.name === "Mandatory" ? "Specialities" : "Categories",
      placeholder: `Enter ${documentType.name.toLowerCase() === "mandatory" ? "specialities" : "categories"}`,
      required: false,
      order: 2,
      fullWidth: true
    });
    
    // Add number field if required
    if (documentTitle.requireNumber) {
      formSchema.fields.push({
        id: "certLicenseNumber",
        name: "certLicenseNumber",
        type: "text",
        label: documentType.name === "Mandatory" ? "Certificate/License Number" : "Document Number/ID",
        placeholder: `Enter ${documentType.name === "Mandatory" ? "certificate/license number" : "document number/ID"}`,
        required: true,
        order: 3,
        fullWidth: true,
        validation: {
          pattern: "^[A-Za-z0-9\\-\\.\\/]+$",
          message: "Can only contain letters, numbers, hyphens, periods, and slashes"
        }
      });
    }
    
    // Add valid date field if required
    if (documentTitle.requireValidDate) {
      formSchema.fields.push({
        id: "effectiveDate",
        name: "effectiveDate",
        type: "date",
        label: documentType.name === "Vaccination Record" ? "Record Date" : "Issue Date",
        placeholder: `Select ${documentType.name === "Vaccination Record" ? "record" : "issue"} date`,
        required: true,
        order: 4,
        fullWidth: true,
        validation: {
          notInFuture: true,
          message: "Date cannot be in the future"
        }
      });
    }
    
    // Add expiration date field if required
    if (documentTitle.requireExpireDate) {
      formSchema.fields.push({
        id: "expirationDate",
        name: "expirationDate",
        type: "date",
        label: "Expiration Date",
        placeholder: "Select expiration date",
        required: true,
        order: 5,
        fullWidth: true,
        validation: {
          afterField: "effectiveDate",
          message: "Expiration date must be after issue date"
        }
      });
    }
    
    // Add doc data field if required
    if (documentTitle.requireDocData && documentTitle.docDataName && documentTitle.docDataOptions) {
      try {
        let options = [];
        if (typeof documentTitle.docDataOptions === 'string') {
          options = JSON.parse(documentTitle.docDataOptions);
        } else if (documentTitle.docDataOptions.options) {
          options = documentTitle.docDataOptions.options;
        }
        
        formSchema.fields.push({
          id: "docData",
          name: "docData",
          type: "select",
          label: documentTitle.docDataName,
          placeholder: `Select ${documentTitle.docDataName.toLowerCase()}`,
          required: true,
          order: 6,
          fullWidth: true,
          options: options
        });
      } catch (e) {
        console.error('Error parsing docDataOptions:', e);
      }
    }
    
    // Add file upload field (always required)
    formSchema.fields.push({
      id: "fileUpload",
      name: "fileUpload",
      type: "file",
      label: `Upload ${documentTitle.title} (PDF, JPG, PNG)`,
      accept: ".pdf,.jpg,.jpeg,.png",
      required: true,
      order: 7,
      fullWidth: true,
      validation: {
        maxSize: 10000000,
        fileTypes: ["application/pdf", "image/jpeg", "image/png"],
        message: "Please upload a PDF, JPG, or PNG file less than 10MB"
      }
    });
    
    // Add back side upload if required
    if (documentTitle.requireAttachmentBack) {
      formSchema.fields.push({
        id: "fileUploadBack",
        name: "fileUploadBack",
        type: "file",
        label: `Upload ${documentTitle.title} Back Side (PDF, JPG, PNG)`,
        accept: ".pdf,.jpg,.jpeg,.png",
        required: true,
        order: 8,
        fullWidth: true,
        validation: {
          maxSize: 10000000,
          fileTypes: ["application/pdf", "image/jpeg", "image/png"],
          message: "Please upload a PDF, JPG, or PNG file less than 10MB"
        }
      });
    }
    
    // Add notes field
    formSchema.fields.push({
      id: "notes",
      name: "notes",
      type: "textarea",
      label: "Notes",
      placeholder: "Enter notes or description",
      required: false,
      order: 9,
      fullWidth: true,
      rows: 3
    });
    
    // Add shareable checkbox
    formSchema.fields.push({
      id: "shareable",
      name: "shareable",
      type: "checkbox",
      label: "Shareable",
      defaultValue: documentTitle.shareable,
      required: false,
      order: 10,
      fullWidth: true
  });

  // Sort fields by order
    formSchema.fields.sort((a, b) => a.order - b.order);

    // Add form buttons and messages
    formSchema.submitButtonText = "Submit";
  formSchema.cancelButtonText = "Cancel";
  formSchema.deleteButtonText = "Delete";
    formSchema.successMessage = `${documentTitle.title} uploaded successfully!`;
    formSchema.errorMessage = `There was an error uploading your ${documentTitle.title.toLowerCase()}. Please try again.`;

  return formSchema;
  } catch (error) {
    console.error(`Failed to generate form schema:`, error);
    
    // Fallback to JSON file if it exists
    try {
      // Try to load from JSON file as fallback
      const formData = require(`../../formdata/${typeId}.json`);
      return formData.form;
    } catch (jsonError) {
      // Return a basic schema if all else fails
      return {
        title: `${documentTitle.title} Form Schema`,
        description: `Schema for ${documentTitle.title.toLowerCase()} upload form fields`,
        formId: `${typeId}-form`,
        documentType: typeId,
        hideHeader: true,
        showFormButtons: false,
        fields: [
          {
            id: "certificateAbbreviation",
            name: "certificateAbbreviation",
            type: "text",
            label: "Document Title",
            placeholder: "Enter document title",
            required: true,
            order: 1,
            fullWidth: true
          },
          {
            id: "fileUpload",
            name: "fileUpload",
            type: "file",
            label: "Upload Document",
            accept: ".pdf,.jpg,.jpeg,.png",
            required: true,
            order: 2,
            fullWidth: true
          }
        ],
        submitButtonText: "Submit",
        cancelButtonText: "Cancel",
        deleteButtonText: "Delete",
        successMessage: "Document uploaded successfully!",
        errorMessage: "There was an error uploading your document. Please try again."
      };
    }
  }
};

/**
 * Service class for document type operations
 */
export class DocumentService {
  /**
   * Get all document types
   * @returns {Promise<Array>} - All document types
   */
  static async getAllDocumentTypes() {
    try {
      // Use direct SQLite connection if Prisma fails
    try {
      const documentTypes = await prisma.documentType.findMany({
          include: {
            documentTitles: true
          },
        orderBy: { name: 'asc' }
      });
      
        // Transform to expected format
        const transformedTypes = documentTypes.map(type => {
          const title = type.documentTitles[0]; // Assuming one title per type
          return {
            id: type.id.toString(),
            typeId: type.name.toLowerCase(),
            name: title ? title.title : type.name,
            description: `${type.name} documents`,
            color: this._getColorForType(type.name.toLowerCase()),
            require_license: title ? title.requireDocData : false,
            require_license_options: title && title.docDataOptions ? title.docDataOptions : null
          };
        });
        
        logData('FETCHED_ALL_DOCUMENT_TYPES', { count: transformedTypes.length });
        
        return transformedTypes;
      } catch (error) {
        // If Prisma fails, use direct SQLite
        logData('PRISMA_ERROR_SWITCHING_TO_SQLITE', { error: error.message });
        
        // Use direct SQLite query
        const Database = require('better-sqlite3');
        const path = require('path');
        const dbPath = path.resolve(process.cwd(), 'prisma/dev.db');
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
      }
    } catch (error) {
      logData('ERROR_FETCHING_DOCUMENT_TYPES', { error: error.message });
      throw new Error(`Failed to fetch document types: ${error.message}`);
    }
  }

  /**
   * Get document type by ID
   * @param {string} typeId - Type ID (e.g., 'certificate', 'medical')
   * @returns {Promise<Object>} - Document type
   */
  static async getDocumentTypeByTypeId(typeId) {
    try {
      // Map the typeId to CoreVerify format if needed
      const mappedTypeId = mapDocumentType(typeId);
      
      logData('GETTING_DOCUMENT_TYPE', { 
        originalTypeId: typeId,
        mappedTypeId
      });
      
      // Try using Prisma first
      try {
        const documentType = await prisma.documentType.findFirst({
          where: { 
            name: { 
              equals: this._capitalizeFirstLetter(mappedTypeId),
              mode: 'insensitive'
            }
          },
          include: {
            documentTitles: true
          }
      });

      if (!documentType) {
        throw new Error(`Document type not found: ${typeId}`);
      }
      
        // Transform to expected format
        const title = documentType.documentTitles[0]; // Assuming one title per type
        const transformedType = {
          id: documentType.id.toString(),
          typeId: documentType.name.toLowerCase(),
          name: title ? title.title : documentType.name,
          description: `${documentType.name} documents`,
          color: this._getColorForType(documentType.name.toLowerCase()),
          require_license: title ? title.requireDocData : false,
          require_license_options: title && title.docDataOptions ? title.docDataOptions : null
        };
        
        logData('FETCHED_DOCUMENT_TYPE', { typeId, id: transformedType.id });
        
        return transformedType;
      } catch (error) {
        // If Prisma fails, use direct SQLite
        logData('PRISMA_ERROR_SWITCHING_TO_SQLITE', { error: error.message, method: 'getDocumentTypeByTypeId' });
        
        // Use direct SQLite query
        const Database = require('better-sqlite3');
        const path = require('path');
        const dbPath = path.resolve(process.cwd(), 'prisma/dev.db');
        const db = new Database(dbPath);
        
        try {
          // Query document type and title
          const capitalizedTypeId = this._capitalizeFirstLetter(mappedTypeId);
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
      }
    } catch (error) {
      logData('ERROR_FETCHING_DOCUMENT_TYPE', { typeId, error: error.message });
      throw new Error(`Failed to fetch document type: ${error.message}`);
    }
  }

  /**
   * Get form schema by document type
   * @param {string} typeId - Type ID (e.g., 'certificate', 'medical')
   * @param {Object} options - Additional options (locationId, childTypeId, etc.)
   * @returns {Promise<Object>} - Form schema
   */
  static async getFormSchemaByTypeId(typeId, options = {}) {
    try {
      logData('FETCHING_FORM_SCHEMA', { 
        originalTypeId: typeId,
        options
      });
      
      // If childTypeId is provided, use the new method to get schema for specific subtype
      if (options.childTypeId) {
        return await this.getFormSchemaByTypeAndSubType(typeId, options.childTypeId, options);
      }
      
      // Map NurseIO type to CoreVerify type
      const mappedTypeId = mapDocumentType(typeId);
      
      logData('MAPPED_TYPE_ID', { 
        originalTypeId: typeId,
        mappedTypeId: mappedTypeId,
        locationId: options.locationId
      });
      
      // First, check if this type exists in the global configuration
      const config = this._loadDocumentTypesConfig();
      const globalDocType = config.documentTypes.find(
        dt => dt.id.toLowerCase() === mappedTypeId.toLowerCase()
      );
      
      // If found in global config and has child types, return a special schema that prompts for child type selection
      if (globalDocType && globalDocType.childTypes && globalDocType.childTypes.length > 0) {
        const childTypeOptions = globalDocType.childTypes.map(childType => ({
          value: childType.id,
          label: childType.name
        }));
        
        return {
          title: `Select ${globalDocType.name} Type`,
          description: `Please select the specific type of ${globalDocType.name.toLowerCase()} document you want to upload`,
          formId: `${typeId.toLowerCase()}-select-form`,
          documentType: typeId.toLowerCase(),
          hideHeader: false,
          showFormButtons: true,
          isChildTypeSelector: true,
          fields: [
            {
              id: "childDocumentType",
              name: "childDocumentType",
              type: "select",
              label: `${globalDocType.name} Type`,
              placeholder: `Select ${globalDocType.name.toLowerCase()} type`,
              required: true,
              order: 1,
              fullWidth: true,
              options: childTypeOptions
            }
          ],
          submitButtonText: "Continue",
          cancelButtonText: "Cancel"
        };
      }
      
      // If not found in global config or doesn't have child types, continue with existing flow
      // First, find the document type in the database
      const documentType = await prisma.documentType.findFirst({
        where: { 
          name: { 
            equals: mappedTypeId,
            mode: 'insensitive'
          }
        }
      });
      
      if (!documentType) {
        throw new Error(`Document type not found: ${mappedTypeId}`);
      }
      
      let formSchema = {
        title: `${mappedTypeId} Form Schema`,
        description: `Schema for ${mappedTypeId.toLowerCase()}`,
        formId: documentType.formId || `${typeId.toLowerCase()}-form`,
        documentType: typeId.toLowerCase(),
        hideHeader: documentType.hideHeader || false,
        showFormButtons: documentType.showFormButtons !== false,
        fields: []
      };
      
      // Handle location-specific configuration
      let documentTitle;
      let locationSpecificFields = [];
      
      // If locationId is provided, try to get location-specific document configurations
      if (options.locationId) {
        try {
          // Find region by location ID
          const region = await this._getRegionByLocationId(options.locationId);
            
            if (region) {
            // Find document configurations for this region and document type
              const documentConfigurations = await prisma.documentConfiguration.findMany({
                where: {
                  regionId: region.id,
                documentType: {
                  name: {
                    equals: mappedTypeId,
                    mode: 'insensitive'
                  }
                },
                  active: true
                },
                include: {
                documentTitle: true,
                documentType: true
                },
                orderBy: {
                  priority: 'desc'
                }
              });
              
              if (documentConfigurations.length > 0) {
                // Use the first matching document title
                documentTitle = documentConfigurations[0].documentTitle;
                
                // Check for custom field overrides in the configuration
                if (documentConfigurations[0].customFields) {
                  try {
                    const customFieldsData = documentConfigurations[0].customFields;
                    locationSpecificFields = Array.isArray(customFieldsData) ? customFieldsData : [];
                  } catch (e) {
                    console.error('Error parsing custom fields:', e);
                  }
                }
                
              // If the document title has formFields as JSON, parse and use those
              if (documentTitle.formFields) {
                try {
                  let fieldsData = documentTitle.formFields;
                  // Parse if it's a string
                  if (typeof fieldsData === 'string') {
                    fieldsData = JSON.parse(fieldsData);
                  }
                  
                  // If it's an array, use directly; otherwise check for fields property
                  const fields = Array.isArray(fieldsData) ? fieldsData : (fieldsData.fields || []);
                  
                  // Add each field to the schema
                  fields.forEach(field => {
                    formSchema.fields.push(field);
                  });
                  
                  logData('USING_JSON_FORM_FIELDS', { 
                    documentTitle: documentTitle.title,
                    fieldCount: fields.length
                  });
                } catch (e) {
                  console.error('Error parsing formFields JSON:', e);
                }
              }
            }
          }
        } catch (error) {
          logData('ERROR_FETCHING_LOCATION_CONFIG', { error: error.message });
          // Continue without location-specific config
        }
      }
      
      // If we don't have a document title yet, get the default one
      if (!documentTitle) {
        try {
          const defaultTitle = await prisma.documentTitle.findFirst({
            where: { 
              documentTypeId: documentType.id,
              isDisplay: true
            },
            orderBy: {
              id: 'asc'  // Get the first one by ID
            }
          });
          
          if (defaultTitle) {
            documentTitle = defaultTitle;
            
            // If the document title has formFields as JSON, parse and use those
            if (defaultTitle.formFields) {
              try {
                let fieldsData = defaultTitle.formFields;
                // Parse if it's a string
                if (typeof fieldsData === 'string') {
                  fieldsData = JSON.parse(fieldsData);
                }
                
                // If it's an array, use directly; otherwise check for fields property
                const fields = Array.isArray(fieldsData) ? fieldsData : (fieldsData.fields || []);
                
                // Add each field to the schema
                fields.forEach(field => {
                  formSchema.fields.push(field);
                });
                
                logData('USING_DEFAULT_JSON_FORM_FIELDS', { 
                  documentTitle: defaultTitle.title,
                  fieldCount: fields.length
                });
              } catch (e) {
                console.error('Error parsing default formFields JSON:', e);
              }
            }
          }
        } catch (error) {
          logData('ERROR_FETCHING_DEFAULT_TITLE', { error: error.message });
        }
      }
      
      // If we have a document title but no fields yet, generate standard fields
      if (documentTitle && formSchema.fields.length === 0) {
        // Use custom form title/description if available
        if (documentTitle.formTitle) {
          formSchema.title = documentTitle.formTitle;
        }
        
        if (documentTitle.formDescription) {
          formSchema.description = documentTitle.formDescription;
        }
        
        // Add title field (always required)
        formSchema.fields.push({
          id: "certificateAbbreviation",
          name: "certificateAbbreviation",
          type: "text",
          label: `${documentTitle.title} Title`,
          placeholder: `Enter ${documentTitle.title.toLowerCase()} title`,
          required: true,
          order: 1,
          fullWidth: true,
          validation: {
            minLength: 3,
            maxLength: 100,
            pattern: "^[A-Za-z0-9\\s\\-\\.\\(\\)]+$",
            message: `Title must be between 3-100 characters`
          }
        });
        
        // Add specialities/categories field
        formSchema.fields.push({
          id: "specialities",
          name: "specialities",
          type: "text",
          label: documentType.name === "Mandatory" ? "Specialities" : "Categories",
          placeholder: `Enter ${documentType.name.toLowerCase() === "mandatory" ? "specialities" : "categories"}`,
          required: false,
          order: 2,
          fullWidth: true
        });
        
        // Add document number field if required by document title
        if (documentTitle.requireNumber) {
          formSchema.fields.push({
            id: "certLicenseNumber",
            name: "certLicenseNumber",
            type: "text",
            label: `${documentTitle.title} Number`,
            placeholder: `Enter ${documentTitle.title.toLowerCase()} number`,
            required: true,
            order: 3,
            fullWidth: true
          });
        }
        
        // Add issue date field if required by document title
        if (documentTitle.requireValidDate) {
          formSchema.fields.push({
            id: "effectiveDate",
            name: "effectiveDate",
            type: "date",
            label: "Issue Date",
            placeholder: "Select issue date",
            required: true,
            order: 4,
            fullWidth: true
          });
        }
        
        // Add expiration date field if required by document title
        if (documentTitle.requireExpireDate) {
          formSchema.fields.push({
            id: "expirationDate",
            name: "expirationDate",
            type: "date",
            label: "Expiration Date",
            placeholder: "Select expiration date",
            required: true,
            order: 5,
            fullWidth: true
          });
        }
        
        // Add doc data field if required
        if (documentTitle.requireDocData && documentTitle.docDataName && documentTitle.docDataOptions) {
          try {
            let options = [];
            if (typeof documentTitle.docDataOptions === 'string') {
              options = JSON.parse(documentTitle.docDataOptions);
            } else {
              options = documentTitle.docDataOptions.options || documentTitle.docDataOptions;
            }
            
            formSchema.fields.push({
              id: "docData",
              name: "docData",
              type: "select",
              label: documentTitle.docDataName,
              placeholder: `Select ${documentTitle.docDataName.toLowerCase()}`,
              required: true,
              order: 6,
              fullWidth: true,
              options: options
            });
          } catch (e) {
            console.error('Error parsing docDataOptions:', e);
          }
        }
        
        // Add file upload field (always required)
        formSchema.fields.push({
          id: "fileUpload",
          name: "fileUpload",
          type: "file",
          label: `Upload ${documentTitle.title} (PDF, JPG, PNG)`,
          accept: ".pdf,.jpg,.jpeg,.png",
          required: true,
          order: 7,
          fullWidth: true,
          validation: {
            maxSize: 10000000,
            fileTypes: ["application/pdf", "image/jpeg", "image/png"],
            message: "Please upload a PDF, JPG, or PNG file less than 10MB"
          }
        });
        
        // Add notes field
          formSchema.fields.push({
          id: "notes",
          name: "notes",
          type: "textarea",
          label: "Additional Notes",
          placeholder: "Enter any additional notes or comments",
          required: false,
            order: 8,
          fullWidth: true
        });
        
        // Add shareable field
        formSchema.fields.push({
          id: "shareable",
          name: "shareable",
          type: "radio",
          label: "Is this document shareable with facilities?",
          required: true,
          order: 9,
            fullWidth: true,
          options: [
            { value: "true", label: "Yes" },
            { value: "false", label: "No" }
          ],
          defaultValue: documentTitle.shareable ? "true" : "false"
        });
      }
      
      // Apply any location-specific field overrides from DocumentConfiguration
        if (locationSpecificFields.length > 0) {
        locationSpecificFields.forEach(customField => {
          // Find if this field already exists in the schema
          const existingFieldIndex = formSchema.fields.findIndex(f => f.id === customField.id);
          
            if (existingFieldIndex >= 0) {
            // Update existing field
              formSchema.fields[existingFieldIndex] = {
                ...formSchema.fields[existingFieldIndex],
              ...customField
            };
          } else {
            // Add new field
            formSchema.fields.push(customField);
          }
        });
        
        logData('APPLIED_LOCATION_SPECIFIC_FIELDS', {
          fieldCount: locationSpecificFields.length,
          locationId: options.locationId
        });
      }
      
      // Sort fields by order
      formSchema.fields.sort((a, b) => a.order - b.order);
      
      // Add form submit/cancel buttons text
      formSchema.submitButtonText = "Upload Document";
      formSchema.cancelButtonText = "Cancel";
      formSchema.errorMessage = "There was an error uploading your document. Please try again.";
      formSchema.successMessage = "Document uploaded successfully.";
      
      logData('FORM_SCHEMA_GENERATED', {
              documentType: documentType.name,
        documentTitle: documentTitle ? documentTitle.title : null,
        fieldCount: formSchema.fields.length
      });
      
      return formSchema;
      } catch (error) {
      logData('FORM_SCHEMA_ERROR', { error: error.message });
      throw error;
    }
  }
  
  /**
   * Create a generic form schema when no specific schema is found
   * @param {string} typeId - Document type ID
   * @returns {Object} - Generic form schema
   * @private
   */
  static _createGenericFormSchema(typeId) {
    const typeName = this._capitalizeFirstLetter(typeId);
    
    // Define all possible fields
    const titleField = {
      id: "certificateAbbreviation",
      name: "certificateAbbreviation",
      type: "text",
      label: "Document Title",
      placeholder: "Enter document title",
      required: true,
      order: 1,
      fullWidth: true
    };
    
    const docTypeField = {
      id: "docData",
      name: "docData",
      type: "select",
      label: "Document Type",
      placeholder: "Select document type",
      required: true,
      order: 0.5, // Before title field
      fullWidth: true,
      options: [
        { value: "rn", label: "Registered Nurse (RN)" },
        { value: "lpn", label: "Licensed Practical Nurse (LPN)" },
        { value: "aprn", label: "Advanced Practice Registered Nurse (APRN)" },
        { value: "crna", label: "Certified Registered Nurse Anesthetist (CRNA)" },
        { value: "cna", label: "Certified Nursing Assistant (CNA)" },
        { value: "bls", label: "Basic Life Support (BLS)" },
        { value: "acls", label: "Advanced Cardiac Life Support (ACLS)" },
        { value: "pals", label: "Pediatric Advanced Life Support (PALS)" },
        { value: "nrp", label: "Neonatal Resuscitation Program (NRP)" },
        { value: "other", label: "Other" }
      ]
    };
    
    const specialitiesField = {
      id: "specialities",
      name: "specialities",
      type: "text",
      label: "Specialities/Categories",
      placeholder: "Enter specialities or categories",
      required: false,
      order: 3,
      fullWidth: true
    };
    
    const licenseNumberField = {
      id: "certLicenseNumber",
      name: "certLicenseNumber",
      type: "text",
      label: "Certificate/License Number",
      placeholder: "Enter certificate/license number",
      required: true,
      order: 4,
      fullWidth: true
    };
    
    const effectiveDateField = {
      id: "effectiveDate",
      name: "effectiveDate",
      type: "date",
      label: "Effective Date",
      placeholder: "Select effective date",
      required: true,
      order: 5,
      fullWidth: true
    };
    
    const expirationDateField = {
      id: "expirationDate",
      name: "expirationDate",
      type: "date",
      label: "Expiration Date",
      placeholder: "Select expiration date",
      required: true,
      order: 6,
      fullWidth: true
    };
    
    const fileUploadField = {
      id: "fileUpload",
      name: "fileUpload",
      type: "file",
      label: "Upload Document (PDF, JPG, PNG)",
      accept: ".pdf,.jpg,.jpeg,.png",
      required: true,
      order: 7,
      fullWidth: true
    };
    
    const shareableField = {
      id: "shareable",
      name: "shareable",
      type: "checkbox",
      label: "Shareable",
      defaultValue: true,
      required: false,
      order: 8,
      fullWidth: true
    };
    
    // Build the fields array in the exact order we want
    let fields = [];
    
    // Add document type field first for Mandatory type
    if (typeId === 'Mandatory' || typeId === 'mandatory') {
      fields.push(docTypeField);
    }
    
    // Then add title and remaining fields
    fields = [
      ...fields,
      titleField,
      specialitiesField,
      licenseNumberField,
      effectiveDateField,
      expirationDateField,
      fileUploadField,
      shareableField
    ];
    
    return {
      title: `${typeName} Form Schema`,
      description: `Schema for ${typeId.toLowerCase()} upload form fields`,
      formId: `${typeId.toLowerCase()}-form`,
      documentType: typeId.toLowerCase(),
      hideHeader: true,
      showFormButtons: false,
      fields: fields,
      submitButtonText: "Submit",
      cancelButtonText: "Cancel",
      deleteButtonText: "Delete",
      successMessage: "Document uploaded successfully!",
      errorMessage: "There was an error uploading your document. Please try again."
    };
  }

  /**
   * Get document data fields for a document type
   * @param {string} typeId - Type ID (e.g., 'medical')
   * @returns {Promise<Object>} - Document data fields
   */
  static async getDocDataFields(typeId) {
    try {
      // Map the typeId to CoreVerify format if needed
      const mappedTypeId = mapDocumentType(typeId);
      
      logData('GETTING_DOC_DATA_FIELDS', { 
        originalTypeId: typeId,
        mappedTypeId
      });
      
      // Try with Prisma first
      try {
        const documentType = await prisma.documentType.findFirst({
          where: { 
            name: { 
              equals: this._capitalizeFirstLetter(mappedTypeId),
              mode: 'insensitive'
            }
          },
          include: {
            documentTitles: true
          }
        });

        if (!documentType || documentType.documentTitles.length === 0) {
          return null;
        }
        
        const title = documentType.documentTitles[0];
        
        if (!title.requireDocData || !title.docDataOptions) {
          return null;
        }
        
        // If we have document data options as a string, parse them
        const docDataOptions = typeof title.docDataOptions === 'string' 
          ? JSON.parse(title.docDataOptions) 
          : title.docDataOptions;
        
        return {
          label: title.docDataName || 'Document Data',
          options: docDataOptions.options || [],
          requireAttachments: {
            front: title.requireAttachmentFront,
            back: title.requireAttachmentBack
          },
          dataType: 'select'
        };
      } catch (error) {
        // If Prisma fails, use direct SQLite
        logData('PRISMA_ERROR_SWITCHING_TO_SQLITE', { error: error.message, method: 'getDocDataFields' });
        
        // Use direct SQLite query
        const Database = require('better-sqlite3');
        const path = require('path');
        const dbPath = path.resolve(process.cwd(), 'prisma/dev.db');
        const db = new Database(dbPath);
        
        try {
          // Query document type and title
          const capitalizedTypeId = this._capitalizeFirstLetter(mappedTypeId);
          const query = `
            SELECT dtl.requireDocData, dtl.docDataOptions, dtl.docDataName,
                  dtl.requireAttachmentFront, dtl.requireAttachmentBack
            FROM document_types dt
            LEFT JOIN document_titles dtl ON dt.id = dtl.documentTypeId
            WHERE LOWER(dt.name) = LOWER(?)
          `;
          
          const result = db.prepare(query).get(capitalizedTypeId);
          
          if (!result || result.requireDocData !== 1 || !result.docDataOptions) {
            return null;
          }
          
          // Parse document data options
          const docDataOptions = JSON.parse(result.docDataOptions);
          
          return {
            label: result.docDataName || 'Document Data',
            options: docDataOptions.options || [],
            requireAttachments: {
              front: result.requireAttachmentFront === 1,
              back: result.requireAttachmentBack === 1
            },
            dataType: 'select'
          };
        } finally {
          db.close();
        }
      }
    } catch (error) {
      logData('ERROR_FETCHING_DOC_DATA_FIELDS', { typeId, error: error.message });
      return null;
    }
  }

  /**
   * Check if this document type requires a license
   * @param {string} typeId - Type ID (e.g., 'medical')
   * @returns {Promise<boolean>} - Whether document requires license
   */
  static async requiresLicense(typeId) {
    try {
      const documentType = await this.getDocumentTypeByTypeId(typeId);
      return documentType.require_license;
    } catch (error) {
      return false;
    }
  }

  /**
   * Get license options for this document type
   * @param {string} typeId - Type ID (e.g., 'medical')
   * @returns {Promise<Array>} - License options
   */
  static async getLicenseOptions(typeId) {
    try {
      const documentType = await this.getDocumentTypeByTypeId(typeId);
      
      if (documentType.require_license && documentType.require_license_options) {
        return JSON.parse(documentType.require_license_options);
      }
      
      return [];
    } catch (error) {
      logData('ERROR_FETCHING_LICENSE_OPTIONS', { typeId, error: error.message });
      return [];
    }
  }

  /**
   * Get color for document type
   * @param {string} typeId - Type ID (e.g., 'certificate', 'medical')
   * @returns {string} - Color for type
   * @private
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
   * Capitalize first letter of string
   * @param {string} str - String to capitalize
   * @returns {string} - Capitalized string
   * @private
   */
  static _capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * Helper method to get region by location ID
   * @param {number} locationId - Location ID from NurseIO
   * @returns {Promise<Object>} - Region object or null
   * @private
   */
  static async _getRegionByLocationId(locationId) {
    try {
      // Map NurseIO location ID to region code
      const locationMap = {
        1: 'CA', // California
        2: 'NY', // New York
        3: 'TX', // Texas
        4: 'FL', // Florida
        5: 'WA'  // Washington
      };
      
      const regionCode = locationMap[locationId];
      
      if (!regionCode) {
        logData('UNKNOWN_LOCATION_ID', { locationId });
        return null;
      }
      
      // Find region by code
      const region = await prisma.region.findFirst({
        where: { code: regionCode }
      });
      
      return region;
    } catch (error) {
      logData('ERROR_MAPPING_REGION', { 
        locationId, 
        error: error.message 
      });
      return null;
    }
  }

  /**
   * Load the global document types configuration
   * @returns {Object} - Document types configuration
   * @private
   */
  static _loadDocumentTypesConfig() {
    try {
      const configPath = path.join(process.cwd(), 'config', 'documentTypes.json');
      if (fs.existsSync(configPath)) {
        const configData = fs.readFileSync(configPath, 'utf8');
        const config = JSON.parse(configData);
        
        // Optional: Log the document types in the config for debugging
        console.log('Available document types in config:', 
          config.documentTypes.map(dt => ({ id: dt.id, childTypes: dt.childTypes?.length || 0 }))
        );
        
        return config;
      } else {
        logData('DOCUMENT_TYPES_CONFIG_NOT_FOUND', { configPath });
        return { documentTypes: [] };
      }
    } catch (error) {
      logData('ERROR_LOADING_DOCUMENT_TYPES_CONFIG', { error: error.message });
      return { documentTypes: [] };
    }
  }

  /**
   * Get form schema for a specific document type and subtype
   * @param {string} typeId - Parent document type ID (e.g., 'mandatory', 'documents')
   * @param {string} subTypeId - Child document type ID (e.g., 'rn_license', 'covid19_vaccine')
   * @param {Object} options - Additional options (locationId, etc.)
   * @returns {Promise<Object>} - Form schema
   */
  static async getFormSchemaByTypeAndSubType(typeId, subTypeId, options = {}) {
    try {
      logData('FETCHING_FORM_SCHEMA_BY_TYPE_AND_SUBTYPE', {
        typeId, 
        subTypeId,
        options
      });
      
      // Map NurseIO type to CoreVerify type if needed
      const mappedTypeId = mapDocumentType(typeId);
      
      // Load the document types configuration
      const config = this._loadDocumentTypesConfig();

      // Check if subTypeId exists in any parent type
      let foundInOtherParent = null;
      for (const docType of config.documentTypes) {
        if (docType.childTypes && Array.isArray(docType.childTypes)) {
          const foundChild = docType.childTypes.find(
            ct => ct.id.toLowerCase() === subTypeId.toLowerCase()
          );
          if (foundChild) {
            foundInOtherParent = docType.id;
            break;
          }
        }
      }
      
      // Find the parent document type
      const parentType = config.documentTypes.find(
        dt => dt.id.toLowerCase() === mappedTypeId.toLowerCase()
      );
      
      if (!parentType) {
        throw new Error(`Parent document type not found: ${mappedTypeId}`);
      }
      
      // Find the child document type
      const childType = parentType.childTypes.find(
        ct => ct.id.toLowerCase() === subTypeId.toLowerCase()
      );
      
      if (!childType) {
        if (foundInOtherParent) {
          throw new Error(`Child document type "${subTypeId}" belongs to parent type "${foundInOtherParent}", not "${mappedTypeId}"`);
        } else {
          throw new Error(`Child document type not found: ${subTypeId} in parent ${mappedTypeId}`);
        }
      }
      
      // Create the base form schema
      let formSchema = {
        title: `${childType.name} Form`,
        description: `Upload ${childType.name}`,
        formId: `${typeId.toLowerCase()}-${subTypeId.toLowerCase()}-form`,
        parentDocumentType: typeId.toLowerCase(),
        childDocumentType: subTypeId.toLowerCase(),
        hideHeader: false,
        showFormButtons: true,
        fields: []
      };
      
      // Add document type selector field
      formSchema.fields.push({
        id: "documentSubType",
        name: "documentSubType",
        type: "hidden",
        label: "Document Sub-Type",
        defaultValue: subTypeId,
        required: true,
        order: 0,
        fullWidth: true
      });

      // Add the standard title field
      formSchema.fields.push({
        id: "certificateAbbreviation",
        name: "certificateAbbreviation",
        type: "text",
        label: `${childType.name} Title`,
        placeholder: `Enter ${childType.name.toLowerCase()} title`,
        required: true,
        order: 1,
        fullWidth: true,
        validation: {
          minLength: 3,
          maxLength: 100,
          pattern: "^[A-Za-z0-9\\s\\-\\.\\(\\)]+$",
          message: `Title must be between 3-100 characters`
        }
      });
      
      // Add all fields from the child document type configuration
      if (childType.fields && Array.isArray(childType.fields)) {
        // Add custom fields with adjusted order (after title field)
        childType.fields.forEach((field, index) => {
          const fieldWithAdjustedOrder = {
            ...field,
            order: field.order + 1 // Add 1 to allow for title field
          };
          formSchema.fields.push(fieldWithAdjustedOrder);
        });
      }
      
      // Add file upload field (always required)
      formSchema.fields.push({
        id: "fileUpload",
        name: "fileUpload",
        type: "file",
        label: `Upload ${childType.name} (PDF, JPG, PNG)`,
        accept: ".pdf,.jpg,.jpeg,.png",
        required: true,
        order: 100, // High order to ensure it appears after all other fields
        fullWidth: true,
        validation: {
          maxSize: 10000000,
          fileTypes: ["application/pdf", "image/jpeg", "image/png"],
          message: "Please upload a PDF, JPG, or PNG file less than 10MB"
        }
      });
      
      // Add notes field
      formSchema.fields.push({
        id: "notes",
        name: "notes",
        type: "textarea",
        label: "Additional Notes",
        placeholder: "Enter any additional notes or comments",
        required: false,
        order: 101,
        fullWidth: true
      });
      
      // Add shareable field
      formSchema.fields.push({
        id: "shareable",
        name: "shareable",
        type: "radio",
        label: "Is this document shareable with facilities?",
        required: true,
        order: 102,
        fullWidth: true,
        options: [
          { value: "true", label: "Yes" },
          { value: "false", label: "No" }
        ],
        defaultValue: "true"
      });

      // Sort fields by order
      formSchema.fields.sort((a, b) => a.order - b.order);
      
      // Add button configuration
      // Use child type specific buttons if defined, otherwise use default
      if (childType.buttons) {
        // Copy button configuration from child type
        if (childType.buttons.submitButtonText) {
          formSchema.submitButtonText = childType.buttons.submitButtonText;
        }
        if (childType.buttons.cancelButtonText) {
          formSchema.cancelButtonText = childType.buttons.cancelButtonText;
        }
        if (childType.buttons.deleteButtonText) {
          formSchema.deleteButtonText = childType.buttons.deleteButtonText;
        }
        
        // Control button visibility
        if (childType.buttons.showSubmitButton !== undefined) {
          formSchema.showSubmitButton = childType.buttons.showSubmitButton;
        }
        if (childType.buttons.showCancelButton !== undefined) {
          formSchema.showCancelButton = childType.buttons.showCancelButton;
        }
        if (childType.buttons.showDeleteButton !== undefined) {
          formSchema.showDeleteButton = childType.buttons.showDeleteButton;
        }
        
        // Add custom buttons if defined
        if (childType.buttons.customButtons && Array.isArray(childType.buttons.customButtons)) {
          formSchema.customButtons = childType.buttons.customButtons;
        }
      } else {
        // Default button configuration
        formSchema.submitButtonText = "Upload Document";
        formSchema.cancelButtonText = "Cancel";
        formSchema.showSubmitButton = true;
        formSchema.showCancelButton = true;
        formSchema.showDeleteButton = false;
      }
      
      // Add form messages
      formSchema.errorMessage = "There was an error uploading your document. Please try again.";
      formSchema.successMessage = "Document uploaded successfully.";
      
      logData('FORM_SCHEMA_GENERATED_FROM_CONFIG', {
        parentType: parentType.name,
        childType: childType.name,
        fieldCount: formSchema.fields.length,
        hasCustomButtons: !!childType.buttons
      });
      
      return formSchema;
    } catch (error) {
      logData('FORM_SCHEMA_ERROR', { error: error.message });
      throw error;
    }
  }

  /**
   * Get all child document types for a parent document type
   * @param {string} typeId - Parent document type ID (e.g., 'mandatory', 'documents')
   * @returns {Promise<Array>} - Array of child document types
   */
  static async getChildDocumentTypes(typeId) {
    try {
      // Map NurseIO type to CoreVerify type if needed
      const mappedTypeId = mapDocumentType(typeId);
      
      // Load the document types configuration
      const config = this._loadDocumentTypesConfig();
      
      // Find the parent document type
      const parentType = config.documentTypes.find(
        dt => dt.id.toLowerCase() === mappedTypeId.toLowerCase()
      );
      
      if (!parentType) {
        return [];
      }
      
      // Return array of child types with simplified structure
      return parentType.childTypes.map(childType => ({
        id: childType.id,
        name: childType.name,
        parentTypeId: parentType.id
      }));
    } catch (error) {
      logData('ERROR_FETCHING_CHILD_DOCUMENT_TYPES', { typeId, error: error.message });
      return [];
    }
  }
} 