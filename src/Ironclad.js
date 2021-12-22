import React from 'react'
import ReactDOM from 'react-dom'
import Images from './ImageDatabase.js'
import IroncladStyles from './CSSFiles/IroncladStyles.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  increaseGoldSmall,
  increaseGoldMedium,
  increaseGoldLarge,
  increaseGold10ish,
  increaseGold20ish,
  increaseGold30ish,
  increaseGold40ish,
  increaseGold50ish,
  increaseGold60ish,
  increaseGold70ish,
  increaseGold80ish,
  increaseGold90ish,
  increaseGold100ish,
  increaseGold150ish,
  increaseGold200ish,
  increaseGold250ish,
  increaseGold300ish,
  decreaseGoldSmall,
  decreaseGoldMedium,
  decreaseGoldLarge,
  decreaseGold10ish,
  decreaseGold20ish,
  decreaseGold30ish,
  decreaseGold40ish,
  decreaseGold50ish,
  decreaseGold60ish,
  decreaseGold70ish,
  decreaseGold80ish,
  decreaseGold90ish,
  decreaseGold100ish,
  decreaseGold150ish,
  decreaseGold200ish,
  decreaseGold250ish,
  decreaseGold300ish,
  take5damage,
  take10damage,
  heal5damage,
  heal10damage
} from './features/counter/topbarSlice.js'

export function Ironclad() {
  const topbar = useSelector(state => state.topbar)
  const dispatch = useDispatch()

  return(
    <div class="ironclad-whole-div">
      <div>
       <img src={Images[16]} class="ironclad-char" />
      </div>
      <div class="ironclad-hp-bar" align="right">
      <progress id="health" color="green" value={topbar.currentHP} max={topbar.maximumHP}></progress>
      </div>
      <div class="ironclad-status-bar">
      </div>
    </div>
  )
}

export default Ironclad
