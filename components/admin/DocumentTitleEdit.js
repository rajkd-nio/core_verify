'use client';

import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert, Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import DocumentTitleFormFields from './DocumentTitleFormFields';

const DocumentTitleEdit = ({ documentTitle, onSave, documentTypes, isLoading }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [documentTypeId, setDocumentTypeId] = useState('');
  const [shareable, setShareable] = useState(false);
  const [requireNumber, setRequireNumber] = useState(false);
  const [requireValidDate, setRequireValidDate] = useState(false);
  const [requireExpireDate, setRequireExpireDate] = useState(false);
  const [requireDocData, setRequireDocData] = useState(false);
  const [docDataName, setDocDataName] = useState('');
  const [docDataOptions, setDocDataOptions] = useState('');
  const [formTitle, setFormTitle] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formFields, setFormFields] = useState([]);
  const [activeTab, setActiveTab] = useState('1');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Initialize form when document title data changes
  useEffect(() => {
    if (documentTitle) {
      setTitle(documentTitle.title || '');
      setDescription(documentTitle.description || '');
      setDocumentTypeId(documentTitle.documentTypeId?.toString() || '');
      setShareable(documentTitle.shareable || false);
      setRequireNumber(documentTitle.requireNumber || false);
      setRequireValidDate(documentTitle.requireValidDate || false);
      setRequireExpireDate(documentTitle.requireExpireDate || false);
      setRequireDocData(documentTitle.requireDocData || false);
      setDocDataName(documentTitle.docDataName || '');
      
      // Parse docDataOptions from JSON if needed
      if (documentTitle.docDataOptions) {
        try {
          if (typeof documentTitle.docDataOptions === 'string') {
            setDocDataOptions(documentTitle.docDataOptions);
          } else {
            setDocDataOptions(JSON.stringify(documentTitle.docDataOptions, null, 2));
          }
        } catch (e) {
          console.error('Error parsing docDataOptions:', e);
          setDocDataOptions('');
        }
      } else {
        setDocDataOptions('');
      }
      
      setFormTitle(documentTitle.formTitle || '');
      setFormDescription(documentTitle.formDescription || '');
      
      // Parse formFields from JSON if needed
      if (documentTitle.formFields) {
        try {
          if (typeof documentTitle.formFields === 'string') {
            setFormFields(JSON.parse(documentTitle.formFields));
          } else {
            setFormFields(Array.isArray(documentTitle.formFields) ? 
              documentTitle.formFields : (documentTitle.formFields.fields || []));
          }
        } catch (e) {
          console.error('Error parsing formFields:', e);
          setFormFields([]);
        }
      } else {
        setFormFields([]);
      }
    }
  }, [documentTitle]);
  
  // Toggle between tabs
  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    try {
      // Parse docDataOptions to ensure it's valid JSON
      let parsedDocDataOptions = null;
      if (docDataOptions) {
        try {
          parsedDocDataOptions = JSON.parse(docDataOptions);
        } catch (e) {
          setError('Document Data Options must be valid JSON');
          return;
        }
      }
      
      // Create the updated document title object
      const updatedDocumentTitle = {
        ...documentTitle,
        title,
        description,
        documentTypeId: parseInt(documentTypeId),
        shareable,
        requireNumber,
        requireValidDate,
        requireExpireDate,
        requireDocData,
        docDataName: requireDocData ? docDataName : null,
        docDataOptions: requireDocData ? parsedDocDataOptions : null,
        formTitle,
        formDescription,
        formFields
      };
      
      await onSave(updatedDocumentTitle);
      setSuccess('Document title saved successfully!');
    } catch (error) {
      setError(`Error saving document title: ${error.message}`);
    }
  };
  
  // Handle form fields update from the FormFields component
  const handleFormFieldsUpdate = (updatedFields) => {
    setFormFields(updatedFields);
  };
  
  return (
    <div className="document-title-edit">
      {error && <Alert color="danger">{error}</Alert>}
      {success && <Alert color="success">{success}</Alert>}
      
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab === '1' ? 'active' : ''}
            onClick={() => toggleTab('1')}
          >
            Basic Information
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === '2' ? 'active' : ''}
            onClick={() => toggleTab('2')}
          >
            Form Fields
          </NavLink>
        </NavItem>
      </Nav>
      
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Card className="border-top-0">
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="title">Title *</Label>
                  <Input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter document title"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input
                    type="textarea"
                    id="description"
                    value={description || ''}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                    rows={3}
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label for="documentType">Document Type *</Label>
                  <Input
                    type="select"
                    id="documentType"
                    value={documentTypeId}
                    onChange={(e) => setDocumentTypeId(e.target.value)}
                    required
                  >
                    <option value="">Select a document type</option>
                    {documentTypes && documentTypes.map(type => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
                
                <FormGroup check className="mb-3">
                  <Label check>
                    <Input
                      type="checkbox"
                      checked={shareable}
                      onChange={(e) => setShareable(e.target.checked)}
                    />
                    {' '}
                    Shareable (visible to facilities)
                  </Label>
                </FormGroup>
                
                <Card className="mb-3">
                  <CardHeader>Document Requirements</CardHeader>
                  <CardBody>
                    <FormGroup check className="mb-2">
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={requireNumber}
                          onChange={(e) => setRequireNumber(e.target.checked)}
                        />
                        {' '}
                        Require Document Number
                      </Label>
                    </FormGroup>
                    
                    <FormGroup check className="mb-2">
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={requireValidDate}
                          onChange={(e) => setRequireValidDate(e.target.checked)}
                        />
                        {' '}
                        Require Issue Date
                      </Label>
                    </FormGroup>
                    
                    <FormGroup check className="mb-2">
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={requireExpireDate}
                          onChange={(e) => setRequireExpireDate(e.target.checked)}
                        />
                        {' '}
                        Require Expiration Date
                      </Label>
                    </FormGroup>
                    
                    <FormGroup check className="mb-2">
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={requireDocData}
                          onChange={(e) => setRequireDocData(e.target.checked)}
                        />
                        {' '}
                        Require Additional Document Data
                      </Label>
                    </FormGroup>
                    
                    {requireDocData && (
                      <>
                        <FormGroup>
                          <Label for="docDataName">Document Data Field Name</Label>
                          <Input
                            type="text"
                            id="docDataName"
                            value={docDataName}
                            onChange={(e) => setDocDataName(e.target.value)}
                            placeholder="Enter field name (e.g., 'License Type')"
                          />
                        </FormGroup>
                        
                        <FormGroup>
                          <Label for="docDataOptions">Document Data Options (JSON array)</Label>
                          <Input
                            type="textarea"
                            id="docDataOptions"
                            value={docDataOptions}
                            onChange={(e) => setDocDataOptions(e.target.value)}
                            placeholder='[{"value": "option1", "label": "Option 1"}, {"value": "option2", "label": "Option 2"}]'
                            rows={5}
                          />
                          <small className="form-text text-muted">
                            Enter options as a JSON array of objects with value and label properties.
                          </small>
                        </FormGroup>
                      </>
                    )}
                  </CardBody>
                </Card>
                
                <Card className="mb-3">
                  <CardHeader>Form Settings</CardHeader>
                  <CardBody>
                    <FormGroup>
                      <Label for="formTitle">Form Title (Optional)</Label>
                      <Input
                        type="text"
                        id="formTitle"
                        value={formTitle}
                        onChange={(e) => setFormTitle(e.target.value)}
                        placeholder="Custom form title (leave blank to use document title)"
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <Label for="formDescription">Form Description (Optional)</Label>
                      <Input
                        type="textarea"
                        id="formDescription"
                        value={formDescription}
                        onChange={(e) => setFormDescription(e.target.value)}
                        placeholder="Custom form description"
                        rows={2}
                      />
                    </FormGroup>
                  </CardBody>
                </Card>
                
                <Button color="primary" type="submit" disabled={isLoading}>
                  {isLoading ? 'Saving...' : 'Save Document Title'}
                </Button>
              </Form>
            </CardBody>
          </Card>
        </TabPane>
        
        <TabPane tabId="2">
          <Card className="border-top-0">
            <CardBody>
              <DocumentTitleFormFields
                documentTitle={documentTitle}
                onSave={handleFormFieldsUpdate}
                readOnly={false}
              />
              
              <Button color="primary" onClick={handleSubmit} disabled={isLoading} className="mt-3">
                {isLoading ? 'Saving...' : 'Save Document Title with Form Fields'}
              </Button>
            </CardBody>
          </Card>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default DocumentTitleEdit; 