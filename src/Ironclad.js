import React from 'react'
import ReactDOM from 'react-dom'
import Images from './ImageDatabase.js'
import IroncladStyles from './CSSFiles/IroncladStyles.css'

class Ironclad extends React.Component {
  constructor() {
    super();
    this.state = {
      currentHP: 75
    };
  };

  render() {
    return(
      <div class="ironclad-whole-div">
        <div>
         <img src={Images[16]} class="ironclad-char" />
        </div>
        <div class="ironclad-hp-bar">
        </div>
        <div class="ironclad-status-bar">
        </div>
      </div>
    )
  }
}

export default Ironclad
