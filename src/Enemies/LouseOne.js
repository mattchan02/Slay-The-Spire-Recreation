import React from 'react'
import ReactDOM from 'react-dom'
import Images from '../ImageDatabase.js'
import LouseOneStyles from './LouseOneStyles.css'

export function LouseOne() {

  return(
    <div class="louseone-styles">
      <img src={Images[97]} class="louseone-char" />
    </div>
  )
}

export default LouseOne
