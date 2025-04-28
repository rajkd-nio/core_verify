'use client';

import React, { useState, useEffect } from 'react';
import { Table, Button, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPencilAlt, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import DynamicDocumentModal from './documents/DynamicDocumentModal';
import moment from 'moment';

// Helper function to log data in a structured way
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
};

/**
 * A table component that displays a list of documents with actions 
 * similar to NurseIO's CertificatesTable
 */
const DocumentTable = ({
  documents = [],
  token = '',
  onDocumentUpdate,
  onDocumentDelete,
  onDocumentAdd,
  userRole = 'user',
  isMobile = false,
  title = 'Documents'
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [modalType, setModalType] = useState('view');
  const [documentType, setDocumentType] = useState('document');

  // Handle opening modal for different operations
  const handleModalOpen = (document, type, docType = 'document') => {
    setSelectedDocument(document);
    setModalType(type);
    setDocumentType(docType);
    setModalOpen(true);
    
    logData('OPENING_MODAL', {
      type,
      docType,
      documentId: document?.id || 'new'
    });
  };

  // Handle closing modal
  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedDocument(null);
  };

  // Handle successful document operations
  const handleSuccess = (data) => {
    logData('DOCUMENT_OPERATION_SUCCESS', data);
    
    // Determine which callback to use based on modal type
    if (modalType === 'add') {
      if (onDocumentAdd) onDocumentAdd(data);
    } else if (modalType === 'edit') {
      if (onDocumentUpdate) onDocumentUpdate(data);
    }
    
    // Close the modal after success
    handleModalClose();
  };

  // Handle document operation errors
  const handleError = (error) => {
    logData('DOCUMENT_OPERATION_ERROR', error);
    // Error is handled within the modal, so we don't need to do anything here
  };

  // Handle document deletion
  const handleDelete = (document) => {
    if (window.confirm(`Are you sure you want to delete this ${document.documentType || 'document'}?`)) {
      logData('DELETING_DOCUMENT', document);
      if (onDocumentDelete) {
        onDocumentDelete(document);
      }
    }
  };

  return (
    <div className="container-fluid document-table-container">
      <Row className="my-4">
        <Col xs={6}>
          <h3>{title}</h3>
        </Col>
        <Col xs={6} className="text-right">
          <Button
            color="primary"
            className="btn-rounded px-3"
            onClick={() => handleModalOpen(null, 'add', 'document')}
            style={{ backgroundColor: '#FF69B4', borderColor: '#FF69B4' }}
          >
            <FontAwesomeIcon icon={faPlus} className="mr-1" /> New Document
          </Button>
        </Col>
      </Row>
      
      <div className="table-wrapper">
        <Table striped responsive className="mt-3">
          <thead>
            <tr>
              <th>Document Title</th>
              {!isMobile && (
                <>
                  <th>Type</th>
                  <th>Document ID/Number</th>
                  <th>Effective Date</th>
                  <th>Expiration Date</th>
                  <th>Shareable</th>
                </>
              )}
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {documents && documents.length > 0 ? (
              documents.map((document, index) => (
                <tr key={`doc-${index}`}>
                  <td>{document.title || document.certificateAbbreviation}</td>
                  {!isMobile && (
                    <>
                      <td>{document.documentType || 'document'}</td>
                      <td>{document.documentId || document.certLicenseNumber || 'N/A'}</td>
                      <td>
                        {document.effectiveDate 
                          ? moment(document.effectiveDate).format('MM/DD/YYYY') 
                          : 'N/A'}
                      </td>
                      <td>
                        {document.expirationDate 
                          ? moment(document.expirationDate).format('MM/DD/YYYY') 
                          : 'N/A'}
                      </td>
                      <td>{document.shareable === 'true' ? 'Yes' : 'No'}</td>
                    </>
                  )}
                  <td className="text-center">
                    <Button 
                      color="link" 
                      className="text-secondary" 
                      title="View"
                      onClick={() => handleModalOpen(document, 'view', document.documentType)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </Button>
                    <Button 
                      color="link" 
                      title="Edit Document"
                      onClick={() => handleModalOpen(document, 'edit', document.documentType)}
                    >
                      <FontAwesomeIcon icon={faPencilAlt} />
                    </Button>
                    <Button 
                      color="link" 
                      className="text-danger" 
                      title="Delete Document"
                      onClick={() => handleDelete(document)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={isMobile ? 2 : 7} className="text-center py-4">
                  No documents found. Click "New Document" to add one.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      
      {/* Modal for document operations */}
      <DynamicDocumentModal
        isOpen={modalOpen}
        toggle={handleModalClose}
        token={token}
        documentType={documentType}
        modalType={modalType}
        data={selectedDocument}
        onSuccess={handleSuccess}
        onError={handleError}
        config={{
          modalType,
          documentType
        }}
        hideHeader={false}
      />
      
      <style jsx>{`
        .table-wrapper {
          overflow: auto;
          width: 100%;
        }
        .document-table-container {
          margin-top: 20px;
          margin-bottom: 20px;
          padding: 0 15px;
        }
      `}</style>
    </div>
  );
};

export default DocumentTable; 