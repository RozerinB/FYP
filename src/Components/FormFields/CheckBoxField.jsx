import React from 'react';
import { useField } from 'formik';
import {
    Checkbox,
    FormControlLabel,
    FormControl,
} from '@mui/material';

export default function CheckBoxField(props) {
    const { label, ...rest } = props;
    const [field, meta, helper] = useField(props);
    const { setValue } = helper;
    const isError = meta.value === false;
    function _onChange(e) {
      setValue(e.target.checked);
    }

    return (
    <FormControl {...rest} error={isError}> 
        <FormControlLabel 
        value={field.checked}
        checked={field.checked} 
        control={<Checkbox {...field} onChange={_onChange}  style={{ color: isError ? "red" : undefined }}
        />} 
        label={label}  
        error={isError} 
        style={{ color: isError ? "red" : undefined }}
        />
    </FormControl>
    );
    
  }