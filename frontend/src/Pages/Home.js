import React from 'react'
import "./index.css"
import { ComposableMap, Geographies, Geography,  Graticule } from "react-simple-maps";
import Cards from '../Components/Cards/Cards';

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
     <Cards />
     <div> </div>
  </div>
  )
}

export default Home
