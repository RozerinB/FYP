import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  Radio,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel
} from '@mui/material';

export default function CheckboxField(props) {
  const { data, name, label, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  function _onChange(e) {
    setValue(e.target.checked);
  }

  return (
    <FormControl {...rest}>   
    <FormLabel>{name}</FormLabel>
      {data.map((item) => (
        <FormControlLabel
        control={
          <Radio
            value={field.checked}
            checked={field.value}
            onChange={_onChange}
            name={item.label}
          />
        }
        label={item.label}
      />
      ))}
      {_renderHelperText()}
    </FormControl>
  );
}
