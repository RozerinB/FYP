import * as Yup from 'yup';
import surveyFormModel from './SurveyFormModel';
const {
  formField: {
    consent_form,
  }
} = surveyFormModel

export default [
  //PIS
  Yup.object().shape({}),

  //Consent form
  Yup.object().shape({
    [consent_form.name]: Yup.bool()
    .nullable()
    .required(`${consent_form.requiredErrorMsg}`)
    .oneOf([true],`${consent_form.requiredErrorMsg}`),
    }),
    
];
