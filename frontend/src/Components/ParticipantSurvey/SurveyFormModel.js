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
      nationality_from_birth:{
        name: 'nationality_from_birth',
        label: 'What was your nationality at birth (if different)?',
        placeholder: 'Select your nationality at birth',
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
        label: 'How would you describe your technical competency level?*',
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
      },
      principle1: {
        name: "principle1",
        label: "Principle 1: Equitable Use -  The design is useful and marketable to people with diverse abilities.",
        guideline: "" ,
        requiredErrorMsg: 'This field is required'
      },
      principle2: {
        name: "principle2",
        label: "Principle 2: Flexibility in Use - The design accommodates a wide range of individual preferences and abilities.",
        guideline: "",
        requiredErrorMsg: 'This field is required'
      },
      principle3: {
        name: "principle3",
        label: "Principle 3: Simple and Intuitive Use - Use of the design is easy to understand, regardless of the user’s experience, knowledge, language skills, or current concentration level.",
        guideline: "",
        requiredErrorMsg: 'This field is required'
      },
      principle4: {
        name: "principle4",
        label: "Principle 4: Perceptible Information - The design communicates necessary information effectively to the user, regardless of ambient conditions or the user’s sensory abilities.",
        guideline: "",
        requiredErrorMsg: 'This field is required'
      },
      principle5: {
        name: "principle5",
        label: "Principle 5: Tolerance for Error - The design minimizes hazards and the adverse consequences of accidental or unintended actions.",
        guideline: "",
        requiredErrorMsg: 'This field is required'
      },
      principle6: {
        name: "principle6",
        label: "Principle 6: Low Physical Effort - The design can be used efficiently and comfortably and with a minimum of fatigue.",
        guideline: "",
        requiredErrorMsg: 'This field is required'
      },
      principle7: {
        name: "principle7",
        label: "Principle 7: Size and Space for Approach and Use - Appropriate size and space are provided for approach, reach, manipulation, and use regardless of user’s body size, posture, or mobility.",
        guideline: "",
        requiredErrorMsg: 'This field is required'
      },
      consent_form: {
        name: 'consent_form',
        label: 'I understand and agree with the points above. I would like to continue with this study and provide the data required.*',
        requiredErrorMsg: 'This field is required'
      },
      time_personal_home_life: {
        name: 'time_personal_home_life',
        label: 'have sufficient time for your personal or home life',
      },
      respected_by_superiors: {
        name: 'respected_by_superiors',
        label: ' have a boss (direct superior) you can respect',
      },
      good_performance: {
        name: 'good_performance',
        label: 'get recognition for good performance',
      },
      employment: {
        name: 'employment',
        label: 'have security of employment',
      },
      pleasant_people: {
        name: 'pleasant_people',
        label: 'have pleasant people to work with',
      },
      work_interesting: {
        name: 'work_interesting',
        label: 'do work that is interesting ',
      },
      consulted_by_superiors: {
        name: 'consulted_by_superiors',
        label: 'be consulted by your boss in decisions involving your work ',
      },
      desirable_area: {
        name: 'desirable_area',
        label: 'live in a desirable area',
      },
      respected_by_family: {
        name: 'respected_by_family',
        label: 'have a job respected by your family and friends',
      },
      chances_for_promotion: {
        name: 'chances_for_promotion',
        label: 'have chances for promotion',
      },
      keeping_time_for_fun: {
        name: 'keeping_time_for_fun',
        label: 'keeping time free for fun',
      },
      moderation: {
        name: 'moderation',
        label: 'moderation: having few desires',
      },
      service_to_friend: {
        name: 'service_to_friend',
        label: 'doing a service to a friend ',
      },
      thrift: {
        name: 'thrift',
        label: 'thrift (not spending more than needed)',
      },
      nervous_tense: {
        name: 'nervous_tense',
        placeholder: 'Please select',
        label: 'How often do you feel nervous or tense?',
      },
      happiness: {
        name: 'happiness',
        placeholder: 'Please select',
        label: 'Are you a happy person?',
      },
      prevention_due_to_circumstances: {
        name: 'prevention_due_to_circumstances',
        placeholder: 'Please select',
        label: 'Do other people or circumstances ever prevent you from doing what you really want to?',
      },
      state_of_health: {
        name: 'state_of_health',
        placeholder: 'Please select',
        label: ' All in all, how would you describe your state of health these days?',
      },
      proud_citizen: {
        name: 'How proud are you to be a citizen of your country?',
        placeholder: 'Please select',
        label: 'How proud are you to be a citizen of your country?',
      },
      contradicting_superior: {
        name: 'contradicting_superior',
        placeholder: 'Please select',
        label: 'How often, in your experience, are subordinates afraid to contradict their boss (or students their teacher?)',
      }, 
      good_manager: {
        name: 'good_manager',
        label: 'One can be a good manager without having a precise answer to every question that a subordinate may raise about his or her work ',
      },
      persistent_efforts: {
        name: 'persistent_efforts',
        label: 'Persistent efforts are the surest way to results ',
      },
      organization_structure: {
        name: 'organization_structure',
        label: 'An organization structure in which certain subordinates have two bosses should be avoided at all cost ',
      },
      organization_rules: {
        name: 'organization_rules',
        label: 'A companys or organizations rules should not be broken - not even when the employee thinks breaking the rule would be in the organizations best interest ',
      },
      education: {
        name: 'education',
        placeholder: 'Years of formal education',
        label: 'How many years of formal school education (or their equivalent) did you complete (starting with primary school)?',
      },
      job: {
        name: 'job',
        placeholder: 'Select type of job',
        label: 'If you have or have had a paid job, what kind of job is it / was it?',
      }
    }
  };
  