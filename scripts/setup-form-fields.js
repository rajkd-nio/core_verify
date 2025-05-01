/**
 * Setup Form Fields Script
 * 
 * This script sets up the database with form field data and creates
 * form field configurations in the database.
 */
const { PrismaClient } = require('../app/generated/prisma');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

// Document type ID mapping based on actual database values
const DOCUMENT_TYPES = {
  LICENSE: 'License',
  EDUCATION: 'Education',
  CERTIFICATION: 'Certification',
  BACKGROUND_CHECK: 'Background Check',
  IMMUNIZATION: 'Immunization',
  PERSONAL: 'Personal',
  EMPLOYMENT: 'Employment'
};

/**
 * Setup form fields for document types
 */
async function setupFormFields() {
  console.log('Starting form fields setup...');
  
  try {
    // Add fingerprint clearance document type
    await setupFingerprintClearance();
    
    console.log('Form fields setup completed successfully!');
  } catch (error) {
    console.error('Error setting up form fields:', error);
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * Setup Fingerprint Clearance document type
 */
async function setupFingerprintClearance() {
  console.log('Setting up Fingerprint Clearance document type...');
  
  // Get the Background Check document type
  const backgroundCheckType = await prisma.documentType.findFirst({
    where: { 
      name: { 
        equals: DOCUMENT_TYPES.BACKGROUND_CHECK,
        mode: 'insensitive'
      }
    }
  });
  
  if (!backgroundCheckType) {
    console.error('Background Check document type not found');
    
    // Log available document types to debug
    const availableTypes = await prisma.documentType.findMany();
    console.log('Available document types:', availableTypes.map(t => t.name));
    return;
  }
  
  console.log(`Found Background Check document type with ID: ${backgroundCheckType.id}`);
  
  // Check if Fingerprint Clearance document title already exists
  const existingTitle = await prisma.documentTitle.findFirst({
    where: {
      title: 'Fingerprint Clearance',
      documentTypeId: backgroundCheckType.id
    }
  });
  
  // If it already exists, update it, otherwise create it
  let fingerprintTitle;
  
  if (existingTitle) {
    fingerprintTitle = await prisma.documentTitle.update({
      where: { id: existingTitle.id },
      data: {
        requireNumber: false,
        requireValidDate: true,
        requireExpireDate: true,
        requireDocData: false,
        requireAttachmentFront: true,
        requireAttachmentBack: false,
        formTitle: 'Fingerprint Clearance Submission',
        formDescription: 'Upload your fingerprint clearance document'
      }
    });
    console.log('Updated Fingerprint Clearance document title');
  } else {
    fingerprintTitle = await prisma.documentTitle.create({
      data: {
        title: 'Fingerprint Clearance',
        documentTypeId: backgroundCheckType.id,
        requireNumber: false,
        requireValidDate: true,
        requireExpireDate: true,
        requireDocData: false,
        requireAttachmentFront: true,
        requireAttachmentBack: false,
        isDisplay: true,
        shareable: true,
        formTitle: 'Fingerprint Clearance Submission',
        formDescription: 'Upload your fingerprint clearance document'
      }
    });
    console.log('Created Fingerprint Clearance document title');
  }
  
  // Create form fields for Fingerprint Clearance
  // First, clear any existing form fields
  await prisma.formField.deleteMany({
    where: { documentTitleId: fingerprintTitle.id }
  });
  
  // Create minimal form fields - only file upload field
  const fingerprintFields = [
    {
      fieldName: 'certificateAbbreviation',
      label: 'Fingerprint Clearance Title',
      type: 'text',
      placeholder: 'Enter clearance title',
      required: true,
      order: 1,
      fullWidth: true,
      hidden: false
    },
    {
      fieldName: 'effectiveDate',
      label: 'Issue Date',
      type: 'date',
      placeholder: 'Select issue date',
      required: true,
      order: 2,
      fullWidth: true,
      hidden: false
    },
    {
      fieldName: 'expirationDate',
      label: 'Expiration Date',
      type: 'date',
      placeholder: 'Select expiration date',
      required: true,
      order: 3,
      fullWidth: true,
      hidden: false
    },
    {
      fieldName: 'fileUpload',
      label: 'Upload Fingerprint Clearance (PDF, JPG, PNG)',
      type: 'file',
      accept: '.pdf,.jpg,.jpeg,.png',
      required: true,
      order: 4,
      fullWidth: true,
      hidden: false,
      validation: {
        maxSize: 10000000,
        fileTypes: ["application/pdf", "image/jpeg", "image/png"],
        message: "Please upload a PDF, JPG, or PNG file less than 10MB"
      }
    }
  ];
  
  for (const field of fingerprintFields) {
    await prisma.formField.create({
      data: {
        ...field,
        documentTitleId: fingerprintTitle.id
      }
    });
  }
  
  console.log(`Created ${fingerprintFields.length} fields for Fingerprint Clearance`);
  
  // Now set up the document configuration for all regions
  try {
    const regions = await prisma.region.findMany({
      where: { active: true }
    });
    
    console.log(`Found ${regions.length} active regions`);
    
    for (const region of regions) {
      // Check if configuration already exists
      const existingConfig = await prisma.documentConfiguration.findFirst({
        where: {
          regionId: region.id,
          documentTitleId: fingerprintTitle.id
        }
      });
      
      if (existingConfig) {
        // Update the existing configuration
        await prisma.documentConfiguration.update({
          where: { id: existingConfig.id },
          data: {
            typeOfCondition: 0, // Required
            active: true,
            priority: 100, // High priority
            customFields: null
          }
        });
        console.log(`Updated document configuration for region ${region.code}`);
      } else {
        // Create a new configuration
        await prisma.documentConfiguration.create({
          data: {
            regionId: region.id,
            documentTypeId: backgroundCheckType.id,
            documentTitleId: fingerprintTitle.id,
            typeOfCondition: 0, // Required
            active: true,
            priority: 100, // High priority
          }
        });
        console.log(`Created document configuration for region ${region.code}`);
      }
    }
  } catch (error) {
    console.error('Error setting up document configurations:', error);
  }
}

// Run the setup
setupFormFields().catch(console.error); 