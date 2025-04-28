'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Alert } from 'reactstrap';
import DocumentUploader from '../components/DocumentUploader';

export default function Home() {
  const [submittedDoc, setSubmittedDoc] = useState(null);
  
  const handleSuccess = (data) => {
    setSubmittedDoc(data.document);
  };
  
  const handleError = (error) => {
    console.error('Submission error:', error);
  };
  
  return (
    <Container className="py-5">
      <Row>
        <Col lg={8} className="mx-auto">
          {/* <h1 className="mb-4">Core Verify Document Uploader</h1> */}
          
          {submittedDoc && (
            <Alert color="success" className="mb-4">
              <h4>Document Information Submitted</h4>
              <p><strong>Name:</strong> {submittedDoc.name}</p>
              <p><strong>Type:</strong> {submittedDoc.type}</p>
              <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
            </Alert>
          )}
          
          <DocumentUploader 
            onSuccess={handleSuccess} 
            onError={handleError}
          />
        </Col>
      </Row>
    </Container>
  );
} 