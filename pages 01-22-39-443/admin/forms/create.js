import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { 
  Box, 
  Button, 
  Typography, 
  TextField,
  Grid,
  Card,
  CardContent,
  Divider,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import AdminLayout from '../../../components/layouts/AdminLayout';
import { useSnackbar } from 'notistack';

export default function CreateFormTemplate() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  
  // State
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [formTemplate, setFormTemplate] = useState({
    id: '',
    name: '',
    description: '',
    fields: [],
    parentType: null,
    childType: null
  });
  const [parentTypes, setParentTypes] = useState([
    { id: 'mandatory', name: 'Mandatory' },
    { id: 'documents', name: 'Documents' },
    { id: 'vaccination_record', name: 'Vaccination Records' },
    { id: 'other', name: 'Other' }
  ]);

  const handleFormChange = (field, value) => {
    setFormTemplate({
      ...formTemplate,
      [field]: value
    });
  };

  const handleParentTypeChange = (e) => {
    const selectedParentId = e.target.value;
    const selectedParent = parentTypes.find(pt => pt.id === selectedParentId);
    
    setFormTemplate({
      ...formTemplate,
      parentType: selectedParent ? {
        id: selectedParent.id,
        name: selectedParent.name
      } : null,
      childType: null // Reset child type when parent changes
    });
  };

  const handleCreateForm = async () => {
    if (!formTemplate.id || !formTemplate.name) {
      setError('Form ID and name are required');
      return;
    }
    
    try {
      setSaving(true);
      
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formTemplate)
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      enqueueSnackbar('Form template created successfully', { variant: 'success' });
      router.push(`/admin/forms/edit/${data.id}`);
    } catch (err) {
      console.error('Error creating form template:', err);
      setError(err.message);
      enqueueSnackbar(`Error: ${err.message}`, { variant: 'error' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminLayout>
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create New Form Template
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
              onClick={handleCreateForm}
              disabled={saving}
            >
              {saving ? 'Creating...' : 'Create Form'}
            </Button>
          </Box>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Card>
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              Form Details
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Form ID"
                  fullWidth
                  required
                  value={formTemplate.id}
                  onChange={(e) => handleFormChange('id', e.target.value)}
                  margin="normal"
                  helperText="Unique identifier for the form (no spaces, lowercase with underscores)"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Form Name"
                  fullWidth
                  required
                  value={formTemplate.name}
                  onChange={(e) => handleFormChange('name', e.target.value)}
                  margin="normal"
                  helperText="Display name for the form"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  fullWidth
                  multiline
                  rows={2}
                  value={formTemplate.description || ''}
                  onChange={(e) => handleFormChange('description', e.target.value)}
                  margin="normal"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              Document Type Association (Optional)
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Parent Document Type</InputLabel>
                  <Select
                    value={formTemplate.parentType?.id || ''}
                    onChange={handleParentTypeChange}
                    label="Parent Document Type"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {parentTypes.map(type => (
                      <MenuItem key={type.id} value={type.id}>
                        {type.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Child Document Type ID"
                  fullWidth
                  value={formTemplate.childType?.id || ''}
                  onChange={(e) => handleFormChange('childType', {
                    id: e.target.value,
                    name: e.target.value.split('_').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')
                  })}
                  margin="normal"
                  disabled={!formTemplate.parentType}
                  helperText="ID for child document type (e.g., 'drivers_license')"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Child Document Type Name"
                  fullWidth
                  value={formTemplate.childType?.name || ''}
                  onChange={(e) => handleFormChange('childType', {
                    ...formTemplate.childType,
                    name: e.target.value
                  })}
                  margin="normal"
                  disabled={!formTemplate.parentType}
                  helperText="Display name for child document type"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Box sx={{ mt: 3, mb: 2 }}>
          <Alert severity="info">
            After creating the form template, you will be redirected to the form editor to add fields.
          </Alert>
        </Box>
      </Box>
    </AdminLayout>
  );
} 