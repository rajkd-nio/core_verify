'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FormFeedback, Button } from 'reactstrap';
import '../styles/DragDropFileUpload.css';

/**
 * DragDropFileUpload Component
 * Provides a modern drag and drop interface for file uploads
 */
const DragDropFileUpload = ({
  id,
  name,
  accept,
  onChange,
  invalid,
  disabled,
  errorMessage,
  multiple = false,
  onProcessDocument,
  showProcessButton = true
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState('');
  const [filePreview, setFilePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);
  
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      setIsDragging(true);
    }
  };
  
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      setIsDragging(true);
    }
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (disabled) return;
    
    // Handle the dropped files
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = e.dataTransfer.files;
      handleFiles(files);
    }
  };
  
  const handleFiles = (files) => {
    if (!files || files.length === 0) return;
    
    // Create a synthetic event to pass to the onChange handler
    const syntheticEvent = {
      target: {
        files: files,
        name: name,
        type: 'file'
      }
    };
    
    const file = files[0];
    setSelectedFile(file);
    
    // Set filename for display
    if (files.length === 1) {
      setFileName(files[0].name);
    } else if (files.length > 1) {
      setFileName(`${files.length} files selected`);
    }
    
    try {
      // Create a blob URL for any file type for preview in new tab
      const blobUrl = URL.createObjectURL(file);
      console.log('Created blob URL:', blobUrl, 'for file:', file.name, 'type:', file.type);
      setPreviewUrl(blobUrl);
      
      // Create preview if it's an image
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          console.log('Image loaded as data URL');
          setFilePreview(reader.result);
        };
        reader.onerror = (error) => {
          console.error('Error reading file as data URL:', error);
          // Fallback to file icon
          setFilePreview('file');
        };
        reader.readAsDataURL(file);
      } else {
        // If not an image, show an icon based on file type
        if (file.type.includes('pdf')) {
          console.log('Setting PDF icon for file preview');
          setFilePreview('pdf');
        } else {
          console.log('Setting generic file icon for preview');
          setFilePreview('file');
        }
      }
      
      // Call the parent onChange handler
      onChange(syntheticEvent);
    } catch (error) {
      console.error('Error processing file for preview:', error);
      // Set a basic file preview even if URL creation fails
      if (file.type.includes('pdf')) {
        setFilePreview('pdf');
      } else {
        setFilePreview('file');
      }
      onChange(syntheticEvent);
    }
  };
  
  const handleClick = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const handlePreviewClick = (e) => {
    e.stopPropagation(); // Prevent triggering parent click
    e.preventDefault(); // Prevent default behavior
    
    if (disabled) return;
    
    try {
      if (previewUrl) {
        console.log('Opening existing preview URL:', previewUrl);
        window.open(previewUrl, '_blank');
      } else if (selectedFile) {
        console.log('No preview URL found, creating new one for file:', selectedFile.name);
        const newUrl = URL.createObjectURL(selectedFile);
        setPreviewUrl(newUrl);
        console.log('Created new URL:', newUrl);
        window.open(newUrl, '_blank');
      } else {
        console.warn('No file available for preview');
      }
    } catch (error) {
      console.error('Error opening file preview:', error);
      // Inform the user about the error
      alert('Unable to open file preview: ' + error.message);
    }
  };
  
  const handleInputChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFiles(files);
    } else {
      setFileName('');
      setFilePreview(null);
      setSelectedFile(null);
      setPreviewUrl(null);
    }
  };
  
  const handleDeleteFile = (e) => {
    e.stopPropagation(); // Prevent triggering the parent div's click handler
    
    if (disabled) return;
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    
    // Clean up any blob URLs
    if (previewUrl && previewUrl.startsWith('blob:')) {
      URL.revokeObjectURL(previewUrl);
    }
    
    // Clear states
    setFileName('');
    setFilePreview(null);
    setSelectedFile(null);
    setPreviewUrl(null);
    
    // Create a synthetic empty change event to notify parent
    const syntheticEvent = {
      target: {
        files: null,
        name: name,
        type: 'file',
        value: ''
      }
    };
    
    // Call the parent onChange handler
    onChange(syntheticEvent);
  };
  
  // Reset filename if component is disabled
  useEffect(() => {
    if (disabled) {
      setFileName('');
      setFilePreview(null);
      setSelectedFile(null);
      setPreviewUrl(null);
    }
  }, [disabled]);
  
  // Cleanup file preview URL on unmount
  useEffect(() => {
    return () => {
      if (previewUrl && previewUrl.startsWith('blob:')) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);
  
  return (
    <div className="drag-drop-file-upload">
      {!selectedFile ? (
        <div 
          className={`drag-drop-area ${isDragging ? 'dragging' : ''} ${invalid ? 'is-invalid' : ''} ${disabled ? 'disabled' : ''}`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <input
            ref={fileInputRef}
            id={id}
            name={name}
            type="file"
            accept={accept}
            onChange={handleInputChange}
            disabled={disabled}
            multiple={multiple}
            style={{ display: 'none' }}
          />
          
          <div className="drag-drop-content">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
              </svg>
            </div>
            <div className="text-container">
              <span className="drag-text">Drag and drop file here</span>
              <span className="or-text">or</span>
              <span className="browse-text">Click to Browse</span>
              <span className="file-types">{accept?.replace(/\./g, '').toUpperCase() || 'PDF, JPG, PNG'}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="selected-file-container">
          <div className={`file-preview-container ${invalid ? 'is-invalid' : ''}`}>
            <div className="file-preview-content">
              {filePreview && typeof filePreview === 'string' && filePreview.startsWith('data:image/') ? (
                <div className="file-image-preview" onClick={handlePreviewClick}>
                  <img src={filePreview} alt="Preview" />
                </div>
              ) : filePreview === 'pdf' ? (
                <div className="file-icon-preview pdf-icon" onClick={handlePreviewClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"/>
                    <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
                    <path d="M4.165 10.596c.42-.162.976-.59 1.479-1.259a12.045 12.045 0 0 0-.824 1.143c-.211.284-.394.491-.599.491-.01-.003-.072 0-.13-.066-.059-.069-.061-.187-.048-.345.024-.307.124-.567.122-.745a.41.41 0 0 0-.398-.396c-.584.008-1.095.855-1.271 1.525-.045.171-.073.357-.087.546-.035.469.3.896.898.896.482.001.959-.26 1.356-.389A2.66 2.66 0 0 0 5.42 12.9c.34-.608.443-.957.443-.957 0 .01.006-.022.018-.094a.616.616 0 0 0-.023-.185c-.036-.125-.126-.236-.201-.335a.512.512 0 0 0-.201-.134c-.034-.012-.09-.026-.144-.024-.106.001-.203.04-.281.133-.114.132-.105.371-.005.479.024.023.065.037.108.037h.016c.053 0 .117-.02.155-.035.05-.02.085-.048.098-.066.023-.032.029-.086.025-.114a.483.483 0 0 0-.118-.037c-.04-.008-.071.003-.093.019-.01.008-.036.02-.082.014-.048-.006-.065-.018-.069-.026a.071.071 0 0 1-.013-.058c.01-.02.02-.023.033-.033a.242.242 0 0 1 .105-.034c.129-.012.319.043.394.144a.563.563 0 0 1 .095.182c.029.08.037.169.019.243-.03.117-.143.2-.324.196-.083-.001-.161-.027-.232-.062a.785.785 0 0 1-.129-.099c-.041-.042-.07-.093-.091-.139-.052-.115-.056-.252.014-.386.07-.132.202-.254.375-.281.107-.017.252.015.335.079a.911.911 0 0 1 .192.187c.058.082.118.189.158.366.029.128.044.351-.039.554-.089.226-.221.372-.423.455a.85.85 0 0 1-.301.055c-.109 0-.22-.019-.318-.054a1.256 1.256 0 0 1-.09-.045c.15.6.206.01-.136-.282a8.334 8.334 0 0 1-.606-1.256c-.062-.154-.178-.496-.178-.496a4.518 4.518 0 0 1 .17-.99c.063-.23.232-.74.546-.849.128-.046.288-.035.422.071.139.112.142.346.128.477-.015.148-.09.365-.203.586-.113.22-.245.414-.34.498-.118.101-.203.146-.244.156-.085.024-.1 0-.105-.01-.056-.088.008-.35.045-.505a1.36 1.36 0 0 1 .1-.278c.031-.064.096-.161.16-.208.041-.03.141-.08.219-.082.077 0 .128.037.142.069.014.031.005.084-.055.211s-.219.446-.253.552a2.518 2.518 0 0 0-.106.527s.008-.093.059-.404c.026-.16.175-.621.452-.621.277 0 .257.417.257.417zm1.877-2.336c.215 0 .415.118.415.27 0 .151-.158.33-.374.33-.215 0-.415-.118-.415-.27 0-.152.158-.33.374-.33zm1.252 5.518c-.22.068-.42.055-.602-.041-.182-.097-.301-.24-.275-.414a.483.483 0 0 1 .238-.332c.146-.071.365-.075.62.004.254.078.424.257.338.558-.054.19-.223.307-.319.225zm-1.374-2.465a2.287 2.287 0 0 1-.593.533c-.005-.026-.013-.11-.025-.214-.004-.033-.156-1.153-.185-1.325a.975.975 0 0 1-.005-.24c.003-.034.16-.14.212.025.15.049.202.194.267.492.104.482.398 1.208.576 1.572a1.307 1.307 0 0 1-.247-.843zm.71-.732c-.004.176.011.355.048.543.037.188.106.395.21.636.197.461.555.905.832 1.101.371.265.73.362 1.05.262.065-.02.128-.052.188-.098a.981.981 0 0 0 .33-.73c.01-.403-.174-.686-.354-.89a2.483 2.483 0 0 0-.574-.445c-.431-.247-.96-.384-1.353-.45a2.94 2.94 0 0 1-.287-.053 1.389 1.389 0 0 1-.09.124z"/>
                  </svg>
                </div>
              ) : (
                <div className="file-icon-preview file-icon" onClick={handlePreviewClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                  </svg>
                </div>
              )}
              
              <div className="file-info">
                <div className="file-name-wrapper">
                  <span className="file-name" onClick={handlePreviewClick} title="Click to view file">
                    {fileName}
                  </span>
                  <div className="file-actions">
                    <button 
                      type="button"
                      onClick={handleClick} 
                      disabled={disabled}
                      className="change-file-btn"
                      aria-label="Change file"
                      title="Change file"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                      </svg>
                    </button>
                    <button 
                      type="button"
                      onClick={handleDeleteFile} 
                      disabled={disabled}
                      className="delete-file-btn"
                      aria-label="Delete file"
                      title="Remove file"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <input
                ref={fileInputRef}
                id={id}
                name={name}
                type="file"
                accept={accept}
                onChange={handleInputChange}
                disabled={disabled}
                multiple={multiple}
                style={{ display: 'none' }}
              />
            </div>
          </div>
          
          {onProcessDocument && showProcessButton && selectedFile && (
            <Button 
              color="primary" 
              outline 
              className="process-document-btn mt-2 w-100"
              onClick={() => onProcessDocument(selectedFile)}
              disabled={disabled || !selectedFile}
            >
              Process Document
            </Button>
          )}
        </div>
      )}
      
      {invalid && errorMessage && (
        <FormFeedback style={{ display: 'block' }}>{errorMessage}</FormFeedback>
      )}
    </div>
  );
};

export default DragDropFileUpload; 