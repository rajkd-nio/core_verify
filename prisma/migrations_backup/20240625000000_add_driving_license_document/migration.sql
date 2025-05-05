-- Insert driving license document type
INSERT INTO "document_types" 
  ("name", "created_at", "updated_at", "description", "form_id", "hide_header", "show_form_buttons") 
VALUES 
  ('driving_license', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Driving License documentation', 'driving_license_form', false, true);

-- Get the document type ID
DO $$
DECLARE
  doc_type_id INT;
BEGIN
  SELECT id INTO doc_type_id FROM "document_types" WHERE "name" = 'driving_license';
  
  -- Insert document title
  INSERT INTO "document_titles"
    ("title", "created_at", "updated_at", "shareable", "document_type_id", "is_display", 
     "require_number", "require_valid_date", "require_expire_date", "require_doc_data",
     "require_attachment_front", "require_attachment_back", "description", "form_description", "form_title")
  VALUES
    ('Driving License', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, true, doc_type_id, true,
     true, true, true, true, true, true, 'Driver''s license documentation',
     'Upload your driver''s license information', 'Driver''s License');
     
  -- Get the document title ID
  DECLARE
    doc_title_id INT;
  BEGIN
    SELECT id INTO doc_title_id FROM "document_titles" WHERE "document_type_id" = doc_type_id AND "title" = 'Driving License';
    
    -- Insert form fields
    INSERT INTO "form_fields"
      ("document_title_id", "field_name", "label", "type", "placeholder", "required", 
       "order", "full_width", "hidden", "created_at", "updated_at")
    VALUES
      -- License Number field
      (doc_title_id, 'licenseNumber', 'License Number', 'text', 'Enter license number', true, 
       1, true, false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      
      -- State field (with options stored as JSON)
      (doc_title_id, 'state', 'State', 'select', 'Select state', true, 
       2, true, false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      
      -- Issue Date field
      (doc_title_id, 'issueDate', 'Issue Date', 'date', 'Select issue date', true, 
       3, true, false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      
      -- Expiration Date field
      (doc_title_id, 'expirationDate', 'Expiration Date', 'date', 'Select expiration date', true, 
       4, true, false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      
      -- Front of License upload field
      (doc_title_id, 'fileUploadFront', 'Front of License', 'file', 'Upload front of license', true, 
       5, true, false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
      
      -- Back of License upload field
      (doc_title_id, 'fileUploadBack', 'Back of License', 'file', 'Upload back of license', true, 
       6, true, false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
      
    -- Update the state field to include options
    UPDATE "form_fields"
    SET "options" = '[
      {"value": "AL", "label": "Alabama"},
      {"value": "AK", "label": "Alaska"},
      {"value": "AZ", "label": "Arizona"},
      {"value": "AR", "label": "Arkansas"},
      {"value": "CA", "label": "California"},
      {"value": "CO", "label": "Colorado"},
      {"value": "CT", "label": "Connecticut"},
      {"value": "DE", "label": "Delaware"},
      {"value": "FL", "label": "Florida"},
      {"value": "GA", "label": "Georgia"},
      {"value": "HI", "label": "Hawaii"},
      {"value": "ID", "label": "Idaho"},
      {"value": "IL", "label": "Illinois"},
      {"value": "IN", "label": "Indiana"},
      {"value": "IA", "label": "Iowa"},
      {"value": "KS", "label": "Kansas"},
      {"value": "KY", "label": "Kentucky"},
      {"value": "LA", "label": "Louisiana"},
      {"value": "ME", "label": "Maine"},
      {"value": "MD", "label": "Maryland"},
      {"value": "MA", "label": "Massachusetts"},
      {"value": "MI", "label": "Michigan"},
      {"value": "MN", "label": "Minnesota"},
      {"value": "MS", "label": "Mississippi"},
      {"value": "MO", "label": "Missouri"},
      {"value": "MT", "label": "Montana"},
      {"value": "NE", "label": "Nebraska"},
      {"value": "NV", "label": "Nevada"},
      {"value": "NH", "label": "New Hampshire"},
      {"value": "NJ", "label": "New Jersey"},
      {"value": "NM", "label": "New Mexico"},
      {"value": "NY", "label": "New York"},
      {"value": "NC", "label": "North Carolina"},
      {"value": "ND", "label": "North Dakota"},
      {"value": "OH", "label": "Ohio"},
      {"value": "OK", "label": "Oklahoma"},
      {"value": "OR", "label": "Oregon"},
      {"value": "PA", "label": "Pennsylvania"},
      {"value": "RI", "label": "Rhode Island"},
      {"value": "SC", "label": "South Carolina"},
      {"value": "SD", "label": "South Dakota"},
      {"value": "TN", "label": "Tennessee"},
      {"value": "TX", "label": "Texas"},
      {"value": "UT", "label": "Utah"},
      {"value": "VT", "label": "Vermont"},
      {"value": "VA", "label": "Virginia"},
      {"value": "WA", "label": "Washington"},
      {"value": "WV", "label": "West Virginia"},
      {"value": "WI", "label": "Wisconsin"},
      {"value": "WY", "label": "Wyoming"},
      {"value": "DC", "label": "District of Columbia"}
    ]'::jsonb
    WHERE "document_title_id" = doc_title_id AND "field_name" = 'state';
    
    -- Add US regions support for the driving license document
    -- Get all active regions
    DECLARE
      region_record RECORD;
    BEGIN
      FOR region_record IN SELECT id FROM "regions" WHERE "active" = true LOOP
        -- Insert document configuration for each region
        INSERT INTO "document_configurations"
          ("region_id", "document_type_id", "document_title_id", "type_of_condition", 
           "created_at", "updated_at", "active", "priority")
        VALUES
          (region_record.id, doc_type_id, doc_title_id, 0,
           CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, true, 0);
      END LOOP;
    END;
  END;
END $$; 