const { PrismaClient } = require('../app/generated/prisma');
const prisma = new PrismaClient();

async function updateDocDataLabel() {
  try {
    console.log('Starting update of doc_data_label...');

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

    // Update the doc_data_label to be more descriptive and dynamic
    await prisma.documentField.update({
      where: {
        id: medicalClearanceField.id
      },
      data: {
        doc_data_label: 'Required Medical Clearance Documents'
      }
    });

    console.log('Doc data label updated successfully!');
  } catch (error) {
    console.error('Error updating doc data label:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateDocDataLabel()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => process.exit(0)); 