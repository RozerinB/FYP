import surveyFormModel from './SurveyFormModel';
const {
  formField: {
    role,
    consent_form,
    client_id,
    usefulness_for_profession,
    usefulness_for_researcher,
    design_globally,
    design_for_non_western,
    design_for_western,
    feedback,
    country
  }
} = surveyFormModel;

export default {
  [role.name]: '',
  [consent_form.name]: false,
  [client_id.name]: '',
  [usefulness_for_profession.name]:'',
  [usefulness_for_researcher.name]:'',
  [design_globally.name]: '',
  [design_for_non_western.name]: '',
  [design_for_western.name]: '',
  [feedback.name]: '',
  [country.name]: ''
};
