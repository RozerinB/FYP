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
  const isError = touched && error && true;
  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  return (
    <FormControl {...rest} error={isError}>
      <FormLabel> {label} </FormLabel>
      <Select {...field} value={selectedValue ? selectedValue : ''} displayEmpty renderValue={selectedValue !== "" ? undefined : () => placeholder} sx={{color: '#AEAEAE'}} >
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value} disabled={item.disabled} >
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {_renderHelperText()}
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
