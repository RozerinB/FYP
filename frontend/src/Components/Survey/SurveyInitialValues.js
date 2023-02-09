import surveyFormModel from './SurveyFormModel';
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
    design_principles,
  }
} = surveyFormModel;

export default {
  [age.name]: '',
  [gender.name]: '',
  [preferred_writing_language.name]: '',
  [preferred_reading_language.name]: '',
  [country.name]: '',
  [nationality.name]: '',
  [ethnicity.name]: '',
  [text_directionality.name]: '',
  [device_ownership_status.name]: '',
  [device_sharing_status.name]: '',
  [internet_stability.name]: '',
  [broadband_contract.name]: '',
  [age_first_used_technology.name]: '',
  [age_when_first_owned_device.name]: '',
  [device_type_owned.name]: '',
  [device_access.name]: '',
  [competency_level.name]: '',
  [design_principles.name]: {principle1: '', principle2: '', principle3: '', principle4: '', principle5: '', principle6: '', principle7: ''},
};
