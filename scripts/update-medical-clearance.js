const { PrismaClient } = require('../app/generated/prisma');
const prisma = new PrismaClient();

async function updateMedicalClearance() {
  try {
    console.log('Starting update for medical clearance...');

    // Step 1: Find the medical document type
    const medicalDocType = await prisma.documentType.findUnique({
      where: { typeId: 'medical' },
    });

    if (!medicalDocType) {
      console.error('Medical document type not found');
      return;
    }

    console.log(`Found medical document type with id: ${medicalDocType.id}`);

    // Step 2: Find the recordType field that contains medical_clearance option
    const recordTypeField = await prisma.documentField.findFirst({
      where: {
        documentTypeId: medicalDocType.id,
        fieldId: 'recordType'
      }
    });

    if (!recordTypeField) {
      console.error('Record type field not found');
      return;
    }

    console.log(`Found recordType field with id: ${recordTypeField.id}`);

    // Step 3: Create a new field specifically for medical clearance options
    const existingMedicalClearanceField = await prisma.documentField.findFirst({
      where: {
        documentTypeId: medicalDocType.id,
        fieldId: 'medicalClearanceType'
      }
    });

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

    if (existingMedicalClearanceField) {
      // Update existing field
      console.log('Updating existing medical clearance field');
      await prisma.documentField.update({
        where: {
          id: existingMedicalClearanceField.id
        },
        data: {
          options: JSON.stringify(clearanceOptions),
          conditionalDisplay: JSON.stringify(conditionalDisplay),
          require_doc_data: true,
          doc_data_option_type: 'selection',
          doc_data_label: 'Medical Clearance Details',
          doc_data_options: JSON.stringify(clearanceOptions)
        }
      });
    } else {
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
          order: recordTypeField.order + 1,
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
    }

    // Step 4: Update medical_clearance option in recordType to make it require doc_data
    let recordTypeOptions = [];
    try {
      recordTypeOptions = JSON.parse(recordTypeField.options || '[]');
    } catch (e) {
      console.error('Failed to parse recordType options:', e);
      return;
    }

    // Find and update the medical_clearance option
    const updatedOptions = recordTypeOptions.map(option => {
      if (option.value === 'medical_clearance') {
        return {
          ...option,
          requiresDocData: true
        };
      }
      return option;
    });

    // Update the recordType field
    await prisma.documentField.update({
      where: {
        id: recordTypeField.id
      },
      data: {
        options: JSON.stringify(updatedOptions)
      }
    });

    console.log('Medical clearance options updated successfully!');
  } catch (error) {
    console.error('Error updating medical clearance:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateMedicalClearance()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => process.exit(0)); 