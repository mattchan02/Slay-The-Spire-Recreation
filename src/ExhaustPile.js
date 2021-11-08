import React from 'react'
import ReactDOM from 'react-dom'
import ExhaustPileArray from './ExhaustPileArray.js'
import ExhaustPileStyles from './CSSFiles/ExhaustPileStyles.css'

class ExhaustPile extends React.Component {
  constructor() {
    super();
    this.state = {
      trackingData: false,
    };
  };

  render() {
    return(
      <div class="exhaust-whole-div">
        <div class="exhaust-counter"> Exhaust: {ExhaustPileArray.length} </div>
      </div>
    )
  }
}

export default ExhaustPile
