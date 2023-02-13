import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
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
      {props.activeStep === props.steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you're finished</Typography>
        </Paper>
      )}
    </Box>
    )}