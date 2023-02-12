import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  FormControl,
  FormLabel,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

export default function ListField(props) {
  const { data, name, label, ...rest } = props;
  const [meta] = useField(props);
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  return (
    <FormControl {...rest} error={isError}>   
    <FormLabel>{label}</FormLabel>
    <List>
      {data.map((item) => (
          <ListItem >
              <ListItemText primary={item.label}/>
          </ListItem>
        ))}

      </List>
    </FormControl>
  );
}
