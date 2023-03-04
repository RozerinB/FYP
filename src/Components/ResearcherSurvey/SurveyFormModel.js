export default {
    formId: 'surveyForm',
    formField: {
      consent_form: {
        name: 'consent_form',
        label: 'I understand and agree with the points above. I would like to continue with this study and provide the data required.*',
        requiredErrorMsg: 'This field is required'
      },
      usefulness_for_profession: {
        name: 'usefulness_for_profession',
        label: 'How useful is this web application for your profession? (1 being very useful 5 being not useful at all)*'
      },
      usefulness_for_profession_reason: {
        name: 'usefulness_for_profession_reason',
        label: 'If you have answered 5 to the previous question, can you please give further information.'
      },
      usefulness_for_researcher: {
        name: 'usefulness_for_researcher',
        label: 'Do you believe this web application will help your UX research?*'
      },
      usefulness_for_researcher_reason: {
        name: 'usefulness_for_researcher_reason',
        label: 'If you have answered no to the previous question, can you please give further information.'
      },
      design_globally: {
        name: 'design_globally',
        label: 'Do you believe this web application will enable you to design for the world wide population and/or make research easier for you? (Please note that although the data visualizations may not encompass a wide range of countries, please provide your response as if the data included this variety)*'
      },
      design_globally_reason: {
        name: 'design_globally_reason',
        label: 'If you have answered no to the previous question, can you please give further information.'
      },
      design_for_non_western: {
        name: 'design_for_non_western',
        label: 'Do you think this web application will enable you to design for the non-western world? This can include the research you need to do prior to designing. (Please note that although the data visualizations may not encompass a wide range of countries, please provide your response as if the data included this variety)*'
      },
      design_for_non_western_reason: {
        name: 'design_for_non_western_reason',
        label: 'If you have answered no to the previous question, can you please give further information.'
      },
      design_for_western: {
        name:'design_for_western',
        label: 'Do you think this web application will enable you to design for the western world? This can include the research you need to do prior to designing. (Please note that although the data visualizations may not encompass a wide range of countries, please provide your response as if the data included this variety) *'
      },
      design_for_western_reason: {
        name:'design_for_western_reason',
        label: 'If you have answered no to the previous question, can you please give further information.'
      },
      feedback: {
        name: 'feedback',
        label: 'Do you have any additional feedback or comments regarding this web application? If yes, please let me know below'
      },
      country: {
        name: 'country',
        label: 'Select country',
        placeholder: 'Select country'
      }
    }
  };
