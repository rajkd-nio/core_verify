'use client';

import React, { useState, useEffect } from 'react';
import { Row, Col, Label, Form, FormGroup, Input, Alert, Button } from 'reactstrap';
import { uploadFile } from '../utils/api';
import moment from 'moment';

// Version info for tracking integration
const COMPONENT_VERSION = '1.0.4';

// Helper function to log data in a structured way
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
};

const DocumentUploader = ({ 
  onSuccess, 
  onError, 
  parentOrigin = "*", 
  token = "", 
  verifyConfig = null, 
  config = null,
  isEmbedded = false,
  allowParentOverrides = true,
  modalType = 'edit'
}) => {
  const [formData, setFormData] = useState({
    certificateAbbreviation: '',
    certLicenseNumber: '',
    jurisdiction: 'USA',
    specialities: '',
    effectiveDate: '',
    expirationDate: '',
    shareable: 'true',
    fileUploadKeys: [],
    documentType: 'certificate'
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [fileUrl, setFileUrl] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  
  // For security, store the allowed origin internally
  const [secureParentOrigin] = useState(parentOrigin);

  // Get document type-specific labels
  const getDocumentLabels = () => {
    const docType = formData.documentType || 'certificate';
    
    const labels = {
      certificate: {
        title: 'Certificate Title',
        number: 'Certificate/License Number',
        specialities: 'Specialities',
        effectiveDate: 'Effective Date',
        expirationDate: 'Expiration Date',
        fileUpload: 'Upload Certificate (PDF, JPG, PNG)'
      },
      document: {
        title: 'Document Title',
        number: 'Document Number/ID',
        specialities: 'Categories',
        effectiveDate: 'Issue Date',
        expirationDate: 'Expiration Date',
        fileUpload: 'Upload Document (PDF, JPG, PNG)'
      },
      medical: {
        title: 'Medical Record Title',
        number: 'Record Number',
        specialities: 'Medical Specialities',
        effectiveDate: 'Record Date',
        expirationDate: 'Valid Until',
        fileUpload: 'Upload Medical Record (PDF, JPG, PNG)'
      },
      other: {
        title: 'Document Title',
        number: 'Reference Number',
        specialities: 'Categories',
        effectiveDate: 'Created Date',
        expirationDate: 'Expiration Date',
        fileUpload: 'Upload Document (PDF, JPG, PNG)'
      }
    };
    
    return labels[docType] || labels.certificate;
  };

  // Get document-specific labels
  const docLabels = getDocumentLabels();

  // Handle modal close
  const handleCloseModal = () => {
    if (window.parent && window.parent !== window && isEmbedded) {
      try {
        const messageData = {
          type: 'MODAL_CLOSED',
          timestamp: new Date().toISOString()
        };
        
        logData('SENDING_MODAL_CLOSE', {
          targetOrigin: secureParentOrigin,
          messageData
        });
        
        window.parent.postMessage(messageData, secureParentOrigin);
      } catch (error) {
        console.error('Error sending modal close message:', error);
      }
    }
  };

  // Log component props when mounted (for debugging)
  useEffect(() => {
    logData('DOCUMENT_UPLOADER_INITIALIZED', {
      isEmbedded,
      parentOrigin: secureParentOrigin,
      hasToken: !!token,
      hasVerifyConfig: !!verifyConfig,
      hasConfig: !!config,
      modalType
    });
  }, []);

  // When verifyConfig changes, pre-fill certain form fields
  useEffect(() => {
    // Use either verifyConfig or config, with config taking precedence
    const configToApply = config || verifyConfig;
    
    if (configToApply && allowParentOverrides) {
      logData('APPLYING_CONFIG', configToApply);
      
      // Pre-fill form based on configToApply
      const newFormData = {...formData};
      
      if (configToApply.documentType) {
        newFormData.documentType = configToApply.documentType;
        
        // Set default certificate title based on document type if not already specified
        if (!newFormData.certificateAbbreviation && configToApply.documentName) {
          newFormData.certificateAbbreviation = configToApply.documentName;
        }
      }
      
      if (configToApply.userId) {
        newFormData.userId = configToApply.userId;
      }
      
      if (configToApply.documentName) {
        newFormData.certificateAbbreviation = configToApply.documentName;
      }
      
      if (configToApply.documentDate) {
        newFormData.effectiveDate = configToApply.documentDate;
      }
      
      if (configToApply.expirationDate) {
        newFormData.expirationDate = configToApply.expirationDate;
      }
      
      if (configToApply.documentNumber) {
        newFormData.certLicenseNumber = configToApply.documentNumber;
      }
      
      if (configToApply.jurisdiction) {
        newFormData.jurisdiction = configToApply.jurisdiction;
      }
      
      if (configToApply.specialities) {
        newFormData.specialities = configToApply.specialities;
      }
      
      setFormData(newFormData);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verifyConfig, config, allowParentOverrides]);

  // Update document labels when document type changes
  useEffect(() => {
    // Force a re-render when document type changes to update labels
    if (formData.documentType) {
      logData('DOCUMENT_TYPE_CHANGED', {
        documentType: formData.documentType
      });
    }
  }, [formData.documentType]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      
      // Create a temporary URL for preview
      const fileURL = URL.createObjectURL(e.target.files[0]);
      setFileUrl([...fileUrl, { file: fileURL }]);
      
      logData('FILE_SELECTED', {
        fileName: e.target.files[0].name,
        fileSize: e.target.files[0].size,
        fileType: e.target.files[0].type
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.certificateAbbreviation) {
      setError('Please fill all required fields');
      return;
    }
    
    if (!selectedFile && formData.fileUploadKeys.length === 0) {
      setError('Please upload a document file');
      return;
    }
    
    setSubmitting(true);
    setError('');
    
    try {
      // Create payload for submission
      const payload = {
        ...formData,
        file: selectedFile,
        token: token,
        verifyConfig: verifyConfig || {},
        config: config || {},
        componentVersion: COMPONENT_VERSION,
        isEmbedded: isEmbedded,
        timestamp: new Date().toISOString()
      };
      
      logData('SUBMITTING_PAYLOAD', payload);
      
      // Submit the document data
      const response = await uploadFile(payload);
      
      logData('UPLOAD_RESPONSE', response);
      
      setSuccess('Document information submitted successfully!');
      
      // Notify parent window if in iframe and we have a valid parent origin
      if (window.parent && window.parent !== window && isEmbedded && secureParentOrigin) {
        try {
          const messageData = {
            type: 'DOCUMENT_UPLOADED',
            data: response.data,
            timestamp: new Date().toISOString()
          };
          
          logData('SENDING_TO_PARENT', {
            targetOrigin: secureParentOrigin,
            messageData
          });
          
          window.parent.postMessage(messageData, secureParentOrigin);
          console.log('Sent document data to parent:', secureParentOrigin);
        } catch (error) {
          console.error('Error sending to parent:', error);
          setError('Failed to communicate with parent application.');
        }
      }
      
      // Call success callback if provided
      if (onSuccess) {
        logData('CALLING_SUCCESS_CALLBACK', response.data);
        onSuccess(response.data);
      }
      
      // Reset form on success
      setFormData({
        certificateAbbreviation: '',
        certLicenseNumber: '',
        jurisdiction: 'USA',
        specialities: '',
        effectiveDate: '',
        expirationDate: '',
        shareable: 'true',
        fileUploadKeys: [],
        documentType: 'certificate'
      });
      setSelectedFile(null);
      setFileUrl([]);
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccess('');
      }, 3000);
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.message || 'Submission failed. Please try again.');
      
      if (onError) {
        logData('CALLING_ERROR_CALLBACK', {
          message: err.message,
          stack: err.stack
        });
        onError(err);
      }
    } finally {
      setSubmitting(false);
    }
  };

  // Exactly match NurseIO CertificateDetailModal UI
  if (modalType === 'view') {
    return (
      <div className="container certificate-detail">
        {error && <Alert color="danger">{error}</Alert>}
        {success && <Alert color="success">{success}</Alert>}
        
        <>
          <Row className="mb-2">
            <Col xs={5}><Label className="font-weight-bold">Certificate Title:</Label></Col>
            <Col xs={7}><Label>{formData.certificateAbbreviation}</Label></Col>
          </Row>
          <Row className="mb-2">
            <Col xs={5}><Label className="font-weight-bold">Specialities:</Label></Col>
            <Col xs={7}><Label>{formData.specialities}</Label></Col>
          </Row>
          <Row className="mb-2">
            <Col xs={5}><Label className="font-weight-bold">Jurisdiction:</Label></Col>
            <Col xs={7}><Label>{formData.jurisdiction}</Label></Col>
          </Row>
          <Row className="mb-2">
            <Col xs={5}><Label className="font-weight-bold">Certificate/License Number:</Label></Col>
            <Col xs={7}><Label>{formData.certLicenseNumber}</Label></Col>
          </Row>
          <Row className="mb-2">
            <Col xs={5}><Label className="font-weight-bold">Effective date:</Label></Col>
            <Col xs={7}>
              <Label>
                {formData.effectiveDate 
                  ? moment(formData.effectiveDate).format('MM/DD/YYYY') 
                  : 'Not specified'}
              </Label>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col xs={5}><Label className="font-weight-bold">Expiration date:</Label></Col>
            <Col xs={7}>
              <Label>
                {formData.expirationDate 
                  ? moment(formData.expirationDate).format('MM/DD/YYYY') 
                  : 'Not specified'}
              </Label>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col xs={5}><Label className="font-weight-bold">Shareable:</Label></Col>
            <Col xs={7}><Label>{formData.shareable === 'true' ? 'Yes' : 'No'}</Label></Col>
          </Row>
          <Row className="mb-2">
            <Col xs={5}><Label className="font-weight-bold">Last Updated:</Label></Col>
            <Col xs={7}><Label>{moment().format('MM/DD/YYYY')}</Label></Col>
          </Row>
          <Row className="mb-2">
            <Col xs={5}><Label className="font-weight-bold">Certificate File(s):</Label></Col>
            <Col xs={7}>
              {(fileUrl && fileUrl.length > 0 && 
                fileUrl.map((file, index) => (
                  <div key={index}>
                    <a href={file.file} target="blank" className="text-primary">
                      View File {index + 1}
                    </a>
                  </div>
                ))
              ) || <Label>No file Selected</Label>}
            </Col>
          </Row>
        </>
      </div>
    );
  }
  
  return (
    <div className="container-fluid iframe-content form-scrollable-container">
      {error && <Alert color="danger">{error}</Alert>}
      {success && <Alert color="success">{success}</Alert>}
      
      <Form onSubmit={handleSubmit} className="mb-4 px-2" id="document-upload-form">
        <div className="container mt-2 mb-3">
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="certificateAbbreviation">{docLabels.title} *</Label>
                <br />
                <Input
                  type="text"
                  name="certificateAbbreviation"
                  id="certificateAbbreviation"
                  value={formData.certificateAbbreviation}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                  placeholder={docLabels.title}
                />
              </FormGroup>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="specialities">{docLabels.specialities}</Label>
                <br />
                <Input
                  type="text"
                  name="specialities"
                  id="specialities"
                  value={formData.specialities}
                  onChange={handleInputChange}
                  placeholder={`Enter ${docLabels.specialities.toLowerCase()}`}
                  className="form-control"
                />
              </FormGroup>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="jurisdiction">Jurisdiction</Label>
                <br />
                <Input
                  type="text"
                  name="jurisdiction"
                  id="jurisdiction"
                  value={formData.jurisdiction}
                  onChange={handleInputChange}
                  placeholder="Jurisdiction"
                  className="form-control"
                />
              </FormGroup>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="certLicenseNumber">{docLabels.number}</Label>
                <br />
                <Input
                  type="text"
                  name="certLicenseNumber"
                  id="certLicenseNumber"
                  value={formData.certLicenseNumber}
                  onChange={handleInputChange}
                  placeholder={docLabels.number}
                  className="form-control"
                />
              </FormGroup>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="effectiveDate">{docLabels.effectiveDate}</Label>
                <br />
                <Input
                  type="date"
                  name="effectiveDate"
                  id="effectiveDate"
                  value={formData.effectiveDate}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </FormGroup>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="expirationDate">{docLabels.expirationDate}</Label>
                <br />
                <Input
                  type="date"
                  name="expirationDate"
                  id="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </FormGroup>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="fileUpload">{docLabels.fileUpload} *</Label>
                <br />
                {fileUrl && fileUrl.length > 0 && (
                  <div className="d-flex d-flex-wrap mt-2 mb-2">
                    {fileUrl.map((file, index) => (
                      <div key={index} className="mb-1 mr-3">
                        <a href={file.file} target="_blank" rel="noopener noreferrer" className="text-primary">
                          View File {index + 1}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
                <div className="position-relative text-center">
                  <input
                    type="file"
                    name="fileUpload"
                    id="fileUpload"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="border-info w-100"
                    required={!fileUrl || fileUrl.length === 0}
                  />
                </div>
              </FormGroup>
            </Col>
          </Row>
          
          <Row className="mb-2">
            <Col>
              <FormGroup check className="mb-3">
                <Input
                  type="checkbox" 
                  name="shareable"
                  id="shareable"
                  checked={formData.shareable === 'true'}
                  onChange={(e) => setFormData({
                    ...formData,
                    shareable: e.target.checked ? 'true' : 'false'
                  })}
                />
                <Label for="shareable" check>
                  Shareable
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </div>
        
        {submitting ? (
          <div className="d-flex justify-content-center mt-2 mb-2">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Submitting...</span>
            </div>
          </div>
        ) : null}
      </Form>
      
      {isEmbedded && (
        <div className="mt-3 text-center">
          <small className="text-muted">
            Secure verification provided by Core Verify v{COMPONENT_VERSION}
          </small>
        </div>
      )}
    </div>
  );
};

export default DocumentUploader; 