import React from 'react'
import ReactDOM from 'react-dom'
import Images from '../ImageDatabase.js'
import SlaverOneStyles from './SlaverOneStyles.css'

export function SlaverOne() {

  return(
    <div class="slaverone-box">
      <img src={Images[98]} class="slaverone-char" />
    </div>
  )
}

export default SlaverOne
