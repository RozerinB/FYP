import surveyFormModel from './SurveyFormModel';
const {
  formField: {
    // Data Collection Survey 1
    age,
    gender,
    preferred_writing_language,
    preferred_reading_language,
    country,
    nationality,
    nationality_from_birth,
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
    principle1,
    principle2,
    principle3,
    principle4,
    principle5,
    principle6,
    principle7,
    // Consent Form
    consent_form,
    // Cultural Dimensions
    time_personal_home_life,
    respected_by_superiors,
    good_performance, 
    employment,
    pleasant_people,
    work_interesting,
    consulted_by_superiors,
    desirable_area,
    respected_by_family,
    chances_for_promotion,
    keeping_time_for_fun,
    moderation, 
    service_to_friend,
    thrift,
    nervous_tense,
    happiness,
    prevention_due_to_circumstances,
    state_of_health,
    proud_citizen,
    contradicting_superior,
    good_manager,
    persistent_efforts,
    organization_structure,
    organization_rules,
    education,
    job
  }
} = surveyFormModel;

export default {
  [age.name]: '',
  [gender.name]: '',
  [preferred_writing_language.name]: '',
  [preferred_reading_language.name]: '',
  [country.name]: '',
  [nationality.name]: '',
  [nationality_from_birth.name]: '',
  [ethnicity.name]: '',
  [text_directionality.name]: '',
  [device_ownership_status.name]: '',
  [device_sharing_status.name]: '',
  [internet_stability.name]: '',
  [broadband_contract.name]: '',
  [age_first_used_technology.name]: '',
  [age_when_first_owned_device.name]: '',
  [device_type_owned.name]: [],
  [device_access.name]: [],
  [competency_level.name]: '',
  [design_principles.name]: {principle1: '', principle2: '', principle3: '', principle4: '', principle5: '', principle6: '', principle7: ''},
  [principle1.name]: '',
  [principle2.name]: '',
  [principle3.name]: '',
  [principle4.name]: '',
  [principle5.name]: '',
  [principle6.name]: '',
  [principle7.name]: '',
  [consent_form.name]: false,
  [time_personal_home_life.name]: '',
  [respected_by_superiors.name]: '',
  [good_performance.name]: '',
  [employment.name]: '',
  [pleasant_people.name]: '',
  [work_interesting.name]: '',
  [consulted_by_superiors.name]: '',
  [desirable_area.name]: '',
  [respected_by_family.name]: '',
  [chances_for_promotion.name]: '',
  [keeping_time_for_fun.name]: '',
  [moderation.name]: '',
  [service_to_friend.name]: '',
  [thrift.name]: '',
  [nervous_tense.name]: '',
  [happiness.name]: '',
  [prevention_due_to_circumstances.name]: '',
  [state_of_health.name]: '',
  [proud_citizen.name]: '',
  [contradicting_superior.name]: '',
  [good_manager.name]: '',
  [persistent_efforts.name]: '',
  [organization_structure.name]: '',
  [organization_rules.name]: '',
  [education.name]: '',
  [job.name]: ''
};
