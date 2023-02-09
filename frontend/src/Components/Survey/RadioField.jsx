import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  Radio,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  RadioGroup
} from '@mui/material';

export default function RadioField(props) {
  const { data, name, label, ...rest } = props;
  const [field, meta] = useField(props);
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  console.log('meta :>> ', meta);
  console.log('error :>> ', error);
console.log('isError :>> ', isError);
  return (
    <FormControl {...rest} error={isError}>   
    <FormLabel>{label}</FormLabel>
    <RadioGroup {...field} {...props}>   
      {data.map((item) => (
        <FormControlLabel
        value={item.label}
        checked={field.value === item.label}
        onChange={field.onChange}
        label={item.label}
        control={<Radio />}
        sx={{fontSize: 2}}
        error={meta.touched && meta.error && true}
      />
      ))}
      </RadioGroup>
    </FormControl>
  );
}
