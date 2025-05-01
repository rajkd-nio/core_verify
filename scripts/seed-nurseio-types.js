/**
 * Seed script to add NurseIO document types to CoreVerify database
 * 
 * This script adds the document types used in NurseIO to CoreVerify's database,
 * mapping them to the CoreVerify schema format without changing the schema structure.
 * 
 * It adds four document types from NurseIO:
 * 1. Certificates - Professional certificates like BLS/CPR, ACLS, etc.
 * 2. Documents - General documents like Resume, Reference Letters, etc.
 * 3. Medical Records - Medical documentation like TB Tests, Vaccinations, etc.
 * 4. Other Documents - Miscellaneous documents like Personal ID, etc.
 * 
 * Each document type includes document titles with appropriate validation requirements
 * based on NurseIO's expectations (number requirements, date validation, etc.)
 * 
 * Usage: node scripts/seed-nurseio-types.js
 */
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// NurseIO document types (from nurseio-web/components/admin/dashboard/documentTypes.js)
const nurseIODocumentTypes = [
  {
    id: 'certificate',
    label: 'Certificates',
    modalTitle: 'Edit Certificate',
    buttonColor: 'primary',
    config: {
      documentType: 'certificate',
      documentName: 'Professional Certificate',
      modalType: 'edit',
    },
  },
  {
    id: 'document',
    label: 'Documents',
    modalTitle: 'Upload Document',
    buttonColor: 'info',
    config: {
      documentType: 'document',
      documentName: 'General Document',
      modalType: 'edit',
    },
  },
  {
    id: 'medical',
    label: 'Medical Records',
    modalTitle: 'Upload Medical Record',
    buttonColor: 'success',
    config: {
      documentType: 'medical',
      documentName: 'Medical Record',
      modalType: 'edit',
      locationId: 1, // Default location ID
      locationName: 'California', // Default location name
    },
  },
  {
    id: 'other',
    label: 'Other Documents',
    modalTitle: 'Upload Other Document',
    buttonColor: 'secondary',
    config: {
      documentType: 'other',
      documentName: 'Miscellaneous Document',
      modalType: 'edit',
    },
  },
];

/**
 * Document titles and their validation requirements for each NurseIO document type
 * 
 * Format:
 * {
 *   'nurseio_type_id': [
 *     { 
 *       title: 'Title Name', 
 *       requireNumber: boolean, // Whether a document number is required
 *       requireValidDate: boolean, // Whether a valid/issue date is required
 *       requireExpireDate: boolean // Whether an expiration date is required
 *     }
 *   ]
 * }
 */
const documentTitles = {
  'certificate': [
    { title: 'BLS/CPR', requireNumber: true, requireValidDate: true, requireExpireDate: true },
    { title: 'ACLS', requireNumber: true, requireValidDate: true, requireExpireDate: true },
    { title: 'PALS', requireNumber: true, requireValidDate: true, requireExpireDate: true },
    { title: 'NRP', requireNumber: true, requireValidDate: true, requireExpireDate: true }
  ],
  'document': [
    { title: 'Resume/CV', requireNumber: false, requireValidDate: false, requireExpireDate: false },
    { title: 'Reference Letter', requireNumber: false, requireValidDate: true, requireExpireDate: false },
    { title: 'Employment Verification', requireNumber: false, requireValidDate: true, requireExpireDate: false }
  ],
  'medical': [
    { title: 'TB Test', requireNumber: false, requireValidDate: true, requireExpireDate: true },
    { title: 'COVID-19 Vaccine', requireNumber: false, requireValidDate: true, requireExpireDate: false },
    { title: 'Flu Vaccine', requireNumber: false, requireValidDate: true, requireExpireDate: true }
  ],
  'other': [
    { title: 'Personal ID', requireNumber: true, requireValidDate: false, requireExpireDate: true },
    { title: 'Certification', requireNumber: true, requireValidDate: true, requireExpireDate: true }
  ]
};

/**
 * Seed NurseIO document types into CoreVerify
 */
async function seedNurseIOTypes() {
  try {
    console.log('Starting to seed NurseIO document types to CoreVerify...');

    // First, check what document types already exist
    const existingTypes = await prisma.documentType.findMany();
    const existingTypeNames = existingTypes.map(type => type.name.toLowerCase());
    
    // Find the highest existing IDs
    let highestTypeId = 0;
    let highestTitleId = 0;
    
    if (existingTypes.length > 0) {
      highestTypeId = Math.max(...existingTypes.map(type => type.id));
    }
    
    const existingTitles = await prisma.documentTitle.findMany();
    if (existingTitles.length > 0) {
      highestTitleId = Math.max(...existingTitles.map(title => title.id));
    }
    
    console.log(`Highest existing document type ID: ${highestTypeId}`);
    console.log(`Highest existing document title ID: ${highestTitleId}`);
    
    let nextTypeId = highestTypeId + 1;
    let nextTitleId = highestTitleId + 1;
    
    // Track created types for reference when creating titles
    const createdTypeMap = {};
    
    // Create document types and their titles
    for (const docType of nurseIODocumentTypes) {
      // Skip if a similar type already exists (case insensitive comparison)
      if (existingTypeNames.includes(docType.label.toLowerCase())) {
        console.log(`Document type "${docType.label}" already exists, skipping...`);
        // Find the existing type ID for reference when creating titles
        const existingType = existingTypes.find(t => t.name.toLowerCase() === docType.label.toLowerCase());
        if (existingType) {
          createdTypeMap[docType.id] = existingType.id;
        }
        continue;
      }
      
      // Create the document type
      const typeData = {
        id: nextTypeId,
        name: docType.label,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      console.log(`Creating document type: ${typeData.name} with ID ${typeData.id}`);
      
      const createdType = await prisma.documentType.create({ data: typeData });
      createdTypeMap[docType.id] = createdType.id;
      
      nextTypeId++;
    }
    
    // Create document titles for each document type
    for (const docType of nurseIODocumentTypes) {
      const typeId = createdTypeMap[docType.id];
      if (!typeId) {
        console.log(`No type ID found for ${docType.label}, skipping titles...`);
        continue;
      }
      
      // Get titles for this document type
      const titles = documentTitles[docType.id] || [];
      
      // Check existing titles to avoid duplicates
      const existingTitlesForType = existingTitles.filter(t => t.documentTypeId === typeId);
      const existingTitleNames = existingTitlesForType.map(t => t.title.toLowerCase());
      
      for (const titleData of titles) {
        // Skip if title already exists for this type
        if (existingTitleNames.includes(titleData.title.toLowerCase())) {
          console.log(`Title "${titleData.title}" already exists for document type ID ${typeId}, skipping...`);
          continue;
        }
        
        const documentTitleData = {
          id: nextTitleId++,
          title: titleData.title,
          documentTypeId: typeId,
          createdAt: new Date(),
          updatedAt: new Date(),
          shareable: true,
          isDisplay: true,
          requireNumber: titleData.requireNumber || false,
          requireValidDate: titleData.requireValidDate || false,
          requireExpireDate: titleData.requireExpireDate || false,
          requireDocData: false,
          docDataOptions: null,
          docDataName: null,
          requireAttachmentFront: true,
          requireAttachmentBack: false
        };
        
        console.log(`Creating document title: ${documentTitleData.title} for type ID ${typeId}`);
        
        await prisma.documentTitle.create({ data: documentTitleData });
      }
    }

    console.log('NurseIO document types successfully seeded!');
  } catch (error) {
    console.error('Error seeding NurseIO document types:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seed function
seedNurseIOTypes()
  .catch(console.error); 