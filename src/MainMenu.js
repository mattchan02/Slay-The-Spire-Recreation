import React from 'react'
import ReactDOM from 'react'

class MainMenu extends React.Component {
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
        <h2> Slay the Spire Recreation </h2>
        <h4> Project by Matthew Chan </h4>
        <br></br>

        <button
        onClick={this.props.renderGameModeMenu}
        > Go to Game Mode Menu
        </button>

        </center>

      </div>
    )
  }
}

export default MainMenu
