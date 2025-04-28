// This file shows how to integrate core_verify into nurseio-web or any other application
// Add this component to your application for secure document verification

import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Alert, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { NextAuth } from 'next-auth/client'; // Example authentication provider

// Core Verify integration settings
const CORE_VERIFY_URL = 'http://localhost:3001'; // Update in production
const CORE_VERIFY_VERSION = '1.0.0'; // For compatibility checking

const DocumentVerificationComponent = () => {
  const [uploadedDocument, setUploadedDocument] = useState(null);
  const [error, setError] = useState(null);
  const [uploaderReady, setUploaderReady] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [isSecureConnection, setIsSecureConnection] = useState(false);
  const iframeRef = useRef(null);
  
  // Get session and user info for token
  const session = NextAuth._getLocalStore('session');
  const userId = NextAuth._getLocalStore('user_id');
  
  // Function to generate a secure authentication token for the iframe
  // In production, this would be a JWT or similar with proper signing
  const generateToken = () => {
    if (!session || !userId) return null;
    
    // For actual implementation, create a JWT with proper signing
    // This is just an example
    const tokenData = {
      userId: userId,
      sessionId: session.id || session.csrfToken,
      timestamp: new Date().getTime(),
      expiresAt: new Date().getTime() + 30 * 60 * 1000, // 30 min expiry
    };
    
    // In production, this would be properly signed with JWT
    return btoa(JSON.stringify(tokenData));
  };
  
  const openVerifyModal = () => {
    setError(null);
    setUploaderReady(false);
    setShowVerifyModal(true);
  };
  
  const closeVerifyModal = () => {
    setShowVerifyModal(false);
    setUploaderReady(false);
  };
  
  // Create document verification data to pass to iframe
  const createVerificationData = () => {
    return {
      userId: userId || `user-${Math.floor(Math.random() * 10000)}`,
      documentType: 'identification',
      timestamp: new Date().toISOString(),
      sessionId: session?.id || '',
      requestId: `req-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      // Add any other application-specific data needed for verification
    };
  };
  
  useEffect(() => {
    const handleMessage = (event) => {
      // Validate origin for security
      if (event.origin !== CORE_VERIFY_URL) {
        console.warn(`Received message from unexpected origin: ${event.origin}`);
        return;
      }
      
      if (!event.data || !event.data.type) return;
      
      switch (event.data.type) {
        case 'UPLOADER_READY':
          console.log('Core Verify app is ready:', event.data);
          setUploaderReady(true);
          setIsSecureConnection(true);
          
          // Send verification data to iframe
          if (iframeRef.current && iframeRef.current.contentWindow) {
            const verificationData = createVerificationData();
            
            try {
              iframeRef.current.contentWindow.postMessage({
                type: 'VERIFY_CONFIG',
                data: verificationData,
                version: CORE_VERIFY_VERSION,
              }, CORE_VERIFY_URL);
              
              console.log('Sent verification data to Core Verify:', verificationData);
            } catch (err) {
              console.error('Failed to send data to iframe:', err);
              setError('Communication with verification service failed');
            }
          }
          break;
          
        case 'DOCUMENT_UPLOADED':
          console.log('Document verified in Core Verify:', event.data);
          setUploadedDocument(event.data.data.document);
          
          // Here you would typically:
          // 1. Update your application state
          // 2. Save the document reference to your database
          // 3. Notify any relevant parts of your application
          
          // Example API call to save the verification record
          saveVerificationRecord(event.data.data);
          break;
          
        case 'VERIFICATION_ERROR':
          console.error('Verification error:', event.data.error);
          setError(`Verification error: ${event.data.error}`);
          break;
          
        default:
          console.log('Unknown message type from Core Verify:', event.data.type);
      }
    };
    
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);
  
  // Example function to save verification record
  const saveVerificationRecord = async (data) => {
    // This would be an API call to your backend
    console.log('Saving verification record:', data);
    
    // Mock API call
    setTimeout(() => {
      console.log('Verification record saved successfully');
      // Close modal after successful save
      setTimeout(() => {
        closeVerifyModal();
      }, 2000);
    }, 1000);
  };
  
  return (
    <Container className="document-verification py-4">
      <Row>
        <Col>
          <h2>Document Verification</h2>
          
          <p>
            Use this secure verification component to validate documents.
          </p>
          
          <Button 
            color="primary" 
            onClick={openVerifyModal}
            disabled={!userId || !session}
          >
            Edit License/Certificate
          </Button>
          
          {uploadedDocument && (
            <Alert color="success" className="mt-3">
              <h4>Document Verified Successfully!</h4>
              <p><strong>Name:</strong> {uploadedDocument.name}</p>
              <p><strong>Type:</strong> {uploadedDocument.type}</p>
              <p><strong>Document Number:</strong> {uploadedDocument.documentNumber || 'N/A'}</p>
              <p><strong>Date:</strong> {uploadedDocument.date 
                ? new Date(uploadedDocument.date).toLocaleDateString() 
                : new Date().toLocaleDateString()}</p>
            </Alert>
          )}
          
          {error && (
            <Alert color="danger" className="mt-3">
              {error}
            </Alert>
          )}
          
          {/* Verification Modal with iframe */}
          {/* 
            The "modal-right" class should be defined in your host application's CSS:
            
            .modal-right {
              position: fixed !important;
              top: 0;
              right: 0;
              margin: 0 !important;
              height: 100vh;
              width: 600px !important;
              max-width: 100% !important;
            }
            
            .modal-right .modal-content {
              height: 100vh;
              border-radius: 0;
              border-left: 1px solid #dee2e6;
            }
            
            .modal-right .modal-body {
              overflow-y: auto;
            }
          */}
          <Modal 
            isOpen={showVerifyModal} 
            toggle={closeVerifyModal} 
            className="modal-right"
            size="lg"
          >
            <ModalHeader toggle={closeVerifyModal}>
              Edit License/Certificate
              {uploaderReady && isSecureConnection && (
                <span className="text-success ml-2">
                  <small>● Secure Connection</small>
                </span>
              )}
            </ModalHeader>
            <ModalBody style={{ padding: 0, height: 'calc(100vh - 60px)', overflow: 'hidden' }}>
              {!uploaderReady && (
                <div className="text-center p-3">
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading verification service...</span>
                  </div>
                  <p className="mt-2">Establishing secure connection...</p>
                </div>
              )}
              
              <div 
                style={{ 
                  height: '100%', 
                  width: '100%',
                  display: uploaderReady ? 'block' : 'none',
                  padding: 0,
                  margin: 0,
                  overflow: 'hidden'
                }}
              >
                <iframe
                  ref={iframeRef}
                  id="core-verify-frame"
                  src={`${CORE_VERIFY_URL}/iframe-uploader?token=${generateToken()}&origin=${window.location.origin}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    display: 'block'
                  }}
                  frameBorder="0"
                  title="Edit License/Certificate"
                ></iframe>
              </div>
            </ModalBody>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default DocumentVerificationComponent;

// To add this component to your routes:
// In your routes configuration:
// routes.add('dashboard/verification', '/dashboard/verification') 