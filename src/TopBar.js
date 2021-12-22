import React from 'react'
import ReactDOM from 'react-dom'
import Images from './ImageDatabase.js'
import TopBarStyles from './CSSFiles/TopBarStyles.css'
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

export function TopBar() {
  const topbar = useSelector(state => state.topbar)
  const dispatch = useDispatch()

  return(
    <div class="topbar-whole-div">
      <div class="topbar-name">
        Guest
      </div>
      <div class="topbar-char">
        The Iron Clad
      </div>
      <div class="topbar-HP">
       <img class="topbar-heart" src={Images[11]} /> <div class="topbar-HP-text"> {topbar.currentHP}/{topbar.maximumHP} </div>
      </div>
      <div class="topbar-gold">
        <img class="topbar-gold-pic" src={Images[12]} /> <div class="topbar-gold-text"> {topbar.currentGoldAmount} </div>
      </div>
      <div class="topbar-potions">
        <img class="topbar-potions-1" src={Images[14]}/>
        <img class="topbar-potions-2" src={Images[14]}/>
      </div>
    </div>
  )

}

export default TopBar
