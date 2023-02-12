export default {
    formId: 'surveyForm',
    formField: {
      role: {
        name: 'role',
        placeholder: 'Select type of job',
      },
      consent_form: {
        name: 'consent_form',
        label: 'I understand and agree with the points above. I would like to continue with this study and provide the data required.*',
        requiredErrorMsg: 'This field is required'
      },
      client_id: {
        name: 'client_id',
      },
      usefulness_for_profession: {
        name: "usefulness_for_profession",
        label: "How useful is this web application for your profession?*"
      },
      usefulness_for_researcher: {
        name: 'usefulness_for_researcher',
        label: 'Do you believe this web application will help your UX research?*'
      },
      design_globally: {
        name: 'design_globally',
        label: 'Do you believe this web application will enable you to design for the world wide population?*'
      },
      design_for_non_western: {
        name: 'design_for_non_western',
        label: 'Do you think this web application will enable you to design for the non-western world?*'
      },
      design_for_western: {
        name:'design_for_western',
        label: 'Do you think this web application will enable you to design for the western world?*'
      },
      feedback: {
        name: 'feedback',
        label: 'Do you have any additional feedback or comments regarding this web application? If yes, please let me know below'
      }
    }
  };
