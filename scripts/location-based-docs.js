/**
 * Location-based document handler for CoreVerify
 * 
 * This script demonstrates how location/region information from NurseIO
 * will be used to determine document requirements in CoreVerify.
 */

// Simulated API response or database query for document configurations
const getDocumentConfigForRegion = (regionId, documentTypeId) => {
  // In a real implementation, this would query the DocumentConfiguration table
  const documentConfigurations = [
    // California (region 1) configurations
    {
      regionId: 1,
      documentTitleId: 1,
      documentTitle: "California Medical License",
      documentTypeId: 3, // Medical
      typeOfCondition: 1, // Required
      requireNumber: true,
      requireValidDate: true,
      requireExpireDate: true,
      requireDocData: true,
      docDataName: "California License Documentation",
      docDataOptions: JSON.stringify([
        { value: 'ca_medical_board', label: 'CA Medical Board Verification' },
        { value: 'ca_dea_registration', label: 'CA DEA Registration' }
      ])
    },
    {
      regionId: 1,
      documentTitleId: 2,
      documentTitle: "California TB Test",
      documentTypeId: 3, // Medical
      typeOfCondition: 1, // Required
      requireNumber: false,
      requireValidDate: true,
      requireExpireDate: true,
      requireDocData: true,
      docDataName: "TB Test Results",
      docDataOptions: JSON.stringify([
        { value: 'positive', label: 'Positive' },
        { value: 'negative', label: 'Negative' }
      ])
    },
    
    // New York (region 2) configurations
    {
      regionId: 2,
      documentTitleId: 3,
      documentTitle: "New York Medical License",
      documentTypeId: 3, // Medical
      typeOfCondition: 1, // Required
      requireNumber: true,
      requireValidDate: true,
      requireExpireDate: true,
      requireDocData: false
    },
    {
      regionId: 2,
      documentTitleId: 4,
      documentTitle: "NY State Background Check",
      documentTypeId: 3, // Medical
      typeOfCondition: 1, // Required
      requireNumber: true,
      requireValidDate: true,
      requireExpireDate: false,
      requireDocData: false
    },
    
    // Texas (region 3) configurations
    {
      regionId: 3,
      documentTitleId: 5,
      documentTitle: "Texas Medical License",
      documentTypeId: 3, // Medical
      typeOfCondition: 1, // Required
      requireNumber: true,
      requireValidDate: true,
      requireExpireDate: true,
      requireDocData: true,
      docDataName: "Texas License Documentation",
      docDataOptions: JSON.stringify([
        { value: 'tx_medical_board', label: 'TX Medical Board Verification' },
        { value: 'tx_controlled_substances', label: 'TX Controlled Substances Registration' }
      ])
    }
  ];
  
  // Filter the configurations based on region and document type
  return documentConfigurations.filter(
    config => config.regionId === regionId && config.documentTypeId === documentTypeId
  );
};

/**
 * Main handler for processing location-based document requirements
 * 
 * @param {Object} params - Parameters from NurseIO
 * @param {number} params.locationId - Region/location ID
 * @param {string} params.documentType - Document type (certificate, medical, etc.)
 * @returns {Object} - Document requirements based on location
 */
const getLocationBasedDocumentRequirements = (params) => {
  // Map document types to IDs
  const documentTypeMap = {
    'certificate': 1,
    'document': 2,
    'medical': 3,
    'other': 4
  };
  
  const locationId = params.locationId || 1; // Default to California (1)
  const documentTypeId = documentTypeMap[params.documentType] || 3; // Default to medical (3)
  
  // Get the document configurations for this region and document type
  const documentConfigs = getDocumentConfigForRegion(locationId, documentTypeId);
  
  // Build the response
  return {
    locationId: locationId,
    locationName: getLocationName(locationId),
    documentType: params.documentType,
    documentTypeId: documentTypeId,
    requiredDocuments: documentConfigs.map(config => ({
      id: config.documentTitleId,
      title: config.documentTitle,
      requireNumber: config.requireNumber,
      requireValidDate: config.requireValidDate,
      requireExpireDate: config.requireExpireDate,
      requireDocData: config.requireDocData,
      docDataName: config.docDataName,
      docDataOptions: config.docDataOptions ? JSON.parse(config.docDataOptions) : null
    }))
  };
};

/**
 * Helper function to get location name from ID
 */
const getLocationName = (locationId) => {
  const locations = {
    1: 'California',
    2: 'New York',
    3: 'Texas',
    4: 'Florida',
    5: 'Washington'
  };
  
  return locations[locationId] || 'Unknown Location';
};

// Example usage:
const exampleParams = {
  locationId: 1, // California
  documentType: 'medical',
  userId: 'user-123',
  timestamp: new Date().toISOString()
};

const requirements = getLocationBasedDocumentRequirements(exampleParams);
console.log(JSON.stringify(requirements, null, 2));

module.exports = {
  getLocationBasedDocumentRequirements
}; 