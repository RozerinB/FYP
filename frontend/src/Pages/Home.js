import React from 'react'
import "./index.css"
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Cards from '../Components/Cards/Cards';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import StartIcon from '@mui/icons-material/Start';
import computer from '../Images/Computer.png'

function Home() {

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
      <img src={computer} />
     <Cards />
      <NavLink to="/participantSurvey1" >
        <Button variant="outlined" className='started' endIcon={<StartIcon/>}> Get Started </Button>
      </NavLink>
  </div>
  )
}

export default Home
