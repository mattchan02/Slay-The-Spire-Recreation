import React from 'react'
import ReactDOM from 'react-dom'
import Images from '../ImageDatabase.js'
import LooterOneStyles from './LooterOneStyles.css'

export function LooterOne() {

  return(
    <div class="LooterOne-styles">
      <img src={Images[96]} class="LooterOne-char" />
    </div>
  )
}

export default LooterOne
