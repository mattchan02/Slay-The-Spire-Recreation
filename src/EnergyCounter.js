import React from 'react'
import ReactDOM from 'react-dom'
import EnergyCounterStyles from './CSSFiles/EnergyCounterStyles.css'

class EnergyCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      currentEnergy: 3,
      maximumEnergy: 3
    };
  };

  render() {
    return(
      <div class="energy-whole-div">
        <div class="energy-outer-ring">
          <div class="energy-middle-ring">
            <div class="energy-inner-ring">
            <p class="energy-text"> {this.state.currentEnergy}/{this.state.maximumEnergy}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EnergyCounter
