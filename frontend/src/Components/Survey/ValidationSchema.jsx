import * as Yup from 'yup';
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
    deviceOwnership,
    deviceShare,
    internetStability,
    broadbandContract,
    ageForTech,
    ageForDevice, 
    deviceTypeOwnership,
    deviceAccess,
    competency,
    designPrinciples,
  }
} = surveyFormModel;

export default [
  Yup.object().shape({
    [age.name]: Yup.string().required(`${age.requiredErrorMsg}`),
    [gender.name]: Yup.string()
      .nullable()
      .required(`${gender.requiredErrorMsg}`),
    [languageToWrite.name]: Yup.string()
      .nullable()
      .required(`${languageToWrite.requiredErrorMsg}`),
    [languageToRead.name]: Yup.string()
      .nullable()
      .required(`${languageToRead.requiredErrorMsg}`),
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
    [textDirectionality.name]: Yup.string()
      .nullable()
      .required(`${textDirectionality.requiredErrorMsg}`),
    [deviceOwnership.name]: Yup.string()
      .nullable()
      .required(`${deviceOwnership.requiredErrorMsg}`),
    [deviceShare.name]: Yup.string()
      .nullable()
        .required(`${deviceShare.requiredErrorMsg}`),
    [internetStability.name]: Yup.string()
      .nullable()
      .required(`${internetStability.requiredErrorMsg}`),
    [broadbandContract.name]: Yup.string()
      .nullable()
      .required(`${broadbandContract.requiredErrorMsg}`),
    [ageForTech.name]: Yup.string()
      .nullable()
      .required(`${ageForTech.requiredErrorMsg}`),
    [ageForDevice.name]: Yup.string()
      .nullable()
      .required(`${ageForDevice.requiredErrorMsg}`),
    [deviceTypeOwnership.name]: Yup.string()
      .nullable()
      .required(`${deviceTypeOwnership.requiredErrorMsg}`),
    [deviceAccess.name]: Yup.string()
      .nullable()
      .required(`${deviceAccess.requiredErrorMsg}`),
    [competency.name]: Yup.string()
      .nullable()
      .required(`${competency.requiredErrorMsg}`),
    // [principle1.name]: Yup.object()
    //     .shape({
    //     principle1: Yup.string(),
    //     principle2: Yup.string(),
    //     principle3: Yup.string(),
    //     principle4: Yup.string(),
    //     principle5: Yup.string(),
    //   })
    //   .nullable()
    //   .required(`${designPrinciples.requiredErrorMsg}`),
  }),
];
