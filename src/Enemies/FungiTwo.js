import React from 'react'
import ReactDOM from 'react-dom'
import Images from '../ImageDatabase.js'
import FungiTwoStyles from './FungiTwoStyles.css'

export function FungiTwo() {

  return(
    <div class="fungitwo-styles">
      <img src={Images[94]} class="fungitwo-char"/>
    </div>
  )
}

export default FungiTwo
