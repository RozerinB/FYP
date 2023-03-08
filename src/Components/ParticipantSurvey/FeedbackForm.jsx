import React from 'react'
import Typography from '@mui/material/Typography';
import "./Survey.css"
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import RadioField from '../FormFields/RadioField.jsx';
import { yesOrNo  } from './Questions';
import InputField from '../FormFields/InputField';

export default function FeedbackForm(props) {
    const {
      evaluationFormField: {
        correlation,
        no_correlation_reason,
        correlation_culture,
        no_correlation_culture_reason,
        correlation_ethnicity,
        no_correlation_ethnicity_reason,
        correlation_age,
        no_correlation_age_reason,
        correlation_nationality,
        no_correlation_nationality_reason,
        representation_of_user,
        no_representation_reason,
        generalisability,
        no_generalisability_reason,
        feedback
      }
    } = props;
  
    return (
      <div className='survey-heading'> 
        <Typography variant="h6">
          <Box sx={{ fontWeight: 'bold', m: 1, p:2 }}> Evaluation Form </Box>
        </Typography>
        <Typography variant="caption">
          <Box sx={{ pl:5 }}> *Please note that if you close the tab, all the data you have inputted will be lost </Box>
        </Typography>
        <div className='survey-questions'> 
        <Typography variant="h6">
          <Box sx={{ fontWeight: 'bold'}}> Usability Engineering and the importance of the level of exposure to technology </Box>
        </Typography>
        <Grid container spacing={2}>
        <Grid item xs={12} >
        <RadioField name={correlation.name} label={correlation.label} data = {yesOrNo} placeholder={correlation.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <InputField name={no_correlation_reason.name} label={no_correlation_reason.label} placeholder={no_correlation_reason.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <RadioField name={correlation_culture.name} label={correlation_culture.label} data = {yesOrNo} placeholder={correlation_culture.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <InputField name={no_correlation_culture_reason.name} label={no_correlation_culture_reason.label} placeholder={no_correlation_culture_reason.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <RadioField name={correlation_ethnicity.name} label={correlation_ethnicity.label} data = {yesOrNo} placeholder={correlation_ethnicity.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <InputField name={no_correlation_ethnicity_reason.name} label={no_correlation_ethnicity_reason.label} placeholder={no_correlation_ethnicity_reason.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <RadioField name={correlation_age.name} label={correlation_age.label} data = {yesOrNo} placeholder={correlation_age.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <InputField name={no_correlation_age_reason.name} label={no_correlation_age_reason.label} placeholder={no_correlation_age_reason.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <RadioField name={correlation_nationality.name} label={correlation_nationality.label} data = {yesOrNo} placeholder={correlation_nationality.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <InputField name={no_correlation_nationality_reason.name} label={no_correlation_nationality_reason.label} placeholder={no_correlation_nationality_reason.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <RadioField name={representation_of_user.name} label={representation_of_user.label} data = {yesOrNo} placeholder={representation_of_user.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <InputField name={no_representation_reason.name} label={no_representation_reason.label} placeholder={no_representation_reason.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <RadioField name={generalisability.name} label={generalisability.label} data = {yesOrNo} placeholder={generalisability.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <InputField name={no_generalisability_reason.name} label={no_generalisability_reason.label}  placeholder={no_generalisability_reason.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <InputField name={feedback.name} label={feedback.label}  placeholder={feedback.placeholder} fullWidth />
        </Grid>
        </Grid>   
 
      </div>
      </div>
    )
  }
  