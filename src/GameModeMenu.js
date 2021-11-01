import React from 'react'
import ReactDOM from 'react-dom'
import GameModeMenuStyles from './CSSFiles/GameModeMenuStyles.css'
import Images from './ImageDatabase.js'

class GameModeMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      trackingData: false,
    };
  };

  render() {
    return(
      <div class="menu-set-font">
        <div class="whole-table">
          <div class="standard-mode" onClick={this.props.renderCharacterSelection}>
            <center>
              <p class="standard-mode-title"><b>Standard</b></p>
              <img class="image-1" src={Images[0]} /> <br></br><br></br>
              <p class="standard-mode-desc"> Embark on a quest to <br></br>Slay The Spire </p>
            </center>
          </div>
          <div class="daily-climb-mode">
            <center>
              <p class="daily-climb-title"><b>Daily Climb</b></p>
              <img class="image-2" src={Images[1]} /> <br></br><br></br>
              <p class="daily-climb-desc">
              A new challenge is available one a day. <br></br><br></br>
              Compete with other players for the highest score.
              </p>
            </center>
          </div>
          <div class="custom-mode">
            <center>
              <p class="custom-mode-title"><b>Custom</b></p>
              <img class="image-3" src={Images[2]} /> <br></br><br></br>
              <p class="custom-mode-desc">Customize your own <br></br>run with unique modifiers </p>
            </center>
          </div>
        </div>
      </div>
    )
  }
}

export default GameModeMenu;
