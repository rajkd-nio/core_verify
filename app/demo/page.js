'use client';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, Alert } from 'reactstrap';

export default function Demo() {
  const [uploaderUrl, setUploaderUrl] = useState('');
  const [token, setToken] = useState('sample-token-123');
  const [uploadedDocument, setUploadedDocument] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [baseUrl, setBaseUrl] = useState('');
  
  useEffect(() => {
    // Get the base URL of the application
    if (typeof window !== 'undefined') {
      const currentBaseUrl = window.location.origin;
      setBaseUrl(currentBaseUrl);
      setUploaderUrl(`${currentBaseUrl}/iframe-uploader?token=${token}`);
    }
    
    // Listen for messages from the iframe
    const handleMessage = (event) => {
      // In production, you would check event.origin here
      
      if (event.data.type === 'DOCUMENT_UPLOADED') {
        setUploadedDocument(event.data.document);
        setErrorMessage('');
      } else if (event.data.type === 'UPLOAD_ERROR') {
        setErrorMessage(event.data.error.message || 'An error occurred during upload');
        setUploadedDocument(null);
      }
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('message', handleMessage);
      
      return () => {
        window.removeEventListener('message', handleMessage);
      };
    }
  }, [token]);
  
  const iframeCode = `<iframe
  src="${uploaderUrl}"
  width="100%"
  height="400"
  style="border: 1px solid #ddd; border-radius: 4px;"
  allow="camera"
></iframe>`;
  
  const jsCode = `// Listen for messages from the iframe
window.addEventListener('message', (event) => {
  // IMPORTANT: In production, verify event.origin
  // const allowedOrigin = 'https://your-document-uploader-domain.com';
  // if (event.origin !== allowedOrigin) return;
  
  if (event.data.type === 'DOCUMENT_UPLOADED') {
    console.log('Document uploaded:', event.data.document);
    // Handle successful upload
  } else if (event.data.type === 'UPLOAD_ERROR') {
    console.error('Upload error:', event.data.error);
    // Handle error
  }
});`;
  
  return (
    <Container className="py-5">
      <h1 className="mb-4">Document Uploader Embed Demo</h1>
      <p className="lead mb-4">
        This page demonstrates how to embed the document uploader in an external website using an iframe.
      </p>
      
      <Row className="mb-5">
        <Col md={6}>
          <Card className="mb-4">
            <CardBody>
              <h3 className="h5 mb-3">Live Demo</h3>
              
              {errorMessage && (
                <Alert color="danger" className="mb-3">
                  {errorMessage}
                </Alert>
              )}
              
              {uploadedDocument && (
                <Alert color="success" className="mb-3">
                  <strong>Document uploaded successfully!</strong><br />
                  Document ID: {uploadedDocument.id}<br />
                  Name: {uploadedDocument.name}<br />
                  Type: {uploadedDocument.type}
                </Alert>
              )}
              
              {uploaderUrl && (
                <iframe
                  src={uploaderUrl}
                  width="100%"
                  height="400"
                  style={{ border: '1px solid #ddd', borderRadius: '4px' }}
                  allow="camera"
                />
              )}
            </CardBody>
          </Card>
        </Col>
        
        <Col md={6}>
          <Card className="mb-4">
            <CardBody>
              <h3 className="h5 mb-3">HTML Embed Code</h3>
              <p>Copy and paste this code into your website:</p>
              <pre className="bg-light p-3 rounded">
                {iframeCode}
              </pre>
            </CardBody>
          </Card>
          
          <Card>
            <CardBody>
              <h3 className="h5 mb-3">JavaScript for Handling Uploads</h3>
              <p>Add this code to handle upload events:</p>
              <pre className="bg-light p-3 rounded">
                {jsCode}
              </pre>
            </CardBody>
          </Card>
        </Col>
      </Row>
      
      <Card>
        <CardBody>
          <h3 className="h5 mb-3">Authentication</h3>
          <p>
            In a real implementation, you would need to generate a secure JWT token 
            on your server and pass it to the iframe URL. This demo uses a sample token 
            for demonstration purposes only.
          </p>
          <p>
            The token should be passed either as a query parameter or a hash fragment:
          </p>
          <ul>
            <li><code>{baseUrl ? `${baseUrl}/iframe-uploader?token=YOUR_JWT_TOKEN` : '/iframe-uploader?token=YOUR_JWT_TOKEN'}</code></li>
            <li><code>{baseUrl ? `${baseUrl}/iframe-uploader#token=YOUR_JWT_TOKEN` : '/iframe-uploader#token=YOUR_JWT_TOKEN'}</code></li>
          </ul>
        </CardBody>
      </Card>
    </Container>
  );
} 