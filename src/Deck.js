import React from 'react'
import ReactDOM from 'react-dom'
import DeckArray from './DeckArray.js'
import DeckStyles from './CSSFiles/DeckStyles.css'

class Deck extends React.Component {
  constructor() {
    super();
    this.state = {
      data: true
    };
  };

  render() {
    return(
      <div class="deck-whole-div">
        <div class="deck-counter">
          Deck: {DeckArray.length}
        </div>
      </div>
    )
  }
}

export default Deck
