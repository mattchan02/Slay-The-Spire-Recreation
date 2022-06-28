import React from 'react'
import ReactDOM from 'react-dom'
import Images from '../ImageDatabase.js'
import LooterTwoStyles from './LooterTwoStyles.css'

export function LooterTwo() {

  return(
    <div class="LooterTwo-styles">
      <img src={Images[96]} class="LooterTwo-char" />
    </div>
  )
}

export default LooterTwo
