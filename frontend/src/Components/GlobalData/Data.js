// Overall highest rated principles
export function UDP(principles) {
    let countMap = new Map();
    let maxCount = 0;
    let maxCountKeys = [];

    // loop through each object in array
    for (let obj of principles) {
    // loop through each key in the object
    for (let key in obj) {
        if (obj[key] === 1) {
        let count = countMap.get(key) || 0; // get current count for the key or default to 0
        count++; // increment count
        countMap.set(key, count); // update count in map
        if (count > maxCount) { // update max count and keys if necessary
            maxCount = count;
            maxCountKeys = [key];
        } else if (count === maxCount) { // add key to max count keys if it has the same count
            maxCountKeys.push(key);
        }
        }
    }
    }
    return maxCountKeys;
}

export function UDPbyGender(participants,principleName,principleValue) {
    const filteredParticipants = participants.filter(user => user.design_principles[principleName] === principleValue);

    const userCountByGender = filteredParticipants.reduce((acc, user) => {
    acc[user.gender] = (acc[user.gender] || 0) + 1;
    return acc;
    }, {});

    const totalParticipants = filteredParticipants.length;
    const percentByGender = {};
    for (const gender in userCountByGender) {
    const count = userCountByGender[gender];
    const percent = count / totalParticipants * 100;
    percentByGender[gender] = percent.toFixed(2) ;
    }
    return percentByGender;
}

export function calculateCompetencyCount(data) {
    const total = data.length;
    const fundamentalCount = data.filter((item) => item.competency_level === '1').length;
    const noviceCount = data.filter((item) => item.competency_level === '2').length;
    const intermediateCount = data.filter((item) => item.competency_level === '3').length;
    const advancedCount = data.filter((item) => item.competency_level === '4').length;
    const expertCount = data.filter((item) => item.competency_level === '5').length;

    return {fundamentalCount, noviceCount, intermediateCount, advancedCount, expertCount}
  }

 export function calculateTextDirectionalityPercentage(data) {
    const total = data.length;
    const leftToRightCount = data.filter((item) => item.text_directionality === 'right-to-left').length;
    const RightToLeftCount = data.filter((item) => item.text_directionality === 'left-to-right').length;
  
    const leftToRightPercentage= leftToRightCount > 0 ? (leftToRightCount / total) * 100 : 0;
    const rightToLeftPercentage = RightToLeftCount > 0 ? (RightToLeftCount / total) * 100 : 0;

    return { leftToRightPercentage, rightToLeftPercentage};
  }

  export function calculateInternetAccessPercentage(data) {
    const total = data.length;
    const internetCount = data.filter((item) => item.internet_stability === 'Yes').length;
    const noInternetCount = data.filter((item) => item.internet_stability === 'No').length;

    const internetPercentage= internetCount > 0 ? (internetCount / total) * 100 : 0;
    const noInternetPercentage = noInternetCount > 0 ? (noInternetCount / total) * 100 : 0;

    return { internetPercentage, noInternetPercentage};
  }

  export function calculateDeviceSharingPercentage(data) {
    const total = data.length;
    const deviceSharing = data.filter((item) => item.device_sharing_status === 'Yes').length;
    const noDeviceSharing = data.filter((item) => item.device_sharing_status === 'No').length;

    const deviceSharingPercentage= deviceSharing > 0 ? (deviceSharing / total) * 100 : 0;
    const noDeviceSharingPercentage = noDeviceSharing > 0 ? (noDeviceSharing / total) * 100 : 0;

    return { deviceSharingPercentage, noDeviceSharingPercentage};
  }

  export function competencyByElementInData(data, element) {
    const competencyByElement = {};
    for (const participant of data) {
      const competencyLevel = participant.competency_level;
      const participant_element = participant[element];
      if (!competencyByElement[participant_element]) {
        competencyByElement[participant_element] = {
          Fundamental: 0,
          Novice: 0,
          Intermediate: 0,
          Advanced: 0,
          Expert: 0
        };
      }
    competencyByElement[participant_element][competencyLevel]++;
    }
    return competencyByElement
  }

  export function textDirectionalityByElementInData(data, element) {
    const textDirectionalityByElement = {};
    for (const participant of data) {
      const competencyLevel = participant.text_directionality;
      const participant_element = participant[element];
      if (!textDirectionalityByElement[participant_element]) {
        textDirectionalityByElement[participant_element] = {
          leftToRight: 0,
          rightToLeft: 0,
        };
      }
      textDirectionalityByElement[participant_element][competencyLevel]++;
    }
    return textDirectionalityByElement
  }

  export function designPrincipleByElementInData(data, element) {
    const designPrincipleByElement = {};
  for (const participant of data) {
    const designPrinciple = participant.design_principles;
    const participant_element = participant[element];
    if (!designPrincipleByElement[participant_element]) {
      designPrincipleByElement[participant_element] = {
        principle1: 0,
        principle2: 0,
        principle3: 0,
        principle4: 0,
        principle5: 0,
        principle6: 0,
        principle7: 0,
      };
    }
    Object.keys(designPrinciple).forEach((key) => {
      if (designPrinciple[key] === 1) {
        designPrincipleByElement[participant_element][key]++;
      }
    });
  }
  return designPrincipleByElement
  }

  export function technologyByElementInData(data, constant, element) {
    const technologyByElement = {};
  for (const participant of data) {
    const technologies = participant[constant];
    const participant_element = participant[element];
    if (!technologyByElement[participant_element]) {
      technologyByElement[participant_element] = {
        Computer: 0,
        Laptop:0,
        Tablet: 0,
        Smartphone: 0,
        Nonsmartphone:0,
        Other: 0,
      };
    }
    for (const technology of technologies) {
      technologyByElement[participant_element][technology]++;
      }
    }
  return technologyByElement
  }


  export function deviceStatus(data, element) {
    const counts = data.reduce((acc, curr) => {
      if(element === 'device_sharing') {
      acc[curr[element] === 'Yes' ? 'yes' : 'no']++;
      return acc;
    }
    else if(element === 'device_ownership_status' ){
      acc[curr[element] === 'None' ? 'no' : 'yes']++;
      return acc;
    }}, { yes: 0, no: 0 }); 
  
    
    const elementYesCount = counts.yes;
    const elementNoCount = counts.no;

    return { elementYesCount, elementNoCount };
  }

  export function ByElementInDataYesOrNo(data, constant, element) {
    const competencyByElement = {};
    for (const participant of data) {
      const competencyLevel = participant[constant];
      const participant_element = participant[element];
      if (!competencyByElement[participant_element]) {
        competencyByElement[participant_element] = {
          Yes: 0,
          No: 0,
        };
      }
    competencyByElement[participant_element][competencyLevel]++;
    }
    return competencyByElement
  }

export function downloadExcel() {
    fetch('/export-to-excel/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'cultural-dimensions.xlsx');
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }


export function languageByCountryInData(data){
// Extract language and country data from input
const languages = data.map(d => d.preferred_writing_language);
const countries = data.map(d => d.country);

// Get unique language and country values
const uniqueLanguages = [...new Set(languages)];
const uniqueCountries = [...new Set(countries)];

// Initialize data object with empty arrays for each language
const dataObject = {};
uniqueLanguages.forEach(lang => {
    dataObject[lang] = new Array(uniqueCountries.length).fill(0);
});

// Fill in data for each language and country
data.forEach(d => {
    const langIndex = uniqueLanguages.indexOf(d.preferred_writing_language);
    const countryIndex = uniqueCountries.indexOf(d.country);
    dataObject[d.preferred_writing_language][countryIndex]++;
});
return dataObject
}