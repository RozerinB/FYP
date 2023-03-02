import * as Yup from 'yup';
import surveyFormModel from './SurveyFormModel';
import evaluationSurveyModel from './EvaluationFormModel';

const {
  formField: {
    age,
    gender,
    preferred_writing_language,
    preferred_reading_language,
    country,
    nationality,
    ethnicity,
    text_directionality ,
    device_ownership_status,
    device_sharing_status,
    internet_stability,
    broadband_contract,
    age_first_used_technology,
    age_when_first_owned_device, 
    device_type_owned ,
    device_access,
    competency_level,
    principle1,
    principle2,
    principle3,
    principle4,
    principle5,
    principle6,
    principle7,
    consent_form,
  }
} = surveyFormModel

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
  //PIS
  Yup.object().shape({}),

  //Consent form
  Yup.object().shape({
    [consent_form.name]: Yup.bool()
    .nullable()
    .required(`${consent_form.requiredErrorMsg}`)
    .oneOf([true],`${consent_form.requiredErrorMsg}`),
    }),

  // Data collection Survey 1
  Yup.object().shape({
    [age.name]: Yup.string()
      .nullable()
      .required(`${age.requiredErrorMsg}`),
    [gender.name]: Yup.string()
      .nullable()
      .required(`${gender.requiredErrorMsg}`),
    [preferred_writing_language.name]: Yup.string()
      .nullable()
      .required(`${preferred_writing_language.requiredErrorMsg}`),
    [preferred_reading_language.name]: Yup.string()
      .nullable()
      .required(`${preferred_reading_language.requiredErrorMsg}`),
    [country.name]: Yup.string()
      .nullable()
      .required(`${country.requiredErrorMsg}`),
    [nationality.name]: Yup.string()
      .nullable()
      .required(`${nationality.requiredErrorMsg}`),
    [ethnicity.name]: Yup.string()
      .nullable()
      .required(`${ethnicity.requiredErrorMsg}`),
    [nationality.name]: Yup.string()
      .nullable()
      .required(`${nationality.requiredErrorMsg}`),
    [text_directionality.name]: Yup.string()
      .nullable()
      .required(`${text_directionality.requiredErrorMsg}`),
    [device_ownership_status.name]: Yup.string()
      .nullable()
      .required(`${device_ownership_status.requiredErrorMsg}`),
    [device_sharing_status.name]: Yup.string()
      .nullable()
        .required(`${device_sharing_status.requiredErrorMsg}`),
    [internet_stability.name]: Yup.string()
      .nullable()
      .required(`${internet_stability.requiredErrorMsg}`),
    [broadband_contract.name]: Yup.string()
      .nullable()
      .required(`${broadband_contract.requiredErrorMsg}`),
    [age_first_used_technology.name]: Yup.string()
      .nullable()
      .required(`${age_first_used_technology.requiredErrorMsg}`),
    [age_when_first_owned_device.name]: Yup.string()
      .nullable()
      .required(`${age_when_first_owned_device.requiredErrorMsg}`),
    [device_type_owned.name]: Yup.array()
      .min(1)
      .required(`${device_type_owned.requiredErrorMsg}`),
    [device_access.name]: Yup.array()
      .min(1)
      .required(`${device_access.requiredErrorMsg}`),
    [competency_level.name]: Yup.string()
      .nullable()
      .required(`${competency_level.requiredErrorMsg}`),
    [principle1.name]: Yup.string()
      .nullable()
      .required(`${principle1.requiredErrorMsg}`),
    [principle2.name]: Yup.string()
      .nullable()
      .required(`${principle2.requiredErrorMsg}`),
    [principle3.name]: Yup.string()
      .nullable()
      .required(`${principle3.requiredErrorMsg}`),
    [principle4.name]: Yup.string()
      .nullable()
      .required(`${principle4.requiredErrorMsg}`),
    [principle5.name]: Yup.string()
      .nullable()
      .required(`${principle5.requiredErrorMsg}`),
    [principle6.name]: Yup.string()
      .nullable()
      .required(`${principle6.requiredErrorMsg}`), 
    [principle7.name]: Yup.string()
      .nullable()
      .required(`${principle7.requiredErrorMsg}`),
  }),
  Yup.object().shape({}),
  Yup.object().shape({}),
  Yup.object().shape({
    [correlation.name]: Yup.string()
      .nullable()
      .required(`${correlation.requiredErrorMsg}`),
    [no_correlation_reason.name]: Yup.string()
      .when('correlation', {is: 'No', then: Yup.string()
      .required(`${no_correlation_reason.requiredErrorMsg}`)}),
    [correlation_culture.name]: Yup.string()
      .nullable()
      .required(`${correlation_culture.requiredErrorMsg}`),
    [no_correlation_culture_reason.name]: Yup.string()
    .when('correlation_culture', {is: 'No', then: Yup.string()
    .required(`${no_correlation_culture_reason.requiredErrorMsg}`)}),
    [representation_of_user.name]: Yup.string()
      .nullable()
      .required(`${representation_of_user.requiredErrorMsg}`),
    [no_representation_reason.name]: Yup.string()
      .when('representation_of_user', {is: 'No', then: Yup.string()
      .required(`${no_representation_reason.requiredErrorMsg}`)}),
    [generalisability.name]: Yup.string()
      .nullable()
      .required(`${generalisability.requiredErrorMsg}`),
    [no_generalisability_reason.name]: Yup.string()
      .when('generalisability', {is: 'No', then: Yup.string()
      .required(`${no_generalisability_reason.requiredErrorMsg}`)}),
  }),
];
