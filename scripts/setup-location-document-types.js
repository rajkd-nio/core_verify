/**
 * Script to set up location-specific document types in the DocumentConfiguration table
 * This maps specific document types to locations, such as Fingerprint Clearance for New York
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Location IDs from NurseIO
const LOCATIONS = {
  'California': 1,
  'New York': 2,
  'Texas': 3,
  'Florida': 4,
  'Washington': 5,
};

// Document type condition types
const CONDITION_TYPES = {
  REQUIRED: 0,
  OPTIONAL: 1,
  CONDITIONAL: 2,
};

/**
 * Setup the regions table with data from NurseIO
 */
async function setupRegions() {
  console.log('Setting up regions...');
  
  const regionData = [
    { name: 'California', code: 'CA' },
    { name: 'New York', code: 'NY' },
    { name: 'Texas', code: 'TX' },
    { name: 'Florida', code: 'FL' },
    { name: 'Washington', code: 'WA' },
  ];
  
  for (const region of regionData) {
    await prisma.region.upsert({
      where: { code: region.code },
      update: { name: region.name },
      create: {
        name: region.name,
        code: region.code,
        active: true,
      }
    });
    console.log(`Region ${region.name} (${region.code}) set up`);
  }
}

/**
 * Find or create a document title for Fingerprint Clearance
 */
async function setupFingerprintTitle() {
  console.log('Setting up Fingerprint Clearance document title...');
  
  // First, get the Mandatory document type
  const mandatoryType = await prisma.documentType.findFirst({
    where: {
      name: 'Mandatory'
    }
  });
  
  if (!mandatoryType) {
    throw new Error('Mandatory document type not found. Run seed-document-types.js first.');
  }
  
  // Check if Fingerprint Clearance already exists
  let fingerprintTitle = await prisma.documentTitle.findFirst({
    where: {
      documentTypeId: mandatoryType.id,
      title: 'Fingerprint Clearance'
    }
  });
  
  if (!fingerprintTitle) {
    // Create the Fingerprint Clearance document title
    fingerprintTitle = await prisma.documentTitle.create({
      data: {
        title: 'Fingerprint Clearance',
        documentTypeId: mandatoryType.id,
        shareable: true,
        isDisplay: true,
        requireNumber: true,
        requireValidDate: true,
        requireExpireDate: true,
        requireAttachmentFront: true,
        requireAttachmentBack: false,
        requireDocData: false
      }
    });
    console.log('Created Fingerprint Clearance document title');
  } else {
    console.log('Fingerprint Clearance document title already exists');
  }
  
  return fingerprintTitle;
}

/**
 * Setup document configuration for Fingerprint Clearance in New York
 */
async function setupDocumentConfiguration() {
  console.log('Setting up document configurations...');
  
  // Get the New York region
  const nyRegion = await prisma.region.findFirst({
    where: { code: 'NY' }
  });
  
  if (!nyRegion) {
    throw new Error('New York region not found. Run setupRegions first.');
  }
  
  // Get the Fingerprint Clearance document title
  const fingerprintTitle = await setupFingerprintTitle();
  
  // Create or update the document configuration
  const configuration = await prisma.documentConfiguration.upsert({
    where: {
      regionId_documentTitleId: {
        regionId: nyRegion.id,
        documentTitleId: fingerprintTitle.id
      }
    },
    update: {
      typeOfCondition: CONDITION_TYPES.REQUIRED,
      active: true,
      priority: 10 // High priority to show at the top
    },
    create: {
      regionId: nyRegion.id,
      documentTypeId: fingerprintTitle.documentTypeId,
      documentTitleId: fingerprintTitle.id,
      typeOfCondition: CONDITION_TYPES.REQUIRED,
      active: true,
      priority: 10
    }
  });
  
  console.log(`Document configuration for Fingerprint Clearance in New York ${configuration ? 'set up' : 'failed'}`);
  
  return configuration;
}

/**
 * Main function to run all setup steps
 */
async function main() {
  try {
    console.log('Starting location-based document type setup...');
    
    // Step 1: Set up regions
    await setupRegions();
    
    // Step 2: Set up document configuration for Fingerprint Clearance in NY
    await setupDocumentConfiguration();
    
    console.log('Location-based document type setup completed successfully');
  } catch (error) {
    console.error('Error setting up location-based document types:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the main function
main()
  .then(() => {
    console.log('Script completed successfully');
    process.exit(0);
  })
  .catch(error => {
    console.error('Script failed:', error);
    process.exit(1);
  }); 