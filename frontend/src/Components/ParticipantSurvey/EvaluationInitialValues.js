import evaluationSurveyModel from './EvaluationFormModel';
const {
  evaluationFormField: {
    correlation,
    no_correlation_reason,
    correlation_culture,
    no_correlation_culture_reason,
    representation_of_user,
    no_representation_reason,
    generalisability,
    no_generalisability_reason
  }} = evaluationSurveyModel;

  export default {
    [correlation.name]: '',
    [no_correlation_reason.name]: '',
    [correlation_culture.name]: '',
    [no_correlation_culture_reason.name]: '',
    [representation_of_user.name]: '',
    [no_representation_reason.name]: '',
    [generalisability.name]: '',
    [no_generalisability_reason.name]: '',
  };