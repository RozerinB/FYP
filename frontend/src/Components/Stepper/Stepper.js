import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function HorizontalNonLinearStepper(steps) {
  const [activeStep, setActiveStep] = React.useState(0);

  const totalSteps = () => {
    return steps.length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  console.log('isLastStep(', isLastStep())
  const handleNext = () => {
    const newActiveStep = activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep} sx={{margin: '20px'}}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 , margin: '20px'}}>
              Section {activeStep + 1} : 
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {!isLastStep() ? ( 
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                    Next
                </Button> 
              ) : (
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                    Submit
                </Button>)
              
            }
              

             
            </Box>
          </React.Fragment>
      </div>
    </Box>
  );
}
