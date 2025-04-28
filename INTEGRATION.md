# Core Verify Integration Guide

This guide explains how to integrate the Core Verify document verification system into an external application (like NurseIO) using an iframe.

## Table of Contents

1. [Integration Overview](#integration-overview)
2. [Prerequisites](#prerequisites)
3. [Embedding Core Verify](#embedding-core-verify)
4. [Communication Protocol](#communication-protocol)
5. [Right-Side Modal Integration](#right-side-modal-integration)
6. [Security Considerations](#security-considerations)
7. [Example Implementation](#example-implementation)
8. [Testing the Integration](#testing-the-integration)
9. [Troubleshooting](#troubleshooting)

## Integration Overview

Core Verify is designed to be embedded in other applications using an iframe. The integration follows these steps:

1. Host application creates an iframe pointing to Core Verify
2. Core Verify authenticates using a token
3. Host application can send configuration data to Core Verify
4. Core Verify sends verification results back to the host application

## Prerequisites

- Core Verify server running and accessible (default: http://localhost:3001)
- Authentication token generation mechanism (JWT recommended)
- Host application capable of handling postMessage communication

## Embedding Core Verify

Add an iframe to your application where you want the document uploader to appear:

```html
<iframe
  id="core-verify-frame"
  src="http://localhost:3001/iframe-uploader?token=YOUR_AUTH_TOKEN&origin=YOUR_DOMAIN"
  width="100%"
  height="600"
  style="border: 1px solid #ddd; border-radius: 4px;"
  allow="camera"
></iframe>
```

Parameters:
- `token`: Authentication token (required)
- `origin`: Your application's origin, for secure communication (optional)

### Embedding in a Modal

When embedding Core Verify in a modal, ensure the iframe has proper width and height settings:

```html
<iframe
  src="http://localhost:3001/iframe-uploader?token=YOUR_AUTH_TOKEN"
  style="width: 100%; height: 100%; border: none;"
  frameBorder="0"
  allow="camera"
></iframe>
```

The Core Verify application is designed to fill the entire iframe space without additional margins or padding. For best results:

1. Set the iframe width and height to 100%
2. Remove any border from the iframe
3. Ensure the iframe container (modal body) has appropriate size and scrolling behavior

### Setting the iframe title

The Core Verify iframe doesn't have its own header. Instead, it relies on the parent application to set the appropriate title. Make sure to set a descriptive title for the iframe:

```html
<iframe
  id="core-verify-frame"
  src="http://localhost:3001/iframe-uploader?token=YOUR_AUTH_TOKEN"
  title="Edit License/Certificate"
  style="width: 100%; height: 100%; border: none;"
  frameBorder="0"
  allow="camera"
></iframe>
```

This title attribute is important for accessibility and will be announced by screen readers.

In your parent application modal, you should include an appropriate heading that matches what's being displayed in the iframe:

```jsx
<ModalHeader toggle={closeModal}>
  Edit License/Certificate
</ModalHeader>
<ModalBody>
  <iframe ... />
</ModalBody>
```

## Communication Protocol

### Messages from Core Verify to Host

1. **IFRAME_READY**: Sent when the iframe is loaded and ready
   ```js
   {
     type: 'IFRAME_READY',
     status: 'ready',
     token: 'token-value',
     acceptsConfig: true,
     timestamp: '2023-06-01T12:34:56.789Z'
   }
   ```

2. **DOCUMENT_UPLOADED**: Sent when a document is successfully uploaded
   ```js
   {
     type: 'DOCUMENT_UPLOADED',
     document: {
       id: 'doc-12345',
       name: 'License',
       type: 'identification',
       // Other document properties
     },
     timestamp: '2023-06-01T12:34:56.789Z'
   }
   ```

3. **UPLOAD_ERROR**: Sent when an error occurs during upload
   ```js
   {
     type: 'UPLOAD_ERROR',
     error: {
       message: 'Error message',
       stack: 'Error stack trace',
       timestamp: '2023-06-01T12:34:56.789Z'
     }
   }
   ```

### Messages from Host to Core Verify

1. **VERIFY_CONFIG**: Send configuration data to Core Verify
   ```js
   {
     type: 'VERIFY_CONFIG',
     data: {
       userId: 'user-12345',
       documentType: 'identification',
       documentName: 'Nurse License',
       documentDate: '2023-06-01',
       // Other properties to pre-fill form
     }
   }
   ```

## Right-Side Modal Integration

Core Verify is designed to be embedded inside any container, including a right-side modal panel. This positioning should be applied in the parent/host application (like NurseIO), not within Core Verify itself:

```jsx
<Modal 
  isOpen={showModal} 
  toggle={closeModal} 
  className="modal-right" 
  size="lg"
>
  <ModalHeader toggle={closeModal}>
    License/Certificate Upload
  </ModalHeader>
  <ModalBody>
    <iframe
      src={`http://localhost:3001/iframe-uploader?token=${token}&origin=${origin}`}
      width="100%"
      height="100%"
      frameBorder="0"
    ></iframe>
  </ModalBody>
</Modal>
```

Add this CSS to your host application (not in Core Verify):

```css
/* Right-side modal positioning in the parent application */
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
```

This styling positions the modal to slide in from the right side of the screen in your host application, providing a more modern user experience. The Core Verify iframe itself will not shift or be affected, as it simply adapts to its container.

## Security Considerations

1. **Token Authentication**: Always use a valid authentication token
2. **Origin Validation**: Validate the origin of postMessage communications
3. **CORS Configuration**: Ensure Core Verify's CORS settings allow your domain
4. **Data Validation**: Validate all data sent between applications

## Example Implementation

Here's a complete example of integrating Core Verify in a React component:

```jsx
import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

const CORE_VERIFY_URL = 'http://localhost:3001';

function DocumentVerifier({ userId }) {
  const [showModal, setShowModal] = useState(false);
  const [uploadedDoc, setUploadedDoc] = useState(null);
  
  // Handle messages from Core Verify
  useEffect(() => {
    const handleMessage = (event) => {
      // Validate origin for security
      if (event.origin !== CORE_VERIFY_URL) return;
      
      console.log('Received message from Core Verify:', event.data);
      
      if (event.data.type === 'IFRAME_READY') {
        // Send configuration data to Core Verify
        const iframe = document.getElementById('core-verify-frame');
        if (iframe && iframe.contentWindow) {
          iframe.contentWindow.postMessage({
            type: 'VERIFY_CONFIG',
            data: {
              userId: userId,
              documentType: 'identification',
              documentDate: new Date().toISOString().split('T')[0]
            }
          }, CORE_VERIFY_URL);
        }
      }
      
      if (event.data.type === 'DOCUMENT_UPLOADED') {
        setUploadedDoc(event.data.document || event.data.data?.document);
        // Process uploaded document
      }
    };
    
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [userId]);
  
  // Generate a demo token (in production, get this from your server)
  const generateToken = () => {
    return 'demo-token-' + Math.random().toString(36).substring(2, 15);
  };
  
  return (
    <>
      <Button color="primary" onClick={() => setShowModal(true)}>
        Verify Documents
      </Button>
      
      <Modal isOpen={showModal} toggle={() => setShowModal(false)} size="lg">
        <ModalHeader toggle={() => setShowModal(false)}>
          Edit License/Certificate
          {uploadedDoc && <span className="text-success ml-2">(Uploaded!)</span>}
        </ModalHeader>
        <ModalBody>
          <iframe
            id="core-verify-frame"
            src={`${CORE_VERIFY_URL}/iframe-uploader?token=${generateToken()}&origin=${encodeURIComponent(window.location.origin)}`}
            width="100%"
            height="500"
            frameBorder="0"
            title="Edit License/Certificate"
            allow="camera"
          />
        </ModalBody>
      </Modal>
    </>
  );
}

export default DocumentVerifier;
```

## Testing the Integration

1. Start both Core Verify and your host application
2. Use the provided testing scripts:
   ```bash
   # Check if services are running
   npm run check-integration
   
   # Start both services (if available)
   npm run start-integration
   ```
3. Open your host application and test the document verification flow
4. Check the browser console for communication logs between applications

## Troubleshooting

Common issues and solutions:

1. **No communication between applications**
   - Check that both applications are running
   - Verify CORS settings allow your domain
   - Ensure origin parameters match exactly

2. **Configuration not applied**
   - Make sure you're sending the VERIFY_CONFIG message after the IFRAME_READY event
   - Check data format matches expected schema

3. **Authentication errors**
   - Verify token is being passed correctly
   - Check token validation settings

For more assistance, see examples in the `core_verify/app/demo` directory. 