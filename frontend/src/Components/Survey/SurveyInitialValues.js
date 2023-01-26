import surveyFormModel from './SurveyFormModel';
const {
  formField: {
    age,
    gender,
    languageToWrite,
    languageToRead,
    country,
    nationality,
    ethnicity,
    textDirectionality,
    // deviceOwnership,
    // deviceShare,
    // internetStability,
    // broadbandContract,
    // ageForTech,
    // ageForDevice, 
    // deviceTypeOwnership,
    // deviceAccess,
    // competency,
    // designPrinciples,
  }
} = surveyFormModel;

export default {
  [age.name]: '',
  [gender.name]: '',
  [languageToWrite.name]: '',
  [languageToRead.name]: '',
  [country.name]: '',
  [nationality.name]: '',
  [ethnicity.name]: '',
  [textDirectionality.name]: '',
  // [deviceOwnership.name]: '',
  // [deviceShare.name]: '',
  // [internetStability.name]: '',
  // [broadbandContract.name]: '',
  // [ageForTech.name]: '',
  // [ageForDevice.name]: '',
  // [deviceTypeOwnership.name]: '',
  // [deviceAccess.name]: '',
  // [competency.name]: '',
  // [designPrinciples.name]: '',
};
