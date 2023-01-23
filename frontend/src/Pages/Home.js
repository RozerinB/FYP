import React from 'react'
import "./Home.css"
import { ComposableMap, Geographies, Geography,  Graticule } from "react-simple-maps";

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

    <div className='container'> 
      <div className='info'> 
        <h3> Complete Survey </h3>
        <h4> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h4>
      </div>
      <div> 
        <h3> View Automated Report </h3>
        <h4> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h4>
      </div>
      <div> 
        <h3> Data will be added Globally  </h3>
        <h4> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h4>
      </div>
  </div>
  </div>
  )
}

export default Home
