import React , {useEffect, useState, useRef} from 'react'
import Typography from '@mui/material/Typography';
import { Box, Button, Grid, Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
import './index.css'
import axios from 'axios';
import {competencyByElementInData, ByElementInDataYesOrNo, designPrincipleByElementInData, downloadExcel, technologyByElementInData, deviceStatus, textDirectionalityByElementInData } from '../GlobalData/Data';
import SelectField from '../FormFields/SelectField';
import countryList from 'react-select-country-list';
import { useField } from 'formik';
import { ethnicGroups, genders, languages, nationalities } from '../ParticipantSurvey/Questions';
import Chart from 'chart.js/dist/Chart.js'
import DownloadIcon from '@mui/icons-material/Download';

export const labels = ['Principle1', 'Principle2', 'Principle3', 'Principle4', 'Principle5', 'Principle6', 'Principle7'];
export const competencyScatterLabels = ['Fundamental', 'Novice', 'Intermediate', 'Advanced' ,'Expert']
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const GlobalData = (props) => {
  const {
    formField: {
     country
    }
  } = props;
  const [field] = useField(props);
  const { value: selectedValue } = field;
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get('/api/survey/');
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const allCountriesSubmitted = data.map(function(country) {
    const label = countryList().getLabel(country.country)
    return label;
  });
 
  const countryArray = [];
  allCountriesSubmitted.forEach(country => {
    if (!countryArray.find(obj => obj.label === country)) {
      countryArray.push({label: country, value: countryList().getValue(country)});
    }
  });

  function filteredDataForElements (data, element1, element2) {
    const filteredData = data.map(obj => ({
      x: obj[element1],
      y: obj[element2],
    })); 
    return filteredData;
  }

  // Selected Location Specific Data
  const selectedCountry = selectedValue.country;
  const dataForCountrySelected = data.filter((country) => country.country === selectedCountry);

  // Competency, Design Principles 
  const competencyByCountry = competencyByElementInData(data, 'country');
  const competencyByEthnicity = competencyByElementInData(data, 'ethnicity');
  const competencyByNationality = competencyByElementInData(data, 'nationality');
  const designPrinciplesByCountry = designPrincipleByElementInData(data, 'country');
  const designPrinciplesByEthnicity = designPrincipleByElementInData(data, 'ethnicity');
  const designPrinciplesByNationality = designPrincipleByElementInData(data, 'nationality');
  const designPrinciplesByCompetency = designPrincipleByElementInData(data, 'competency_level');
  const designPrinciplesByGender = designPrincipleByElementInData(data, 'gender');
  const competencyCountries= Object.keys(competencyByCountry);
  const competencyEthnicity = Object.keys(competencyByEthnicity);
  const competencyNationality = Object.keys(competencyByNationality);
  const genderList = Object.keys(designPrinciplesByGender);
  const chartCountryLabel = countryArray.filter(country => competencyCountries.includes(country.value)).map(country => country.label);
  const chartEthnicityLabel = ethnicGroups.filter(ethnicity => competencyEthnicity.includes(ethnicity.value)).map(ethnicity => ethnicity.label);
  const chartNationalityLabel = nationalities.filter(nationality => competencyNationality.includes(nationality.value)).map(nationality => nationality.label);
  const chartGenderLabel = genders.filter(gender => genderList.includes(gender.value)).map(gender => gender.label);
  const competencyLabel = ['Fundamental', 'Novice', 'Intermediate', 'Advanced' ,'Expert']

  //Internet Page
  const internetAccessByCountry = ByElementInDataYesOrNo(data,'internet_stability','country');
  const internetAccessByEthnicity = ByElementInDataYesOrNo(data,'internet_stability','ethnicity');
  const internetAccessByNationality = ByElementInDataYesOrNo(data,'internet_stability','nationality');
  const internetAccessByGender = ByElementInDataYesOrNo(data,'internet_stability','gender');
  const broadbandByCountry = ByElementInDataYesOrNo(data,'broadband_contract','country');
  const broadbandByEthnicity = ByElementInDataYesOrNo(data,'broadband_contract','ethnicity');
  const broadbandByNationality = ByElementInDataYesOrNo(data,'broadband_contract','nationality');
  const broadbandByGender= ByElementInDataYesOrNo(data,'broadband_contract','gender');

  // Cultural Dimensions
  const textDirectionalityByCountry = textDirectionalityByElementInData(data,'country') 
  const textDirectionalityByEthnicity = textDirectionalityByElementInData(data,'ethnicity')
  const textDirectionalityByNationality = textDirectionalityByElementInData(data,'nationality') 
  
  // Technology Page
  const technologyDeviceByCountry = technologyByElementInData(data, 'device_type_owned', 'country');
  const technologyDeviceByNationality = technologyByElementInData(data, 'device_type_owned', 'nationality');
  const technologyDeviceByEthnicity = technologyByElementInData(data, 'device_type_owned', 'ethnicity');
  const technologyDeviceByAge = technologyByElementInData(data,'device_type_owned','age');
  const technologyDeviceByGender = technologyByElementInData(data,'device_type_owned','gender');
  const technologyDeviceAccessByCountry = technologyByElementInData(data,'device_access','country');
  const technologyDeviceAccessByNationality = technologyByElementInData(data, 'device_access', 'nationality');
  const technologyDeviceAccessByEthnicity = technologyByElementInData(data, 'device_access', 'ethnicity');
  const technologyDeviceAccessByGender = technologyByElementInData(data,'device_access','gender');
  const technologyAgeList = Object.keys(technologyDeviceByAge);
  const technologySharing = deviceStatus(data, 'device_sharing');
  const technologyOwnership = deviceStatus(data, 'device_ownership_status');
  const ageUsedTechVsCompetency= filteredDataForElements(data , 'age_first_used_technology', 'competency_level')
  const ageFirstDeviceVsCompetency = filteredDataForElements(data , 'age_when_first_owned_device', 'competency_level')
  const deviceOwnershipVsCompetency = filteredDataForElements(data , 'device_ownership_status', 'competency_level')

  const ageUsedTechVsCompetencyInSelectedCountry = selectedCountry ? filteredDataForElements(dataForCountrySelected , 'age_first_used_technology', 'competency_level') : []
  const ageFirstDeviceVsCompetencyInSelectedCountry = selectedCountry ? filteredDataForElements(dataForCountrySelected , 'age_when_first_owned_device', 'competency_level') : []
  const deviceOwnershipVsCompetencyInSelectedCountry = selectedCountry ? filteredDataForElements(dataForCountrySelected , 'device_ownership_status', 'competency_level'): []


  const technologyDeviceBySelectedCountry = technologyByElementInData(dataForCountrySelected, 'device_type_owned', 'country');
  const technologyDeviceByNationalityInSelectedCountry = technologyByElementInData(dataForCountrySelected, 'device_type_owned', 'nationality');
  const technologyDeviceByEthnicityInSelectedCountry = technologyByElementInData(dataForCountrySelected, 'device_type_owned', 'ethnicity');
  const technologyDeviceByAgeInSelectedCountry = technologyByElementInData(dataForCountrySelected,'device_type_owned','age');
  const technologyDeviceByGenderInSelectedCountry = technologyByElementInData(dataForCountrySelected,'device_type_owned','gender');
  const technologyDeviceAccessBySelectedCountry = technologyByElementInData(dataForCountrySelected,'device_access','country');
  const technologyDeviceAccessByNationalityInSelectedCountry = technologyByElementInData(dataForCountrySelected, 'device_access', 'nationality');
  const technologyDeviceAccessByEthnicityInSelectedCountry = technologyByElementInData(dataForCountrySelected, 'device_access', 'ethnicity');
  const technologyDeviceAccessByGenderInSelectedCountry = technologyByElementInData(dataForCountrySelected,'device_access','gender');
  const technologyAgeListInSelectedCountry = Object.keys(technologyDeviceByAgeInSelectedCountry);
  const technologySharingInSelectedCountry = deviceStatus(dataForCountrySelected, 'device_sharing');
  const technologyOwnershipInSelectedCountry = deviceStatus(dataForCountrySelected, 'device_ownership_status');

  const competencyBySelectedCountry =  selectedCountry ? competencyByElementInData(dataForCountrySelected, 'country') : [];
  const competencyByEthnicityInSelectedCountry = selectedCountry ?  competencyByElementInData(dataForCountrySelected, 'ethnicity') : [];
  const competencyByNationalityInSelectedCountry = selectedCountry ? competencyByElementInData(dataForCountrySelected, 'nationality') : [];
  const competencyByGenderInSelectedCountry = selectedCountry ? competencyByElementInData(dataForCountrySelected, 'gender') : [];
  const designPrinciplesBySelectedCountry = selectedCountry ? designPrincipleByElementInData(dataForCountrySelected, 'country') : [];
  const designPrinciplesByEthnicityInSelectedCountry =  selectedCountry ? designPrincipleByElementInData(dataForCountrySelected, 'ethnicity') : [];
  const designPrinciplesByNationalityInSelectedCountry = selectedCountry ? designPrincipleByElementInData(dataForCountrySelected, 'nationality') : [];
  const designPrinciplesByCompetencyInSelectedCountry = selectedCountry ? designPrincipleByElementInData(dataForCountrySelected, 'competency_level') : [];
  const designPrinciplesByGenderInSelectedCountry = selectedCountry ? designPrincipleByElementInData(dataForCountrySelected, 'gender') :  [];
  const countriesSelected= Object.keys(competencyBySelectedCountry);
  const nationalitiesInSelectedCountry = Object.keys(competencyByNationalityInSelectedCountry);
  const ethnicityInSelectedCountry = Object.keys(competencyByEthnicityInSelectedCountry);
  const genderInSelectedCountry = Object.keys(competencyByGenderInSelectedCountry);
  const nationalitiesInSelectedCountryLabel = nationalities.filter(nationality => nationalitiesInSelectedCountry.includes(nationality.value)).map(nationality => nationality.label);
  const genderInSelectedCountryLabel = genders.filter(gender => genderInSelectedCountry.includes(gender.value)).map(gender => gender.label);
  const selectedCountryLabel = countryArray.filter(country => countriesSelected.includes(country.value)).map(country => country.label);
  const chartEthnicityInSelectedCountryLabel = ethnicGroups.filter(ethnicity => ethnicityInSelectedCountry.includes(ethnicity.value)).map(ethnicity => ethnicity.label);
  const textDirectionalityBySelectedCountry = textDirectionalityByElementInData(data,'country') 
  const textDirectionalityByEthnicityInSelectedCountry = textDirectionalityByElementInData(data,'ethnicity')
  const textDirectionalityByNationalityInSelectedCountry = textDirectionalityByElementInData(data,'nationality') 

  const internetAccessBySelectedCountry = ByElementInDataYesOrNo(dataForCountrySelected,'internet_stability','country');
  const internetAccessByEthnicityInSelectedCountry = ByElementInDataYesOrNo(dataForCountrySelected,'internet_stability','ethnicity');
  const internetAccessByNationalityInSelectedCountry = ByElementInDataYesOrNo(dataForCountrySelected,'internet_stability','nationality');
  const internetAccessByGenderInSelectedCountry = ByElementInDataYesOrNo(dataForCountrySelected,'internet_stability','gender');
  const broadbandByCountryInSelectedCountry = ByElementInDataYesOrNo(dataForCountrySelected,'broadband_contract','country');
  const broadbandByEthnicityInSelectedCountry = ByElementInDataYesOrNo(dataForCountrySelected,'broadband_contract','ethnicity');
  const broadbandByNationalityInSelectedCountry = ByElementInDataYesOrNo(dataForCountrySelected,'broadband_contract','nationality');
  const broadbandByGenderInSelectedCountry = ByElementInDataYesOrNo(dataForCountrySelected,'broadband_contract','gender');

  function createCompetencyChartData(selectedElementLabel, competencyByElement) {
    return {
      labels: selectedElementLabel,
      datasets: [
        {
          label: 'Fundamental Awareness',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 1,
          data: Object.keys(competencyByElement).map(element => competencyByElement[element].Fundamental)
        },
        {
          label: 'Novice',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          data: Object.keys(competencyByElement).map(element => competencyByElement[element].Novice)
        },
        {
          label: 'Intermediate',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          data: Object.keys(competencyByElement).map(element => competencyByElement[element].Intermediate)
        },
        {
          label: 'Advanced',
          backgroundColor:  'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 0.2)',
          borderWidth: 1,
          data: Object.keys(competencyByElement).map(element => competencyByElement[element].Advanced)
        },
        {
          label: 'Expert',
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1,
          data: Object.keys(competencyByElement).map(element => competencyByElement[element].Expert)
        }
      ]
    };
  }

  function createDesignPrincipleChartData(selectedElementLabel, designPrincipleByElement) {
    return {
      labels: selectedElementLabel,
      datasets: [
        {
          label: 'Principle 1',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: Object.keys(designPrincipleByElement).map(element => designPrincipleByElement[element].principle1)
        },
        {
          label: 'Principle 2',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          data: Object.keys(designPrincipleByElement).map(element => designPrincipleByElement[element].principle2)
        },
        {
          label: 'Principle 3',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          data: Object.keys(designPrincipleByElement).map(element => designPrincipleByElement[element].principle3)
        },
        {
          label: 'Principal 4',
          backgroundColor:  'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
          data: Object.keys(designPrincipleByElement).map(element => designPrincipleByElement[element].principle4)
        },
        {
          label: 'Principal 5',
          backgroundColor: 'rgba(189, 195, 199, 0.2)',
          borderColor: 'rgba(189, 195, 199, 1)',
          borderWidth: 1,
          data: Object.keys(designPrincipleByElement).map(element => designPrincipleByElement[element].principle5)
        },
        {
          label: 'Principal 6',
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1,
          data: Object.keys(designPrincipleByElement).map(element => designPrincipleByElement[element].principle6)
        },
        {
          label: 'Principal 7',
          backgroundColor: 'rgba(255, 148, 112, 0.2)',
          borderColor: 'rgba(255, 148, 112, 1)',
          borderWidth: 1,
          data: Object.keys(designPrincipleByElement).map(element => designPrincipleByElement[element].principle7)
        },
      ]
    };
  }

  function createInternetChartData(selectedElementLabel, competencyByElement) {
    return {
      labels: selectedElementLabel,
      datasets: [
        {
          label: 'Yes',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 1,
          data: Object.keys(competencyByElement).map(element => competencyByElement[element].Yes)
        },
        {
          label: 'No',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          data: Object.keys(competencyByElement).map(element => competencyByElement[element].No)
        }
      ]
    };
  }

  function createTextDirectionalityChartData(selectedElementLabel, competencyByElement) {
    return {
      labels: selectedElementLabel,
      datasets: [
        {
          label: 'Left to Right',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 1,
          data: Object.keys(competencyByElement).map(element => competencyByElement[element].leftToRight)
        },
        {
          label: 'Right to Left',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          data: Object.keys(competencyByElement).map(element => competencyByElement[element].rightToLeft)
        }
      ]
    };
  }

  function createTechnologyChartData(selectedElementLabel, competencyByElement) {
    return {
      labels: selectedElementLabel,
      datasets: [
        {
          label: 'Computer',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: Object.keys(competencyByElement).map(element => competencyByElement[element].Computer)
        },
        {
          label: 'Laptop',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          data: Object.keys(competencyByElement).map(element => competencyByElement[element].Laptop)
        },
        {
          label: 'Tablet',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          data: Object.keys(competencyByElement).map(element => competencyByElement[element].Tablet)
        },
        {
          label: 'Smartphone',
          backgroundColor:  'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
          data: Object.keys(competencyByElement).map(element => competencyByElement[element].Smartphone)
        },
        {
          label: 'Non-Smartphone',
          backgroundColor: 'rgba(189, 195, 199, 0.2)',
          borderColor: 'rgba(189, 195, 199, 1)',
          borderWidth: 1,
          data: Object.keys(competencyByElement).map(element => competencyByElement[element].Nonsmartphone)
        },
        {
          label: 'Other',
          backgroundColor: 'rgba(255, 148, 112, 0.2)',
          borderColor: 'rgba(255, 148, 112, 1)',
          borderWidth: 1,
          data: Object.keys(competencyByElement).map(element => competencyByElement[element].Other)
        },
      ]
    };
  }

 function ScatterChart({data, title, x, y, labels}) {
    const canvasRef = useRef(null);
    useEffect(() => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        const scatterChart = new Chart(canvas, {
          type: 'scatter',
          data: {
            datasets: [
              {
                label:title,
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 1)'
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: title,
              fontSize: 18
            },
            scales: {
              xAxes: [{ 
                position: 'bottom',
                scaleLabel: {
                  display: true,
                  labelString:  x
                }
              }],
              yAxes: [{
                type: 'category',
                labels: labels,
                ticks: {
                  reverse: true
                },
                scaleLabel: {
                  display: true,
                  labelString: y
                }
              }]
            }
          }
        });
      }
    }, []);
    return <canvas style = {{position: 'relative', width:"300" , height:"300"}}ref={canvasRef} />;
  }

   function BarChart({data, title, x , y}) {
    const canvasRef = useRef(null);
    useEffect(() => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        const chart = new Chart(canvas, {
          type: 'bar',
          data: data,
          options: {
            plugins: {
              colors: {
                forceOverride: true
              }
            },
            title: {
              display: true,
              text: title,
              fontSize: 18
            },
            legend: {
              display: true,
              position: 'bottom',
              labels: {
                fontColor: '#333',
                fontSize: 14
              }
            },
            scales: {
              xAxes: [{
                ticks: {
                  fontColor: '#333',
                  fontSize: 14,
                  beginAtZero: true
                },
                scaleLabel: {
                  display: true,
                  labelString: x,
                  fontColor: '#333',
                  fontSize: 16
                }
              }],
              yAxes: [{
                stacked: false,
                ticks: {
                  fontColor: '#333',
                  fontSize: 14,
                  beginAtZero: true
                },
                scaleLabel: {
                  display: true,
                  labelString: y,
                  fontColor: '#333',
                  fontSize: 16
                }
              }]
            }
          }
        });
      }
    }, []);
    return <canvas style = {{position: 'relative' , width:"300" , height:"300"}}ref={canvasRef} />;
  }

  function DesignPrinciplesPieChart({ data, title }){
    const [chartData, setChartData] = useState({});

    useEffect(() => {
      const count1s = () => {
        const counts = {};
        data.forEach((item) => {
          Object.keys(item.design_principles).forEach((key) => {
            if (item.design_principles[key] === 1) {
              if (counts[key]) {
                counts[key] += 1;
              } else {
                counts[key] = 1;
              }
            }
          });
        });
        return counts;
      };

  
      const chart = () => {
        const counts = count1s();
        setChartData({
          labels: [
            'Principle 1',
            'Principle 2',
            'Principle 3',
            'Principle 4',
            'Principle 5',
            'Principle 6',
            'Principle 7',
          ],
          datasets: [
            {
              label: 'Design Principles',
              data: [
                counts.principle1 || 0,
                counts.principle2 || 0,
                counts.principle3 || 0,
                counts.principle4 || 0,
                counts.principle5 || 0,
                counts.principle6 || 0,
                counts.principle7 || 0,
              ],
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(189, 195, 199, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 148, 112, 0.2)',
              ],
            },
          ],
        });
      };
      chart();
    }, [data]);
  
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const ctx = canvasRef.current.getContext('2d');
      const chart = new Chart(ctx, {
        type: 'pie',
        data: chartData,
        options: {
          plugins: {
            colors: {
              forceOverride: true
            }
          },
          title: {
            display: true,
            text: title,
            fontSize: 18
          },
        
          }
      });
    }, [chartData]);
  
    return <canvas style={{ position: 'relative',  width:"300" , height:"300" }} ref={canvasRef} />;
  };


  function DoughnutChart({ data, title }) {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const ctx = canvasRef.current.getContext('2d');
      const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [data.elementYesCount || 0 , data.elementNoCount || 0],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
          }],
          labels: ['Yes', 'No'],
        },
        options: {
          plugins: {
            colors: {
              forceOverride: true,
            },
          },
          title: {
            display: true,
            text: title,
            fontSize: 18,
          },
        },
      });
    }, []);
  
    return <canvas style={{ position: 'relative', width: "300", height: "300" }} ref={canvasRef} />;
  }
  
  function HorizontalBarChart({data, element, title}) {
    // Extract language and country data from input
    const languagesInElement = data.map(d => d[element]);
    const countries = data.map(d => d.country);

    // Get unique language and country values
    const uniqueLanguages = [...new Set(languagesInElement)];
    const uniqueCountries = [...new Set(countries)];

    // Initialize data object with zeros for each language
    const dataObject = {};
    uniqueLanguages.forEach(lang => {
        dataObject[lang] = new Array(uniqueCountries.length).fill(0);
    });

    const countryLabelsMap = uniqueCountries.map(c => c);
    const chartCountryLabel = countryArray.filter(country => countryLabelsMap.includes(country.value)).map(country => country.label);

    // Fill in data for each language and country
    data.forEach(d => {
        const langIndex = uniqueLanguages.indexOf(d[element]);
        const countryIndex = uniqueCountries.indexOf(d.country);
        dataObject[d[element]][countryIndex]++;
    });

    // Generate datasets array dynamically
    const baseColor = "rgba(54, 162, 235, 1)";
    const colorCount = Object.keys(dataObject).length;
    const datasets = Object.keys(dataObject).map((lang, index) => {
    // Find the language label from the languages array
    const langObject = languages.find(l => l.value === lang);
    const langLabel = langObject ? langObject.label : lang;
    const color = Chart.helpers.color(baseColor).lighten(index / colorCount).rgbString();
    return {
        label: langLabel,
        data: dataObject[lang],
        backgroundColor: color,
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1
    }
});

    // Initialize chart
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const ctx = canvasRef.current.getContext('2d');
      const chart = new Chart(ctx, {
        type: "horizontalBar",
        data: {
            labels: chartCountryLabel,
            datasets: datasets
        },
        options: {
          scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
          display: true,
          text: title,
          fontSize: 18,
        },
        }
    });
  }, []);
    return <canvas style={{ position: 'relative', width: "300", height: "300" }} ref={canvasRef} />;
  }

  return (
    <div className='survey-heading'>  
    <Typography variant="h6">
      <Box sx={{ fontWeight: 'bold', m: 1, p:2 }}> Global Data </Box>
    </Typography>
    <div className='survey-questions'> 
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
        <Tab sx={{fontSize: '0.82rem'}} label="Universal Design Principles" {...a11yProps(0)} />
        <Tab sx={{fontSize: '0.82rem'}} label="Specific Location" {...a11yProps(1)} />
        <Tab sx={{fontSize: '0.82rem'}} label="Cross Cultural Design" {...a11yProps(2)} />
        <Tab sx={{fontSize: '0.82rem'}} label="Device Availability" {...a11yProps(3)} /> 
        <Tab sx={{fontSize: '0.82rem'}} label="Internet Access" {...a11yProps(4)} />
        <Tab sx={{fontSize: '0.82rem'}} label="Competency" {...a11yProps(5)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
      <BarChart data={createDesignPrincipleChartData(chartCountryLabel, designPrinciplesByCountry)} title = {"Most Chosen Design Principle by Country"}  x ={"Universal Design Principles"} y ={"Number of Participants"}/>
      <BarChart data={createDesignPrincipleChartData(chartEthnicityLabel, designPrinciplesByEthnicity)} title = {"Most Chosen Design Principle by Ethnicity"}  x ={"Universal Design Principles"} y ={"Number of Participants"}/>
      <BarChart data={createDesignPrincipleChartData(chartNationalityLabel, designPrinciplesByNationality)} title = {"Most Chosen Design Principle by Nationality"}  x ={"Universal Design Principles"} y ={"Number of Participants"}/>
      <BarChart data={createDesignPrincipleChartData(competencyLabel, designPrinciplesByCompetency)} title = {"Most Chosen Design Principle by Competency"}  x ={"Universal Design Principles"} y ={"Number of Participants"}/>
      <BarChart data={createDesignPrincipleChartData(chartGenderLabel, designPrinciplesByGender)} title = {"Most Chosen Design Principle by Gender"}  x ={"Universal Design Principles"} y ={"Number of Participants"}/>
    </TabPanel>
    <TabPanel value={value} index={1}>
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <SelectField
            value={selectedValue}
            name={country.name}
            label={country.label}
            data={countryArray}
            placeholder={country.placeholder}
            fullWidth
          />
        </Grid>
      </Grid>
      <div style={{display: selectedCountry? 'block' : 'none'}}>
        <DesignPrinciplesPieChart data={dataForCountrySelected} title = {"Most Chosen Design Principle"}/>
        <BarChart data={createDesignPrincipleChartData(selectedCountryLabel, designPrinciplesByCountry)} title = {"Most Chosen Design Principle by Selected Country"}  x ={"Universal Design Principles"} y ={"Number of Participants"}/>
        <BarChart data={createDesignPrincipleChartData(chartEthnicityInSelectedCountryLabel, designPrinciplesByEthnicityInSelectedCountry)} title = {"Most Chosen Design Principle by Ethnicity In Selected Country"}  x ={"Universal Design Principles"} y ={"Number of Participants"}/>
        <BarChart data={createDesignPrincipleChartData(nationalitiesInSelectedCountryLabel, designPrinciplesByNationalityInSelectedCountry)} title = {"Most Chosen Design Principle by Nationality In Selected Country"}  x ={"Universal Design Principles"} y ={"Number of Participants"}/>
        <BarChart data={createDesignPrincipleChartData(competencyLabel, designPrinciplesByCompetencyInSelectedCountry)} title = {"Most Chosen Design Principle by Competency In Selected Country"}  x ={"Universal Design Principles"} y ={"Number of Participants"}/>
        <BarChart data={createDesignPrincipleChartData(genderInSelectedCountryLabel, designPrinciplesByGenderInSelectedCountry)} title = {"Most Chosen Design Principle by Gender In Selected Country"}  x ={"Universal Design Principles"} y ={"Number of Participants"}/> 

        <DoughnutChart data={technologySharingInSelectedCountry} title = {"Device Sharing In Selected Country"}/>
        <DoughnutChart data={technologyOwnershipInSelectedCountry} title = {"Device Sharing In Selected Country"}/>
        <BarChart data={createTechnologyChartData(selectedCountryLabel, technologyDeviceBySelectedCountry)} title = {"Device Type Owned by Selected Country"}  x ={"Device Type"} y ={"Number of Participants"}/>
        <BarChart data={createTechnologyChartData(chartEthnicityInSelectedCountryLabel, technologyDeviceByEthnicityInSelectedCountry)} title = {"Device Type Owned by Ethnicity In Selected Country"}  x ={"Device Type"} y ={"Number of Participants"}/>   
        <BarChart data={createTechnologyChartData(nationalitiesInSelectedCountryLabel, technologyDeviceByNationalityInSelectedCountry)} title = {"Device Type Owned by Nationality In Selected Country"}  x ={"Device Type"} y ={"Number of Participants"}/>   
        <BarChart data={createTechnologyChartData(genderInSelectedCountryLabel, technologyDeviceByGenderInSelectedCountry)} title = {"Device Type Owned by Gender In Selected Country"}  x ={"Device Type"} y ={"Number of Participants"}/>      
        <BarChart data={createTechnologyChartData(technologyAgeList, technologyDeviceByAgeInSelectedCountry)} title = {"Device Type Owned by Age In Selected Country"}  x ={"Device Type"} y ={"Number of Participants"}/> 
        <ScatterChart data={deviceOwnershipVsCompetencyInSelectedCountry} title={"Amount of Devices owned vs Competency Level In Selected Country"} x={"Amount of Devices Owned (6 equates to 6+ devices owned)"} y={"Competency level"} labels={competencyScatterLabels}/>
        <ScatterChart data={ageFirstDeviceVsCompetencyInSelectedCountry} title={"Age of First Device vs Competency Level In Selected Country"} x={"Age when first owned device"} y={"Competency level"} labels={competencyScatterLabels}/>
        <ScatterChart data={ageUsedTechVsCompetencyInSelectedCountry} title={"Age when started using Technology vs Competency Level In Selected Country"} x={"Age when started using Technology"} y={"Competency level"} labels={competencyScatterLabels}/>  
        <BarChart data={createTechnologyChartData(selectedCountryLabel, technologyDeviceAccessBySelectedCountry)} title = {"Device Type Participant has access to by Selected Country"}  x ={"Device Type"} y ={"Number of Participants"}/>  
        <BarChart data={createTechnologyChartData(chartEthnicityInSelectedCountryLabel, technologyDeviceAccessByEthnicityInSelectedCountry)} title = {"Device Type Participant has access to by Ethnicity In Selected Country"}  x ={"Device Type"} y ={"Number of Participants"}/>  
        <BarChart data={createTechnologyChartData(nationalitiesInSelectedCountryLabel, technologyDeviceAccessByNationalityInSelectedCountry)} title = {"Device Type Participant has access to by Nationality In Selected Country"}  x ={"Device Type"} y ={"Number of Participants"}/>  
        <BarChart data={createTechnologyChartData(genderInSelectedCountryLabel, technologyDeviceAccessByGenderInSelectedCountry)} title = {"Device Type Participant has access to by Gender In Selected Country"}  x ={"Device Type"} y ={"Number of Participants"}/>  
        
        <HorizontalBarChart data={dataForCountrySelected} element={'preferred_reading_language'} title={'Preferred Reading Language By Selected Country'}/>
        <HorizontalBarChart data={dataForCountrySelected} element={'preferred_writing_language'} title={'Preferred Writing Language By Selected Country'}/>
        <BarChart data={createTextDirectionalityChartData(selectedCountryLabel, textDirectionalityBySelectedCountry)} title = {"Text Directionality by Selected Country"}  x ={"Text Directionality"} y ={"Number of Participants"}/>  
        <BarChart data={createTextDirectionalityChartData(chartEthnicityInSelectedCountryLabel, textDirectionalityByEthnicityInSelectedCountry)} title = {"Text Directionality by Ethnicity In Selected Country"}  x ={"Text Directionality"} y ={"Number of Participants"}/> 
        <BarChart data={createTextDirectionalityChartData(nationalitiesInSelectedCountryLabel, textDirectionalityByNationalityInSelectedCountry)} title = {"Text Directionality by Nationality In Selected Country"}  x ={"Text Directionality"} y ={"Number of Participants"}/> 

        <BarChart data={createInternetChartData(selectedCountryLabel, internetAccessBySelectedCountry)} title = {"Internet Stability By Selected Country"}  x ={"Internet Stability"} y ={"Number of Participants"}/>
        <BarChart data={createInternetChartData(chartEthnicityInSelectedCountryLabel, internetAccessByEthnicityInSelectedCountry)} title = {"Internet Stability By Ethnicity In Selected Country"}  x ={"Internet Stability"} y ={"Number of Participants"}/>
        <BarChart data={createInternetChartData(nationalitiesInSelectedCountryLabel, internetAccessByNationalityInSelectedCountry)} title = {"Internet Stability By Nationality In Selected Country"}  x ={"Internet Stability"} y ={"Number of Participants"}/>
        <BarChart data={createInternetChartData(genderInSelectedCountryLabel, internetAccessByGenderInSelectedCountry)} title = {"Internet Stability By Gender In Selected Country"}  x ={"Internet Stability"} y ={"Number of Participants"}/>
        <BarChart data={createInternetChartData(selectedCountryLabel, broadbandByCountryInSelectedCountry)} title = {"Broadband Contract By Selected Country"}  x ={"Broadband Contract"} y ={"Number of Participants"}/>
        <BarChart data={createInternetChartData(selectedCountryLabel, broadbandByEthnicityInSelectedCountry)} title = {"Broadband Contract By Ethnicity In Selected Country"}  x ={"Broadband Contract"} y ={"Number of Participants"}/>
        <BarChart data={createInternetChartData(chartEthnicityInSelectedCountryLabel, broadbandByNationalityInSelectedCountry)} title = {"Broadband Contract By Nationality In Selected Country"}  x ={"Broadband Contract"} y ={"Number of Participants"}/>
        <BarChart data={createInternetChartData(nationalitiesInSelectedCountryLabel, broadbandByGenderInSelectedCountry)} title = {"Broadband Contract By Gender In Selected Country"}  x ={"Broadband Contract"} y ={"Number of Participants"}/>

        <BarChart data={createCompetencyChartData(selectedCountryLabel, competencyBySelectedCountry)} title = {"Competency By Selected Country"}  x ={"Competency Level"} y ={"Number of Participants"}/>
        <BarChart data={createCompetencyChartData(chartEthnicityInSelectedCountryLabel, competencyByEthnicityInSelectedCountry)} title = {"Competency By Ethnicity in Selected Country"}  x ={"Competency Level"} y ={"Number of Participants"}/>
        <BarChart data={createCompetencyChartData( nationalitiesInSelectedCountryLabel, competencyByNationalityInSelectedCountry)} title = {"Competency By Nationality in Selected Country"}  x ={"Competency Level"} y ={"Number of Participants"}/>
        <BarChart data={createCompetencyChartData(genderInSelectedCountryLabel, competencyByGenderInSelectedCountry)} title = {"Competency By Gender in Selected Country"}  x ={"Competency Level"} y ={"Number of Participants"}/>

      </div>
    </TabPanel>
    <TabPanel value={value} index={2} >
      <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center"> 
        <Grid item xs={12}>
        <Button variant="contained" size="large" endIcon={<DownloadIcon/>} onClick={downloadExcel}>Download data collected on Hofstedes Cultural Dimensions</Button>
        <Typography variant="caption" display="block">
          *Please note that this was optional within the participant surveys therefore data collected may be incomplete.
        </Typography>
        </Grid>
      </Grid>
      <HorizontalBarChart data={data} element={'preferred_reading_language'} title={'Preferred Reading Language By Country'}/>
      <HorizontalBarChart data={data} element={'preferred_writing_language'} title={'Preferred Writing Language By Country'}/>
      <BarChart data={createTextDirectionalityChartData(chartCountryLabel, textDirectionalityByCountry)} title = {"Text Directionality by Country"}  x ={"Text Directionality"} y ={"Number of Participants"}/>  
      <BarChart data={createTextDirectionalityChartData(chartEthnicityLabel, textDirectionalityByEthnicity)} title = {"Text Directionality by Ethnicity"}  x ={"Text Directionality"} y ={"Number of Participants"}/> 
      <BarChart data={createTextDirectionalityChartData(chartNationalityLabel, textDirectionalityByNationality)} title = {"Text Directionality by Nationality"}  x ={"Text Directionality"} y ={"Number of Participants"}/> 
    </TabPanel>
    <TabPanel value={value} index={3}>
    <Grid container spacing={2}>
      <Grid item xs={6}>
      <DoughnutChart data={technologySharing} title = {"Device Sharing"}/>
      </Grid>
      <Grid item xs={6}>
      <DoughnutChart data={technologyOwnership} title = {"Device Ownership"}/>
      </Grid>
    </Grid>
      <BarChart data={createTechnologyChartData(chartCountryLabel, technologyDeviceByCountry)} title = {"Device Type Owned by Country"}  x ={"Device Type"} y ={"Number of Participants"}/>
      <BarChart data={createTechnologyChartData(chartEthnicityLabel, technologyDeviceByEthnicity)} title = {"Device Type Owned by Ethnicity"}  x ={"Device Type"} y ={"Number of Participants"}/>   
      <BarChart data={createTechnologyChartData(chartNationalityLabel, technologyDeviceByNationality)} title = {"Device Type Owned by Nationality"}  x ={"Device Type"} y ={"Number of Participants"}/>   
      <BarChart data={createTechnologyChartData(chartGenderLabel, technologyDeviceByGender)} title = {"Device Type Owned by Gender"}  x ={"Device Type"} y ={"Number of Participants"}/>      
      <BarChart data={createTechnologyChartData(technologyAgeList, technologyDeviceByAge)} title = {"Device Type Owned by Age"}  x ={"Device Type"} y ={"Number of Participants"}/> 
      <ScatterChart  data={deviceOwnershipVsCompetency}  title={"Amount of Devices owned vs Competency Level"} x={"Amount of Devices Owned (6 equates to 6+ devices owned)"} y={"Competency level"} labels={competencyScatterLabels}/>  
      <BarChart data={createTechnologyChartData(chartCountryLabel, technologyDeviceAccessByCountry)} title = {"Device Type Participant has access to by Country"}  x ={"Device Type"} y ={"Number of Participants"}/>  
      <BarChart data={createTechnologyChartData(chartEthnicityLabel, technologyDeviceAccessByEthnicity)} title = {"Device Type Participant has access to by Ethnicity"}  x ={"Device Type"} y ={"Number of Participants"}/>  
      <BarChart data={createTechnologyChartData(chartNationalityLabel, technologyDeviceAccessByNationality)} title = {"Device Type Participant has access to by Nationality"}  x ={"Device Type"} y ={"Number of Participants"}/>  
      <BarChart data={createTechnologyChartData(chartGenderLabel, technologyDeviceAccessByGender)} title = {"Device Type Participant has access to by Gender"}  x ={"Device Type"} y ={"Number of Participants"}/>  
    </TabPanel>
    <TabPanel value={value} index={4}>
      <BarChart data={createInternetChartData(chartCountryLabel, internetAccessByCountry)} title = {"Internet Stability By Country"}  x ={"Internet Stability"} y ={"Number of Participants"}/>
      <BarChart data={createInternetChartData(chartEthnicityLabel, internetAccessByEthnicity)} title = {"Internet Stability By Ethnicity"}  x ={"Internet Stability"} y ={"Number of Participants"}/>
      <BarChart data={createInternetChartData(chartNationalityLabel, internetAccessByNationality)} title = {"Internet Stability By Nationality"}  x ={"Internet Stability"} y ={"Number of Participants"}/>
      <BarChart data={createInternetChartData(chartGenderLabel, internetAccessByGender)} title = {"Internet Stability By Gender"}  x ={"Internet Stability"} y ={"Number of Participants"}/>
      <BarChart data={createInternetChartData(chartCountryLabel, broadbandByCountry)} title = {"Broadband Contract By Country"}  x ={"Broadband Contract"} y ={"Number of Participants"}/>
      <BarChart data={createInternetChartData(chartEthnicityLabel, broadbandByEthnicity)} title = {"Broadband Contract By Ethnicity"}  x ={"Broadband Contract"} y ={"Number of Participants"}/>
      <BarChart data={createInternetChartData(chartNationalityLabel, broadbandByNationality)} title = {"Broadband Contract By Nationality"}  x ={"Broadband Contract"} y ={"Number of Participants"}/>
      <BarChart data={createInternetChartData(chartGenderLabel, broadbandByGender)} title = {"Broadband Contract By Gender"}  x ={"Broadband Contract"} y ={"Number of Participants"}/>
    </TabPanel>
    <TabPanel value={value} index={5}>
      <BarChart data={createCompetencyChartData(chartCountryLabel, competencyByCountry)} title = {"Competency By Country"}  x ={"Competency Level"} y ={"Number of Participants"}/>
      <BarChart data={createCompetencyChartData(chartEthnicityLabel, competencyByEthnicity)} title = {"Competency By Ethnicity"}  x ={"Competency Level"} y ={"Number of Participants"}/>
      <BarChart data={createCompetencyChartData(chartNationalityLabel, competencyByNationality)} title = {"Competency By Nationality"}  x ={"Competency Level"} y ={"Number of Participants"}/>
      <ScatterChart data={ageFirstDeviceVsCompetency} title={"Age of First Device vs Competency Level"} x={"Age when first owned device"} y={"Competency level"} labels={competencyScatterLabels}/>
      <ScatterChart data={ageUsedTechVsCompetency} title={"Age when started using Technology vs Competency Level"} x={"Age when started using Technology"} y={"Competency level"} labels={competencyScatterLabels}/>
    </TabPanel>
    </div>
  </div>
  )
}

export default GlobalData