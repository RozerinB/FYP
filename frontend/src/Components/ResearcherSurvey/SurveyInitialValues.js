import surveyFormModel from './SurveyFormModel';
const {
  formField: {
    role,
    consent_form,
    client_id,
  }
} = surveyFormModel;

export default {
  [role.name]: '',
  [consent_form.name]: false,
  [client_id.name]: '',
};
