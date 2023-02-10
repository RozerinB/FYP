import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import TextField from '@mui/material/TextField';
import {
  FormControl,
  FormLabel
} from '@mui/material';

export default function InputField(props) {
  const { placeholder, label, errorText, ...rest } = props;
  const [field, meta] = useField(props);

  return (
    <FormControl {...rest}>   
    <FormLabel>{label}</FormLabel>
    <TextField
      placeholder={placeholder}
      type="text"
      error={meta.touched && meta.error && true}
      {...field}
      {...rest}
    />
    </FormControl>
  );
}
