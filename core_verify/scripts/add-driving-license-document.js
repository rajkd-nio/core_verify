const { PrismaClient } = require('@prisma/client');

async function main() {
  console.log('Starting script execution...');
  const prisma = new PrismaClient();
  
  try {
    console.log('Connecting to database...');
    // Find or create the document type for identification documents
    let documentType = await prisma.documentType.findFirst({
      where: { name: 'Documents' }
    });
    
    if (!documentType) {
      console.log('Creating Documents document type');
      documentType = await prisma.documentType.create({
        data: {
          name: 'Documents',
          description: 'General supporting documents'
        }
      });
    } else {
      console.log('Found existing Documents document type with ID:', documentType.id);
    }
    
    // Check if driving license document title already exists
    const existingDocumentTitle = await prisma.documentTitle.findFirst({
      where: {
        title: 'Driving License',
        documentTypeId: documentType.id
      }
    });
    
    if (existingDocumentTitle) {
      console.log('Driving License document type already exists with ID:', existingDocumentTitle.id);
      return;
    }
    
    // Create the document title for driving license
    console.log('Creating Driving License document title...');
    const drivingLicenseDocumentTitle = await prisma.documentTitle.create({
      data: {
        title: 'Driving License',
        documentTypeId: documentType.id,
        isDisplay: true,
        requireNumber: true,
        requireValidDate: true,
        requireExpireDate: true,
        requireDocData: true,
        requireAttachmentFront: true,
        requireAttachmentBack: true,
        description: 'Driver\'s license document',
        formTitle: 'Driving License Information',
        formDescription: 'Upload your driving license and fill in the details',
      }
    });
    
    console.log('Created Driving License document title with ID:', drivingLicenseDocumentTitle.id);
    
    // Create form fields for the driving license
    console.log('Creating form fields...');
    const formFields = [
      {
        documentTitleId: drivingLicenseDocumentTitle.id,
        fieldName: 'licenseNumber',
        label: 'License Number',
        type: 'text',
        placeholder: 'Enter your license number',
        required: true,
        order: 1,
        fullWidth: true
      },
      {
        documentTitleId: drivingLicenseDocumentTitle.id,
        fieldName: 'state',
        label: 'State',
        type: 'select',
        placeholder: 'Select state',
        required: true,
        order: 2,
        fullWidth: true,
        options: JSON.stringify([
          {"value": "AL", "label": "Alabama"},
          {"value": "AK", "label": "Alaska"},
          {"value": "AZ", "label": "Arizona"},
          {"value": "AR", "label": "Arkansas"},
          {"value": "CA", "label": "California"},
          {"value": "CO", "label": "Colorado"},
          {"value": "CT", "label": "Connecticut"},
          {"value": "DE", "label": "Delaware"},
          {"value": "DC", "label": "District Of Columbia"},
          {"value": "FL", "label": "Florida"},
          {"value": "GA", "label": "Georgia"},
          {"value": "HI", "label": "Hawaii"},
          {"value": "ID", "label": "Idaho"},
          {"value": "IL", "label": "Illinois"},
          {"value": "IN", "label": "Indiana"},
          {"value": "IA", "label": "Iowa"},
          {"value": "KS", "label": "Kansas"},
          {"value": "KY", "label": "Kentucky"},
          {"value": "LA", "label": "Louisiana"},
          {"value": "ME", "label": "Maine"},
          {"value": "MD", "label": "Maryland"},
          {"value": "MA", "label": "Massachusetts"},
          {"value": "MI", "label": "Michigan"},
          {"value": "MN", "label": "Minnesota"},
          {"value": "MS", "label": "Mississippi"},
          {"value": "MO", "label": "Missouri"},
          {"value": "MT", "label": "Montana"},
          {"value": "NE", "label": "Nebraska"},
          {"value": "NV", "label": "Nevada"},
          {"value": "NH", "label": "New Hampshire"},
          {"value": "NJ", "label": "New Jersey"},
          {"value": "NM", "label": "New Mexico"},
          {"value": "NY", "label": "New York"},
          {"value": "NC", "label": "North Carolina"},
          {"value": "ND", "label": "North Dakota"},
          {"value": "OH", "label": "Ohio"},
          {"value": "OK", "label": "Oklahoma"},
          {"value": "OR", "label": "Oregon"},
          {"value": "PA", "label": "Pennsylvania"},
          {"value": "RI", "label": "Rhode Island"},
          {"value": "SC", "label": "South Carolina"},
          {"value": "SD", "label": "South Dakota"},
          {"value": "TN", "label": "Tennessee"},
          {"value": "TX", "label": "Texas"},
          {"value": "UT", "label": "Utah"},
          {"value": "VT", "label": "Vermont"},
          {"value": "VA", "label": "Virginia"},
          {"value": "WA", "label": "Washington"},
          {"value": "WV", "label": "West Virginia"},
          {"value": "WI", "label": "Wisconsin"},
          {"value": "WY", "label": "Wyoming"}
        ])
      },
      {
        documentTitleId: drivingLicenseDocumentTitle.id,
        fieldName: 'issueDate',
        label: 'Issue Date',
        type: 'date',
        placeholder: 'Select issue date',
        required: true,
        order: 3,
        fullWidth: true
      },
      {
        documentTitleId: drivingLicenseDocumentTitle.id,
        fieldName: 'expirationDate',
        label: 'Expiration Date',
        type: 'date',
        placeholder: 'Select expiration date',
        required: true,
        order: 4,
        fullWidth: true
      },
      {
        documentTitleId: drivingLicenseDocumentTitle.id,
        fieldName: 'attachmentFront',
        label: 'License Front',
        type: 'file',
        placeholder: 'Upload front of license',
        required: true,
        order: 5,
        fullWidth: true
      },
      {
        documentTitleId: drivingLicenseDocumentTitle.id,
        fieldName: 'attachmentBack',
        label: 'License Back',
        type: 'file',
        placeholder: 'Upload back of license',
        required: true,
        order: 6,
        fullWidth: true
      }
    ];
    
    // Create form fields
    console.log('Creating form fields...');
    const createdFields = await Promise.all(
      formFields.map(field => 
        prisma.formField.create({
          data: field
        })
      )
    );
    
    console.log(`Created ${createdFields.length} form fields for Driving License`);
    
    // Add document configurations for all regions
    console.log('Getting regions...');
    const regions = await prisma.region.findMany({ where: { active: true } });
    
    if (regions.length === 0) {
      console.log('No active regions found. Creating default US region.');
      const defaultRegion = await prisma.region.create({
        data: {
          name: 'United States',
          code: 'US',
          country: 'US',
          active: true
        }
      });
      regions.push(defaultRegion);
    }
    
    // Create document configurations for each region
    console.log(`Creating document configurations for ${regions.length} regions...`);
    for (const region of regions) {
      await prisma.documentConfiguration.create({
        data: {
          regionId: region.id,
          documentTypeId: documentType.id,
          documentTitleId: drivingLicenseDocumentTitle.id,
          active: true,
          priority: 10
        }
      });
      console.log(`Created document configuration for region: ${region.name}`);
    }
    
    console.log('Successfully added driving license document type to the database');
  } catch (error) {
    console.error('Error adding driving license document:', error);
  } finally {
    console.log('Disconnecting from database...');
    await prisma.$disconnect();
    console.log('Script completed.');
  }
}

main().catch(e => {
  console.error('Fatal error:', e);
  process.exit(1);
}); 