# CoreVerify Integration with NurseIO Document Management

## Overview

This README provides detailed instructions for integrating CoreVerify with NurseIO's Certificates & Documents section to handle all document management operations (add, edit, delete) through a consistent iframe-based interface.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Integration Architecture](#integration-architecture)
3. [Step-by-Step Implementation](#step-by-step-implementation)
4. [Document Type Support](#document-type-support)
5. [Communication Protocol](#communication-protocol)
6. [Security Considerations](#security-considerations)
7. [Troubleshooting](#troubleshooting)
8. [Example Code](#example-code)

## Prerequisites

- CoreVerify v1.0.0 or later
- NurseIO web application with access to the document management code
- Authentication token generation mechanism
- Proper CORS configuration to allow cross-origin communication

## Integration Architecture

The integration uses an iframe-based approach:

1. NurseIO embeds CoreVerify in an iframe when document management is needed
2. CoreVerify handles all document operations (upload, validation, extraction, etc.)
3. Communication occurs via the postMessage API
4. Document data flows back to NurseIO after successful operations

![Architecture Diagram](https://example.com/arch-diagram.png)

## Step-by-Step Implementation

### 1. Create a CoreVerify Modal Component

First, create a reusable modal component in NurseIO:

```jsx
// components/CoreVerifyModal.js
import React, { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const CORE_VERIFY_URL = process.env.NEXT_PUBLIC_CORE_VERIFY_URL || 'http://localhost:3001';

const CoreVerifyModal = ({
  isOpen,
  toggle,
  documentType = 'certificate',
  modalType = 'edit',
  documentData = null,
  locationId = null,
  locationName = null,
  onSuccess,
  onError,
  modalTitle = 'Document Management',
  childTypes = null
}) => {
  const [token, setToken] = useState('');

  // Get authentication token when modal opens
  useEffect(() => {
    if (isOpen) {
      // Replace with your actual token generation logic
      const generateToken = async () => {
        // In production, fetch from your backend
        const session = NextAuth._getLocalStore('session');
        if (session && session.token) {
          setToken(session.token);
        } else {
          console.error('No authentication token available');
          toggle(); // Close modal if no token
        }
      };
      
      generateToken();
    }
  }, [isOpen]);

  // Set up global handlers for modal closing
  useEffect(() => {
    // Define functions that CoreVerify will call
    window.closeIframe = () => {
      console.log('closeIframe function called from CoreVerify');
      toggle();
    };
    
    window.closeModal = () => {
      console.log('closeModal function called from CoreVerify');
      toggle();
    };
    
    window.closeVerifyModal = () => {
      console.log('closeVerifyModal function called from CoreVerify');
      toggle();
    };
    
    // Cleanup on unmount
    return () => {
      delete window.closeIframe;
      delete window.closeModal;
      delete window.closeVerifyModal;
    };
  }, [toggle]);

  // Handle messages from CoreVerify
  useEffect(() => {
    const handleMessage = (event) => {
      // Validate origin for security
      if (event.origin !== CORE_VERIFY_URL) return;
      
      console.log('Received message from CoreVerify:', event.data);
      
      // Convert string messages to objects if needed
      let messageData = event.data;
      if (typeof messageData === 'string') {
        try {
          messageData = JSON.parse(messageData);
        } catch (e) {
          // Simple string like "CANCEL"
          if (messageData === 'CANCEL') {
            messageData = { type: 'UPLOAD_CANCELLED', action: 'cancel' };
          }
        }
      }

      // Handle different message types
      if (messageData.type === 'DOCUMENT_UPLOADED' || messageData.action === 'success') {
        console.log('Document uploaded in CoreVerify:', messageData);
        if (onSuccess) onSuccess(messageData.data);
        toggle(); // Close modal after success
      } else if (
        messageData.type === 'UPLOAD_CANCELLED' || 
        messageData.type === 'MODAL_CLOSED' || 
        messageData.type === 'FORCE_CLOSE_IFRAME' || 
        messageData.action === 'cancel' || 
        messageData === 'CANCEL'
      ) {
        console.log('Operation cancelled in CoreVerify');
        toggle(); // Close modal
      } else if (messageData.type === 'UPLOAD_ERROR') {
        console.error('Error in CoreVerify:', messageData.error);
        if (onError) onError(messageData.error);
        // Don't close modal so user can retry
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [toggle, onSuccess, onError]);

  // Construct the iframe URL with all necessary parameters
  const getIframeUrl = () => {
    if (!token) return '';
    
    const params = new URLSearchParams();
    params.append('token', token);
    params.append('origin', window.location.origin);
    params.append('docType', documentType);
    params.append('modalType', modalType);
    
    if (locationId) params.append('locationId', locationId);
    if (locationName) params.append('locationName', locationName);
    
    // Add document title if available
    if (documentData && documentData.title) {
      params.append('name', documentData.title);
    }
    
    // For certificates, add specific fields
    if (documentType === 'certificate' && documentData) {
      if (documentData.certNumber) params.append('certNumber', documentData.certNumber);
      if (documentData.effectiveDate) params.append('effectiveDate', documentData.effectiveDate);
      if (documentData.expirationDate) params.append('expirationDate', documentData.expirationDate);
    }
    
    // Add child types for document types with subtypes
    if (childTypes) {
      params.append('childTypes', JSON.stringify(childTypes));
    }
    
    // Special case for vaccination records
    if (documentType === 'vaccination_record' || documentType === 'medical') {
      params.append('isVaccinationRecord', 'true');
    }
    
    return `${CORE_VERIFY_URL}/iframe-uploader?${params.toString()}`;
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg" backdrop="static">
      <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
      <ModalBody style={{ padding: 0, height: '80vh', overflow: 'hidden' }}>
        {token ? (
          <iframe
            id="core-verify-frame"
            src={getIframeUrl()}
            title={modalTitle}
            width="100%"
            height="100%"
            style={{ border: 'none', display: 'block' }}
            frameBorder="0"
            allow="camera"
          />
        ) : (
          <div className="text-center p-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Initializing document system...</p>
          </div>
        )}
      </ModalBody>
      <style jsx global>{`
        .modal-content {
          border-radius: 10px;
          border: none;
          overflow: hidden;
        }
        
        .modal-body {
          padding: 0 !important;
          margin: 0 !important;
          overflow: hidden;
        }
      `}</style>
    </Modal>
  );
};

export default CoreVerifyModal;
```

### 2. Integrate with Certificates Section

Replace the current certificate modals in NurseIO:

```jsx
// containers/users/onboarding/documentation/index.js
import CoreVerifyModal from 'components/CoreVerifyModal';

// In your component state, add:
const [showCoreVerifyModal, setShowCoreVerifyModal] = useState(false);
const [coreVerifyDocType, setCoreVerifyDocType] = useState('certificate');
const [coreVerifyModalType, setCoreVerifyModalType] = useState('add');
const [coreVerifyDocData, setCoreVerifyDocData] = useState(null);
const [coreVerifyModalTitle, setCoreVerifyModalTitle] = useState('Add Certificate');

// Replace your existing certificate action handler
const handleCertificateAction = (item, index, type) => {
  // Set up CoreVerify modal parameters
  setCoreVerifyDocType('certificate');
  setCoreVerifyModalType(type); // 'add', 'edit', or 'view'
  setCoreVerifyDocData(item);
  setCoreVerifyModalTitle(
    type === 'add' 
      ? 'Add License/Certificate' 
      : type === 'edit' 
        ? 'Edit License/Certificate' 
        : item.certificateAbbreviation || 'View Certificate'
  );
  setShowCoreVerifyModal(true);
};

// Add success handler to refresh data
const handleCoreVerifySuccess = (data) => {
  console.log('Document operation successful:', data);
  // Refresh your certificates data here
  fetchCertificates(); // Your existing fetch function
};

// Replace your existing certificate button with:
<button
  type="button"
  className="btn btn-back"
  onClick={() => {
    handleCertificateAction(null, null, 'add');
  }}>
  + Add License or Certificate
</button>

// Add the CoreVerify modal component to your render method
<CoreVerifyModal
  isOpen={showCoreVerifyModal}
  toggle={() => setShowCoreVerifyModal(false)}
  documentType={coreVerifyDocType}
  modalType={coreVerifyModalType}
  documentData={coreVerifyDocData}
  locationId={user?.location_id || 1}
  locationName={user?.location?.name || 'California'}
  onSuccess={handleCoreVerifySuccess}
  onError={(error) => console.error('CoreVerify error:', error)}
  modalTitle={coreVerifyModalTitle}
/>

// Remove the old AddCertificateModal component
// {this.state.showAddCertificate && (
//   <AddCertificateModal ... />
// )}
```

### 3. Integrate with Medical Records Section

Similar to certificates, replace the medical records modal:

```jsx
// In your component:

// Update your medical record action handler
const handleMedicalRecordAction = (item, index, type) => {
  setCoreVerifyDocType('medical');
  setCoreVerifyModalType(type);
  setCoreVerifyDocData(item);
  setCoreVerifyModalTitle(
    type === 'add' 
      ? 'Add Medical Record/Vaccination' 
      : type === 'edit' 
        ? 'Edit Medical Record/Vaccination' 
        : item.title || 'View Medical Record'
  );
  setShowCoreVerifyModal(true);
};

// Replace your existing medical record button with:
<button
  type="button"
  className="btn btn-back"
  onClick={() => {
    handleMedicalRecordAction(null, null, 'add');
  }}>
  + Add Medical Information
</button>

// The CoreVerifyModal added earlier will handle this too
```

### 4. Integrate with Documents Section

Finally, replace the document modals:

```jsx
// In your component:

// Update your document action handler
const handleDocumentAction = (item, index, type, isMandatory = false) => {
  setCoreVerifyDocType(isMandatory ? 'mandatory' : 'document');
  setCoreVerifyModalType(type);
  setCoreVerifyDocData(item);
  setCoreVerifyModalTitle(
    type === 'add' 
      ? `Add ${isMandatory ? 'Required' : 'Additional'} Document` 
      : type === 'edit' 
        ? `Edit ${isMandatory ? 'Required' : 'Additional'} Document` 
        : item.title || 'View Document'
  );
  setShowCoreVerifyModal(true);
};

// Replace your document action buttons
// For required documents:
<button
  type="button"
  className="btn btn-back"
  onClick={() => {
    handleDocumentAction(null, null, 'add', true);
  }}>
  + Add Required Document
</button>

// For additional documents:
<button
  type="button"
  className="btn btn-back"
  onClick={() => {
    handleDocumentAction(null, null, 'add', false);
  }}>
  + Add Additional Document
</button>
```

### 5. Update Document List Components

Ensure your document list components pass document actions to the new handlers:

```jsx
// Update CertificateItemsContainer
<CertificateItemsContainer
  data={certificateData}
  certificates={certificates}
  onAction={handleCertificateAction}
/>

// Update MedicalRecordItem
<MedicalRecordItem
  data={user && user.documents}
  onAction={handleMedicalRecordAction}
/>

// Update DocumentsItemsContainer
<DocumentsItemsContainer
  filterArr={filterArr2}
  reqDocs={reqDocs}
  data={(user && user.documents) || []}
  onAction={(item, index, type) => handleDocumentAction(item, index, type, true)}
/>
```

### 6. Handle Document Deletion

For document deletion, you can either:

1. Use CoreVerify's built-in delete functionality (recommended)
2. Implement a separate confirmation modal in NurseIO

Using CoreVerify's deletion (option 1):

```jsx
// When editing a document in CoreVerify, the delete button will be displayed
// The message handler in CoreVerifyModal already handles the 'DOCUMENT_DELETED' message
```

## Document Type Support

CoreVerify handles all NurseIO document types:

| NurseIO Type | CoreVerify Type | Description |
|--------------|-----------------|-------------|
| Certificate | certificate | Professional certifications (BLS/CPR, ACLS, etc.) |
| Required Doc | mandatory | Required documentation (licenses, clearances) |
| Medical Record | medical or vaccination_record | Medical records and vaccination proof |
| Other Document | document | General purpose documents (resume, references) |
| Custom Document | other | Miscellaneous documents |

Each document type enforces appropriate validation rules.

## Communication Protocol

### Messages from CoreVerify to NurseIO

| Message Type | Description | Action in NurseIO |
|--------------|-------------|-------------------|
| DOCUMENT_UPLOADED | Document successfully processed | Refresh document list, close modal |
| UPLOAD_CANCELLED | User cancelled operation | Close modal |
| MODAL_CLOSED | Modal is being closed | Close modal |
| DOCUMENT_DELETED | Document was deleted | Remove document from list, close modal |
| UPLOAD_ERROR | Error during upload | Show error message, keep modal open |

### Messages from NurseIO to CoreVerify

| Message Type | Description |
|--------------|-------------|
| CONFIG_OVERRIDE | Override document configuration |
| VERIFY_CONFIG | Set document parameters |

## Security Considerations

1. **Token Authentication**: All requests require a valid authentication token
2. **Origin Validation**: Always validate the origin of postMessage communications
3. **CORS Headers**: Ensure CoreVerify's CORS settings allow your NurseIO domain
4. **Data Validation**: Validate all data before processing

## Troubleshooting

### Common Issues

1. **Modal doesn't close after operations**
   - Check postMessage event handlers
   - Verify the parent functions (closeIframe, etc.) are defined

2. **Document data not refreshing**
   - Ensure onSuccess handler is refreshing data correctly
   - Check that CoreVerify is returning complete document data

3. **Missing document fields**
   - Verify all required parameters are passed in the iframe URL
   - Check for field mapping differences between systems

4. **CORS errors**
   - Update CoreVerify's allowed origins
   - Ensure postMessage uses proper origin values

## Example Code

### Complete Integration Example

For a complete working example, see the `nurseio-web/components/admin/dashboard/NurseioDashboardComponent.js` file, which demonstrates a working CoreVerify integration.

## Version Compatibility

| CoreVerify Version | NurseIO Version | Status |
|--------------------|----------------|--------|
| 1.0.0 | All | Compatible |
| 1.1.0+ | All | Enhanced support for fingerprint clearance |

For additional assistance, contact the CoreVerify development team. 