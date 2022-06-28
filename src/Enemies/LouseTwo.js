import React from 'react'
import ReactDOM from 'react-dom'
import Images from '../ImageDatabase.js'
import LouseTwoStyles from './LouseTwoStyles.css'

export function LouseTwo() {

  return(
    <div class="lousetwo-styles">
      <img src={Images[97]} class="lousetwo-char" />
    </div>
  )
}

export default LouseTwo
