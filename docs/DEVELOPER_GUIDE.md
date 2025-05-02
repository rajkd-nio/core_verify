# CoreVerify Developer Guide

## Enhanced File Upload and Document Processing

This guide explains the technical implementation of the enhanced file upload components and document processing features in CoreVerify.

### Component Architecture

```
core_verify/
├── components/
│   ├── DragDropFileUpload.js    # Reusable drag-drop file upload component
│   └── DynamicForm.js           # Dynamic form component with file upload handling
├── hooks/
│   ├── index.js                  # Exports for all custom hooks
│   └── useDocumentExtraction.js  # Document data extraction hook
└── styles/
    └── DragDropFileUpload.css    # Styles for the drag-drop component
```

### DragDropFileUpload Component

The `DragDropFileUpload` component provides a modern drag-and-drop interface for file uploads.

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `id` | string | HTML input ID |
| `name` | string | HTML input name |
| `accept` | string | File types to accept (e.g., `.pdf,.jpg,.png`) |
| `onChange` | function | Callback when a file is selected |
| `invalid` | boolean | Whether the input is in an invalid state |
| `disabled` | boolean | Whether the input is disabled |
| `errorMessage` | string | Error message to display when invalid |
| `multiple` | boolean | Whether to allow multiple file selection (default: false) |

#### Component States

The component has two main visual states:
1. **Initial state**: Shows a drag-drop area with upload instructions
2. **File selected state**: Shows a preview of the file with a "Change" button

#### Implementation Details

- The component captures drag events (`dragEnter`, `dragOver`, `dragLeave`, `drop`) to provide visual feedback and handle file drops.
- File preview is implemented depending on file type:
  - Image files (image/*): Direct thumbnail display
  - PDF files: PDF icon
  - Other files: Generic file icon
- The component creates a synthetic event to pass to the parent's `onChange` handler to maintain compatibility with form libraries.

### useDocumentExtraction Hook

This custom hook encapsulates the document data extraction functionality.

#### Usage

```jsx
const {
  extracting,         // Boolean indicating if extraction is in progress
  extractionError,    // Error message if extraction failed
  extractedData,      // The extracted data object
  extractDataFromFile, // Function to trigger extraction
  resetExtraction     // Function to reset extraction state
} = useDocumentExtraction();
```

#### Implementation Details

- The hook separates the document extraction logic from the UI components
- It handles API calls to the NIOVerify service
- It provides standardized data mapping from the API response to form fields
- It includes error handling and fallback to demo data when the API fails
- It manages loading states and provides feedback about the extraction process

### Document Processing Flow

The document processing flow has been updated to give users more control:

1. **File Selection**: User selects or drops a file, which is immediately displayed with a preview
2. **Manual Processing**: User can click the "Process Document" button to trigger document data extraction
3. **Automatic Processing**: If the user submits the form without manual processing, the system will automatically process the document

This approach separates the concerns of file upload and document processing, giving users more control while maintaining backward compatibility.

### CSS Styling

The CSS for the drag-drop component follows these principles:

- **Responsive Design**: Works across different screen sizes
- **Visual Feedback**: Clear states for dragging, hovering, and errors
- **Consistent Styling**: Matches the application's design system
- **Animations**: Subtle animations for drag operations to enhance UX
- **Accessibility**: High contrast and clear visual cues

### Testing Considerations

When testing these components, consider:

1. **File Type Handling**: Test with various file types (PDF, JPG, PNG)
2. **Error States**: Test validation and error messaging
3. **Accessibility**: Test keyboard navigation and screen reader compatibility
4. **Edge Cases**: Test very large files, very small files, and invalid files
5. **Document Processing**: Test both manual and automatic document processing flows

### Future Development Considerations

When extending these components:

1. **Keep the separation of concerns**: File upload vs. document processing
2. **Maintain the hook pattern**: Add new hooks for different processing capabilities
3. **Extend the file preview capabilities**: Add support for more file types
4. **Consider performance**: For large files or multiple file uploads
5. **Maintain backward compatibility**: Ensure existing forms continue to work 