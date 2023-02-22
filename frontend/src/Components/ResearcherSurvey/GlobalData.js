import React , {useEffect, useState, useRef} from 'react'
import Typography from '@mui/material/Typography';
import { Box, Grid, Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
import './index.css'
import axios from 'axios';
import { UDP, UDPbyGender , calculateCompetencyPercentage, calculateTextDirectionalityPercentage, calculateInternetAccessPercentage, competencyByElementInData, internetByElementInData, designPrincipleByElementInData } from '../GlobalData/Data';
import SelectField from '../FormFields/SelectField';
import countryList from 'react-select-country-list';
import { useField } from 'formik';
import { ethnicGroups, nationalities, principlesLabel } from '../ParticipantSurvey/Questions';
// import { ScatterChart , BarChart} from '../GlobalData/Chart';
import Chart from 'chart.js/dist/Chart.js'

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

  var allDesignPrinciples = data.map(function(participant) {
    return participant.design_principles;
  });

  var allCountriesSubmitted = data.map(function(country) {
    const label = countryList().getLabel(country.country)
    return label;
  });
 
  const countryArray = [];
  allCountriesSubmitted.forEach(country => {
    if (!countryArray.find(obj => obj.label === country)) {
      countryArray.push({label: country, value: countryList().getValue(country)});
    }
  });

  // get UDP values by gender
  const getUDP1ByGender = UDPbyGender(data,"principle1", 1)
  const getUDP2ByGender = UDPbyGender(data,"principle2", 2)
  const getUDP3ByGender = UDPbyGender(data,"principle3", 3)
  const getUDP4ByGender = UDPbyGender(data,"principle4", 4)
  const getUDP5ByGender = UDPbyGender(data,"principle5", 5)
  const getUDP6ByGender = UDPbyGender(data,"principle6", 6)
  const getUDP7ByGender = UDPbyGender(data,"principle7", 7)
  const getMostSelectedUDPs = UDP(allDesignPrinciples); // get most selected UDPs by all participants 
  const getPrincipleLabels = getMostSelectedUDPs.map((principle) => principlesLabel[principle].label);
  const [field] = useField(props);
  const { value: selectedValue } = field;
  const selectedCountry = selectedValue.country;
  const dataForCountrySelected = data.filter((country) => country.country === selectedCountry);
  const competencyPerCountry = calculateCompetencyPercentage(dataForCountrySelected);
  const textDirectionalityPerCountry = calculateTextDirectionalityPercentage(dataForCountrySelected);
  const calculateInternetAccessPerCountry = calculateInternetAccessPercentage(dataForCountrySelected); 

  console.log('data', data)
  //Competency Page
  const competencyByCountry = competencyByElementInData(data, 'country');
  const competencyByEthnicity = competencyByElementInData(data, 'ethnicity');
  const competencyByNationality = competencyByElementInData(data, 'nationality');
  const competencyCountries= Object.keys(competencyByCountry);
  const competencyEthnicity = Object.keys(competencyByEthnicity);
  const competencyNationality = Object.keys(competencyByNationality);
  const chartCountryLabel = countryArray.filter(country => competencyCountries.includes(country.value)).map(country => country.label);
  const chartEthnicityLabel = ethnicGroups.filter(ethnicity => competencyEthnicity.includes(ethnicity.value)).map(ethnicity => ethnicity.label);
  const chartNationalityLabel = nationalities.filter(nationality => competencyNationality.includes(nationality.value)).map(nationality => nationality.label);
  const designPrinciplesByCountry = designPrincipleByElementInData(data, 'country');
  const designPrinciplesByEthnicity = designPrincipleByElementInData(data, 'ethnicity');
  const designPrinciplesByNationality = designPrincipleByElementInData(data, 'nationality');
  const designPrinciplesByCompetency = designPrincipleByElementInData(data, 'competency_level');
  const competencyLabel = ['Fundamental', 'Novice', 'Intermediate', 'Advanced' ,'Expert']
  console.log('designPrinciplesByCompetency', designPrinciplesByCompetency)
  //Internet Page
  const internetAccessByCountry = internetByElementInData(data,'internet_stability','country');
  const broadbandByCountry = internetByElementInData(data,'broadband_contract','country');
  const internetCountry = Object.keys(internetAccessByCountry);
  const broadbandCountry = Object.keys(broadbandByCountry);
  const internetCountryLabel = countryArray.filter(country => internetCountry.includes(country.value)).map(country => country.label);
  const broadbandCountryLabel = countryArray.filter(country => broadbandCountry.includes(country.value)).map(country => country.label);

  const filteredDataForCompetencyAgeDevice = data.map(obj => ({
    x: obj.age_when_first_owned_device,
    y: obj.competency_level,
  }));

  const filteredDataForCompetencyAgeTech = data.map(obj => ({
    x: obj.age_first_used_technology,
    y: obj.competency_level,
  }));

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
          borderColor: 'rgba(75, 192, 192, 0.2)',
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
          borderColor: 'rgba(153, 102, 255, 0.2)',
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
                type: 'linear',
                position: 'bottom',
                scaleLabel: {
                  display: true,
                  labelString: x
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
    return <canvas style = {{position: 'relative'}}ref={canvasRef} />;
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
    return <canvas style = {{position: 'relative'}}ref={canvasRef} />;
  }

  return (
    <div className='survey-heading'>  
    <Typography variant="h6">
      <Box sx={{ fontWeight: 'bold', m: 1, p:2 }}> Global Data </Box>
    </Typography>
    <div className='survey-questions'> 
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Competency" {...a11yProps(0)} />
        <Tab label="Design Principles" {...a11yProps(1)} />
        <Tab label="Culture" {...a11yProps(2)} />
        <Tab label="Language" {...a11yProps(3)} />
        <Tab label="Technology" {...a11yProps(4)} /> 
        <Tab label="Internet Connection" {...a11yProps(5)} />
        <Tab label="Specific Location" {...a11yProps(6)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
      <BarChart data={createCompetencyChartData(chartCountryLabel, competencyByCountry)} title = {"Competency By Country"}  x ={"Competency Level"} y ={"Number of Participants"}/>
      <BarChart data={createCompetencyChartData(chartEthnicityLabel, competencyByEthnicity)} title = {"Competency By Ethnicity"}  x ={"Competency Level"} y ={"Number of Participants"}/>
      <BarChart data={createCompetencyChartData(chartNationalityLabel, competencyByNationality)} title = {"Competency By Nationality"}  x ={"Competency Level"} y ={"Number of Participants"}/>
      <ScatterChart data={filteredDataForCompetencyAgeDevice} title={"Age of First Device vs Competency Level"} x={"Age when first owned device"} y={"Competency level"} labels={competencyScatterLabels}/>
      <ScatterChart data={filteredDataForCompetencyAgeTech} title={"Age when started using Technology vs Competency Level"} x={"Age when started using Technology"} y={"Competency level"} labels={competencyScatterLabels}/>
    </TabPanel>
    <TabPanel value={value} index={1}>
    <BarChart data={createDesignPrincipleChartData(chartCountryLabel, designPrinciplesByCountry)} title = {"Most Chosen Design Principle by Country"}  x ={"Universal Design Principles"} y ={"Number of Participants"}/>
    <BarChart data={createDesignPrincipleChartData(chartEthnicityLabel, designPrinciplesByEthnicity)} title = {"Most Chosen Design Principle by Ethnicity"}  x ={"Universal Design Principles"} y ={"Number of Participants"}/>
    <BarChart data={createDesignPrincipleChartData(chartNationalityLabel, designPrinciplesByNationality)} title = {"Most Chosen Design Principle by Nationality"}  x ={"Universal Design Principles"} y ={"Number of Participants"}/>
    <BarChart data={createDesignPrincipleChartData(competencyLabel, designPrinciplesByCompetency)} title = {"Most Chosen Design Principle by Competency"}  x ={"Universal Design Principles"} y ={"Number of Participants"}/>
    </TabPanel>
    <TabPanel value={value} index={2}>
      Item Three
    </TabPanel>
    <TabPanel value={value} index={3}>
      Item four
    </TabPanel>
    <TabPanel value={value} index={4}>
      Item five
    </TabPanel>
    <TabPanel value={value} index={5}>
      <BarChart data={createInternetChartData(internetCountryLabel, internetAccessByCountry)} title = {"Internet Stability By Country"}  x ={"Internet Stability"} y ={"Number of Participants"}/>
      <BarChart data={createInternetChartData(broadbandCountryLabel, broadbandByCountry)} title = {"Broadband Contract By Country"}  x ={"Broadband Contract"} y ={"Number of Participants"}/>
    </TabPanel>
    <TabPanel value={value} index={6}>
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
    </TabPanel>

     
    </div>
  </div>
  )
  }

export default GlobalData