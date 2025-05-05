'use client';

import { useState } from 'react';
import { extractDocumentData } from '../utils/api';
import moment from 'moment';

/**
 * Custom hook for document data extraction functionality
 * This separates the extraction logic from the form component
 */
const useDocumentExtraction = () => {
  const [extracting, setExtracting] = useState(false);
  const [extractionError, setExtractionError] = useState(null);
  const [extractionSuccess, setExtractionSuccess] = useState(null);
  const [extractedData, setExtractedData] = useState(null);

  /**
   * Parse and format date to MM/DD/YYYY consistently
   * @param {string} dateStr - The date string to parse
   * @returns {string} - Formatted date string in MM/DD/YYYY format
   */
  const parseAndFormatDate = (dateStr) => {
    if (!dateStr) return '';
    
    console.log(`Parsing date string: "${dateStr}"`);
    
    // Check if already in MM/DD/YYYY format
    if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateStr)) {
      // Validate that it's a real date
      const mmddyyyyParsed = moment(dateStr, 'MM/DD/YYYY', true);
      if (mmddyyyyParsed.isValid()) {
        console.log(`Already in MM/DD/YYYY format: ${dateStr}`);
        return dateStr;
      }
    }
    
    // Try to parse with multiple formats in priority order
    const formats = [
      // US formats (preferred)
      'MM/DD/YYYY', 'M/D/YYYY',
      
      // ISO formats
      'YYYY-MM-DD', 
      
      // European formats
      'DD/MM/YYYY', 'D/M/YYYY',
      
      // Other common formats
      'YYYY/MM/DD', 'MM-DD-YYYY', 'DD-MM-YYYY',
      'MMM D, YYYY', 'MMMM D, YYYY',
      'D MMM YYYY', 'D MMMM YYYY'
    ];
    
    // Try strict parsing with each format first
    for (const format of formats) {
      const parsedDate = moment(dateStr, format, true); // strict parsing
      if (parsedDate.isValid()) {
        console.log(`Parsed date "${dateStr}" with format ${format}`);
        const formatted = parsedDate.format('MM/DD/YYYY');
        console.log(`Formatted result: ${formatted}`);
        return formatted;
      }
    }
    
    // If strict parsing fails, try flexible parsing as a fallback
    const flexibleParsed = moment(dateStr);
    if (flexibleParsed.isValid()) {
      console.log(`Flexibly parsed date "${dateStr}"`);
      
      // Sanity check the year - if it's way off, this might be a DD/MM/YYYY misinterpreted as MM/DD/YYYY
      const year = flexibleParsed.year();
      if (year < 1900 || year > 2100) {
        console.warn(`Suspicious year ${year} when parsing "${dateStr}" - may be a format mismatch`);
        // Try swapping day and month for European format
        const parts = dateStr.split(/[-\/]/);
        if (parts.length === 3) {
          const swapped = `${parts[1]}/${parts[0]}/${parts[2]}`;
          const swappedParsed = moment(swapped, 'MM/DD/YYYY');
          if (swappedParsed.isValid() && swappedParsed.year() >= 1900 && swappedParsed.year() <= 2100) {
            console.log(`Using swapped date format: ${swapped}`);
            return swappedParsed.format('MM/DD/YYYY');
          }
        }
      }
      
      const formatted = flexibleParsed.format('MM/DD/YYYY');
      console.log(`Flexibly formatted result: ${formatted}`);
      return formatted;
    }
    
    // If we couldn't parse it, return empty string
    console.warn(`Could not parse date string: "${dateStr}"`);
    return '';
  };

  /**
   * Extract data from a document file
   * @param {File} file - The file to extract data from
   * @param {string} fieldName - The name of the field this file belongs to
   * @returns {Promise<Object>} - The processed form data
   */
  const extractDataFromFile = async (file, fieldName = 'unknown') => {
    // Guard against processing when already extracting to prevent loops
    if (extracting) {
      console.log(`Already extracting data, skipping duplicate request for ${fieldName}`);
      return {};
    }
    
    try {
      // Start extraction process
      setExtracting(true);
      setExtractionError(null);
      
      // Only clear success if we have a new extraction
      if (extractionSuccess) {
        setExtractionSuccess(null);
      }
      
      // Log the extraction attempt
      console.log(`Extracting data from file ${file.name} for field ${fieldName}`);
      
      try {
        // Call the NIOVerify API
        const response = await extractDocumentData(file);
        
        // Log the complete API response
        console.log('NIOVerify API Response:', response);
        
        // Check if the response has standardized_fields property
        if (response && response.standardized_fields) {
          // Store extracted data directly from standardized_fields
          setExtractedData(response.standardized_fields);
          
          // Return the standardized fields directly for processing by the parent component
          console.log('Returning standardized fields to form component:', response.standardized_fields);
          
          // Set extraction success
          setExtractionSuccess("Document processed successfully. Please review the information.");
          
          // Return the standardized fields as they are, let the parent component handle mapping
          return response.standardized_fields;
        } else {
          throw new Error('No standardized fields returned from API');
        }
      } catch (apiError) {
        // Log the API error but don't use demo data
        console.error('API Error during document extraction:', apiError);
        
        // Set a specific error message for the API failure
        setExtractionError(`Document extraction failed: ${apiError.message || 'Unable to process document'}`);
        
        // Throw the error to be handled by the parent try/catch
        throw new Error(`Document extraction API error: ${apiError.message || 'Processing failed'}`);
      }
    } catch (error) {
      // Set a clear error message for the user
      setExtractionError("Document extraction unsuccessful. Please enter the information manually.");
      console.error(`Error extracting document data for ${fieldName}:`, error);
      
      // Return empty object
      return {};
    } finally {
      // Reset extracting state immediately instead of using setTimeout
      setExtracting(false);
      
      // Add an extra safeguard to ensure extracting state gets reset
      setTimeout(() => {
        if (extracting) {
          console.log('Safeguard: forcing reset of extracting state');
          setExtracting(false);
        }
      }, 200);
    }
  };

  /**
   * Reset the extraction state, but optionally retain the file
   * @param {boolean} keepFile - Whether to keep the file state
   */
  const resetExtraction = (keepFile = false) => {
    setExtractedData(null);
    setExtractionError(null);
    setExtractionSuccess(null);
    setExtracting(false);
  };

  return {
    extracting,
    extractionError,
    extractionSuccess,
    extractedData,
    extractDataFromFile,
    resetExtraction,
    setExtractionSuccess,
    setExtractionError
  };
};

export default useDocumentExtraction; 