import React from 'react'
import ReactDOM from 'react-dom'
import MapZoneStyles from './CSSFiles/MapZoneStyles.css'
import TopBar from './TopBar.js'
import RelicsBar from './RelicsBar.js'
import EnergyCounter from './EnergyCounter.js'
import EndTurn from './EndTurn.js'
import DeckBar from './DeckBar.js'
import BackgroundWindow from './BackgroundWindow.js'
import CurrentHand from './CurrentHand.js'
import Ironclad from './Ironclad.js'
import FungiOne from './Enemies/FungiOne.js'
import FungiTwo from './Enemies/FungiTwo.js'
import LooterOne from './Enemies/LooterOne.js'
import LooterTwo from './Enemies/LooterTwo.js'
import SlaverOne from './Enemies/SlaverOne.js'
import SlaverTwo from './Enemies/SlaverTwo.js'
import LouseOne from './Enemies/LouseOne.js'
import LouseTwo from './Enemies/LouseTwo.js'
import LouseThree from './Enemies/LouseThree.js'
import Images from './ImageDatabase.js'
import MapZoneOne from './MapZones/MapZoneOne.js'
import MapZoneTwo from './MapZones/MapZoneTwo.js'
import configureStore from './app/store.js'
import { useSelector, useDispatch } from 'react-redux'
import {
  ChangeMapOneToTwo,
} from './features/counter/mapzoneSlice.js'

export function GameStartWindow() {
  const mapzone = useSelector(state3 => state3.mapzone)
  const dispatch = useDispatch()

  return(
    <div class="outer-div">
      <div>
        <TopBar />
        <RelicsBar />
        <DeckBar />
      </div>
      <div>
        <BackgroundWindow />
        <Ironclad />
        <EnergyCounter />
        <EndTurn />
        {mapzone.OpenEnemyOne === 1 ||
          mapzone.OpenEnemyTwo === 1 ||
          mapzone.OpenEnemyThree === 1 ||
          mapzone.OpenEnemyFour === 1 ||
          mapzone.OpenEnemyFive === 1 ||
          mapzone.OpenEnemySix === 1 ||
          mapzone.OpenEnemySeven === 1 ||
          mapzone.OpenEnemyEight === 1 ||
          mapzone.OpenEnemyNine === 1 ||
          mapzone.OpenEnemyTen === 1 ||
          mapzone.OpenEnemyEleven === 1 ||
          mapzone.OpenEnemyTwelve === 1 ||
          mapzone.OpenEnemyThirteen === 1 ||
          mapzone.OpenEnemyFourteen === 1
        ? <CurrentHand />
        : null
        }
        {mapzone.OpenMapZoneOne === 1
        ? <MapZoneOne />
        : null
        }
        {mapzone.OpenMapZoneTwo === 1
        ? <MapZoneTwo />
        : null
        }
        {mapzone.OpenEnemyOne === 1
        ? <div>
          <FungiOne />
          <FungiTwo />
          </div>
        : null
        }
      </div>
    </div>
  )
}

export default GameStartWindow
