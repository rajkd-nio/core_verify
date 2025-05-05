-- Add formFields JSON column to DocumentTitle
ALTER TABLE "document_titles" ADD COLUMN "form_fields" JSONB;

-- Migrate data from document_fields to document_titles.form_fields
-- For each document title, gather all its document fields and store as JSON array
DO $$
DECLARE
    title_record RECORD;
    fields_json JSONB;
BEGIN
    FOR title_record IN SELECT id FROM "document_titles"
    LOOP
        -- Get all fields for this document title as JSON array
        SELECT json_agg(
            json_build_object(
                'id', df.field_id,
                'name', df.field_id,
                'label', df.label,
                'type', df.type,
                'placeholder', df.placeholder,
                'required', df.required,
                'order', df.order,
                'fullWidth', df.full_width,
                'hidden', df.hidden,
                'defaultValue', df.default_value,
                'options', df.options,
                'validation', df.validation,
                'conditionalDisplay', df.conditional_display,
                'helpText', df.help_text
            )
        )
        INTO fields_json
        FROM "document_fields" df
        WHERE df.document_title_id = title_record.id;

        -- Update the document title with fields JSON
        IF fields_json IS NOT NULL THEN
            UPDATE "document_titles"
            SET "form_fields" = fields_json
            WHERE id = title_record.id;
        END IF;
    END LOOP;
END $$;

-- Migrate document type level fields (no document_title_id) to their respective document types
DO $$
DECLARE
    type_record RECORD;
    type_fields_json JSONB;
    first_title_id INTEGER;
BEGIN
    FOR type_record IN SELECT id FROM "document_types"
    LOOP
        -- Get all fields for this document type without a title as JSON array
        SELECT json_agg(
            json_build_object(
                'id', df.field_id,
                'name', df.field_id,
                'label', df.label,
                'type', df.type,
                'placeholder', df.placeholder,
                'required', df.required,
                'order', df.order,
                'fullWidth', df.full_width,
                'hidden', df.hidden,
                'defaultValue', df.default_value,
                'options', df.options,
                'validation', df.validation,
                'conditionalDisplay', df.conditional_display,
                'helpText', df.help_text
            )
        )
        INTO type_fields_json
        FROM "document_fields" df
        WHERE df.document_type_id = type_record.id AND df.document_title_id IS NULL;

        -- If we have type-level fields, get the first title of this type and assign fields to it
        IF type_fields_json IS NOT NULL THEN
            SELECT id INTO first_title_id 
            FROM "document_titles"
            WHERE document_type_id = type_record.id
            ORDER BY id ASC
            LIMIT 1;

            IF first_title_id IS NOT NULL THEN
                UPDATE "document_titles"
                SET "form_fields" = type_fields_json
                WHERE id = first_title_id;
            END IF;
        END IF;
    END LOOP;
END $$;

-- Remove references to DocumentField from DocumentType
ALTER TABLE "document_types" DROP CONSTRAINT IF EXISTS "document_types_id_fkey";

-- Drop indexes before dropping the table
DROP INDEX IF EXISTS "document_fields_document_type_id_idx";
DROP INDEX IF EXISTS "document_fields_document_title_id_idx";

-- Drop the document_fields table
DROP TABLE "document_fields";

-- Update DocumentType to remove the document_fields relationship
-- This is handled by the schema update 