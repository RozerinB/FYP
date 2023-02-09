import * as React from "react";
import {
  Radio,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  RadioGroup
} from '@mui/material';
import RadioField from "./RadioField";
import { at } from 'lodash';
import { useField } from 'formik';

export let ranking = [];

for (let i = 1; i <= 7; i++) {
    ranking.push({ value: i.toString() , label: i.toString() });
}
export default function DataGridField(props) {
  const {label, principleLabel } = props;
  const [meta,field] = useField(props);
  console.log('field.value data grid', field.value.principle1)
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  return (
    <FormControl error={isError}> 
    <FormLabel > {label } </FormLabel>
    {principleLabel.map((item) => (
      <RadioField
      name={item.name}
      value={field.value[item.name]}
      label={item.label}
      data={ranking}
      fullWidth   
      sx={{m: 1}}
      row={true}
    />
    ))}
      </FormControl>
  )
}
