import React from 'react'
import ReactDOM from 'react-dom'
import MapZoneStyles from '../CSSFiles/MapZoneStyles.css'
import Images from '../ImageDatabase.js'

export function MapZoneTwo() {

  return(
    <div class="mapzone-outerbox">
      <div class="mapzone-titlebox">
      <center>Choose your path:</center>
      </div>
      <div class="mapzone-choicebox">
      <center>
        <img
          class="mapzone-iconbox"
          src={Images[104]}
          />
        <img
          class="mapzone-iconbox"
          src={Images[103]}
          />
        </center>
      </div>
    </div>
  )
}

export default MapZoneTwo
