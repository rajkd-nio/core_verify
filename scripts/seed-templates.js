const { PrismaClient } = require('../app/generated/prisma');
const prisma = new PrismaClient();

/**
 * Seed the database with document data templates
 */
async function main() {
  console.log('Starting document data templates seed...');

  try {
    // Define TB Test template
    const tbTestTemplate = {
      name: 'tb_test_template',
      label: 'TB Test Documentation',
      templateId: 'tb_test_doc',
      optionType: 'dropdown',
      options: JSON.stringify({
        title: 'TB Test Documentation',
        options: [
          { value: 'test_report', label: 'Test Report', required: true },
          { value: 'prescription', label: 'Prescription', required: false },
          { value: 'doctor_appointment', label: 'Doctor Appointment', required: false }
        ]
      }),
      attachmentFields: JSON.stringify([
        { key: 'front_side', label: 'Front Side Image', required: true },
        { key: 'back_side', label: 'Back Side Image', required: true }
      ]),
      dateFields: JSON.stringify([
        { key: 'test_date', label: 'Test Date', required: true },
        { key: 'result_date', label: 'Result Date', required: true }
      ])
    };
    
    // Define Medical Clearance template
    const medicalClearanceTemplate = {
      name: 'medical_clearance_template',
      label: 'Medical Clearance Documentation',
      templateId: 'medical_clearance_doc',
      optionType: 'dropdown',
      options: JSON.stringify({
        title: 'Medical Clearance Documentation',
        options: [
          { value: 'clearance_letter', label: 'Clearance Letter', required: true },
          { value: 'medical_report', label: 'Medical Report', required: false },
          { value: 'fitness_certificate', label: 'Fitness Certificate', required: false }
        ]
      }),
      attachmentFields: JSON.stringify([
        { key: 'clearance_document', label: 'Clearance Document', required: true },
        { key: 'additional_documents', label: 'Additional Supporting Documents', required: false }
      ]),
      dateFields: JSON.stringify([
        { key: 'exam_date', label: 'Examination Date', required: true },
        { key: 'clearance_date', label: 'Clearance Issue Date', required: true },
        { key: 'valid_until', label: 'Valid Until', required: false }
      ])
    };
    
    // Check if templates already exist
    const existingTbTemplate = await prisma.documentDataTemplate.findUnique({
      where: { templateId: tbTestTemplate.templateId }
    });
    
    const existingMedicalTemplate = await prisma.documentDataTemplate.findUnique({
      where: { templateId: medicalClearanceTemplate.templateId }
    });
    
    // Create templates if they don't exist
    if (!existingTbTemplate) {
      await prisma.documentDataTemplate.create({
        data: tbTestTemplate
      });
      console.log('Created TB Test template');
    } else {
      console.log('TB Test template already exists');
    }
    
    if (!existingMedicalTemplate) {
      await prisma.documentDataTemplate.create({
        data: medicalClearanceTemplate
      });
      console.log('Created Medical Clearance template');
    } else {
      console.log('Medical Clearance template already exists');
    }
    
    // Get medical document type
    const medicalDocType = await prisma.documentType.findUnique({
      where: { typeId: 'medical' }
    });
    
    if (!medicalDocType) {
      console.log('Medical document type not found');
      return;
    }
    
    // Connect templates to medical document type
    if (existingTbTemplate) {
      // Check if already connected
      const isConnected = await prisma.documentType.findFirst({
        where: {
          id: medicalDocType.id,
          dataTemplates: {
            some: {
              id: existingTbTemplate.id
            }
          }
        }
      });
      
      if (!isConnected) {
        await prisma.documentType.update({
          where: { id: medicalDocType.id },
          data: {
            dataTemplates: {
              connect: { id: existingTbTemplate.id }
            }
          }
        });
        console.log('Connected TB Test template to medical document type');
      } else {
        console.log('TB Test template already connected to medical document type');
      }
    }
    
    if (existingMedicalTemplate) {
      // Check if already connected
      const isConnected = await prisma.documentType.findFirst({
        where: {
          id: medicalDocType.id,
          dataTemplates: {
            some: {
              id: existingMedicalTemplate.id
            }
          }
        }
      });
      
      if (!isConnected) {
        await prisma.documentType.update({
          where: { id: medicalDocType.id },
          data: {
            dataTemplates: {
              connect: { id: existingMedicalTemplate.id }
            }
          }
        });
        console.log('Connected Medical Clearance template to medical document type');
      } else {
        console.log('Medical Clearance template already connected to medical document type');
      }
    }
    
    console.log('Template seeding complete!');
  } catch (error) {
    console.error(`Error seeding templates: ${error.message}`);
    console.error(error.stack);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 