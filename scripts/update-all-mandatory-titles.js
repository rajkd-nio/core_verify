/**
 * Script to update all document titles under Mandatory type with document type dropdown
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateAllMandatoryTitles() {
  try {
    console.log('Updating all document titles under Mandatory type...');
    
    // Find the Mandatory document type
    const mandatoryType = await prisma.documentType.findFirst({
      where: { 
        name: 'Mandatory'
      },
      include: {
        documentTitles: true
      }
    });
    
    if (!mandatoryType) {
      console.error('Mandatory document type not found');
      return;
    }
    
    console.log(`Found Mandatory document type with ID: ${mandatoryType.id}`);
    console.log(`Found ${mandatoryType.documentTitles.length} titles for this document type.`);
    
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
    
    // Update all document titles with doc data options
    for (const title of mandatoryType.documentTitles) {
      console.log(`Updating title: ${title.title} (ID: ${title.id})`);
      
      const updatedTitle = await prisma.documentTitle.update({
        where: {
          id: title.id
        },
        data: {
          requireDocData: true,
          docDataName: "Document Type",
          docDataOptions: docTypeOptions,
          // Make sure these fields are also set
          requireNumber: true,
          requireValidDate: true,
          requireExpireDate: true
        }
      });
      
      console.log(`Successfully updated title: ${updatedTitle.title}`);
    }
    
    console.log('All document titles under Mandatory type have been updated.');
    
  } catch (error) {
    console.error('Error updating document titles:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the function
updateAllMandatoryTitles()
  .then(() => console.log('Script completed'))
  .catch(error => console.error('Script failed:', error)); 