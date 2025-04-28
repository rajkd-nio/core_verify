'use client';

import React, { useState, useEffect } from 'react';
import { Row, Col, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DocumentTable from '../../components/DocumentTable';
import DynamicDocumentModal from '../../components/documents/DynamicDocumentModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/nurseio-theme.css';

// Helper function to log data in a structured way
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
};

// Sample document data
const sampleDocuments = [
  {
    id: '1',
    documentType: 'certificate',
    title: 'Registered Nurse License',
    certificateAbbreviation: 'Registered Nurse License',
    certLicenseNumber: 'RN12345',
    jurisdiction: 'California',
    effectiveDate: '2023-01-15',
    expirationDate: '2025-01-14',
    shareable: 'true',
    specialities: 'Critical Care, Emergency'
  },
  {
    id: '2',
    documentType: 'medical',
    title: 'COVID-19 Vaccination Record',
    certificateAbbreviation: 'COVID-19 Vaccination Record',
    documentId: 'VAX78901',
    issuer: 'County Health Department',
    effectiveDate: '2021-03-20',
    expirationDate: null,
    shareable: 'true'
  },
  {
    id: '3',
    documentType: 'document',
    title: 'Employment Contract',
    certificateAbbreviation: 'Employment Contract',
    documentId: 'EC-2023-001',
    issuer: 'Memorial Hospital',
    effectiveDate: '2023-02-01',
    expirationDate: '2024-01-31',
    shareable: 'false'
  },
  {
    id: '4',
    documentType: 'other',
    title: 'Professional Liability Insurance',
    certificateAbbreviation: 'Professional Liability Insurance',
    documentId: 'PLI-9876',
    issuer: 'Healthcare Insurance Ltd',
    effectiveDate: '2023-01-01',
    expirationDate: '2023-12-31',
    shareable: 'true'
  }
];

export default function DocumentsPage() {
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [selectedDocumentType, setSelectedDocumentType] = useState('document');
  const [token, setToken] = useState('sample-token-123');
  
  // Toggle dropdown
  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);
  
  // Load documents on page load
  useEffect(() => {
    // Simulate API call to fetch documents
    setTimeout(() => {
      setDocuments(sampleDocuments);
      setIsLoading(false);
    }, 1000);
  }, []);
  
  // Handle opening add document modal for specific document type
  const handleAddDocument = (documentType) => {
    setSelectedDocumentType(documentType);
    setAddModalOpen(true);
  };
  
  // Handle document add
  const handleDocumentAdd = (newDocument) => {
    // Generate a new ID for the document
    const newId = (Math.max(...documents.map(doc => parseInt(doc.id)), 0) + 1).toString();
    const documentWithId = { ...newDocument, id: newId };
    
    logData('ADDING_DOCUMENT', documentWithId);
    
    // Update state with new document
    setDocuments([...documents, documentWithId]);
    setAddModalOpen(false);
  };
  
  // Handle document update
  const handleDocumentUpdate = (updatedDocument) => {
    logData('UPDATING_DOCUMENT', updatedDocument);
    
    // Update document in state
    const updatedDocuments = documents.map(doc => 
      doc.id === updatedDocument.id ? updatedDocument : doc
    );
    
    setDocuments(updatedDocuments);
  };
  
  // Handle document delete
  const handleDocumentDelete = (documentToDelete) => {
    logData('DELETING_DOCUMENT', documentToDelete);
    
    // Remove document from state
    const filteredDocuments = documents.filter(doc => doc.id !== documentToDelete.id);
    setDocuments(filteredDocuments);
  };
  
  // Document types with their labels
  const documentTypes = [
    { type: 'certificate', label: 'Certificate or License' },
    { type: 'medical', label: 'Medical Record' },
    { type: 'document', label: 'Standard Document' },
    { type: 'other', label: 'Other Document Type' }
  ];

  return (
    <div className="documents-dashboard nurseio-theme">
      <div className="container-fluid py-4">
        <Row className="mb-4">
          <Col>
            <h2 className="mb-0">Document Management</h2>
            <p className="text-muted">View, add, and manage all your documents</p>
          </Col>
          <Col xs="auto" className="d-flex align-items-center">
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
              <Button 
                color="primary" 
                className="mr-2"
                style={{ backgroundColor: '#FF69B4', borderColor: '#FF69B4' }}
                onClick={() => handleAddDocument('document')}
              >
                <FontAwesomeIcon icon={faPlus} className="mr-1" /> Add Document
              </Button>
              <DropdownToggle 
                caret 
                color="primary"
                style={{ backgroundColor: '#FF69B4', borderColor: '#FF69B4' }}
              />
              <DropdownMenu right>
                {documentTypes.map((type) => (
                  <DropdownItem 
                    key={type.type} 
                    onClick={() => handleAddDocument(type.type)}
                  >
                    {type.label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </ButtonDropdown>
          </Col>
        </Row>
        
        {isLoading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <p className="mt-2">Loading documents...</p>
          </div>
        ) : (
          <DocumentTable 
            documents={documents}
            token={token}
            onDocumentUpdate={handleDocumentUpdate}
            onDocumentDelete={handleDocumentDelete}
            onDocumentAdd={handleDocumentAdd}
            title="All Documents"
          />
        )}
      </div>
      
      {/* Modal for adding new documents from dropdown */}
      <DynamicDocumentModal
        isOpen={addModalOpen}
        toggle={() => setAddModalOpen(false)}
        token={token}
        documentType={selectedDocumentType}
        modalType="add"
        onSuccess={handleDocumentAdd}
        config={{
          modalType: 'add',
          documentType: selectedDocumentType
        }}
      />
    </div>
  );
} 