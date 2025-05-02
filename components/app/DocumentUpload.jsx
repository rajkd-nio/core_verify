import React, { useState, useEffect } from 'react';
import { 
  Button, 
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  HStack,
  Box,
  Text,
  Heading,
  Alert,
  AlertIcon,
  Spinner,
  useToast,
  Code,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';

/**
 * Document upload component
 * @param {Object} props Component props
 * @returns {JSX.Element} Document upload form
 */
const DocumentUpload = () => {
  // State variables
  const [documentTypes, setDocumentTypes] = useState([]);
  const [selectedDocType, setSelectedDocType] = useState('');
  const [formSchema, setFormSchema] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [requiresLicense, setRequiresLicense] = useState(false);
  const [licenseOptions, setLicenseOptions] = useState([]);
  const [docDataFields, setDocDataFields] = useState([]);
  const [tbTestOptions, setTbTestOptions] = useState([]);
  const [tbTestAttachmentFields, setTbTestAttachmentFields] = useState([]);
  const [tbTestDateFields, setTbTestDateFields] = useState([]);
  
  // Toast for notifications
  const toast = useToast();

  // Fetch document types on component mount
  useEffect(() => {
    fetchDocumentTypes();
  }, []);

  // Effect to fetch TB test template data when record type changes to TB test
  useEffect(() => {
    if (selectedDocType === 'medical' && formValues.recordType === 'tb_test') {
      fetchTbTestTemplateData();
    }
  }, [selectedDocType, formValues.recordType]);

  // Fetch TB test template data
  const fetchTbTestTemplateData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/documents?templateId=tb_test_doc');
      const data = await response.json();
      
      if (data.success) {
        // Parse options, attachment fields, and date fields
        const template = data.data;
        
        if (template.options) {
          const parsedOptions = JSON.parse(template.options);
          setTbTestOptions(parsedOptions.options || []);
        }
        
        if (template.attachmentFields) {
          const attachmentFields = JSON.parse(template.attachmentFields);
          setTbTestAttachmentFields(attachmentFields);
        }
        
        if (template.dateFields) {
          const dateFields = JSON.parse(template.dateFields);
          setTbTestDateFields(dateFields);
        }
      }
    } catch (err) {
      console.error('Error fetching TB test template data:', err);
      setError('Error fetching TB test template data');
    } finally {
      setLoading(false);
    }
  };

  // Fetch document types from API
  const fetchDocumentTypes = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/documents');
      const data = await response.json();
      
      if (data.success) {
        setDocumentTypes(data.data);
      } else {
        setError(data.error || 'Failed to fetch document types');
      }
    } catch (err) {
      setError('Error fetching document types: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle document type selection
  const handleDocTypeChange = async (e) => {
    const typeId = e.target.value;
    setSelectedDocType(typeId);
    setFormValues({});
    setFile(null);
    
    if (typeId) {
      await fetchFormSchema(typeId);
      await checkLicenseRequirements(typeId);
      await fetchDocDataFields(typeId);
    } else {
      setFormSchema(null);
      setRequiresLicense(false);
      setLicenseOptions([]);
      setDocDataFields([]);
    }
  };

  // Fetch form schema for the selected document type
  const fetchFormSchema = async (typeId) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/documents?documentType=${typeId}`);
      const data = await response.json();
      
      if (data.success) {
        setFormSchema(data.data);
      } else {
        setError(data.error || 'Failed to fetch form schema');
      }
    } catch (err) {
      setError('Error fetching form schema: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Check if document requires license
  const checkLicenseRequirements = async (typeId) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/documents?documentType=${typeId}&license`);
      const data = await response.json();
      
      if (data.success) {
        setRequiresLicense(data.data.requires_license);
        setLicenseOptions(data.data.license_options || []);
      } else {
        setError(data.error || 'Failed to check license requirements');
      }
    } catch (err) {
      setError('Error checking license requirements: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch document data fields
  const fetchDocDataFields = async (typeId) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/documents?documentType=${typeId}&docData`);
      const data = await response.json();
      
      if (data.success) {
        setDocDataFields(data.data || []);
      } else {
        setError(data.error || 'Failed to fetch document data fields');
      }
    } catch (err) {
      setError('Error fetching document data fields: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle form value changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    
    // Clear dependent fields when parent selection changes
    if (name === 'recordType') {
      // When record type changes, clear TB test specific selections
      setFormValues(prev => ({
        ...prev,
        [name]: value,
        required_doc_data_option: '', // Clear TB test doc type selection
        front_side: null,
        back_side: null,
        test_date: '',
        result_date: ''
      }));
    }
  };

  // Special handler for TB Test document type selection
  const handleRequiredDocDataOptionChange = (e) => {
    const { value } = e.target;
    setFormValues(prev => ({
      ...prev,
      required_doc_data_option: value
    }));
  };

  // Handle file upload for TB test attachments
  const handleTbTestFileChange = (fieldKey, files) => {
    if (files && files[0]) {
      setFormValues(prev => ({
        ...prev,
        [fieldKey]: files[0]
      }));
    }
  };

  // Handle TB test date field changes
  const handleTbTestDateChange = (fieldKey, value) => {
    setFormValues(prev => ({
      ...prev,
      [fieldKey]: value
    }));
  };

  // Handle file selection
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedDocType) {
      setError('Please select a document type');
      return;
    }
    
    if (!file) {
      setError('Please select a file to upload');
      return;
    }
    
    if (requiresLicense && !formValues.license) {
      setError('Please select a license type');
      return;
    }
    
    // Validate TB test fields if selected
    if (selectedDocType === 'medical' && formValues.recordType === 'tb_test') {
      if (!formValues.required_doc_data_option) {
        setError('Please select a TB Test document type');
        return;
      }
      
      // Check for required attachment fields
      for (const field of tbTestAttachmentFields) {
        if (field.required && !formValues[field.key]) {
          setError(`Please upload ${field.label}`);
          return;
        }
      }
      
      // Check for required date fields
      for (const field of tbTestDateFields) {
        if (field.required && !formValues[field.key]) {
          setError(`Please select ${field.label}`);
          return;
        }
      }
    }
    
    try {
      setLoading(true);
      setError('');
      
      const formData = new FormData();
      formData.append('documentType', selectedDocType);
      formData.append('file', file);
      
      // Add all form values to the formData
      for (const key in formValues) {
        if (formValues[key] instanceof File) {
          formData.append(key, formValues[key]);
        } else if (formValues[key] !== null && formValues[key] !== undefined) {
          formData.append(key, formValues[key]);
        }
      }
      
      const response = await fetch('/api/documents', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: 'Document uploaded successfully',
          description: `Document ID: ${data.data.documentId}`,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        
        // Reset form
        setSelectedDocType('');
        setFormSchema(null);
        setFormValues({});
        setFile(null);
        setRequiresLicense(false);
        setLicenseOptions([]);
        setDocDataFields([]);
      } else {
        setError(data.error || 'Failed to upload document');
      }
    } catch (err) {
      setError('Error uploading document: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Render TB Test specific fields when TB Test is selected as record type
  const renderTbTestFields = () => {
    if (selectedDocType !== 'medical' || formValues.recordType !== 'tb_test') {
      return null;
    }

    return (
      <Box mt={4} p={4} borderWidth="1px" borderRadius="lg" bg="gray.50">
        <Heading size="sm" mb={3}>TB Test Documentation</Heading>
        
        {/* TB Test Document Type Selection - THIS IS THE KEY DROPDOWN */}
        <FormControl isRequired mb={4}>
          <FormLabel>TB Test Document Type</FormLabel>
          <Select
            value={formValues.required_doc_data_option || ''}
            onChange={handleRequiredDocDataOptionChange}
            placeholder="Select TB Test document type"
          >
            {tbTestOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </FormControl>
        
        {/* Only show attachments and dates if document type is selected */}
        {formValues.required_doc_data_option && (
          <>
            {/* Render attachment fields */}
            {tbTestAttachmentFields.map(field => (
              <FormControl key={field.key} isRequired={field.required} mb={3}>
                <FormLabel>{field.label}</FormLabel>
                <Input 
                  type="file" 
                  onChange={(e) => handleTbTestFileChange(field.key, e.target.files)}
                  p={1}
                />
              </FormControl>
            ))}
            
            {/* Render date fields */}
            {tbTestDateFields.map(field => (
              <FormControl key={field.key} isRequired={field.required} mb={3}>
                <FormLabel>{field.label}</FormLabel>
                <Input
                  type="date"
                  value={formValues[field.key] || ''}
                  onChange={(e) => handleTbTestDateChange(field.key, e.target.value)}
                />
              </FormControl>
            ))}
          </>
        )}
      </Box>
    );
  };

  // Render a basic form field
  const renderField = (field) => {
    // Skip rendering fields that are conditionally displayed and shouldn't be shown
    if (field.conditionalDisplay) {
      try {
        const condition = JSON.parse(field.conditionalDisplay);
        if (condition.equal && formValues[condition.field] !== condition.equal) {
          return null;
        }
      } catch (error) {
        console.error('Error parsing conditional display:', error);
      }
    }

    switch (field.type) {
      case 'select':
        return (
          <FormControl key={field.fieldId} isRequired={field.required} mb={4}>
            <FormLabel>{field.label}</FormLabel>
            <Select
              name={field.name}
              value={formValues[field.name] || ''}
              onChange={handleInputChange}
              placeholder={field.placeholder || `Select ${field.label}`}
            >
              {field.options && JSON.parse(field.options).map((option, idx) => (
                <option key={idx} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </FormControl>
        );
      
      case 'file':
        return (
          <FormControl key={field.id || field.fieldId} isRequired={field.required} mb={4}>
            <FormLabel>{field.label}</FormLabel>
            <Input
              type="file"
              name={field.name}
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setFormValues({
                    ...formValues,
                    [`${field.name}_file`]: e.target.files[0]
                  });
                }
              }}
              p={1}
            />
          </FormControl>
        );
      
      case 'date':
        return (
          <FormControl key={field.id || field.fieldId} isRequired={field.required} mb={4}>
            <FormLabel>{field.label}</FormLabel>
            <Input
              type="date"
              name={field.name}
              value={formValues[field.name] || ''}
              onChange={handleInputChange}
            />
          </FormControl>
        );
      
      default:
        return (
          <FormControl key={field.fieldId} isRequired={field.required} mb={4}>
            <FormLabel>{field.label}</FormLabel>
            <Input
              type={field.type || 'text'}
              name={field.name}
              value={formValues[field.name] || ''}
              onChange={handleInputChange}
              placeholder={field.placeholder}
            />
          </FormControl>
        );
    }
  };

  // Determine if a document data field should be displayed based on recordType
  const shouldDisplayDocDataField = (field) => {
    // If no conditional display, always show
    if (!field.conditionalDisplay) {
      return true;
    }
    
    try {
      // Parse conditional display settings
      const conditionalDisplay = typeof field.conditionalDisplay === 'string' 
        ? JSON.parse(field.conditionalDisplay) 
        : field.conditionalDisplay;
      
      // Get the field and value to check against
      const targetField = conditionalDisplay.field;
      const targetValue = formValues[targetField];
      
      // Check if this is a TB Test template and we've selected TB Test recordType
      if (field.templateId === 'tb_test_doc' && targetField === 'recordType') {
        return targetValue === 'tb_test';
      }
      
      // Check if this is a Medical Clearance template and we've selected Medical Clearance recordType
      if (field.templateId === 'medical_clearance_doc' && targetField === 'recordType') {
        return targetValue === 'medical_clearance';
      }
      
      // Standard condition checks
      if (conditionalDisplay.equal !== undefined && targetValue === conditionalDisplay.equal) {
        return true;
      }
      
      if (conditionalDisplay.notEqual !== undefined && targetValue !== conditionalDisplay.notEqual) {
        return true;
      }
      
      if (conditionalDisplay.in !== undefined && Array.isArray(conditionalDisplay.in) && 
          conditionalDisplay.in.includes(targetValue)) {
        return true;
      }
      
      // Default: don't show if conditional display is defined but not matched
      return false;
    } catch (error) {
      console.error('Error in shouldDisplayDocDataField:', error);
      return true; // Show by default in case of error
    }
  };

  return (
    <Box maxW="800px" mx="auto" p={4}>
      <Heading size="lg" mb={6}>Document Upload</Heading>
      
      {error && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          {error}
        </Alert>
      )}
      
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          {/* Document Type Selection */}
          <FormControl isRequired>
            <FormLabel>Document Type</FormLabel>
            <Select 
              value={selectedDocType} 
              onChange={handleDocTypeChange}
              placeholder="Select document type"
            >
              {documentTypes.map(type => (
                <option key={type.typeId} value={type.typeId}>
                  {type.name}
                </option>
              ))}
            </Select>
          </FormControl>
          
          {loading && (
            <Box textAlign="center" py={4}>
              <Spinner size="md" />
              <Text mt={2}>Loading...</Text>
            </Box>
          )}
          
          {selectedDocType && !loading && (
            <>
              {/* Record Type Selection for Medical */}
              {selectedDocType === 'medical' && formSchema && formSchema.fields && (
                <>
                  {formSchema.fields
                    .filter(field => field.fieldId === 'recordType')
                    .map(field => renderField(field))}
                </>
              )}
              
              {/* TB Test Specific Fields */}
              {renderTbTestFields()}
              
              {/* File Upload (Only show for non-TB test types or if no record type is required) */}
              {(selectedDocType !== 'medical' || formValues.recordType !== 'tb_test') && (
                <FormControl isRequired>
                  <FormLabel>Upload Document</FormLabel>
                  <Input 
                    type="file" 
                    onChange={handleFileChange}
                    p={1}
                  />
                  {file && (
                    <Text fontSize="sm" mt={1}>
                      Selected file: {file.name} ({Math.round(file.size / 1024)} KB)
                    </Text>
                  )}
                </FormControl>
              )}
              
              {/* Other Standard Fields */}
              {formSchema && formSchema.fields && (
                <>
                  {formSchema.fields
                    .filter(field => 
                      field.fieldId !== 'recordType' && 
                      !(field.conditionalDisplay && 
                        JSON.parse(field.conditionalDisplay).field === 'recordType' && 
                        JSON.parse(field.conditionalDisplay).equal === 'tb_test')
                    )
                    .map(field => renderField(field))}
                </>
              )}
              
              {/* License Fields */}
              {requiresLicense && (
                <FormControl isRequired>
                  <FormLabel>License Type</FormLabel>
                  <Select 
                    name="license"
                    value={formValues.license || ''}
                    onChange={handleInputChange}
                    placeholder="Select license type"
                  >
                    {licenseOptions.map((option, idx) => (
                      <option key={idx} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              )}
              
              {/* License Number */}
              {requiresLicense && formValues.license && (
                <FormControl>
                  <FormLabel>License Number</FormLabel>
                  <Input 
                    type="text" 
                    name="licenseNumber"
                    value={formValues.licenseNumber || ''}
                    onChange={handleInputChange}
                    placeholder="Enter license number"
                  />
                </FormControl>
              )}
              
              {/* Expiration Date */}
              {requiresLicense && formValues.license && (
                <FormControl>
                  <FormLabel>Expiration Date</FormLabel>
                  <Input 
                    type="date" 
                    name="expDate"
                    value={formValues.expDate || ''}
                    onChange={handleInputChange}
                  />
                </FormControl>
              )}
              
              {/* Submit Button */}
              <Button 
                mt={4} 
                colorScheme="blue" 
                type="submit" 
                isLoading={loading}
                isDisabled={!selectedDocType || (!file && !(selectedDocType === 'medical' && formValues.recordType === 'tb_test'))}
              >
                Upload Document
              </Button>
            </>
          )}
        </VStack>
      </form>
      
      {/* Debug Panel - Only in Development */}
      {process.env.NODE_ENV !== 'production' && (
        <Box mt={6} p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="sm" mb={2}>Debug Information</Heading>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Form State
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text fontSize="sm" fontFamily="monospace" whiteSpace="pre-wrap">
                  {JSON.stringify({
                    selectedDocType,
                    recordType: formValues.recordType,
                    required_doc_data_option: formValues.required_doc_data_option,
                    hasTemplateData: {
                      options: tbTestOptions.length > 0,
                      attachmentFields: tbTestAttachmentFields.length > 0,
                      dateFields: tbTestDateFields.length > 0
                    },
                    attachments: Object.keys(formValues).filter(key => 
                      tbTestAttachmentFields.some(field => field.key === key)
                    ).reduce((obj, key) => {
                      obj[key] = formValues[key] ? `[File: ${formValues[key].name}]` : null;
                      return obj;
                    }, {})
                  }, null, 2)}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      )}
    </Box>
  );
};

export default DocumentUpload; 