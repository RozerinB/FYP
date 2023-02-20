import React , {useEffect, useState} from 'react'
import {VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryLegend, VictoryPie, VictoryPortal, VictoryStack } from 'victory'
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import './index.css'
import axios from 'axios';
import { UDP, UDPbyGender  } from '../GlobalData/Data';

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

  console.log('data :>> ', data);

  // get UDP values by gender
  const getUDP1ByGender = UDPbyGender(data,"principle1", 1)
  const getUDP2ByGender = UDPbyGender(data,"principle2", 2)
  const getUDP3ByGender = UDPbyGender(data,"principle3", 3)
  const getUDP4ByGender = UDPbyGender(data,"principle4", 4)
  const getUDP5ByGender = UDPbyGender(data,"principle5", 5)
  const getUDP6ByGender = UDPbyGender(data,"principle6", 6)
  const getUDP7ByGender = UDPbyGender(data,"principle7", 7)
  const getMostSelectedUDPs = UDP(allDesignPrinciples);
  const getPrincipleLabels = getMostSelectedUDPs.map((principle) => principlesLabel[principle].label);
  
  // const genderUDP = [
  //   [
  //     { x: "a", y: getUDP1ByGender["female"],z: getUDP1ByGender["female"] != undefined ? "F" : ""}, //principle1
  //     { x: "b", y: getUDP2ByGender["female"],z: getUDP2ByGender["female"] != undefined ? "F" : ""}, //principle2
  //     { x: "c", y: getUDP3ByGender["female"],z: getUDP3ByGender["female"] != undefined ? "F" : ""}, //principle3 
  //     { x: "d", y: getUDP4ByGender["female"],z: getUDP4ByGender["female"] != undefined ? "F" : ""}, //principle4
  //     { x: "e", y: getUDP5ByGender["female"],z: getUDP5ByGender["female"] != undefined ? "F" : ""}, //principle5 
  //     { x: "f", y: getUDP6ByGender["female"],z: getUDP6ByGender["female"] != undefined ? "F" : ""}, //principle6
  //     { x: "g", y: getUDP7ByGender["female"],z: getUDP7ByGender["female"] != undefined ? "F" : ""}  //principle7
  //   ],
  //   [
  //     { x: "a", y: getUDP1ByGender["male"],z: getUDP1ByGender["male"] != undefined ? "M" : "" }, //principle1
  //     { x: "b", y: getUDP2ByGender["male"],z: getUDP2ByGender["male"] != undefined ? "M" : ""}, //principle2
  //     { x: "c", y: getUDP3ByGender["male"],z: getUDP3ByGender["male"] != undefined ? "M" : ""}, //principle3 
  //     { x: "d", y: getUDP4ByGender["male"],z: getUDP4ByGender["male"] != undefined ? "M" : ""}, //principle4
  //     { x: "e", y: getUDP5ByGender["male"],z: getUDP5ByGender["male"] != undefined ? "M" : ""}, //principle5 
  //     { x: "f", y: getUDP6ByGender["male"],z: getUDP6ByGender["male"] != undefined ? "M" : ""}, //principle6
  //     { x: "g", y: getUDP7ByGender["male"],z: getUDP7ByGender["male"] != undefined ? "M" : ""}  //principle7

  // ],
  // [
  //   { x: "a", y: getUDP1ByGender["gender-variant"]}, //principle1
  //   { x: "b", y: getUDP2ByGender["gender-variant"]}, //principle2
  //   { x: "c", y: getUDP3ByGender["gender-variant"] }, //principle3 
  //   { x: "d", y: getUDP4ByGender["gender-variant"] }, //principle4
  //   { x: "e", y: getUDP5ByGender["gender-variant"] }, //principle5 
  //   { x: "f", y: getUDP6ByGender["gender-variant"] }, //principle6
  //   { x: "g", y: getUDP7ByGender["gender-variant"]}  //principle7

  // ],
  // [
  //   { x: "a", y: getUDP1ByGender["other"] }, //principle1
  //   { x: "b", y: getUDP2ByGender["other"]}, //principle2
  //   { x: "c", y: getUDP3ByGender["other"] }, //principle3 
  //   { x: "d", y: getUDP4ByGender["other"] }, //principle4
  //   { x: "e", y: getUDP5ByGender["other"] }, //principle5 
  //   { x: "f", y: getUDP6ByGender["other"] }, //principle6
  //   { x: "g", y: getUDP7ByGender["other"]}  //principle7
  // ],
  // ];
  
  return (
    <div className='survey-heading'> 
    <Typography variant="h6">
      <Box sx={{ fontWeight: 'bold', m: 1, p:2 }}> Global Data </Box>
    </Typography>
    <div className='survey-questions'> 
    <Grid container spacing={2}>
    <Grid>
    {/* <Typography variant="h6">
      <Box sx={{ fontWeight: 'bold', m: 1, p:2 }}> Overall the highest ranked Design Principle(s): </Box>
      <Box sx={{  ml: 1, pl:2 }}> {getPrincipleLabels} </Box>
    </Typography> */}
    </Grid>
    </Grid>
    {/* <Typography variant="h6">
      <Box sx={{ fontWeight: 'bold', m: 1, p:2 }}> Highest ranked Design Principle(s) by gender: </Box>
    </Typography>
    <Grid container>
    <Grid item xs={5}>
    <VictoryChart height={500} width={500}
          domainPadding={{ x: 30, y: 20 }}
        >
            <VictoryLegend x={125} y={10}
            orientation="horizontal"
            gutter={20}
            style={{ border: { stroke: 'none' } }}
            colorScale={["#673ab7", "#3f51b5", "#2196f3", "#009688"]}
            data={[
              { name: "Female" }, { name: "Male" }, { name: "Gender Variant/ Non Conforming" }, {name: "Other"}
            ]}
          />
            <VictoryStack
              colorScale={["#673ab7", "#3f51b5", "#2196f3", "#009688"]}
            >
              {genderUDP.map((data) => {
                return <VictoryBar data={data} />})}
            </VictoryStack>
            <VictoryAxis dependentAxis
              tickFormat={(tick) => `${tick}%`}
              style={{ tickLabels: { angle: -60, fontSize: 10 } }}
            />
            <VictoryAxis
               style={{ tickLabels: { angle: -40, fontSize: 10 } }}
              tickFormat={["Principle1", "Principle2", "Principle3", "Principle4", "Principle5", "Principle6", "Principle7"]}
            />
        </VictoryChart>
    </Grid>
    </Grid> */}
  
    </div>
  </div>
  )
  }

export default GlobalData