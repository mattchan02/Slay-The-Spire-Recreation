import React from 'react'
import ReactDOM from 'react-dom'

class CharacterSelection extends React.Component {
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
        <h2> Character Selection </h2>
        <br></br>

        <button
        onClick={this.props.renderGameStartWindow}
        > Go to Game Start Window
        </button>

        </center>

      </div>
    )
  }
}

export default CharacterSelection
