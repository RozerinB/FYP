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
import FeedbackForm from '../Components/ParticipantSurvey/FeedbackForm';
import EvaluationFormModel from '../Components/ParticipantSurvey/EvaluationFormModel';
import GlobalData from '../Components/ResearcherSurvey/GlobalData';
import Success from './Success';
import EvaluationInitialValues from '../Components/ParticipantSurvey/EvaluationInitialValues';

const steps = ['Participant Information Sheet', 'Consent Form', 'Data Collection', 'Culture Survey (Optional)','Data Visualisation', 'Feedback',];

const { formId, formField } = SurveyFormModel;
const { evaluationFormId, evaluationFormField } = EvaluationFormModel;

function renderStepContent(step) {
  switch (step) {
    case 0:
      return <PIS/>
    case 1:
      return <ConsentForm formField={formField}/>;
    case 2:
      return <DataCollectionForm formField={formField} />;
    case 3: 
       return <CulturalDimensions formField={formField}/>;
    case 4: 
      return <GlobalData formField={formField}/>;
    case 5:
      return <FeedbackForm evaluationFormField={evaluationFormField} />;
    case 6: 
      return <Success/>;
    default:
      return <div>Not Found</div>;
  }
}

export default function DataCollection(props) {
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === 6;
  const isSurvey =  activeStep === 3;
  const isConsentForm = activeStep === 1;
  const isFeedback = activeStep === 5;
  const currentValidationSchema = ValidationSchema[activeStep];

  function submitForm(values) {
    if (isSurvey) {
      Object.assign(values.design_principles, { principle1: values.principle1 });
      Object.assign(values.design_principles, { principle2: values.principle2 });
      Object.assign(values.design_principles, { principle3: values.principle3 });
      Object.assign(values.design_principles, { principle4: values.principle4 });
      Object.assign(values.design_principles, { principle5: values.principle5 });
      Object.assign(values.design_principles, { principle6: values.principle6 });
      Object.assign(values.design_principles, { principle7: values.principle7 });
  
      values.role = 'participant';
      values.client_id = uuidv4();
  
      axios.post('/api/survey/', values);
      setActiveStep(activeStep + 1);
    } else if (isFeedback) {
      axios.post('/api/participant-evaluation/', values);
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
    }
  }

  function handleBack() {
    setActiveStep(activeStep - 1);
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
        <div className='survey-container'>
          <Formik
            initialValues={isFeedback? EvaluationInitialValues : SurveyInitialValues}
            validationSchema={currentValidationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values) => submitForm(values)}
          >
              <Form id={isFeedback ? evaluationFormId : formId}>
                {renderStepContent(activeStep)}
                <div className="button-container"> 
                  <div className="button"> 
                    {isFeedback && (
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
                  <div className="button">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{float:'right', m: 1, display: isLastStep ? 'none' : 'block'}}
                    >
                      {isSurvey || isFeedback || isConsentForm ? 'Submit' :'Next'}
                    </Button>
                  </div>
                </div>
              </Form>
          </Formik>
        </div>
    </div>
  )};