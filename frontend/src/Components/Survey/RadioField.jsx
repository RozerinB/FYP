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

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  return (
    <FormControl {...rest}>   
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
      />
      ))}
      </RadioGroup>
      {_renderHelperText()}
    </FormControl>
  );
}
