import React from 'react'
import ReactDOM from 'react-dom'
import Images from '../ImageDatabase.js'
import FungiOneStyles from './FungiOneStyles.css'

export function FungiOne() {

  return(
    <div class="fungi-styles">
      <img src={Images[94]} class="fungi-char"/>
    </div>
  )
}

export default FungiOne
