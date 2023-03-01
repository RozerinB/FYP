import React from 'react';
import PropTypes from 'prop-types';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText, 
  FormLabel
} from '@mui/material';

function SelectField(props) {
  const { placeholder, label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = error && true;
  
  return (
    <FormControl {...rest} error={isError}>
      <FormLabel> {label} </FormLabel>
      <Select {...field} value={selectedValue ? selectedValue : ''} displayEmpty renderValue={selectedValue !== '' ? undefined : () => placeholder} sx={{color:  selectedValue !== '' ?  'black' : '#AEAEAE' }} >
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value} disabled={item.disabled} >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

SelectField.defaultProps = {
  data: []
};

SelectField.propTypes = {
  data: PropTypes.array.isRequired
};

export default SelectField;
