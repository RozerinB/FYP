import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  CircularProgress
} from '@mui/material';
import { Formik, Form } from 'formik';
import axios from "axios";
// import validationSchema from './FormModel/validationSchema';
import SurveyFormModel from '../Components/Survey/SurveyFormModel';
import SurveyInitialValues from '../Components/Survey/SurveyInitialValues';
import DataCollectionForm from '../Components/Survey/DataCollectionForm.jsx';
import VerticalLinearStepper from '../Components/Stepper/Stepper'
import "../Components/Survey/Survey.css"
import Sidebar from '../Components/Sidebar/Sidebar';

const steps = ['Survey', 'Report', 'Feedback', 'Global Data',];

const { formId, formField } = SurveyFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <DataCollectionForm formField={formField} />;
    case 1:
      return <DataCollectionForm formField={formField} />;
    case 2:
      return <DataCollectionForm formField={formField} />;
    case 3: 
      return <DataCollectionForm formField={formField}/>;
    default:
      return <div>Not Found</div>;
  }
}

export default function DataCollection(props) {
  // const currentValidationSchema = validationSchema[activeStep];
  const [activeStep, setActiveStep] = useState(0);

  const isLastStep = activeStep === steps.length - 1;
  const isSurvey = activeStep === 0

  function submitForm(values) {
    axios
      .post("/api/survey/", values)
    setActiveStep(activeStep + 1);
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
            onSubmit={(values) => submitForm(values)}
          >
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
                      // disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{float:'right', m: 1}}
                    >
                      {isSurvey ? 'Submit' : 'Next'}
                    </Button>
                  </div>
                </div>
              </Form>
          </Formik>
        </div>
      </div>

  );
}
