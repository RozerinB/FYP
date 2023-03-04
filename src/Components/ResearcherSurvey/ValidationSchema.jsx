import * as Yup from 'yup';
import surveyFormModel from './SurveyFormModel';
const {
  formField: {
    consent_form,
    usefulness_for_profession,
    usefulness_for_profession_reason,
    usefulness_for_researcher,
    usefulness_for_researcher_reason,
    design_globally,
    design_globally_reason,
    design_for_non_western,
    design_for_non_western_reason,
    design_for_western,
    design_for_western_reason,
    feedback,
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

  //Global Data
  Yup.object().shape({}),
  
  // Evaluation Form
    Yup.object().shape({
      [usefulness_for_profession.name]: Yup.string()
        .nullable()
        .required(`${usefulness_for_profession.requiredErrorMsg}`),
      [usefulness_for_profession_reason.name]: Yup.string()
        .when('usefulness_for_profession', {is: 'No', then: Yup.string()
        .required(`${usefulness_for_profession_reason.requiredErrorMsg}`)}),
      [usefulness_for_researcher.name]: Yup.string()
        .nullable()
        .required(`${usefulness_for_researcher.requiredErrorMsg}`),
      [usefulness_for_researcher_reason.name]: Yup.string()
      .when('usefulness_for_researcher', {is: 'No', then: Yup.string()
      .required(`${usefulness_for_researcher_reason.requiredErrorMsg}`)}),
      [design_globally.name]: Yup.string()
        .nullable()
        .required(`${design_globally.requiredErrorMsg}`),
      [design_globally_reason.name]: Yup.string()
        .when('design_globally', {is: 'No', then: Yup.string()
        .required(`${design_globally_reason.requiredErrorMsg}`)}),
      [design_for_non_western.name]: Yup.string()
        .nullable()
        .required(`${design_for_non_western.requiredErrorMsg}`),
      [design_for_non_western_reason.name]: Yup.string()
        .when('design_for_non_western', {is: 'No', then: Yup.string()
        .required(`${design_for_non_western_reason.requiredErrorMsg}`)}),
      [design_for_western.name]: Yup.string()
        .nullable()
        .required(`${design_for_western.requiredErrorMsg}`),
      [design_for_western_reason.name]: Yup.string()
        .when('design_for_western', {is: 'No', then: Yup.string()
        .required(`${design_for_western_reason.requiredErrorMsg}`)}),
    }),
];
