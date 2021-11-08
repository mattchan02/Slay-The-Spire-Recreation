import React from 'react'
import ReactDOM from 'react'
import DiscardPileArray from './DiscardPileArray.js'
import DiscardPileStyles from './CSSFiles/DiscardPileStyles.css'

class DiscardPile extends React.Component {
  constructor() {
    super();
    this.state = {
      data: true
    };
  };

  render() {
    return(
      <div class="discard-whole-div">
        <div class="discard-counter">
          Discard: {DiscardPileArray.length}
        </div>
      </div>
    )
  }
}

export default DiscardPile
