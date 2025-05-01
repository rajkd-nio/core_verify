/**
 * Script to update the Mandatory document type with document type dropdown options
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateMandatoryDocumentType() {
  try {
    console.log('Updating Mandatory document type...');
    
    // Find the Mandatory document type
    const mandatoryType = await prisma.documentType.findFirst({
      where: { 
        name: 'Mandatory'
      }
    });
    
    if (!mandatoryType) {
      console.error('Mandatory document type not found');
      return;
    }
    
    console.log(`Found Mandatory document type with ID: ${mandatoryType.id}`);
    
    // Find the document title for Mandatory type
    const docTitle = await prisma.documentTitle.findFirst({
      where: {
        documentTypeId: mandatoryType.id
      }
    });
    
    if (!docTitle) {
      console.error('No document title found for Mandatory type');
      return;
    }
    
    console.log(`Found document title: ${docTitle.title} with ID: ${docTitle.id}`);
    
    // Document type options
    const docTypeOptions = {
      options: [
        { value: "rn", label: "Registered Nurse (RN)" },
        { value: "lpn", label: "Licensed Practical Nurse (LPN)" },
        { value: "aprn", label: "Advanced Practice Registered Nurse (APRN)" },
        { value: "crna", label: "Certified Registered Nurse Anesthetist (CRNA)" },
        { value: "cna", label: "Certified Nursing Assistant (CNA)" },
        { value: "bls", label: "Basic Life Support (BLS)" },
        { value: "acls", label: "Advanced Cardiac Life Support (ACLS)" },
        { value: "pals", label: "Pediatric Advanced Life Support (PALS)" },
        { value: "nrp", label: "Neonatal Resuscitation Program (NRP)" },
        { value: "other", label: "Other" }
      ]
    };
    
    // Update the document title with doc data options
    const updatedTitle = await prisma.documentTitle.update({
      where: {
        id: docTitle.id
      },
      data: {
        requireDocData: true,
        docDataName: "Document Type",
        docDataOptions: docTypeOptions
      }
    });
    
    console.log('Successfully updated Mandatory document title with dropdown options:');
    console.log(JSON.stringify(updatedTitle, null, 2));
    
  } catch (error) {
    console.error('Error updating Mandatory document type:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the function
updateMandatoryDocumentType()
  .then(() => console.log('Script completed'))
  .catch(error => console.error('Script failed:', error)); 