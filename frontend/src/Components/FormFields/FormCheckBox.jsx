import React from 'react';
import { useField, useFormikContext } from 'formik';
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  FormGroup,
} from '@mui/material';

export default function FormCheckBox(props) {
  const { data, label, name, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const isError = meta.touched && Boolean(meta.error);

  const { setFieldValue } = useFormikContext();

  const handleChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      helper.setValue([...field.value, value]);
    } else {
      helper.setValue(field.value.filter((v) => v !== value));
    }
  };

  return (
    <FormControl {...rest} error={isError}>
      <FormLabel>{label}</FormLabel>
      <FormGroup>
        {data.map((option) => (
          <FormControlLabel
            key={option.name}
            control={
              <Checkbox
                name={option.label}
                value={option.label}
                checked={field.value.includes(option.label)}
                onChange={handleChange}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}
