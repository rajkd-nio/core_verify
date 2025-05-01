# DocumentField Migration Guide

This guide explains the migration from the `DocumentField` model to a JSON-based field configuration approach stored directly in the `DocumentTitle` model.

## Overview

In the original implementation, form fields for document types were managed through a separate `DocumentField` table with relations to `DocumentType` and `DocumentTitle`. This approach had several drawbacks:

1. Complex data schema with multiple relations
2. Difficult to manage field ordering and configurations
3. Required multiple database queries to build form schemas
4. Limited flexibility for location-specific field configurations

The new implementation simplifies this by:

1. Storing form fields as a JSON array directly in the `DocumentTitle` model
2. Using the existing `DocumentConfiguration` model for location-specific overrides
3. Removing the `DocumentField` model and its dependencies

## Migration Steps

The migration includes the following steps:

1. Add a `formFields` JSON column to the `DocumentTitle` table
2. Migrate existing field data from `DocumentField` to `DocumentTitle.formFields`
3. Update the application code to use the new JSON-based approach
4. Drop the `DocumentField` table

## Running the Migration

To run the migration:

```bash
npm run migrate:remove-document-field
```

This will execute the migration script that:
1. Adds the `form_fields` column to `document_titles` table
2. Copies data from `document_fields` to the new JSON format
3. Drops the `document_fields` table

## Code Changes

### Schema Changes

The Prisma schema has been updated to remove the `DocumentField` model and add the `formFields` field to `DocumentTitle`:

```prisma
model DocumentTitle {
  // ... existing fields
  formFields             Json?                  @map("form_fields")
  // ... relations
}

// DocumentField model has been removed
```

### Service Layer Changes

The `DocumentService.getFormSchemaByTypeId` method has been updated to:

1. Read form fields from the JSON field instead of the relation
2. Apply location-specific overrides from `DocumentConfiguration`
3. Generate standard fields when no custom fields are provided

### UI Component Changes

New components have been added to manage the JSON-based form fields:

1. `DocumentTitleFormFields` - A component for editing form fields
2. Updated `DocumentTitleEdit` - Includes tabs for basic info and form fields

## Form Field Structure

The JSON structure for form fields follows this format:

```json
[
  {
    "id": "fieldId",
    "name": "fieldName",
    "label": "Field Label",
    "type": "text",
    "placeholder": "Enter value",
    "required": true,
    "order": 1,
    "fullWidth": true,
    "hidden": false,
    "options": [
      {"value": "option1", "label": "Option 1"},
      {"value": "option2", "label": "Option 2"}
    ],
    "validation": {
      "pattern": "^[A-Za-z0-9]+$",
      "message": "Only alphanumeric characters allowed"
    },
    "conditionalDisplay": {
      "field": "otherField",
      "value": "specificValue"
    },
    "helpText": "Help text for this field"
  }
]
```

## Location-Based Field Configuration

Location-specific field configurations are now managed through the `customFields` JSON field in the `DocumentConfiguration` model. This allows for customizing form fields based on location without requiring separate database tables.

## Benefits of the New Approach

1. **Simplified Schema**: Fewer tables and relationships to manage
2. **Improved Performance**: Fewer database queries required to build form schemas
3. **Better Flexibility**: JSON format allows for more complex field configurations
4. **Easier Maintenance**: All field data is stored with its parent document title
5. **Simpler Location Configuration**: Location-specific overrides are applied at runtime

## Backward Compatibility

The migration automatically converts existing data, and the `DocumentService` maintains backward compatibility by supporting both the old and new approaches during the transition period. 