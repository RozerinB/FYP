import surveyFormModel from './SurveyFormModel';
const {
  formField: {
    role,
    consent_form,
    client_id,
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
} = surveyFormModel;

export default {
  [role.name]: '',
  [consent_form.name]: false,
  [client_id.name]: '',
  [usefulness_for_profession.name]:'',
  [usefulness_for_profession_reason.name]:'',
  [usefulness_for_researcher.name]:'',
  [usefulness_for_researcher_reason.name]:'',
  [design_globally.name]: '',
  [design_globally_reason.name]: '',
  [design_for_non_western.name]: '',
  [design_for_non_western_reason.name]: '',
  [design_for_western.name]: '',
  [design_for_western_reason.name]: '',
  [feedback.name]: '',
};
