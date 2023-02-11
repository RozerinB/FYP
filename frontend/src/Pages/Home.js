import React from 'react'
import "./index.css"
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Cards from '../Components/Cards/Cards';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import StartIcon from '@mui/icons-material/Start';
import { Form } from 'reactstrap';
import SurveyFormModel from '../Components/ParticipantSurvey/SurveyFormModel';

const { formId, formField } = SurveyFormModel;

export default function Home(props) {
  const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  return (
    <div>
      <div className='home'> 
        <ComposableMap
          projectionConfig={{
          scale: 125,
          rotation: [-11, 0, 0],
          }}
          width={800}
          height={320}
          style={{ width: "100%", height: "auto" }} 
  >
            <Geographies geography={geoUrl} >
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>
        </ComposableMap>
      </div>
     <Cards />
     <Form id={formId}>
     <div className='home-button'> 
      <NavLink to="/ParticipantDataCollection"  style={{ textDecoration: 'none' }}>
        <Button variant="contained" sx={{m:1}} > I am a participant </Button>
      </NavLink>
      <NavLink to="/ResearcherDataCollection"  style={{ textDecoration: 'none' }}>
        <Button variant="contained" sx={{m:1}} > I am a researcher </Button>
      </NavLink>
      </div>
     </Form>
     
  </div>
  )
}