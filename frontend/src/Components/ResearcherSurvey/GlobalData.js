import React , {useEffect, useRef, useState} from 'react'
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import './index.css'
import axios from 'axios';
import { UDP, UDPbyGender , calculateCompetencyPercentage, calculateTextDirectionalityPercentage, calculateInternetAccessPercentage } from '../GlobalData/Data';
import SelectField from '../FormFields/SelectField';
import countryList from 'react-select-country-list';
import { useField } from 'formik';
import Chart from 'chart.js/dist/Chart.js'

export const labels = ['Principle1', 'Principle2', 'Principle3', 'Principle4', 'Principle5', 'Principle6', 'Principle7'];

const principlesLabel = {
  principle1: {
    name: "principle1",
    label: "Principle 1: Equitable Use -  The design is useful and marketable to people with diverse abilities.",
  },
  principle2: {
    name: "principle2",
    label: "Principle 2: Flexibility in Use - The design accommodates a wide range of individual preferences and abilities.",
  },
  principle3: {
    name: "principle3",
    label: "Principle 3: Simple and Intuitive Use - Use of the design is easy to understand, regardless of the user’s experience, knowledge, language skills, or current concentration level.",
  },
  principle4: {
    name: "principle4",
    label: "Principle 4: Perceptible Information - The design communicates necessary information effectively to the user, regardless of ambient conditions or the user’s sensory abilities.",
  },
  principle5: {
    name: "principle5",
    label: "Principle 5: Tolerance for Error - The design minimizes hazards and the adverse consequences of accidental or unintended actions.",
  },
  principle6: {
    name: "principle6",
    label: "Principle 6: Low Physical Effort - The design can be used efficiently and comfortably and with a minimum of fatigue.",
  },
  principle7: {
    name: "principle7",
    label: "Principle 7: Size and Space for Approach and Use - Appropriate size and space are provided for approach, reach, manipulation, and use regardless of user’s body size, posture, or mobility.",
  },
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
  console.log('getUDP1ByGender', getUDP1ByGender)
  const [field] = useField(props);
  const { value: selectedValue } = field;
  const selectedCountry = selectedValue.country;
  const dataForCountrySelected = data.filter((country) => country.country === selectedCountry);
  const competencyPerCountry = calculateCompetencyPercentage(dataForCountrySelected);
  const textDirectionalityPerCountry = calculateTextDirectionalityPercentage(dataForCountrySelected);
  const calculateInternetAccessPerCountry = calculateInternetAccessPercentage(dataForCountrySelected); 

const competencyByCountry = {};

for (const participant of data) {
  const competencyLevel = participant.competency_level;
  const country = participant.country;

  if (!competencyByCountry[country]) {
    competencyByCountry[country] = {
      Fundamental: 0,
      Novice: 0,
      Intermediate: 0,
      Advanced: 0,
      Expert: 0
    };
  }
  competencyByCountry[country][competencyLevel]++;
}

console.log('competencyByCountry', competencyByCountry)

const competencyCountryLabel = Object.keys(competencyByCountry);
const selectedCountries = countryArray.filter(country => competencyCountryLabel.includes(country.value)).map(country => country.label);


let chartData = {
  labels: selectedCountries,
  datasets: [
    {
      label: 'Fundamental Awareness',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 1,
      data: Object.keys(competencyByCountry).map(country => competencyByCountry[country].Fundamental)
    },
    {
      label: 'Novice',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      data: Object.keys(competencyByCountry).map(country => competencyByCountry[country].Novice)
    },
    {
      label: 'Intermediate',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      data: Object.keys(competencyByCountry).map(country => competencyByCountry[country].Intermediate)
    },
    {
      label: 'Advanced',
      backgroundColor:  'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 0.2)',
      borderWidth: 1,
      data: Object.keys(competencyByCountry).map(country => competencyByCountry[country].Advanced)
    },
    {
      label: 'Expert',
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1,
      data: Object.keys(competencyByCountry).map(country => competencyByCountry[country].Expert)
    }
  ]
};

function CompetencyByCountryChart({data, label}) {
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
            text: 'Competency Level by Country',
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
                labelString: 'Competency Level',
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
                labelString: 'Number of Participants',
                fontColor: '#333',
                fontSize: 16
              }
            }]
          }
        }
      });
    }
  }, []);
  return <canvas ref={canvasRef} />;
}




  return (
    <div className='survey-heading'> 
    
    <Typography variant="h6">
      <Box sx={{ fontWeight: 'bold', m: 1, p:2 }}> Global Data </Box>
    </Typography>
    <div className='survey-questions'> 
    <CompetencyByCountryChart data={chartData} />
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
    </div>
  </div>
  )
  }

export default GlobalData