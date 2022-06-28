import React from 'react'
import ReactDOM from 'react-dom'
import Images from '../ImageDatabase.js'
import SlaverTwoStyles from './SlaverTwoStyles.css'

export function SlaverTwo() {

  return(
    <div class="slavertwo-box">
      <img src={Images[98]} class="slavertwo-char" />
    </div>
  )
}

export default SlaverTwo
