const { PrismaClient } = require('../app/generated/prisma');
const prisma = new PrismaClient();

async function updateClearanceFieldStructure() {
  try {
    console.log('Starting update of clearance field structure...');

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

    // 1. Update the medicalClearanceType field to not require doc_data
    await prisma.documentField.update({
      where: {
        id: medicalClearanceField.id
      },
      data: {
        require_doc_data: false,
        doc_data_option_type: null,
        doc_data_label: null,
        doc_data_options: null
      }
    });

    // 2. Check if the required documents field already exists
    const existingRequiredDocsField = await prisma.documentField.findFirst({
      where: {
        documentTypeId: medicalDocType.id,
        fieldId: 'requiredClearanceDocs'
      }
    });

    // Define the clearance document options
    const clearanceOptions = [
      { value: 'limited_clearance', label: 'Limited Medical Clearance' },
      { value: 'full_clearance', label: 'Full Medical Clearance' },
      { value: 'temporary_clearance', label: 'Temporary Medical Clearance' },
      { value: 'conditional_clearance', label: 'Conditional Medical Clearance' }
    ];

    // Define the document options for each clearance type
    const docOptionsMap = {
      'limited_clearance': [
        { value: 'limitations_form', label: 'Medical Limitations Form' },
        { value: 'physician_statement', label: 'Physician Statement of Restrictions' },
        { value: 'accommodations_letter', label: 'Accommodations Request Letter' },
        { value: 'follow_up_plan', label: 'Follow-up Treatment Plan' }
      ],
      'full_clearance': [
        { value: 'full_medical_report', label: 'Complete Medical Evaluation Report' },
        { value: 'fitness_assessment', label: 'Physical Fitness Assessment' }
      ],
      'temporary_clearance': [
        { value: 'temp_clearance_letter', label: 'Temporary Clearance Letter' },
        { value: 'expiration_date', label: 'Clearance Expiration Documentation' },
        { value: 'renewal_requirements', label: 'Renewal Requirements Document' }
      ],
      'conditional_clearance': [
        { value: 'condition_document', label: 'Condition Documentation' },
        { value: 'compliance_form', label: 'Condition Compliance Form' },
        { value: 'monitoring_plan', label: 'Medical Monitoring Plan' }
      ]
    };

    // Create conditional display logic
    const conditionalDisplay = {
      field: 'recordType',
      value: 'medical_clearance',
      operator: 'equals'
    };

    // Create field data
    const fieldData = {
      fieldId: 'requiredClearanceDocs',
      name: 'requiredClearanceDocs',
      label: 'Required Documents',
      type: 'multi-select',
      placeholder: 'Select required documents',
      required: true,
      order: medicalClearanceField.order + 1, // Position right after the clearance type field
      fullWidth: true,
      hidden: false,
      options: JSON.stringify(docOptionsMap.limited_clearance), // Default to limited clearance docs
      conditionalDisplay: JSON.stringify({
        field: 'medicalClearanceType',
        operator: 'exists'
      }),
      documentTypeId: medicalDocType.id
    };

    if (existingRequiredDocsField) {
      // Update existing field
      console.log('Updating existing required documents field');
      await prisma.documentField.update({
        where: {
          id: existingRequiredDocsField.id
        },
        data: fieldData
      });
    } else {
      // Create new field
      console.log('Creating new required documents field');
      await prisma.documentField.create({
        data: fieldData
      });
    }

    // 3. Create client-side config for dynamic form behavior
    const dynamicFormConfig = {
      field: 'medicalClearanceType',
      target: 'requiredClearanceDocs',
      options: {
        'limited_clearance': docOptionsMap.limited_clearance,
        'full_clearance': docOptionsMap.full_clearance,
        'temporary_clearance': docOptionsMap.temporary_clearance,
        'conditional_clearance': docOptionsMap.conditional_clearance
      }
    };

    // Create or update a DocumentDataTemplate for this dynamic behavior
    const existingTemplate = await prisma.documentDataTemplate.findFirst({
      where: {
        templateId: 'medical_clearance_docs'
      }
    });

    const templateData = {
      name: 'Medical Clearance Documents',
      label: 'Required Documents for Medical Clearance',
      optionType: 'dynamic_field',
      options: JSON.stringify(dynamicFormConfig),
      documentTypes: {
        connect: [{ id: medicalDocType.id }]
      }
    };

    if (existingTemplate) {
      // Update existing template
      console.log('Updating existing document data template');
      await prisma.documentDataTemplate.update({
        where: {
          id: existingTemplate.id
        },
        data: {
          ...templateData,
          documentTypes: templateData.documentTypes // This needs special handling for update
        }
      });
    } else {
      // Create new template
      console.log('Creating new document data template');
      await prisma.documentDataTemplate.create({
        data: {
          ...templateData,
          templateId: 'medical_clearance_docs'
        }
      });
    }

    console.log('Clearance field structure updated successfully!');
  } catch (error) {
    console.error('Error updating clearance field structure:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateClearanceFieldStructure()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => process.exit(0)); 