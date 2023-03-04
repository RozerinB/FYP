import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from '@mui/material';

export default function RadioField(props) {
  const { data, name, label, ...rest } = props;
  const [field, meta] = useField(props);
  const [touched, error] = at(meta, 'touched', 'error');
  const isError =  (meta.error && !meta.touched) || (touched && error);

  console.log('field.value', field.value)
  return (
    <FormControl {...rest} error={isError}>   
    <FormLabel>{label}</FormLabel>
    <RadioGroup {...field} {...props}>   
      {data.map((item) => (
        <FormControlLabel
        key={item}
        value={item.value}
        checked={field.value === item.value}
        onChange={field.onChange}
        label={item.label}
        control={<Radio />}
        sx={{fontSize: 2}}
        error={meta.touched && meta.error }
        row={props.row}
      />
      ))}
      </RadioGroup>
    </FormControl>
  );
}
