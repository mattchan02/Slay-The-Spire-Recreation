import React from 'react'
import ReactDOM from 'react-dom'
import Images from '../ImageDatabase.js'
import LouseThreeStyles from './LouseThreeStyles.css'

export function LouseThree() {

  return(
    <div class="lousethree-styles">
      <img src={Images[97]} class="lousethree-char" />
    </div>
  )
}

export default LouseThree
