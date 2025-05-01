'use client';

import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Label, Input, 
         Table, Row, Col, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

/**
 * Component for managing form fields within a DocumentTitle
 */
const DocumentTitleFormFields = ({ documentTitle, onSave, readOnly = false }) => {
  const [formFields, setFormFields] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showFieldModal, setShowFieldModal] = useState(false);
  const [currentField, setCurrentField] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  
  // Field type options
  const fieldTypes = [
    { value: 'text', label: 'Text Input' },
    { value: 'textarea', label: 'Text Area' },
    { value: 'select', label: 'Dropdown Select' },
    { value: 'radio', label: 'Radio Buttons' },
    { value: 'checkbox', label: 'Checkbox' },
    { value: 'date', label: 'Date Picker' },
    { value: 'file', label: 'File Upload' }
  ];
  
  // Initialize form fields from documentTitle
  useEffect(() => {
    if (documentTitle) {
      try {
        let fields = [];
        
        if (documentTitle.formFields) {
          // Parse if it's a string
          if (typeof documentTitle.formFields === 'string') {
            fields = JSON.parse(documentTitle.formFields);
          } else {
            // If it's already an object, use it directly
            fields = Array.isArray(documentTitle.formFields) 
              ? documentTitle.formFields 
              : (documentTitle.formFields.fields || []);
          }
        }
        
        setFormFields(fields);
      } catch (e) {
        console.error('Error parsing form fields:', e);
        setError('Could not parse form fields. Using empty set.');
        setFormFields([]);
      }
    }
  }, [documentTitle]);
  
  // Handle saving form fields back to parent component
  const handleSaveFields = () => {
    try {
      // Sort fields by order
      const sortedFields = [...formFields].sort((a, b) => a.order - b.order);
      
      // Call parent save handler
      onSave(sortedFields);
      
      setSuccess('Form fields saved successfully.');
      setTimeout(() => setSuccess(''), 3000);
    } catch (e) {
      setError('Error saving form fields: ' + e.message);
    }
  };
  
  // Handle field reordering via drag and drop
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    
    const items = Array.from(formFields);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    // Update order property based on new positions
    const updatedItems = items.map((item, index) => ({
      ...item,
      order: index + 1
    }));
    
    setFormFields(updatedItems);
  };
  
  // Open modal to add a new field
  const handleAddField = () => {
    setCurrentField({
      id: '',
      name: '',
      label: '',
      type: 'text',
      placeholder: '',
      required: false,
      order: formFields.length + 1,
      fullWidth: true,
      hidden: false,
      defaultValue: '',
      options: null,
      validation: null,
      conditionalDisplay: null,
      helpText: ''
    });
    setIsEditMode(false);
    setShowFieldModal(true);
  };
  
  // Open modal to edit an existing field
  const handleEditField = (field) => {
    setCurrentField({...field});
    setIsEditMode(true);
    setShowFieldModal(true);
  };
  
  // Delete a field from the list
  const handleDeleteField = (fieldId) => {
    if (window.confirm('Are you sure you want to delete this field?')) {
      setFormFields(formFields.filter(f => f.id !== fieldId));
    }
  };
  
  // Save field from modal
  const handleSaveField = () => {
    if (!currentField.id || !currentField.label) {
      alert('Field ID and Label are required');
      return;
    }
    
    // If adding a new field
    if (!isEditMode) {
      setFormFields([...formFields, currentField]);
    } else {
      // If editing an existing field
      setFormFields(formFields.map(f => 
        f.id === currentField.id ? currentField : f
      ));
    }
    
    setShowFieldModal(false);
  };
  
  // Generate options editor for select/radio/checkbox fields
  const renderOptionsEditor = () => {
    if (!currentField) return null;
    
    if (['select', 'radio', 'checkbox'].includes(currentField.type)) {
      let options = currentField.options || [];
      if (!Array.isArray(options)) {
        options = [];
      }
      
      return (
        <>
          <FormGroup>
            <Label>Options (one per line, format: value=label)</Label>
            <Input
              type="textarea"
              value={options.map(o => `${o.value}=${o.label}`).join('\n')}
              onChange={(e) => {
                const lines = e.target.value.split('\n');
                const newOptions = lines
                  .filter(line => line.includes('='))
                  .map(line => {
                    const [value, label] = line.split('=');
                    return { value: value.trim(), label: label.trim() };
                  });
                
                setCurrentField({
                  ...currentField,
                  options: newOptions
                });
              }}
              rows={5}
            />
          </FormGroup>
        </>
      );
    }
    
    return null;
  };
  
  // Render field type specific options
  const renderFieldTypeOptions = () => {
    if (!currentField) return null;
    
    switch (currentField.type) {
      case 'file':
        return (
          <FormGroup>
            <Label for="accept">Accepted File Types</Label>
            <Input
              type="text"
              id="accept"
              value={currentField.accept || '.pdf,.jpg,.jpeg,.png'}
              onChange={(e) => setCurrentField({
                ...currentField,
                accept: e.target.value
              })}
              placeholder=".pdf,.jpg,.jpeg,.png"
            />
          </FormGroup>
        );
      case 'date':
        return (
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                checked={currentField.validation?.notInFuture || false}
                onChange={(e) => setCurrentField({
                  ...currentField,
                  validation: {
                    ...currentField.validation,
                    notInFuture: e.target.checked
                  }
                })}
              />
              {' '}
              Date cannot be in the future
            </Label>
          </FormGroup>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="document-title-form-fields">
      {error && <Alert color="danger">{error}</Alert>}
      {success && <Alert color="success">{success}</Alert>}
      
      <Card className="mb-3">
        <CardHeader className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Form Fields</h5>
          {!readOnly && (
            <Button color="primary" size="sm" onClick={handleAddField}>
              Add Field
            </Button>
          )}
        </CardHeader>
        <CardBody>
          {formFields.length === 0 ? (
            <Alert color="info">
              No form fields defined. {!readOnly && 'Click "Add Field" to add a new field.'}
            </Alert>
          ) : (
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="formFields">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <Table bordered hover responsive>
                      <thead>
                        <tr>
                          {!readOnly && <th width="50px"></th>}
                          <th>ID</th>
                          <th>Label</th>
                          <th>Type</th>
                          <th>Required</th>
                          {!readOnly && <th>Actions</th>}
                        </tr>
                      </thead>
                      <tbody>
                        {formFields.map((field, index) => (
                          <Draggable
                            key={field.id}
                            draggableId={field.id}
                            index={index}
                            isDragDisabled={readOnly}
                          >
                            {(provided) => (
                              <tr
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                              >
                                {!readOnly && (
                                  <td {...provided.dragHandleProps} className="text-center">
                                    <i className="fa fa-bars text-muted"></i>
                                  </td>
                                )}
                                <td>{field.id}</td>
                                <td>{field.label}</td>
                                <td>
                                  {fieldTypes.find(t => t.value === field.type)?.label || field.type}
                                </td>
                                <td>{field.required ? 'Yes' : 'No'}</td>
                                {!readOnly && (
                                  <td>
                                    <Button
                                      color="info"
                                      size="sm"
                                      className="mr-1"
                                      onClick={() => handleEditField(field)}
                                    >
                                      Edit
                                    </Button>
                                    <Button
                                      color="danger"
                                      size="sm"
                                      onClick={() => handleDeleteField(field.id)}
                                    >
                                      Delete
                                    </Button>
                                  </td>
                                )}
                              </tr>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </tbody>
                    </Table>
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          )}
          
          {!readOnly && (
            <div className="mt-3">
              <Button color="success" onClick={handleSaveFields}>
                Save Fields Configuration
              </Button>
            </div>
          )}
        </CardBody>
      </Card>
      
      {/* Field Edit Modal */}
      <Modal isOpen={showFieldModal} toggle={() => setShowFieldModal(false)} size="lg">
        <ModalHeader toggle={() => setShowFieldModal(false)}>
          {isEditMode ? 'Edit Field' : 'Add New Field'}
        </ModalHeader>
        <ModalBody>
          {currentField && (
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="fieldId">Field ID *</Label>
                    <Input
                      type="text"
                      id="fieldId"
                      value={currentField.id}
                      onChange={(e) => setCurrentField({
                        ...currentField,
                        id: e.target.value,
                        name: e.target.value
                      })}
                      placeholder="Enter field ID (no spaces)"
                      required
                      disabled={isEditMode}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="fieldType">Field Type *</Label>
                    <Input
                      type="select"
                      id="fieldType"
                      value={currentField.type}
                      onChange={(e) => setCurrentField({
                        ...currentField,
                        type: e.target.value
                      })}
                    >
                      {fieldTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              
              <FormGroup>
                <Label for="fieldLabel">Label *</Label>
                <Input
                  type="text"
                  id="fieldLabel"
                  value={currentField.label}
                  onChange={(e) => setCurrentField({
                    ...currentField,
                    label: e.target.value
                  })}
                  placeholder="Enter field label"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label for="fieldPlaceholder">Placeholder</Label>
                <Input
                  type="text"
                  id="fieldPlaceholder"
                  value={currentField.placeholder || ''}
                  onChange={(e) => setCurrentField({
                    ...currentField,
                    placeholder: e.target.value
                  })}
                  placeholder="Enter placeholder text"
                />
              </FormGroup>
              
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="fieldOrder">Display Order</Label>
                    <Input
                      type="number"
                      id="fieldOrder"
                      value={currentField.order}
                      onChange={(e) => setCurrentField({
                        ...currentField,
                        order: parseInt(e.target.value) || 0
                      })}
                      min="1"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="fieldDefault">Default Value</Label>
                    <Input
                      type="text"
                      id="fieldDefault"
                      value={currentField.defaultValue || ''}
                      onChange={(e) => setCurrentField({
                        ...currentField,
                        defaultValue: e.target.value
                      })}
                      placeholder="Default value"
                    />
                  </FormGroup>
                </Col>
              </Row>
              
              <FormGroup>
                <Label for="fieldHelp">Help Text</Label>
                <Input
                  type="text"
                  id="fieldHelp"
                  value={currentField.helpText || ''}
                  onChange={(e) => setCurrentField({
                    ...currentField,
                    helpText: e.target.value
                  })}
                  placeholder="Help text displayed below the field"
                />
              </FormGroup>
              
              {renderOptionsEditor()}
              {renderFieldTypeOptions()}
              
              <Row>
                <Col md={4}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        checked={currentField.required}
                        onChange={(e) => setCurrentField({
                          ...currentField,
                          required: e.target.checked
                        })}
                      />
                      {' '}
                      Required
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        checked={currentField.fullWidth}
                        onChange={(e) => setCurrentField({
                          ...currentField,
                          fullWidth: e.target.checked
                        })}
                      />
                      {' '}
                      Full Width
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        checked={currentField.hidden}
                        onChange={(e) => setCurrentField({
                          ...currentField,
                          hidden: e.target.checked
                        })}
                      />
                      {' '}
                      Hidden
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setShowFieldModal(false)}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleSaveField}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DocumentTitleFormFields; 