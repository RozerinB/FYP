import React from 'react'
import Typography from '@mui/material/Typography';
import "../Components/Survey/Survey.css"
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
  
const items = [
    {
        id: 1,
        name: 'I have read the Participant Information Sheet',
        checked: false
    },
    {
        id: 2,
        name: 'I am over the age of 18',
        checked: false
    },
    {
        id: 3,
        name: 'I understand that no personal identifying data is collected in this study',
        checked: false
    },
    {
        id: 4,
        name: 'I understand that some fields will be required to be answered within the survey such as questions about your age, gender, country you live in, nationality, ethnicity etc. ',
        checked: false
    },
    {
        id: 5,
        name: 'I know that once I have submitted my answers, I am unable to withdraw my data from the study',
        checked: false
    },
    {
        id: 6,
        name: 'I agree that my data can be anonymised, stored, and used in future research in line with Brunel University’s data retention policies',
        checked: false
    },
    {
        id: 7,
        name: 'I am aware that there are a maximum number of three surveys and a minimum number of one survey.',
        checked: false
    },
    {
        id: 8,
        name: 'I understand that I can request this document alongside the Participant Information sheet in my preferred language.',
        checked: false
    },
    {
        id: 8,
        name: 'I have had the opportunity to ask questions regarding this study and received answers to my questions via email/phone',
        checked: false
    },
    {
        id: 8,
        name: 'I agree to take part in this study',
        checked: false
    },
    
]
const ConsentForm = () => {
  const [checked, setChecked] = React.useState([0]);

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

  return (
    <div className='survey-heading'> 
        <Typography variant="h6">
        <Box sx={{ fontWeight: 'bold', m: 1, p:2 }}> Consent Form </Box>
      </Typography>
      <div className='survey-questions'> 
      <Typography variant="h6">
        <Box sx={{ fontWeight: 'bold'}}> Usability Engineering and the importance of the level of exposure to technology </Box>
      </Typography>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {items.map((value) => {
        const labelId = `checkbox-list-label-${value.id}`;
        return (
          <ListItem
            key={value}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    </div>
    </div>
  )
}

export default ConsentForm