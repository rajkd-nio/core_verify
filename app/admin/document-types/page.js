'use client';

import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Button, 
  Typography, 
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
  Divider,
  Alert,
  IconButton,
  Tooltip,
  Chip
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import LinkIcon from '@mui/icons-material/Link';
import AdminLayout from '@/components/layouts/AdminLayout';
import { useRouter } from 'next/navigation';

export default function DocumentTypesPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [documentTypes, setDocumentTypes] = useState([]);

  useEffect(() => {
    const fetchDocumentTypes = async () => {
      try {
        setLoading(true);
        
        // Get document types with form template info
        const response = await fetch('/api/document-types');
        
        if (!response.ok) {
          throw new Error(`API error: ${response.statusText}`);
        }
        
        const data = await response.json();
        setDocumentTypes(data);
      } catch (err) {
        console.error('Error fetching document types:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDocumentTypes();
  }, []);

  const handleManageForm = (formTemplateId) => {
    router.push(`/admin/forms/edit/${formTemplateId}`);
  };

  const handleAssociateForm = (documentTypeId) => {
    router.push(`/admin/document-types/associate/${documentTypeId}`);
  };

  return (
    <AdminLayout>
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Document Types
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Card>
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              Document Type Form Associations
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                <CircularProgress />
              </Box>
            ) : documentTypes.length === 0 ? (
              <Alert severity="info">
                No document types found.
              </Alert>
            ) : (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Parent Type</TableCell>
                      <TableCell>Child Type</TableCell>
                      <TableCell>Form Template</TableCell>
                      <TableCell>Version</TableCell>
                      <TableCell>Locations</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {documentTypes.map((docType) => (
                      <TableRow key={`${docType.parentTypeId}-${docType.childTypeId}`}>
                        <TableCell>{docType.parentName || 'N/A'}</TableCell>
                        <TableCell>{docType.childName || 'N/A'}</TableCell>
                        <TableCell>
                          {docType.formTemplate ? (
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              {docType.formTemplate.name}
                              <Chip 
                                size="small" 
                                label={docType.formTemplate.form_key} 
                                variant="outlined" 
                                sx={{ ml: 1 }}
                              />
                            </Box>
                          ) : (
                            <Typography variant="body2" color="text.secondary">
                              No form assigned
                            </Typography>
                          )}
                        </TableCell>
                        <TableCell>
                          {docType.formTemplate ? docType.formTemplate.version : 'N/A'}
                        </TableCell>
                        <TableCell>
                          {docType.locations?.map(location => (
                            <Chip 
                              key={location.location_id}
                              size="small" 
                              label={`Location ${location.location_id}`} 
                              sx={{ mr: 0.5, mb: 0.5 }}
                            />
                          )) || 'None'}
                        </TableCell>
                        <TableCell>
                          {docType.formTemplate ? (
                            <Tooltip title="Manage Form">
                              <IconButton
                                color="primary"
                                onClick={() => handleManageForm(docType.formTemplate.form_key)}
                              >
                                <EditIcon />
                              </IconButton>
                            </Tooltip>
                          ) : (
                            <Tooltip title="Associate Form">
                              <IconButton
                                color="primary"
                                onClick={() => handleAssociateForm(docType.id)}
                              >
                                <LinkIcon />
                              </IconButton>
                            </Tooltip>
                          )}
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