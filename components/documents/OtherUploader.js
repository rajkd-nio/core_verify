'use client';

import React, { useState, useEffect } from 'react';
import { Row, Col, Label, Form, FormGroup, Input, Alert, Button } from 'reactstrap';
import { uploadFile } from '../../utils/api';
import moment from 'moment';

// Version info for tracking integration
const COMPONENT_VERSION = '1.0.4';

// Helper function to log data in a structured way
const logData = (label, data) => {
  console.log(`===== ${label} =====`);
  console.log(JSON.stringify(data, null, 2));
  console.log('===================');
};

// Document categories options
const DOCUMENT_CATEGORIES = [
  { value: 'personal', label: 'Personal Document' },
  { value: 'identity', label: 'Identity Document' },
  { value: 'financial', label: 'Financial Document' },
  { value: 'educational', label: 'Educational Document' },
  { value: 'legal', label: 'Legal Document' },
  { value: 'employment', label: 'Employment Document' },
  { value: 'other', label: 'Other' }
];

const OtherUploader = ({ 
  onSuccess, 
  onError, 
  parentOrigin = "*", 
  token = "", 
  verifyConfig = null, 
  config = null,
  isEmbedded = false,
  allowParentOverrides = true,
  modalType = 'edit',
  hideHeader = false
}) => {
  const [formData, setFormData] = useState({
    documentTitle: '',
    customType: '',
    documentCategory: 'other',
    issuer: '',
    recipient: '',
    documentId: '',
    tags: '',
    issueDate: '',
    expiryDate: '',
    notes: '',
    isPublic: 'false',
    shareable: 'true',
    fileUploadKeys: [],
    documentType: 'other'
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
    const labels = {
      title: 'Document Title',
      customType: 'Document Type',
      category: 'Category',
      issuer: 'Issuer',
      recipient: 'Recipient',
      documentId: 'Document ID',
      tags: 'Tags',
      issueDate: 'Issue Date',
      expiryDate: 'Expiry Date',
      notes: 'Notes',
      isPublic: 'Public Document',
      fileUpload: 'Upload Document (PDF, JPG, PNG)'
    };
    
    return labels;
  };

  // Get document-specific labels
  const docLabels = getDocumentLabels();

  // Skip label prefix text when hideHeader is true for cleaner form fields
  const getFieldLabel = (label) => {
    return hideHeader ? label : label;
  };

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
    logData('OTHER_UPLOADER_INITIALIZED', {
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
        
        // Set default document title based on document type if not already specified
        if (!newFormData.documentTitle && configToApply.documentName) {
          newFormData.documentTitle = configToApply.documentName;
        }
        
        if (!newFormData.customType && configToApply.documentName) {
          newFormData.customType = configToApply.documentName;
        }
      }
      
      if (configToApply.userId) {
        newFormData.userId = configToApply.userId;
        newFormData.recipient = configToApply.userId;
      }
      
      if (configToApply.documentName) {
        newFormData.documentTitle = configToApply.documentName;
      }
      
      if (configToApply.documentDate) {
        newFormData.issueDate = configToApply.documentDate;
      }
      
      if (configToApply.expirationDate) {
        newFormData.expiryDate = configToApply.expirationDate;
      }
      
      if (configToApply.documentId) {
        newFormData.documentId = configToApply.documentId;
      }
      
      if (configToApply.category) {
        newFormData.documentCategory = configToApply.category;
      }
      
      if (configToApply.tags) {
        newFormData.tags = configToApply.tags;
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
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked ? 'true' : 'false'
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
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
    
    if (!formData.documentTitle) {
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
      
      setSuccess('Document submitted successfully!');
      
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
        documentTitle: '',
        customType: '',
        documentCategory: 'other',
        issuer: '',
        recipient: '',
        documentId: '',
        tags: '',
        issueDate: '',
        expiryDate: '',
        notes: '',
        isPublic: 'false',
        shareable: 'true',
        fileUploadKeys: [],
        documentType: 'other'
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

  // View Mode
  if (modalType === 'view') {
    return (
      <div className="container document-detail">
        {error && <Alert color="danger">{error}</Alert>}
        {success && <Alert color="success">{success}</Alert>}
        
        <>
          <Row className="mb-2">
            <Col xs={5}><Label className="font-weight-bold">{getFieldLabel(docLabels.title)}:</Label></Col>
            <Col xs={7}><Label>{formData.documentTitle}</Label></Col>
          </Row>
          <Row className="mb-2">
            <Col xs={5}><Label className="font-weight-bold">{getFieldLabel(docLabels.customType)}:</Label></Col>
            <Col xs={7}><Label>{formData.customType || 'Not specified'}</Label></Col>
          </Row>
          <Row className="mb-2">
            <Col xs={5}><Label className="font-weight-bold">{getFieldLabel(docLabels.category)}:</Label></Col>
            <Col xs={7}><Label>
              {DOCUMENT_CATEGORIES.find(c => c.value === formData.documentCategory)?.label || formData.documentCategory}
            </Label></Col>
          </Row>
          <Row className="mb-2">
            <Col xs={5}><Label className="font-weight-bold">{getFieldLabel(docLabels.issuer)}:</Label></Col>
            <Col xs={7}><Label>{formData.issuer || 'Not specified'}</Label></Col>
          </Row>
          <Row className="mb-2">
            <Col xs={5}><Label className="font-weight-bold">{getFieldLabel(docLabels.recipient)}:</Label></Col>
            <Col xs={7}><Label>{formData.recipient || 'Not specified'}</Label></Col>
          </Row>
          <Row className="mb-2">
            <Col xs={5}><Label className="font-weight-bold">{getFieldLabel(docLabels.documentId)}:</Label></Col>
            <Col xs={7}><Label>{formData.documentId || 'Not specified'}</Label></Col>
          </Row>
          <Row className="mb-2">
            <Col xs={5}><Label className="font-weight-bold">{getFieldLabel(docLabels.tags)}:</Label></Col>
            <Col xs={7}><Label>{formData.tags || 'Not specified'}</Label></Col>
          </Row>
          <Row className="mb-2">
            <Col xs={5}><Label className="font-weight-bold">{getFieldLabel(docLabels.issueDate)}:</Label></Col>
            <Col xs={7}>
              <Label>
                {formData.issueDate 
                  ? moment(formData.issueDate).format('MM/DD/YYYY') 
                  : 'Not specified'}
              </Label>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col xs={5}><Label className="font-weight-bold">{getFieldLabel(docLabels.expiryDate)}:</Label></Col>
            <Col xs={7}>
              <Label>
                {formData.expiryDate 
                  ? moment(formData.expiryDate).format('MM/DD/YYYY') 
                  : 'Not specified'}
              </Label>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col xs={5}><Label className="font-weight-bold">{getFieldLabel(docLabels.notes)}:</Label></Col>
            <Col xs={7}><Label>{formData.notes || 'No additional notes'}</Label></Col>
          </Row>
          <Row className="mb-2">
            <Col xs={5}><Label className="font-weight-bold">{getFieldLabel(docLabels.isPublic)}:</Label></Col>
            <Col xs={7}><Label>{formData.isPublic === 'true' ? 'Yes' : 'No'}</Label></Col>
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
            <Col xs={5}><Label className="font-weight-bold">Document File(s):</Label></Col>
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
  
  // Edit Mode
  return (
    <div className="container-fluid iframe-content form-scrollable-container">
      {error && <Alert color="danger">{error}</Alert>}
      {success && <Alert color="success">{success}</Alert>}
      
      <Form onSubmit={handleSubmit} className="mb-4 px-2" id="document-upload-form">
        <div className="container mt-2 mb-3">
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="documentTitle">{getFieldLabel(docLabels.title)} *</Label>
                <br />
                <Input
                  type="text"
                  name="documentTitle"
                  id="documentTitle"
                  value={formData.documentTitle}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                  placeholder={getFieldLabel(docLabels.title)}
                />
              </FormGroup>
            </Col>
          </Row>
          
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="customType">{getFieldLabel(docLabels.customType)}</Label>
                <br />
                <Input
                  type="text"
                  name="customType"
                  id="customType"
                  value={formData.customType}
                  onChange={handleInputChange}
                  placeholder="Enter document type"
                  className="form-control"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="documentCategory">{getFieldLabel(docLabels.category)}</Label>
                <br />
                <Input
                  type="select"
                  name="documentCategory"
                  id="documentCategory"
                  value={formData.documentCategory}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  {DOCUMENT_CATEGORIES.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>
          
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="issuer">{getFieldLabel(docLabels.issuer)}</Label>
                <br />
                <Input
                  type="text"
                  name="issuer"
                  id="issuer"
                  value={formData.issuer}
                  onChange={handleInputChange}
                  placeholder="Enter issuer name"
                  className="form-control"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="recipient">{getFieldLabel(docLabels.recipient)}</Label>
                <br />
                <Input
                  type="text"
                  name="recipient"
                  id="recipient"
                  value={formData.recipient}
                  onChange={handleInputChange}
                  placeholder="Enter recipient name"
                  className="form-control"
                />
              </FormGroup>
            </Col>
          </Row>
          
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="documentId">{getFieldLabel(docLabels.documentId)}</Label>
                <br />
                <Input
                  type="text"
                  name="documentId"
                  id="documentId"
                  value={formData.documentId}
                  onChange={handleInputChange}
                  placeholder="Enter document ID or reference"
                  className="form-control"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="tags">{getFieldLabel(docLabels.tags)}</Label>
                <br />
                <Input
                  type="text"
                  name="tags"
                  id="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="Enter comma-separated tags"
                  className="form-control"
                />
              </FormGroup>
            </Col>
          </Row>
          
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="issueDate">{getFieldLabel(docLabels.issueDate)}</Label>
                <br />
                <Input
                  type="date"
                  name="issueDate"
                  id="issueDate"
                  value={formData.issueDate}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="expiryDate">{getFieldLabel(docLabels.expiryDate)}</Label>
                <br />
                <Input
                  type="date"
                  name="expiryDate"
                  id="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </FormGroup>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="notes">{getFieldLabel(docLabels.notes)}</Label>
                <br />
                <Input
                  type="textarea"
                  name="notes"
                  id="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Enter any additional notes"
                  className="form-control"
                  rows="3"
                />
              </FormGroup>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="fileUpload">{getFieldLabel(docLabels.fileUpload)} *</Label>
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
            <Col md={6}>
              <FormGroup check className="mb-3">
                <Input
                  type="checkbox" 
                  name="isPublic"
                  id="isPublic"
                  checked={formData.isPublic === 'true'}
                  onChange={handleInputChange}
                />
                <Label for="isPublic" check>
                  {getFieldLabel(docLabels.isPublic)}
                </Label>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup check className="mb-3">
                <Input
                  type="checkbox" 
                  name="shareable"
                  id="shareable"
                  checked={formData.shareable === 'true'}
                  onChange={handleInputChange}
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

export default OtherUploader; 