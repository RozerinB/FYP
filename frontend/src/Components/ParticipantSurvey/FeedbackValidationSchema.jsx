import * as Yup from 'yup';
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
  }
} = evaluationSurveyModel;

export default [
  // Feedback Survey
  Yup.object().shape({
    [correlation.name]: Yup.string()
      .nullable()
      .required(`${correlation.requiredErrorMsg}`),
    // [no_correlation_reason.name]: Yup.string()
    //   .when('correlation', {is: 'No', then: Yup.string()
    //   .required(`${no_correlation_reason.requiredErrorMsg}`)}),
    [correlation_culture.name]: Yup.string()
      .nullable()
      .required(`${correlation_culture.requiredErrorMsg}`),
    // [no_correlation_culture_reason.name]: Yup.string()
    // .when('correlation_culture', {is: 'No', then: Yup.string()
    // .required(`${no_correlation_culture_reason.requiredErrorMsg}`)}),
    [representation_of_user.name]: Yup.string()
      .nullable()
      .required(`${representation_of_user.requiredErrorMsg}`),
    // [no_representation_reason.name]: Yup.string()
    //   .when('representation_of_user', {is: 'No', then: Yup.string()
    //   .required(`${no_representation_reason.requiredErrorMsg}`)}),
    [generalisability.name]: Yup.string()
      .nullable()
      .required(`${generalisability.requiredErrorMsg}`),
    // [no_generalisability_reason.name]: Yup.string()
    //   .when('generalisability', {is: 'No', then: Yup.string()
    //   .required(`${no_generalisability_reason.requiredErrorMsg}`)}),
  }),
];
