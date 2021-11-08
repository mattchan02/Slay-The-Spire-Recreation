import React from 'react'
import ReactDOM from 'react-dom'
import TopBar from './TopBar.js'
import RelicsBar from './RelicsBar.js'
import EnergyCounter from './EnergyCounter.js'
import EndTurn from './EndTurn.js'
import Deck from './Deck.js'
import DiscardPile from './DiscardPile.js'
import ExhaustPile from './ExhaustPile.js'
import BackgroundWindow from './BackgroundWindow.js'
import Ironclad from './Ironclad.js'

class GameStartWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      trackingData: false,
    };
  };

  render() {
    return(
      <div class="outer-div">
        <div>
          <TopBar />
          <RelicsBar />
        </div>
        <div>
          <BackgroundWindow />
          <Ironclad />
          <EnergyCounter />
          <EndTurn />
          <Deck />
          <DiscardPile />
          <ExhaustPile />
        </div>
      </div>
    )
  }
}

export default GameStartWindow

// <MainWindow />
// <DeckPile />
// <CurrentHand />
// <DiscardPile />
// <ExhaustPile />
// <EndTurn />
