export const labels = ['Principle1', 'Principle2', 'Principle3', 'Principle4', 'Principle5', 'Principle6', 'Principle7'];
export const competencyScatterLabels = ['Fundamental', 'Novice', 'Intermediate', 'Advanced' ,'Expert']

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
      acc[curr[element] === '0' ? 'no' : 'yes']++;
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

export function filteredDataForElements (data, element1, element2) {
  const filteredData = data.map(obj => ({
    x: obj[element1],
    y: obj[element2],
  })); 
  return filteredData;
}
