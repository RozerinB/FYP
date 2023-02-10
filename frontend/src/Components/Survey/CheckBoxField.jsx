import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import {
    Checkbox,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';

export default function CheckboxField(props) {
    const { name, label,  data ,...rest} = props;
    const [field, meta, helper] = useField(props);
    const [touched, error] = at(meta, 'touched', 'error');
     const isError = touched && error && true;
    const [checked, setChecked] = React.useState([0]);
    console.log(field)

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  let ifChecked = checked.length === data.length + 1 ;
  ifChecked === true ? field.value = true : field.value = false;
  
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {data.map((value) => {
            const labelId = `checkbox-list-label-${value.id}`;
            return (
              <ListItem
                key={value.id}
                disablePadding
              >
                <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      value={value.label}
                      onChange={handleToggle(value)}
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      error={meta.touched && meta.error && true}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={value.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      );
    }