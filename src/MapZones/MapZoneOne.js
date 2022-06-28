import React from 'react'
import ReactDOM from 'react-dom'
import MapZoneStyles from '../CSSFiles/MapZoneStyles.css'
import Images from '../ImageDatabase.js'
import { useSelector, useDispatch } from 'react-redux'
import {
  ChangeMapOneToEnemyOne,
} from '../features/counter/mapzoneSlice.js'

export function MapZoneOne() {
  const mapzone = useSelector(state3 => state3.mapzone)
  const dispatch = useDispatch()

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
          onClick={() => dispatch(ChangeMapOneToEnemyOne())}
          />
        </center>
      </div>
    </div>
  )
}

export default MapZoneOne
