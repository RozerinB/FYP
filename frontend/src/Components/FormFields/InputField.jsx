import React from 'react';
import { useField } from 'formik';
import TextField from '@mui/material/TextField';
import { at } from 'lodash';
import {
  FormControl,
  FormLabel
} from '@mui/material';

export default function InputField(props) {
  const { placeholder, label, errorText, ...rest } = props;
  const [field, meta] = useField(props);
  const [touched, error] = at(meta, 'touched', 'error');
  const isError =  meta.error && !meta.touched || touched && error;

  return (
    <FormControl {...rest} error= {isError}>   
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
