import React from 'react'
import ReactDOM from 'react'
import MainMenuStyles from './CSSFiles/MainMenuStyles.css'
import Images from './ImageDatabase.js'

class MainMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      trackingData: false,
    };
  };

  render() {
    return(
      <div class="set-font">
        <div class="user-name">
           <p class="user-top"><b>User:</b> <br></br> </p>
           <p class="user-bottom">Guest </p>
        </div>
        <br></br>
        <div class="menu-choices">
            <p class="menu-button" onClick={this.props.renderGameModeMenu}>
            Play
            </p>
            <p class="menu-button">
            Compendium
            </p>
            <p class="menu-button">
            Statistics
            </p>
            <p class="menu-button">
            Settings
            </p>
        </div>
        <div class="title">
          <h2 class="title-top"> Slay </h2>
          <h4 class="title-middle"> the </h4>
          <h2 class="title-bottom"> Spire </h2>
        </div>

      </div>
    )
  }
}

export default MainMenu
