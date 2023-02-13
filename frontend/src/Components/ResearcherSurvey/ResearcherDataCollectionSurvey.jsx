import React from 'react'
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import RadioField from '../FormFields/RadioField.jsx';
import { scale, yesOrNo } from '../ParticipantSurvey/Questions.js';
import InputField from '../FormFields/InputField.jsx';
import SelectField from '../FormFields/SelectField.jsx';

export default function ResearcherDataCollectionSurvey (props) {
  const {
    formField: {
      usefulness_for_profession,
      usefulness_for_researcher,
      design_globally,
      design_for_non_western,
      design_for_western,
      feedback,
    }
  } = props;

  return (
    <div className='survey-heading'> 
        <Typography variant="h6">
        <Box sx={{ fontWeight: 'bold', m: 1, p:2 }}> Consent Form </Box>
      </Typography>
      <div className='survey-questions'> 
      <Typography variant="h6">
        <Box sx={{ fontWeight: 'bold'}}> Usability Engineering and the importance of the level of exposure to technology </Box>
      </Typography>
      <Grid container spacing={3}> 
        <Grid item xs={12} >
          <RadioField name={usefulness_for_profession.name} label={usefulness_for_profession.label} data = {scale} row={true} fullWidth />
        </Grid>   
        <Grid item xs={12} >
          <SelectField name={usefulness_for_researcher.name} label={usefulness_for_researcher.label} data = {yesOrNo} fullWidth />
        </Grid>
        <Grid item xs={12} >
          <SelectField name={design_globally.name} label={design_globally.label} data={yesOrNo} fullWidth />
        </Grid>    
        <Grid item xs={12} >
          <SelectField name={design_for_non_western.name} label={design_for_non_western.label} data = {yesOrNo} fullWidth />
        </Grid>   
        <Grid item xs={12} >
          <SelectField name={design_for_western.name} label={design_for_western.label} data = {yesOrNo} fullWidth />
        </Grid>   
        <Grid item xs={12} >
          <InputField name={feedback.name} label={feedback.label} fullWidth />
        </Grid>                
        </Grid>  
    </div>
    </div>
  )
}
