import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import { Formik, Form } from 'formik';
import axios from "axios";
import SurveyFormModel from '../Components/ResearcherSurvey/SurveyFormModel';
import SurveyInitialValues from '../Components/ResearcherSurvey/SurveyInitialValues';
import VerticalLinearStepper from '../Components/Stepper/Stepper'
import "../Components/ParticipantSurvey/Survey.css"
import Sidebar from '../Components/Sidebar/Sidebar';
import { v4 as uuidv4 } from 'uuid';
import ValidationSchema from '../Components/ResearcherSurvey/ValidationSchema';
import PIS from '../Components/ResearcherSurvey/PIS';
import ConsentForm from '../Components/ResearcherSurvey/ConsentForm.jsx';
import ResearcherDataCollectionSurvey from '../Components/ResearcherSurvey/ResearcherDataCollectionSurvey';
import GlobalData from '../Components/ResearcherSurvey/GlobalData';
import Success from './Success';
import cookie from "react-cookies";

const steps = ['Participant Information Sheet', 'Consent Form', 'Data Visualisation (Global Data)', 'Evaluation Survey'];

const { formId, formField } = SurveyFormModel;

function renderStepContent(step) {
  switch (step) {
    case 0:
      return <PIS />;
    case 1:
      return <ConsentForm formField={formField}/>;
    case 2:
      return <GlobalData formField={formField} />; 
    case 3: 
      return <ResearcherDataCollectionSurvey formField={formField} />; 
    case 4: 
      return <Success/>;
    default:
      return <div>Not Found</div>;
  }
}

export default function ResearcherDataCollection(props) {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = activeStep > 0 ? ValidationSchema[activeStep] : null;
  const isEvaluation =  activeStep === 3;
  const isConsentForm = activeStep === 1;

  const headers = {
    'X-CSRFToken': cookie.load('csrftoken')
  }

  function submitForm(values) {
    if(isEvaluation){
      values.client_id = uuidv4();
      values.role = "researcher";
      axios
        .post("/api/evaluation/", values, {headers: headers})
        setActiveStep(activeStep + 1);
    }
    else {
      setActiveStep(activeStep + 1);
    }
  }

  function handleBack() {
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
        <div className='survey-container'>
          <Formik
            initialValues={SurveyInitialValues}
            validationSchema={currentValidationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values) => submitForm(values)}
          >
              <Form id={formId}>
                {renderStepContent(activeStep)}
                <div className="button-container"> 
                  <div className="button"> 
                    {isEvaluation && (
                        <Button  
                          type="submit"
                          variant="outlined"
                          color="primary" 
                          onClick={handleBack} 
                          sx={{m: 1}}
                          >
                          Back
                        </Button>
                      )}
                  </div>
                  <div>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{float:'right', m: 1}}
                    >
                      {isEvaluation  || isConsentForm ? 'Submit' : 'Next'}
                    </Button>
                  </div>
                </div>
              </Form>
          </Formik>
        </div>
      </div>

  );
}
