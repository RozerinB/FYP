import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import { Formik, Form } from 'formik';
import axios from "axios";
import SurveyFormModel from '../Components/ParticipantSurvey/SurveyFormModel';
import SurveyInitialValues from '../Components/ParticipantSurvey/SurveyInitialValues';
import DataCollectionForm from '../Components/ParticipantSurvey/DataCollectionForm.jsx';
import VerticalLinearStepper from '../Components/Stepper/Stepper'
import "../Components/ParticipantSurvey/Survey.css"
import Sidebar from '../Components/Sidebar/Sidebar';
import { v4 as uuidv4 } from 'uuid';
import ValidationSchema from '../Components/ParticipantSurvey/ValidationSchema';
import PIS from '../Components/ParticipantSurvey/PIS';
import ConsentForm from '../Components/ParticipantSurvey/ConsentForm.jsx';
import CulturalDimensions from '../Components/ParticipantSurvey/CulturalDimensionsForm';

const steps = ['Participant Information Sheet', 'Consent Form', 'Data Collection', 'Culture Survey (Optional)','Report', 'Feedback', 'Global Data',];

const { formId, formField } = SurveyFormModel;

function renderStepContent(step) {
  switch (step) {
    case 0:
      return <PIS />;
    case 1:
      return <ConsentForm formField={formField}/>;
    case 2:
      return <DataCollectionForm formField={formField} />;
    case 3: 
      return <CulturalDimensions formField={formField}/>;
    default:
      return <div>Not Found</div>;
  }
}

export default function DataCollection(props) {

  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = activeStep > 0 ? ValidationSchema[activeStep] : null;
  const isLastStep = activeStep === steps.length - 1;
  const isSurvey =  activeStep === 3;
  const isConsentForm = activeStep === 1;
  console.log('activeStep :>> ', activeStep);

  function submitForm(values) {
    console.log('values if survey :>> ', values);
    if(isSurvey){
      Object.assign(values.design_principles, {principle1: values.principle1});
      Object.assign(values.design_principles, {principle2: values.principle2});
      Object.assign(values.design_principles, {principle3: values.principle3});
      Object.assign(values.design_principles, {principle4: values.principle4});
      Object.assign(values.design_principles, {principle5: values.principle5});
      Object.assign(values.design_principles, {principle6: values.principle6});
      Object.assign(values.design_principles, {principle7: values.principle7});

      values.role = "participant"
      values.client_id = uuidv4();

      axios
        .post("/api/survey/", values)
        setActiveStep(activeStep + 1);
    }
    else {
      console.log('values else :>> ', values);
      setActiveStep(activeStep + 1);
    }
  }

  return (
    <div className='survey'>
    <div className='survey-sidebar'>
      <Sidebar/>
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
            onSubmit={(values) => submitForm(values) }
          >
              <Form id={formId}>
                {renderStepContent(activeStep)}
                <div >
                  <div>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{float:'right', m: 1}}
                    >
                      {isSurvey  || isConsentForm ? 'Submit' : 'Next'}
                    </Button>
                  </div>
                </div>
              </Form>
          </Formik>
        </div>
      </div>

  );
}
