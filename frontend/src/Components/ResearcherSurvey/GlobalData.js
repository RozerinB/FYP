import React , {useEffect, useState, useRef} from 'react'
import Typography from '@mui/material/Typography';
import { Box, Button, Grid, Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
import './index.css'
import axios from 'axios';
import {competencyByElementInData, ByElementInDataYesOrNo, designPrincipleByElementInData, downloadExcel, technologyByElementInData, deviceStatus } from '../GlobalData/Data';
import SelectField from '../FormFields/SelectField';
import countryList from 'react-select-country-list';
import { useField } from 'formik';
import { ethnicGroups, genders, nationalities } from '../ParticipantSurvey/Questions';
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
  const broadbandByCountry = ByElementInDataYesOrNo(data,'broadband_contract','country');

  const filteredDataForCompetencyAgeDevice = data.map(obj => ({
    x: obj.age_when_first_owned_device,
    y: obj.competency_level,
  }));

  const filteredDataForCompetencyAgeTech = data.map(obj => ({
    x: obj.age_first_used_technology,
    y: obj.competency_level,
  }));

  const filteredDataForCompetencyAmountOfDevices = data.map(obj => ({
    x: obj.device_ownership_status,
    y: obj.competency_level,
  }))

  const technologyDeviceByCountry = technologyByElementInData(data, 'device_type_owned', 'country');
  const technologyDeviceByNationality = technologyByElementInData(data, 'device_type_owned', 'nationality');
  const technologyDeviceByEthnicity = technologyByElementInData(data, 'device_type_owned', 'ethnicity');
  const technologyDeviceByAge = technologyByElementInData(data,'device_type_owned','age');
  const technologyDeviceByGender = technologyByElementInData(data,'device_type_owned','gender');
  const technologyDeviceAccessByCountry = technologyByElementInData(data,'device_access','country');
  const technologyDeviceAccessByGender = technologyByElementInData(data,'device_access','gender');
  const technologyAgeList = Object.keys(technologyDeviceByAge);
  const technologySharing = deviceStatus(data, 'device_sharing');
  const technologyOwnership = deviceStatus(data, 'device_ownership_status');

  // Selected Location Specific Data
  const competencyBySelectedCountry = competencyByElementInData(dataForCountrySelected, 'country');
  const competencyByEthnicityInSelectedCountry = competencyByElementInData(dataForCountrySelected, 'ethnicity');
  const competencyByNationalityInSelectedCountry = competencyByElementInData(dataForCountrySelected, 'nationality');
  const designPrinciplesBySelectedCountry = designPrincipleByElementInData(dataForCountrySelected, 'country');
  const designPrinciplesByEthnicityInSelectedCountry = designPrincipleByElementInData(dataForCountrySelected, 'ethnicity');
  const designPrinciplesByNationalityInSelectedCountry = designPrincipleByElementInData(dataForCountrySelected, 'nationality');
  const designPrinciplesByCompetencyInSelectedCountry = designPrincipleByElementInData(dataForCountrySelected, 'competency_level');
  const designPrinciplesByGenderInSelectedCountry = designPrincipleByElementInData(dataForCountrySelected, 'gender');

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
      <BarChart data={createDesignPrincipleChartData(chartGenderLabel, designPrinciplesByGender)} title = {"Most Chosen Design Principle by Gender"}  x ={"Universal Design Principles"} y ={"Number of Participants"}/>
    </TabPanel>
    <TabPanel value={value} index={2}>
      <Button variant="contained" size="large" endIcon={<DownloadIcon/>} onClick={downloadExcel}>Download data collected on Hofstedes Cultural Dimensions</Button>
    </TabPanel>
    <TabPanel value={value} index={3}>
      Item four
    </TabPanel>
    <TabPanel value={value} index={4}>
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
      <ScatterChart data={filteredDataForCompetencyAmountOfDevices} title={"Amount of Devices owned vs Competency Level"} x={"Amount of Devices Owned"} y={"Competency level"} labels={competencyScatterLabels}/>  
      <BarChart data={createTechnologyChartData(chartCountryLabel, technologyDeviceAccessByCountry)} title = {"Device Type Participant has access to by Country"}  x ={"Device Type"} y ={"Number of Participants"}/>  
      <BarChart data={createTechnologyChartData(chartGenderLabel, technologyDeviceAccessByGender)} title = {"Device Type Participant has access to by Gender"}  x ={"Device Type"} y ={"Number of Participants"}/>  
    </TabPanel>
    <TabPanel value={value} index={5}>
      <BarChart data={createInternetChartData(chartCountryLabel, internetAccessByCountry)} title = {"Internet Stability By Country"}  x ={"Internet Stability"} y ={"Number of Participants"}/>
      <BarChart data={createInternetChartData(chartCountryLabel, broadbandByCountry)} title = {"Broadband Contract By Country"}  x ={"Broadband Contract"} y ={"Number of Participants"}/>
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
      <div style={{display: selectedCountry? 'block' : 'none'}}> 
        <BarChart data={createCompetencyChartData(chartCountryLabel, competencyBySelectedCountry)} title = {"Competency By Selected Country"}  x ={"Competency Level"} y ={"Number of Participants"}/>
        <BarChart data={createCompetencyChartData(chartCountryLabel, competencyByNationalityInSelectedCountry)} title = {"Competency By Nationality in Selected Country"}  x ={"Competency Level"} y ={"Number of Participants"}/>
        <BarChart data={createCompetencyChartData(chartCountryLabel, competencyByEthnicityInSelectedCountry)} title = {"Competency By Ethnicity in Selected Country"}  x ={"Competency Level"} y ={"Number of Participants"}/>
        <DesignPrinciplesPieChart data={dataForCountrySelected} title = {"Most Chosen Design Principle"}/>
      </div>
    </TabPanel>

     
    </div>
  </div>
  )
}

export default GlobalData