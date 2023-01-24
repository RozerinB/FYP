import React from 'react'
import Typography from '@mui/material/Typography';
import VerticalLinearStepper from '../Components/Stepper/Stepper';
import "../Components/Survey/Survey.css"
import { Box } from '@mui/system';
import Sidebar from '../Components/Sidebar/Sidebar';

function ParticipantSurvey1() {
  return (
    <div className='survey'>
    <div className='survey-sidebar'>
    <Sidebar />
    </div>
    <div className='survey-stepper'>
      <Typography variant="subtitle1">
        <Box sx={{ fontWeight: 'bold', m: 2 }}> Data Collection </Box>
      </Typography>
      {VerticalLinearStepper([{label:'About you'}, {label:'Technology'}, {label:'Internet'}, {label:'Devices'}, {label:' Design Principles'}, {label:'Culture'}])}
    </div>
    <div className='survey-container'>
      <div className='survey-heading'> 
      <Typography variant="subtitle1">
        <Box sx={{ fontWeight: 'bold', m: 1, p:2 }}> Data Collection </Box>
      </Typography>
      <div className='survey-questions'> 

      </div>
      </div>


        
    </div>
  </div>
  )
}

export default ParticipantSurvey1

 