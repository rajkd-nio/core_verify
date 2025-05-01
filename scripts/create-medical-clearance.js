const { PrismaClient } = require('../app/generated/prisma');
const prisma = new PrismaClient();

async function createMedicalClearanceField() {
  try {
    console.log('Starting creation of medical clearance field...');

    // Step 1: Find the medical document type
    const medicalDocType = await prisma.documentType.findUnique({
      where: { typeId: 'medical' },
    });

    if (!medicalDocType) {
      console.error('Medical document type not found');
      return;
    }

    console.log(`Found medical document type with id: ${medicalDocType.id}`);

    // Medical clearance dropdown options
    const clearanceOptions = [
      { value: 'full_clearance', label: 'Full Medical Clearance' },
      { value: 'limited_clearance', label: 'Limited Medical Clearance' },
      { value: 'temporary_clearance', label: 'Temporary Medical Clearance' },
      { value: 'conditional_clearance', label: 'Conditional Medical Clearance' }
    ];

    // Add conditional display logic
    const conditionalDisplay = {
      field: 'recordType',
      value: 'medical_clearance',
      operator: 'equals'
    };

    // Create new field
    console.log('Creating new medical clearance field');
    await prisma.documentField.create({
      data: {
        fieldId: 'medicalClearanceType',
        name: 'medicalClearanceType',
        label: 'Medical Clearance Type',
        type: 'select',
        placeholder: 'Select clearance type',
        required: true,
        order: 3,
        fullWidth: true,
        hidden: false,
        options: JSON.stringify(clearanceOptions),
        conditionalDisplay: JSON.stringify(conditionalDisplay),
        require_doc_data: true,
        doc_data_option_type: 'selection',
        doc_data_label: 'Medical Clearance Details',
        doc_data_options: JSON.stringify(clearanceOptions),
        documentTypeId: medicalDocType.id
      }
    });

    console.log('Medical clearance field created successfully!');
  } catch (error) {
    console.error('Error creating medical clearance field:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createMedicalClearanceField()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => process.exit(0)); 