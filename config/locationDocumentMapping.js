/**
 * DEPRECATED - This file is no longer used for location-based document type mapping
 * 
 * The location-based document type functionality has been moved directly 
 * into documentTypes.json, where each child document type now has a "locations" array
 * that specifies which location IDs (1=CA, 2=NY, 3=TX, etc.) the document type is available for.
 * 
 * This file is kept for backward compatibility, but all changes should be made
 * to documentTypes.json going forward.
 */

// Empty skeleton for backward compatibility
const documentMapping = {};

export function getLocationChildTypes(parentType, locationId) {
  console.warn('getLocationChildTypes is deprecated. Use DocumentService.getChildDocumentTypes directly.');
  return [];
}

export function isChildTypeAvailableForLocation(parentType, childType, locationId) {
  console.warn('isChildTypeAvailableForLocation is deprecated. Check childType.locations array instead.');
  return true; // Always return true since actual check will be done by DocumentService
}

export default documentMapping; 