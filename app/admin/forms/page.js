'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Box, 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Typography, 
  CircularProgress,
  IconButton,
  Tooltip,
  Card,
  CardContent,
  Divider,
  Alert
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import AdminLayout from '@/components/layouts/AdminLayout';

export default function FormsManagementPage() {
  const router = useRouter();
  const [formTemplates, setFormTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all form templates
  useEffect(() => {
    const fetchFormTemplates = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/forms');
        
        if (!response.ok) {
          throw new Error(`API error: ${response.statusText}`);
        }
        
        const data = await response.json();
        setFormTemplates(data);
      } catch (err) {
        console.error('Error fetching form templates:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFormTemplates();
  }, []);

  const handleCreateForm = () => {
    router.push('/admin/forms/create');
  };

  const handleEditForm = (formKey) => {
    router.push(`/admin/forms/edit/${formKey}`);
  };

  const handleDeleteForm = async (formKey) => {
    if (window.confirm('Are you sure you want to delete this form template?')) {
      try {
        const response = await fetch(`/api/forms/${formKey}`, {
          method: 'DELETE'
        });
        
        if (!response.ok) {
          throw new Error(`API error: ${response.statusText}`);
        }
        
        // Remove the deleted form from state
        setFormTemplates(formTemplates.filter(template => template.key !== formKey));
      } catch (err) {
        console.error('Error deleting form template:', err);
        setError(err.message);
      }
    }
  };

  return (
    <AdminLayout>
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Form Management
          </Typography>
          
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<AddIcon />}
            onClick={handleCreateForm}
          >
            Create New Form
          </Button>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Card>
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              Form Templates
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                <CircularProgress />
              </Box>
            ) : formTemplates.length === 0 ? (
              <Alert severity="info">
                No form templates found. Click "Create New Form" to add one.
              </Alert>
            ) : (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Form Key</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Version</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Document Types</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {formTemplates.map((template) => (
                      <TableRow key={template.key}>
                        <TableCell>{template.key}</TableCell>
                        <TableCell>{template.name}</TableCell>
                        <TableCell>{template.description || 'N/A'}</TableCell>
                        <TableCell>{template.version}</TableCell>
                        <TableCell>{template.isActive ? 'Active' : 'Inactive'}</TableCell>
                        <TableCell>
                          {template.documentTypes?.map(dt => (
                            <div key={`${dt.parentTypeId}-${dt.childTypeId}`}>
                              {dt.parentName} - {dt.childName}
                            </div>
                          )) || 'None'}
                        </TableCell>
                        <TableCell>
                          <Tooltip title="Edit Form">
                            <IconButton
                              color="primary"
                              onClick={() => handleEditForm(template.key)}
                            >
                              <EditIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete Form">
                            <IconButton
                              color="error"
                              onClick={() => handleDeleteForm(template.key)}
                            >
                              <DeleteIcon />
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
      </Box>
    </AdminLayout>
  );
} 