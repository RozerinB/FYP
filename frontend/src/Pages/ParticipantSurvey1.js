import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  CircularProgress
} from '@mui/material';
import { Formik, Form } from 'formik';
// import validationSchema from './FormModel/validationSchema';
import SurveyFormModel from '../Components/Survey/SurveyFormModel';
import SurveyInitialValues from '../Components/Survey/SurveyInitialValues';
import AboutYou from '../Components/Survey/AboutYou.jsx';
import VerticalLinearStepper from '../Components/Stepper/Stepper'
import "../Components/Survey/Survey.css"
import Sidebar from '../Components/Sidebar/Sidebar';

const steps = ['About you', 'Technology', 'Devices', 'Design Principles', 'Culture'];

const { formId, formField } = SurveyFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <AboutYou formField={formField} />;
    case 1:
      return <AboutYou formField={formField} />;
    case 2:
      return <AboutYou />;
    default:
      return <div>Not Found</div>;
  }
}

export default function ParticipantSurvey1(props) {
  // const currentValidationSchema = validationSchema[activeStep];
  const [activeStep, setActiveStep] = useState(0);

  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <div className='survey'>
    <div className='survey-sidebar'>
      <Sidebar />
    </div>
      <div className='survey-stepper'> 
      <Typography variant="subtitle1">
        <Box sx={{ fontWeight: 'bold', m: 1, p:2 }}> {props.subtitle} </Box>
      </Typography>
      <VerticalLinearStepper activeStep={activeStep} steps={steps} />
      </div>
        {/* {activeStep === steps.length ? (
          <success />
        ) : ( */}
        <div className='survey-container'>
          <Formik
            initialValues={SurveyInitialValues}
            // validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div >
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} >
                      Back
                    </Button>
                  )}
                  <div >
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                     
                    >
                      {isLastStep ? 'Place order' : 'Next'}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        {/* )} */}
        </div>
      </div>

  );
}
