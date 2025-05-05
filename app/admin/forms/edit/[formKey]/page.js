'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Box, 
  Button, 
  Typography, 
  CircularProgress,
  TextField,
  Grid,
  Card,
  CardContent,
  Divider,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Alert,
  Tooltip
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EditIcon from '@mui/icons-material/Edit';
import AdminLayout from '@/components/layouts/AdminLayout';
import { useSnackbar } from 'notistack';

// Field type options
const FIELD_TYPES = [
  { value: 'text', label: 'Text' },
  { value: 'textarea', label: 'Text Area' },
  { value: 'select', label: 'Dropdown' },
  { value: 'radio', label: 'Radio Buttons' },
  { value: 'checkbox', label: 'Checkbox' },
  { value: 'date', label: 'Date' },
  { value: 'file', label: 'File Upload' },
  { value: 'hidden', label: 'Hidden' }
];

export default function FormEditor({ params }) {
  const router = useRouter();
  const formKey = params.formKey;
  const { enqueueSnackbar } = useSnackbar();
  
  // State
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [formTemplate, setFormTemplate] = useState({
    id: '',
    name: '',
    description: '',
    fields: []
  });
  const [editingField, setEditingField] = useState(null);
  const [showFieldEditor, setShowFieldEditor] = useState(false);
  const [fieldOptions, setFieldOptions] = useState([]);

  // Load form template
  useEffect(() => {
    if (!formKey) return;
    
    const fetchFormTemplate = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/forms/${formKey}`);
        
        if (!response.ok) {
          throw new Error(`API error: ${response.statusText}`);
        }
        
        const data = await response.json();
        setFormTemplate(data);
      } catch (err) {
        console.error('Error fetching form template:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFormTemplate();
  }, [formKey]);

  // Create new form field
  const handleAddField = () => {
    const fieldId = `field_${Date.now()}`;
    setEditingField({
      id: fieldId,
      name: fieldId, // Auto-generate a name based on the ID
      type: 'text',
      label: '',
      placeholder: '',
      required: false,
      order: formTemplate.fields.length,
      fullWidth: true,
      hidden: false,
      options: []
    });
    setFieldOptions([]);
    setShowFieldEditor(true);
  };

  // Edit existing field
  const handleEditField = (field) => {
    setEditingField({ ...field });
    setFieldOptions(field.options || []);
    setShowFieldEditor(true);
  };

  // Delete field
  const handleDeleteField = (fieldId) => {
    if (window.confirm('Are you sure you want to delete this field?')) {
      setFormTemplate({
        ...formTemplate,
        fields: formTemplate.fields.filter(f => f.id !== fieldId)
      });
    }
  };

  // Move field up or down
  const handleMoveField = (index, direction) => {
    const newFields = [...formTemplate.fields];
    if (direction === 'up' && index > 0) {
      [newFields[index], newFields[index - 1]] = [newFields[index - 1], newFields[index]];
    } else if (direction === 'down' && index < newFields.length - 1) {
      [newFields[index], newFields[index + 1]] = [newFields[index + 1], newFields[index]];
    }
    
    // Update order properties
    newFields.forEach((field, idx) => {
      field.order = idx;
    });
    
    setFormTemplate({
      ...formTemplate,
      fields: newFields
    });
  };

  // Save field changes
  const handleSaveField = () => {
    const errors = [];
    
    if (!editingField.name) {
      errors.push("Field Name is required");
    }
    
    if (!editingField.label) {
      errors.push("Display Label is required");
    }
    
    if (errors.length > 0) {
      enqueueSnackbar(`${errors.join(', ')}`, { variant: 'error' });
      return;
    }
    
    // Create a copy of the field with options if needed
    const fieldToSave = { ...editingField };
    
    if (['select', 'radio', 'checkbox'].includes(fieldToSave.type) && fieldOptions.length > 0) {
      fieldToSave.options = fieldOptions;
    } else {
      // Remove options if field type doesn't support them
      delete fieldToSave.options;
    }
    
    // Find if the field already exists
    const existingFieldIndex = formTemplate.fields.findIndex(f => f.id === fieldToSave.id);
    
    if (existingFieldIndex >= 0) {
      // Update existing field
      const updatedFields = [...formTemplate.fields];
      updatedFields[existingFieldIndex] = fieldToSave;
      setFormTemplate({
        ...formTemplate,
        fields: updatedFields
      });
    } else {
      // Add new field
      setFormTemplate({
        ...formTemplate,
        fields: [...formTemplate.fields, fieldToSave]
      });
    }
    
    // Close field editor
    setShowFieldEditor(false);
    setEditingField(null);
    
    // Show success message
    enqueueSnackbar(`Field ${existingFieldIndex >= 0 ? 'updated' : 'added'} successfully`, { variant: 'success' });
  };

  // Add option to a field
  const handleAddOption = () => {
    setFieldOptions([
      ...fieldOptions,
      { value: '', label: '' }
    ]);
  };

  // Update option
  const handleOptionChange = (index, key, value) => {
    const newOptions = [...fieldOptions];
    newOptions[index] = { ...newOptions[index], [key]: value };
    setFieldOptions(newOptions);
  };

  // Remove option
  const handleRemoveOption = (index) => {
    setFieldOptions(fieldOptions.filter((_, i) => i !== index));
  };

  // Save the entire form
  const handleSaveForm = async () => {
    if (!formTemplate.name) {
      alert('Form name is required');
      return;
    }
    
    try {
      setSaving(true);
      
      const response = await fetch(`/api/forms/${formKey}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formTemplate)
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }
      
      enqueueSnackbar('Form template saved successfully', { variant: 'success' });
    } catch (err) {
      console.error('Error saving form template:', err);
      setError(err.message);
      enqueueSnackbar(`Error: ${err.message}`, { variant: 'error' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
          <CircularProgress />
        </Box>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Edit Form Template
          </Typography>
          
          <Box>
            <Button 
              variant="outlined" 
              color="secondary" 
              sx={{ mr: 2 }}
              onClick={() => router.push('/admin/forms')}
            >
              Cancel
            </Button>
            <Button 
              variant="contained" 
              color="primary"
              onClick={handleSaveForm}
              disabled={saving}
            >
              {saving ? 'Saving...' : 'Save Form'}
            </Button>
          </Box>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Grid container spacing={3}>
          {/* Form Details */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  Form Details
                </Typography>
                <Divider sx={{ mb: 2 }} />
                
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Form Key"
                      fullWidth
                      value={formTemplate.id}
                      disabled
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Form Name"
                      fullWidth
                      required
                      value={formTemplate.name}
                      onChange={(e) => setFormTemplate({ ...formTemplate, name: e.target.value })}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Description"
                      fullWidth
                      multiline
                      rows={2}
                      value={formTemplate.description || ''}
                      onChange={(e) => setFormTemplate({ ...formTemplate, description: e.target.value })}
                      margin="normal"
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Form Fields */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" component="h2">
                    Form Fields
                  </Typography>
                  <Button 
                    variant="contained" 
                    size="small"
                    startIcon={<AddIcon />}
                    onClick={handleAddField}
                  >
                    Add Field
                  </Button>
                </Box>
                <Divider sx={{ mb: 2 }} />
                
                {formTemplate.fields.length === 0 ? (
                  <Alert severity="info">
                    No fields added yet. Click "Add Field" to start building your form.
                  </Alert>
                ) : (
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Order</TableCell>
                          <TableCell>Field ID</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>Type</TableCell>
                          <TableCell>Label</TableCell>
                          <TableCell>Required</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {formTemplate.fields
                          .sort((a, b) => a.order - b.order)
                          .map((field, index) => (
                          <TableRow key={field.id}>
                            <TableCell>{field.order}</TableCell>
                            <TableCell>{field.id}</TableCell>
                            <TableCell>{field.name}</TableCell>
                            <TableCell>{field.type}</TableCell>
                            <TableCell>{field.label}</TableCell>
                            <TableCell>{field.required ? 'Yes' : 'No'}</TableCell>
                            <TableCell>
                              <Tooltip title="Move Up">
                                <IconButton 
                                  size="small" 
                                  onClick={() => handleMoveField(index, 'up')}
                                  disabled={index === 0}
                                >
                                  <ArrowUpwardIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Move Down">
                                <IconButton 
                                  size="small" 
                                  onClick={() => handleMoveField(index, 'down')}
                                  disabled={index === formTemplate.fields.length - 1}
                                >
                                  <ArrowDownwardIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Edit Field">
                                <IconButton 
                                  size="small" 
                                  color="primary"
                                  onClick={() => handleEditField(field)}
                                >
                                  <EditIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Delete Field">
                                <IconButton 
                                  size="small" 
                                  color="error"
                                  onClick={() => handleDeleteField(field.id)}
                                >
                                  <DeleteIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Field Editor Dialog */}
        {showFieldEditor && editingField && (
          <Card sx={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90%', maxWidth: '800px', maxHeight: '90vh', overflow: 'auto', zIndex: 1000 }}>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                {editingField.id ? `Edit Field: ${editingField.name || '(New Field)'}` : 'Add New Field'}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Field ID"
                    fullWidth
                    required
                    value={editingField.id}
                    onChange={(e) => setEditingField({ ...editingField, id: e.target.value })}
                    margin="normal"
                    helperText="Unique identifier for this field"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Field Name (Required)"
                    fullWidth
                    required
                    value={editingField.name}
                    onChange={(e) => setEditingField({ ...editingField, name: e.target.value })}
                    margin="normal"
                    helperText="Technical name used in the database. Required."
                    error={!editingField.name}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Field Type</InputLabel>
                    <Select
                      value={editingField.type}
                      onChange={(e) => setEditingField({ ...editingField, type: e.target.value })}
                      label="Field Type"
                    >
                      {FIELD_TYPES.map(type => (
                        <MenuItem key={type.value} value={type.value}>
                          {type.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Display Label (Required)"
                    fullWidth
                    required
                    value={editingField.label}
                    onChange={(e) => setEditingField({ ...editingField, label: e.target.value })}
                    margin="normal"
                    helperText="Label shown to users in the form. Required."
                    error={!editingField.label}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Placeholder"
                    fullWidth
                    value={editingField.placeholder || ''}
                    onChange={(e) => setEditingField({ ...editingField, placeholder: e.target.value })}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={editingField.required || false}
                        onChange={(e) => setEditingField({ ...editingField, required: e.target.checked })}
                      />
                    }
                    label="Required"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={editingField.fullWidth || false}
                        onChange={(e) => setEditingField({ ...editingField, fullWidth: e.target.checked })}
                      />
                    }
                    label="Full Width"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={editingField.hidden || false}
                        onChange={(e) => setEditingField({ ...editingField, hidden: e.target.checked })}
                      />
                    }
                    label="Hidden"
                  />
                </Grid>

                {/* Options for select, radio, checkbox types */}
                {['select', 'radio', 'checkbox'].includes(editingField.type) && (
                  <Grid item xs={12}>
                    <Box sx={{ mb: 2, mt: 2 }}>
                      <Typography variant="subtitle1" gutterBottom>
                        Options
                      </Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<AddIcon />}
                        onClick={handleAddOption}
                        sx={{ mb: 2 }}
                      >
                        Add Option
                      </Button>
                      
                      {fieldOptions.length === 0 ? (
                        <Alert severity="info" sx={{ mt: 1 }}>
                          No options added yet. Click "Add Option" to add options.
                        </Alert>
                      ) : (
                        <TableContainer component={Paper}>
                          <Table size="small">
                            <TableHead>
                              <TableRow>
                                <TableCell>Value</TableCell>
                                <TableCell>Label</TableCell>
                                <TableCell width="100px">Actions</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {fieldOptions.map((option, idx) => (
                                <TableRow key={idx}>
                                  <TableCell>
                                    <TextField
                                      size="small"
                                      fullWidth
                                      value={option.value}
                                      onChange={(e) => handleOptionChange(idx, 'value', e.target.value)}
                                    />
                                  </TableCell>
                                  <TableCell>
                                    <TextField
                                      size="small"
                                      fullWidth
                                      value={option.label}
                                      onChange={(e) => handleOptionChange(idx, 'label', e.target.value)}
                                    />
                                  </TableCell>
                                  <TableCell>
                                    <IconButton
                                      size="small"
                                      color="error"
                                      onClick={() => handleRemoveOption(idx)}
                                    >
                                      <DeleteIcon fontSize="small" />
                                    </IconButton>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      )}
                    </Box>
                  </Grid>
                )}
              </Grid>
              
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                <Button 
                  variant="outlined" 
                  color="secondary" 
                  onClick={() => {
                    setShowFieldEditor(false);
                    setEditingField(null);
                  }}
                  sx={{ mr: 2 }}
                >
                  Cancel
                </Button>
                <Button 
                  variant="contained" 
                  color="primary"
                  onClick={handleSaveField}
                >
                  Save Field
                </Button>
              </Box>
            </CardContent>
          </Card>
        )}
      </Box>
    </AdminLayout>
  );
} 