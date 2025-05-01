const { PrismaClient } = require('../app/generated/prisma');
const prisma = new PrismaClient();

async function updateLimitedClearanceOptions() {
  try {
    console.log('Starting update of limited clearance options...');

    // Find the medical document type
    const medicalDocType = await prisma.documentType.findUnique({
      where: { typeId: 'medical' },
    });

    if (!medicalDocType) {
      console.error('Medical document type not found');
      return;
    }

    console.log(`Found medical document type with id: ${medicalDocType.id}`);

    // Find the medicalClearanceType field
    const medicalClearanceField = await prisma.documentField.findFirst({
      where: {
        documentTypeId: medicalDocType.id,
        fieldId: 'medicalClearanceType'
      }
    });

    if (!medicalClearanceField) {
      console.error('Medical clearance field not found');
      return;
    }

    console.log(`Found medical clearance field with id: ${medicalClearanceField.id}`);

    // Define specific document options for limited medical clearance
    const limitedClearanceDocOptions = [
      { 
        value: 'limited_clearance', 
        label: 'Limited Medical Clearance',
        requiredDocs: [
          { value: 'limitations_form', label: 'Medical Limitations Form' },
          { value: 'physician_statement', label: 'Physician Statement of Restrictions' },
          { value: 'accommodations_letter', label: 'Accommodations Request Letter' },
          { value: 'follow_up_plan', label: 'Follow-up Treatment Plan' }
        ]
      },
      { 
        value: 'full_clearance', 
        label: 'Full Medical Clearance',
        requiredDocs: [
          { value: 'full_medical_report', label: 'Complete Medical Evaluation Report' },
          { value: 'fitness_assessment', label: 'Physical Fitness Assessment' }
        ]
      },
      { 
        value: 'temporary_clearance', 
        label: 'Temporary Medical Clearance',
        requiredDocs: [
          { value: 'temp_clearance_letter', label: 'Temporary Clearance Letter' },
          { value: 'expiration_date', label: 'Clearance Expiration Documentation' },
          { value: 'renewal_requirements', label: 'Renewal Requirements Document' }
        ]
      },
      { 
        value: 'conditional_clearance', 
        label: 'Conditional Medical Clearance',
        requiredDocs: [
          { value: 'condition_document', label: 'Condition Documentation' },
          { value: 'compliance_form', label: 'Condition Compliance Form' },
          { value: 'monitoring_plan', label: 'Medical Monitoring Plan' }
        ]
      }
    ];

    // Create a custom handler for the field
    const customHandler = {
      type: 'conditional_doc_data',
      options: limitedClearanceDocOptions
    };

    // Update the field with the new options
    await prisma.documentField.update({
      where: {
        id: medicalClearanceField.id
      },
      data: {
        // Store the options in a custom format as a JSON string
        doc_data_options: JSON.stringify(limitedClearanceDocOptions),
        // Add a custom field to indicate this uses a special handler
        doc_data_option_type: 'conditional_selection'
      }
    });

    console.log('Limited clearance options updated successfully!');
  } catch (error) {
    console.error('Error updating limited clearance options:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateLimitedClearanceOptions()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => process.exit(0)); 