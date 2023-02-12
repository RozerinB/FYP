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
  }
} = surveyFormModel;

export default {
  [role.name]: '',
  [consent_form.name]: false,
  [client_id.name]: '',
  [usefulness_for_profession]:'',
  [usefulness_for_researcher]:'',
  [design_globally]: '',
  [design_for_non_western]: '',
  [design_for_western]: '',
  [feedback]: '',
};
