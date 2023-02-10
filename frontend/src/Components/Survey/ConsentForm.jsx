import React from 'react'
import Typography from '@mui/material/Typography';
import "./Survey.css"
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckBoxField from './CheckBoxField.jsx';
import { Grid } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
  
const items = [
    {
        id: 1,
        name: 'I have read the Participant Information Sheet.',
    },
    {
        id: 2,
        name: 'I am over the age of 18.',       
    },
    {
        id: 3,
        name: 'I understand that no personal identifying data is collected in this study.',        
    },
    {
        id: 4,
        name: 'I understand that some fields will be required to be answered within the survey such as questions about your age, gender, country you live in, nationality, ethnicity etc. ',       
    },
    {
        id: 5,
        name: 'I know that once I have submitted my answers, I am unable to withdraw my data from the study.',      
    },
    {
        id: 6,
        name: 'I agree that my data can be anonymised, stored, and used in future research in line with Brunel University’s data retention policies.',   
    },
    {
        id: 7,
        name: 'I am aware that there are a maximum number of three surveys and a minimum number of one survey.', 
    },
    {
        id: 8,
        name: 'I understand that I can request this document alongside the Participant Information sheet in my preferred language.',
    },
    {
        id: 9,
        name: 'I have had the opportunity to ask questions regarding this study and received answers to my questions via email.',
    },
    {
        id: 10,
        name: 'I agree to take part in this study.',
    },  
]

export default function ConsentForm (props) {
  const {
    formField: {
     consent_form
    }
  } = props;

  // isFormValid = checked.length === items.length + 1;

  return (
    <div className='survey-heading'> 
        <Typography variant="h6">
        <Box sx={{ fontWeight: 'bold', m: 1, p:2 }}> Consent Form </Box>
      </Typography>
      <div className='survey-questions'> 
      <Typography variant="h6">
        <Box sx={{ fontWeight: 'bold'}}> Usability Engineering and the importance of the level of exposure to technology </Box>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {items.map((item) => (
            <List>
              <ListItem>
              <ListItemIcon>
                <CircleIcon sx={{fontSize: 'small', color: 'black'}} />
              </ListItemIcon>
                <ListItemText
                  primary={item.name}
                />
              </ListItem>
          </List>
          ))}
        </Grid>
        </Grid>
      <Grid container spacing={3}> 
        <Grid item xs={12} >
          <CheckBoxField name={consent_form.name} label={consent_form.label} fullWidth />
          </Grid>   
        </Grid>  
    </div>
    </div>
  )
}
