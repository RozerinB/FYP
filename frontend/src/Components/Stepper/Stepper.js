import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import "./Stepper.css"

export default function VerticalLinearStepper(props) {
  return (
    <Box className = "stepper">
      <Stepper sx={{ margin: '20px'}} activeStep={props.activeStep} orientation="vertical" >
      {props.steps.map(label => (
          <Step key={label} >
            <StepLabel >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
    )}