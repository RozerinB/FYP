export default {
    formId: 'evaluationSurveyForm',
    evaluationFormField: {
      correlation: {
        name: 'correlation',
        label: 'Do you believe the results shown correlates with what you have shared?*',
        placeholder: 'Select an option',
        requiredErrorMsg: 'This field is required',
      },
      no_correlation_reason: {
        name: 'no_correlation_reason',
        label: 'If you answered no can you please give further information',
        placeholder: '',
        requiredErrorMsg: 'This field is required'
      },
      correlation_culture: {
        name: 'correlation_culture',
        label: 'Do you believe the visualised data is an accurate representation of your culture?*',
        placeholder: 'Select an option',
        requiredErrorMsg: 'This field is required'
      },
      no_correlation_culture_reason: {
        name: 'no_correlation_culture_reason',
        label: 'If you answered no can you please give further information',
        placeholder: '',
        requiredErrorMsg: 'This field is required'
      },
      representation_of_user: {
        name: 'representation_of_user',
        label: 'Do you believe the visualised data is an accurate representation of you as a technology user?*',
        placeholder: 'Select an option',
        requiredErrorMsg: 'This field is required'
      },
      no_representation_reason: {
        name: 'no_representation_reason',
        label: 'If you answered no can you please give further information',
        placeholder: '',
        requiredErrorMsg: 'This field is required'
      },
      generalisability: {
        name: 'generalisability',
        label: 'Do you believe the visualised data you provided can be generalised for other technology users close to you?*',
        placeholder: 'Select an option',
        requiredErrorMsg: 'This field is required'
      },
      no_generalisability_reason: {
        name: 'no_generalisability_reason',
        label: 'If you answered no can you please give further information',
        placeholder: '',
        requiredErrorMsg: 'This field is required'
      },
    },
  };
  