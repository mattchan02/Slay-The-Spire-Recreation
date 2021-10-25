import React from 'react'
import ReactDOM from 'react-dom'

class GameModeMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      trackingData: false,
    };
  };

  render() {
    return(
      <div class="main-menu">
        <center>
        <h2> Game Mode Menu </h2>
        <br></br>
        <button
        onClick={this.props.renderCharacterSelection}
        > Go to Character Select
        </button>
        </center>

      </div>
    )
  }
}

export default GameModeMenu;
