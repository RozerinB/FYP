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
import { useState } from 'react';

export default function RadioField(props) {
  const { data, name, label, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }
  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
        control={
          <Radio />
        }
      />
      ))}
      </RadioGroup>
      {_renderHelperText()}
    </FormControl>
  );
}
