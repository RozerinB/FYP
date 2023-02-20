import React from 'react'
import Typography from '@mui/material/Typography';
import "./Survey.css"
import { Box } from '@mui/system';
import { Grid, TextField } from '@mui/material';
import SelectField from '../FormFields/SelectField.jsx';
import RadioField from '../FormFields/RadioField.jsx';
import { countries, ageList, genders, textDirectionalities, ethnicGroups, nationalities, yesOrNo, noOfDevices, deviceType, competency, languages, allAge } from './Questions';
import DataGridField from '../FormFields/DataGridField.jsx';
import CheckBoxField from '../FormFields/CheckBoxField';

export default function FeedbackForm (props) {
    const {
      evaluationFormField: {
        correlation,
        no_correlation_reason,
        correlation_culture,
        no_correlation_culture_reason,
        representation_of_user,
        no_representation_reason,
        generalisability,
        no_generalisability_reason
      }
    } = props;
  
    console.log(props);
  
    return (
      <div className='survey-heading'> 
          <Typography variant="h6">
          <Box sx={{ fontWeight: 'bold', m: 1, p:2 }}> Evaluation Form </Box>
        </Typography>
        <div className='survey-questions'> 
        <Typography variant="h6">
          <Box sx={{ fontWeight: 'bold'}}> Usability Engineering and the importance of the level of exposure to technology </Box>
        </Typography>
        <Grid container spacing={2}>
        <Grid item xs={12} >
        <RadioField name={correlation.name} label={correlation.label} data = {yesOrNo} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <TextField name={no_correlation_reason.name} label={no_correlation_reason.label} data = {yesOrNo} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <RadioField name={correlation_culture.name} label={correlation_culture.label} data = {yesOrNo} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <TextField name={no_correlation_reason.name} label={no_correlation_reason.label} data = {yesOrNo} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <TextField name={no_correlation_culture_reason.name} label={no_correlation_culture_reason.label} data = {yesOrNo} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <RadioField name={representation_of_user.name} label={representation_of_user.label} data = {yesOrNo} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <TextField name={no_representation_reason.name} label={no_representation_reason.label} data = {yesOrNo} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <RadioField name={generalisability.name} label={generalisability.label} data = {yesOrNo} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <TextField name={no_generalisability_reason.name} label={no_generalisability_reason.label} data = {yesOrNo} fullWidth />
        </Grid>
        </Grid>   
 
      </div>
      </div>
    )
  }
  