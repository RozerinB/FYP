export default {
    formId: 'surveyForm',
    formField: {
      age: {
        name: 'age',
        label: 'How old are you?*',
        placeholder: 'Select age',
        requiredErrorMsg: 'This field is required',
      },
      gender: {
        name: 'gender',
        label: 'To which gender identity do you identify the most with?',
        placeholder: 'Select gender'
      },
      preferred_writing_language: {
        name: 'preferred_writing_language',
        label: 'What language do you prefer to write in?*',
        placeholder: 'Select language',
        requiredErrorMsg: 'This field is required'
      },
      preferred_reading_language: {
        name: 'preferred_reading_language',
        label: 'What language do you prefer to read in?*',
        placeholder: 'Select language',
        requiredErrorMsg: 'This field is required'
      },
      country: {
        name: 'country',
        label: 'Which country do you live in?*',
        placeholder: 'Select country',
        requiredErrorMsg: 'This field is required'
      },
      nationality: {
        name: 'nationality',
        label: 'What is your nationality?*',
        placeholder: 'Select nationality',
        requiredErrorMsg: 'This field is required'
      },
      ethnicity: {
        name: 'ethnicity',
        label: 'What is your ethnicity?*',
        placeholder: 'Select ethnicity',
        requiredErrorMsg: 'This field is required'
      },
      text_directionality : {
        name: 'text_directionality',
        label: 'What is your preferred text directionality?*',
        placeholder: 'Select text directionality',
        requiredErrorMsg: 'This field is required'
      },
      internet_stability: {
        name: 'internet_stability',
        label: 'Do you have a stable internet connection?*',
        placeholder: '',
        requiredErrorMsg: 'This field is required'
      },
      broadband_contract: {
        name: 'broadband_contract',
        label: 'Do you have an active broadband contract for your internet access?*',
        placeholder: '',
        requiredErrorMsg: 'This field is required'
      },
      age_first_used_technology: {
        name: 'age_first_used_technology',
        label: 'At what age did you start using technology?*',
        placeholder: 'Select age',
        requiredErrorMsg: 'This field is required'
      },
      competency_level: {
        name: 'competency_level',
        label: 'How would you describe your technical competency_level?*',
        placeholder: '',
        requiredErrorMsg: 'This field is required'
      },
      age_when_first_owned_device: {
        name: 'age_when_first_owned_device',
        label: 'At what age did you own your first device?*',
        placeholder: 'Select age',
        requiredErrorMsg: 'This field is required'
      },
      device_ownership_status: {
        name: 'device_ownership_status',
        label: 'How many devices do you own?*',
        placeholder: '',
        requiredErrorMsg: 'This field is required'
      },
      device_sharing_status: {
        name: 'device_sharing_status',
        label: 'Do you have to share your devices?*',
        placeholder: '',
        requiredErrorMsg: 'This field is required'
      },
      device_type_owned : {
        name: 'device_type_owned',
        label: 'If you own a device which of the following device types do you own?*',
        placeholder: '',
        requiredErrorMsg: 'This field is required'
      },
      device_access: {
        name: 'device_access',
        label: 'If you have access to a device which of the following devices do you have access to?*',
        placeholder: '',
        requiredErrorMsg: 'This field is required'
      },
      design_principles: {
        name: 'design_principles',
        label:'There are 7 different types of Universal Design Principles, which are explained below. Can you rank them in order of importance to you? You can select the same ranking twice. 1 being the most important and 7 being the least.',
        requiredErrorMsg: 'This field is required',
        principleLabel: [
          {
              name: "principle1",
              label: "Principle 1: Equitable Use -  The design is useful and marketable to people with diverse abilities.",
              guideline: ""
            },
          {
              name: "principle2",
              label: "Principle 2: Flexibility in Use - The design accommodates a wide range of individual preferences and abilities.",
              guideline: ""
            },
           {
              name: "principle3",
              label: "Principle 3: Simple and Intuitive Use - Use of the design is easy to understand, regardless of the user’s experience, knowledge, language skills, or current concentration level.",
              guideline: ""
            },
           {
              name: "principle4",
              label: "Principle 4: Perceptible Information - The design communicates necessary information effectively to the user, regardless of ambient conditions or the user’s sensory abilities.",
              guideline: ""
            },
          {
              name: "principle5",
              label: "Principle 5: Tolerance for Error - The design minimizes hazards and the adverse consequences of accidental or unintended actions.",
              guideline: ""
            },
          {
              name: "principle6",
              label: "Principle 6: Low Physical Effort - The design can be used efficiently and comfortably and with a minimum of fatigue.",
              guideline: ""
            },
          {
              name: "principle7",
              label: "Principle 7: Size and Space for Approach and Use - Appropriate size and space are provided for approach, reach, manipulation, and use regardless of user’s body size, posture, or mobility.",
              guideline: ""
            },
          ]
      }

      
    }
  };
  