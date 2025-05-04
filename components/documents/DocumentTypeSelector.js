import React, { useEffect, useState, useContext } from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { ConfigContext } from '../../context/ConfigContext';

/**
 * Component for selecting document types, with location-specific filtering
 * @param {Object} props - Component props
 * @returns {JSX.Element} - DocumentTypeSelector component
 */
const DocumentTypeSelector = props => {
  const {
    value,
    onChange,
    parentType,
    childTypes = [],
    label = 'Document Type',
    error = false,
    helperText = '',
    required = false,
    fullWidth = true,
    locationId,
    disabled = false,
    ...rest
  } = props;

  const contextConfig = useContext(ConfigContext);
  const [filteredChildTypes, setFilteredChildTypes] = useState([]);
  
  // Filter child types based on location
  useEffect(() => {
    if (childTypes && Array.isArray(childTypes) && childTypes.length > 0) {
      // Get location ID from context or props
      const locationId = props.locationId || contextConfig?.locationId;
      
      // Include all child types without filtering fingerprint clearance by location
      const filteredTypes = childTypes;
      
      console.log(`Available child types for location ${locationId}: ${filteredTypes.length}`);
      setFilteredChildTypes(filteredTypes);
    } else {
      setFilteredChildTypes([]);
    }
  }, [childTypes, props.locationId, contextConfig?.locationId]);

  // Handle selection change
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <FormControl 
      fullWidth={fullWidth} 
      error={error} 
      required={required}
      disabled={disabled}
      {...rest}
    >
      <InputLabel id="document-type-select-label">{label}</InputLabel>
      <Select
        labelId="document-type-select-label"
        id="document-type-select"
        value={value || ''}
        label={label}
        onChange={handleChange}
      >
        {filteredChildTypes.map((type) => (
          <MenuItem key={type.id} value={type.id}>
            {type.name || type.displayName || type.id}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default DocumentTypeSelector; 