import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import { Formik, Form } from 'formik';
import axios from "axios";
import SurveyFormModel from '../Components/Survey/SurveyFormModel';
import SurveyInitialValues from '../Components/Survey/SurveyInitialValues';
import DataCollectionForm from '../Components/Survey/DataCollectionForm.jsx';
import VerticalLinearStepper from '../Components/Stepper/Stepper'
import "../Components/Survey/Survey.css"
import Sidebar from '../Components/Sidebar/Sidebar';
import { v4 as uuidv4 } from 'uuid';
import ValidationSchema from '../Components/Survey/ValidationSchema';

const steps = ['Data Collection', 'Culture Survey (Optional)','Report', 'Feedback', 'Global Data',];

const { formId, formField } = SurveyFormModel;

function renderStepContent(step) {
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
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = ValidationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const isSurvey = activeStep === 0

  function submitForm(values) {
    Object.assign(values.design_principles, {principle1: values.principle1});
    Object.assign(values.design_principles, {principle2: values.principle2});
    Object.assign(values.design_principles, {principle3: values.principle3});
    Object.assign(values.design_principles, {principle4: values.principle4});
    Object.assign(values.design_principles, {principle5: values.principle5});
    Object.assign(values.design_principles, {principle6: values.principle6});
    Object.assign(values.design_principles, {principle7: values.principle7});

    delete values.principle1
    delete values.principle2
    delete values.principle3
    delete values.principle4
    delete values.principle5
    delete values.principle6
    delete values.principle7

    values.client_id = uuidv4();
    console.log('values', values)
    axios
      .post("/api/survey/", values)
    setActiveStep(activeStep + 1);
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
            validationSchema={currentValidationSchema}
            onSubmit={(values) => submitForm(values)}
          >
              <Form id={formId}>
                {renderStepContent(activeStep)}
                <div >
                  <div>
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
