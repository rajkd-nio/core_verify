# Core Verify

A document verification and management system.

## Database Implementation

Core Verify now uses SQLite with Prisma ORM to store document types and form fields. This replaces the previous JSON-based approach.

### Database Models

- **DocumentType**: Stores document type definitions
  - Includes fields for type ID, name, description, etc.
  - Special fields for medical documents (`require_license`, `require_license_options`)

- **DocumentField**: Stores form field definitions
  - Linked to DocumentType via foreign key
  - Includes all field properties (label, type, order, etc.)

### Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Set up the database:
   ```
   npx prisma generate
   npx prisma migrate dev
   npx prisma db seed
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## API Endpoints

### Document Types

- `GET /api/document-types` - Get all document types
- `GET /api/document-types/[typeId]/license-options` - Get license options for a document type

### Form Schemas

- `GET /api/form-schema?type=[documentType]` - Get form schema for a document type
- `POST /api/form-schema` - Validate custom schema (future enhancement)

### Documents

- `POST /api/document` - Upload a document

## Database Schema Migration

The existing JSON schemas in the `formdata` directory are automatically migrated to the database when running the seed script.

## Special Features

- Medical document types include a `require_license` field (Boolean) set to true
- License options are stored in the `require_license_options` field as JSON
- When a medical document is uploaded, a dropdown of license types is displayed
- License validation is performed during document upload
- Fallback to JSON files if database operations fail

## License Field Implementation

For the medical document type, we've implemented:

1. A Boolean field `require_license` in the DocumentType table
2. A JSON field `require_license_options` that stores the available license options
3. A license field in the document form with the same name
4. Validation during document upload to ensure a valid license is selected

The license field contains dropdown options with properly structured values and labels.
