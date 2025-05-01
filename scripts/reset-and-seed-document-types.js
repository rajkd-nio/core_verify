/**
 * Script to reset and seed new document types in CoreVerify database
 * 
 * This script:
 * 1. Removes all existing document types and titles
 * 2. Seeds new document types:
 *    - Mandatory (ID 1)
 *    - Other (ID 2)
 *    - Vaccination Record (ID 3)
 *    - Documents (ID 4)
 * 3. Creates appropriate document titles for each type
 * 4. Creates region-specific document configurations
 * 
 * Usage: node scripts/reset-and-seed-document-types.js
 */
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// New document types to seed
const documentTypes = [
  {
    id: 1,
    name: 'Mandatory',
    description: 'Required documents for all healthcare professionals'
  },
  {
    id: 2,
    name: 'Other',
    description: 'Optional or miscellaneous documents'
  },
  {
    id: 3,
    name: 'Vaccination Record',
    description: 'Immunization and vaccination records'
  },
  {
    id: 4,
    name: 'Documents',
    description: 'General documentation'
  }
];

// Document titles for each document type with their requirements
const documentTitles = {
  // Mandatory document titles (type ID 1)
  '1': [
    {
      title: 'State Nursing License',
      requireNumber: true,
      requireValidDate: true,
      requireExpireDate: true,
      requireAttachmentFront: true,
      requireAttachmentBack: false,
      regionSpecific: true
    },
    {
      title: 'BLS/CPR',
      requireNumber: true,
      requireValidDate: true,
      requireExpireDate: true,
      requireAttachmentFront: true,
      requireAttachmentBack: false,
      regionSpecific: false
    },
    {
      title: 'Professional Liability Insurance',
      requireNumber: true,
      requireValidDate: true,
      requireExpireDate: true,
      requireAttachmentFront: true,
      requireAttachmentBack: false,
      regionSpecific: false
    }
  ],
  
  // Other document titles (type ID 2)
  '2': [
    {
      title: "Driver's License",
      requireNumber: true,
      requireValidDate: false,
      requireExpireDate: true,
      requireAttachmentFront: true,
      requireAttachmentBack: true,
      regionSpecific: true
    },
    {
      title: 'Social Security Card',
      requireNumber: true,
      requireValidDate: false,
      requireExpireDate: false,
      requireAttachmentFront: true,
      requireAttachmentBack: false,
      regionSpecific: false
    },
    {
      title: 'Employment Reference',
      requireNumber: false,
      requireValidDate: true,
      requireExpireDate: false,
      requireAttachmentFront: true,
      requireAttachmentBack: false,
      requireDocData: true,
      docDataName: 'Reference Details',
      docDataOptions: JSON.stringify({
        fields: [
          { name: 'facility', label: 'Facility Name', type: 'text', required: true },
          { name: 'contactPerson', label: 'Contact Person', type: 'text', required: true },
          { name: 'phone', label: 'Phone Number', type: 'text', required: true }
        ]
      }),
      regionSpecific: false
    }
  ],
  
  // Vaccination Record document titles (type ID 3)
  '3': [
    {
      title: 'COVID-19 Vaccine',
      requireNumber: false,
      requireValidDate: true,
      requireExpireDate: false,
      requireAttachmentFront: true,
      requireAttachmentBack: false,
      requireDocData: true,
      docDataName: 'Vaccine Information',
      docDataOptions: JSON.stringify({
        fields: [
          { name: 'manufacturer', label: 'Manufacturer', type: 'select', required: true, options: [
            { value: 'pfizer', label: 'Pfizer-BioNTech' },
            { value: 'moderna', label: 'Moderna' },
            { value: 'jj', label: 'Johnson & Johnson' },
            { value: 'other', label: 'Other' }
          ]},
          { name: 'doseNumber', label: 'Dose Number', type: 'select', required: true, options: [
            { value: '1', label: 'First Dose' },
            { value: '2', label: 'Second Dose' },
            { value: '3', label: 'Booster' }
          ]}
        ]
      }),
      regionSpecific: false
    },
    {
      title: 'Influenza Vaccine',
      requireNumber: false,
      requireValidDate: true,
      requireExpireDate: true,
      requireAttachmentFront: true,
      requireAttachmentBack: false,
      regionSpecific: false
    },
    {
      title: 'TB Test',
      requireNumber: false,
      requireValidDate: true,
      requireExpireDate: true,
      requireAttachmentFront: true,
      requireAttachmentBack: false,
      requireDocData: true,
      docDataName: 'TB Test Results',
      docDataOptions: JSON.stringify({
        fields: [
          { name: 'testType', label: 'Test Type', type: 'select', required: true, options: [
            { value: 'skin', label: 'Skin Test' },
            { value: 'blood', label: 'Blood Test' },
            { value: 'xray', label: 'Chest X-Ray' }
          ]},
          { name: 'result', label: 'Result', type: 'select', required: true, options: [
            { value: 'negative', label: 'Negative' },
            { value: 'positive', label: 'Positive' }
          ]}
        ]
      }),
      regionSpecific: true
    }
  ],
  
  // Documents document titles (type ID 4)
  '4': [
    {
      title: 'Resume/CV',
      requireNumber: false,
      requireValidDate: false,
      requireExpireDate: false,
      requireAttachmentFront: true,
      requireAttachmentBack: false,
      regionSpecific: false
    },
    {
      title: 'Diploma',
      requireNumber: false,
      requireValidDate: true,
      requireExpireDate: false,
      requireAttachmentFront: true,
      requireAttachmentBack: false,
      regionSpecific: false
    },
    {
      title: 'Certifications',
      requireNumber: true,
      requireValidDate: true,
      requireExpireDate: true,
      requireAttachmentFront: true,
      requireAttachmentBack: false,
      regionSpecific: true
    }
  ]
};

// Region data to seed
const regions = [
  {
    id: 1,
    name: 'California',
    code: 'CA',
    country: 'US',
    active: true
  },
  {
    id: 2,
    name: 'New York',
    code: 'NY',
    country: 'US',
    active: true
  },
  {
    id: 3,
    name: 'Texas',
    code: 'TX',
    country: 'US',
    active: true
  }
];

/**
 * Reset the database and seed with new document types
 */
async function resetAndSeedDocumentTypes() {
  try {
    console.log('Starting database reset and seed process...');
    
    // 1. Delete all document configurations
    console.log('Deleting document configurations...');
    await prisma.documentConfiguration.deleteMany({});
    
    // 2. Delete all document titles
    console.log('Deleting document titles...');
    await prisma.documentTitle.deleteMany({});
    
    // 3. Delete all document types
    console.log('Deleting document types...');
    await prisma.documentType.deleteMany({});
    
    // 4. Delete all regions
    console.log('Deleting regions...');
    await prisma.region.deleteMany({});
    
    // 5. Create new regions
    console.log('Creating regions...');
    for (const regionData of regions) {
      await prisma.region.create({
        data: {
          id: regionData.id,
          name: regionData.name,
          code: regionData.code,
          country: regionData.country,
          active: regionData.active,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });
      console.log(`Created region: ${regionData.name} (ID: ${regionData.id})`);
    }
    
    // 6. Create new document types
    console.log('Creating new document types...');
    for (const typeData of documentTypes) {
      await prisma.documentType.create({
        data: {
          id: typeData.id,
          name: typeData.name,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });
      console.log(`Created document type: ${typeData.name} (ID: ${typeData.id})`);
    }
    
    // 7. Create document titles for each type
    console.log('Creating document titles...');
    let titleId = 1;
    const regionSpecificTitles = {};
    
    for (const [typeId, titles] of Object.entries(documentTitles)) {
      for (const titleData of titles) {
        const documentTitleData = {
          id: titleId,
          title: titleData.title,
          documentTypeId: parseInt(typeId),
          createdAt: new Date(),
          updatedAt: new Date(),
          shareable: true,
          isDisplay: true,
          requireNumber: titleData.requireNumber || false,
          requireValidDate: titleData.requireValidDate || false,
          requireExpireDate: titleData.requireExpireDate || false,
          requireDocData: titleData.requireDocData || false,
          docDataOptions: titleData.docDataOptions || null,
          docDataName: titleData.docDataName || null,
          requireAttachmentFront: titleData.requireAttachmentFront || true,
          requireAttachmentBack: titleData.requireAttachmentBack || false
        };
        
        const createdTitle = await prisma.documentTitle.create({ data: documentTitleData });
        console.log(`Created document title: ${createdTitle.title} (ID: ${createdTitle.id}) for type ID ${createdTitle.documentTypeId}`);
        
        // Track region-specific titles for configuration
        if (titleData.regionSpecific) {
          if (!regionSpecificTitles[typeId]) {
            regionSpecificTitles[typeId] = [];
          }
          regionSpecificTitles[typeId].push({
            id: createdTitle.id,
            title: createdTitle.title,
            typeId: createdTitle.documentTypeId
          });
        }
        
        titleId++;
      }
    }
    
    // 8. Create document configurations for region-specific titles
    console.log('Creating region configurations...');
    // Flatten all region-specific titles
    const allRegionSpecificTitles = Object.values(regionSpecificTitles).flat();
    
    for (const region of regions) {
      for (const title of allRegionSpecificTitles) {
        await prisma.documentConfiguration.create({
          data: {
            regionId: region.id,
            documentTypeId: title.typeId,
            documentTitleId: title.id,
            typeOfCondition: 0, // 0: Required, 1: Optional
            active: true,
            priority: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        });
        console.log(`Created configuration for ${title.title} in ${region.name}`);
      }
    }
    
    console.log('Database reset and seed completed successfully!');
  } catch (error) {
    console.error('Error during reset and seed:', error);
    if (error.meta) {
      console.error('Error details:', error.meta);
    }
  } finally {
    await prisma.$disconnect();
  }
}

// Run the reset and seed function
resetAndSeedDocumentTypes()
  .catch(console.error); 