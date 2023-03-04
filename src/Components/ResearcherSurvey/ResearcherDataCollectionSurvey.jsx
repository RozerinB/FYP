import React from 'react'
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import RadioField from '../FormFields/RadioField.jsx';
import { scale, yesOrNo } from '../ParticipantSurvey/Questions.js';
import InputField from '../FormFields/InputField.jsx';

export default function ResearcherDataCollectionSurvey (props) {
  const {
    formField: {
      usefulness_for_profession,
      usefulness_for_profession_reason,
      usefulness_for_researcher,
      usefulness_for_researcher_reason,
      design_globally,
      design_globally_reason,
      design_for_non_western,
      design_for_non_western_reason,
      design_for_western,
      design_for_western_reason,
      feedback,
    }
  } = props;

  return (
    <div className='survey-heading'> 
      <Typography variant="h6">
        <Box sx={{ fontWeight: 'bold', m: 1, p:2 }}> Evaluation Survey </Box>
      </Typography>
      <Typography variant="caption">
        <Box sx={{ pl:5 }}> *Please note that if you close the tab, all the data you have inputted will be lost </Box>
      </Typography>
      <div className='survey-questions'> 
      <Typography variant="h6" sx={{mb: 1}}>
        <Box sx={{ fontWeight: 'bold'}}> Usability Engineering and the importance of the level of exposure to technology </Box>
      </Typography>
      <Grid container spacing={3}> 
        <Grid item xs={12} >
          <RadioField name={usefulness_for_profession.name} label={usefulness_for_profession.label} data={scale} row={true} fullWidth />
        </Grid>   
        <Grid item xs={12} >
        <InputField name={usefulness_for_profession_reason.name} label={usefulness_for_profession_reason.label} placeholder={usefulness_for_profession_reason.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
          <RadioField name={usefulness_for_researcher.name} label={usefulness_for_researcher.label} data = {yesOrNo} fullWidth />
        </Grid>
        <Grid item xs={12} >
        <InputField name={usefulness_for_researcher_reason.name} label={usefulness_for_researcher_reason.label} placeholder={usefulness_for_researcher_reason.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
          <RadioField name={design_globally.name} label={design_globally.label} data={yesOrNo} fullWidth />
        </Grid>    
        <Grid item xs={12} >
        <InputField name={design_globally_reason.name} label={design_globally_reason.label} placeholder={design_globally_reason.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
          <RadioField name={design_for_non_western.name} label={design_for_non_western.label} data = {yesOrNo} fullWidth />
        </Grid>  
        <Grid item xs={12} >
        <InputField name={design_for_non_western_reason.name} label={design_for_non_western_reason.label} placeholder={design_for_non_western_reason.placeholder} fullWidth />
        </Grid> 
        <Grid item xs={12} >
          <RadioField name={design_for_western.name} label={design_for_western.label} data = {yesOrNo} fullWidth />
        </Grid>   
        <Grid item xs={12} >
        <InputField name={design_for_western_reason.name} label={design_for_western_reason.label} placeholder={design_for_western_reason.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
          <InputField name={feedback.name} label={feedback.label} fullWidth />
        </Grid>                
        </Grid>  
    </div>
    </div>
  )
}
