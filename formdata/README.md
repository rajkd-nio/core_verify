# Form Schema Documentation

## Controlling Form Fields

You can control which fields appear in your forms by modifying the JSON schema files in this directory.

### Hiding Fields

There are three ways to hide a field from the form:

1. **Using the `hidden` property (Recommended)**:

   The cleanest way to hide a field is to add `"hidden": true` to the field definition:

   ```json
   {
     "id": "field2",
     "name": "field2",
     "type": "text",
     "label": "Field 2",
     "required": false,
     "order": 2,
     "hidden": true  // This field will not be displayed
   }
   ```

   This approach has several advantages:
   - The field definition remains in the schema for documentation
   - You can easily toggle visibility by changing true/false
   - Required validation is automatically disabled for hidden fields

2. **Using null values**: 
   
   You can replace a field object with `null` to hide it from the form:

   ```json
   "fields": [
     {
       "id": "field1",
       "name": "field1",
       "type": "text",
       "label": "Field 1",
       "order": 1
     },
     null,  // This was field2 but is now hidden
     {
       "id": "field3",
       "name": "field3",
       "type": "text",
       "label": "Field 3",
       "order": 3
     }
   ]
   ```

3. **Removing the field entirely**:

   You can completely remove the field object from the array:

   ```json
   "fields": [
     {
       "id": "field1",
       "name": "field1",
       "type": "text",
       "label": "Field 1", 
       "order": 1
     },
     // field2 is removed and will not show up
     {
       "id": "field3",
       "name": "field3",
       "type": "text",
       "label": "Field 3",
       "order": 3
     }
   ]
   ```

### Field Validation

The form supports powerful validation capabilities using Zod. You can add validation rules to your fields using the `validation` property:

#### Text Field Validations

```json
{
  "id": "username",
  "name": "username",
  "type": "text",
  "label": "Username",
  "required": true,
  "validation": {
    "minLength": 3,
    "maxLength": 20,
    "pattern": "^[A-Za-z0-9_]+$",
    "message": "Username must be 3-20 characters and can only contain letters, numbers, and underscores"
  }
}
```

Available text field validations:
- `minLength`: Minimum length of the text
- `maxLength`: Maximum length of the text
- `pattern`: Regular expression pattern to match
- `email`: Set to true to validate as email format
- `message`: Custom error message to display

#### Date Field Validations

```json
{
  "id": "birthDate",
  "name": "birthDate",
  "type": "date",
  "label": "Birth Date",
  "validation": {
    "notInFuture": true,
    "message": "Birth date cannot be in the future"
  }
}
```

```json
{
  "id": "expirationDate",
  "name": "expirationDate",
  "type": "date",
  "label": "Expiration Date",
  "validation": {
    "afterField": "effectiveDate",
    "message": "Expiration date must be after effective date"
  }
}
```

Available date field validations:
- `notInFuture`: Set to true to ensure date is not in the future
- `afterField`: Specify another date field that this date must be after
- `message`: Custom error message to display

#### File Field Validations

```json
{
  "id": "fileUpload",
  "name": "fileUpload",
  "type": "file",
  "label": "Upload Document",
  "required": true,
  "validation": {
    "maxSize": 5000000,
    "fileTypes": ["application/pdf", "image/jpeg", "image/png"],
    "message": "Please upload a PDF, JPG, or PNG file less than 5MB"
  }
}
```

Available file field validations:
- `maxSize`: Maximum file size in bytes
- `fileTypes`: Array of allowed MIME types
- `message`: Custom error message to display

### Notes on Field Ordering

- Field order is determined by the `order` property in each field object
- If you hide a field, the order of the remaining fields will be preserved
- It's good practice to maintain consistent ordering even when fields are hidden

### Field Requirements

You can control whether fields are required or optional by modifying the `required` property:

```json
{
  "id": "fieldName",
  "name": "fieldName",
  "type": "text",
  "label": "Field Label",
  "required": true,  // Set to false to make optional
  "order": 1
}
```

**Note:** If a field has `hidden: true`, the required validation will be automatically disabled for that field.

### Button Customization

Each form can have custom button text:

```json
"submitButtonText": "Save and Upload",
"cancelButtonText": "Cancel",
"editButtonText": "Edit"
```

This allows for form-specific action buttons. 