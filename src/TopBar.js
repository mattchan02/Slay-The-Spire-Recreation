import React from 'react'
import ReactDOM from 'react-dom'
import Images from './ImageDatabase.js'
import TopBarStyles from './CSSFiles/TopBarStyles.css'

class TopBar extends React.Component {
  constructor() {
    super();
    this.state = {
      currentHP: 75,
      maximumHP: 75,
      hasGold: 99
    };
  };

  render() {
    return(
      <div class="topbar-whole-div">
        <div class="topbar-name">
          Guest
        </div>
        <div class="topbar-char">
          The Iron Clad
        </div>
        <div class="topbar-HP">
         <img class="topbar-heart" src={Images[11]} /> <div class="topbar-HP-text"> {this.state.currentHP}/{this.state.maximumHP} </div>
        </div>
        <div class="topbar-gold">
          <img class="topbar-gold-pic" src={Images[12]} /> <div class="topbar-gold-text"> {this.state.hasGold} </div>
        </div>
        <div class="topbar-potions">
          <img class="topbar-potions-1" src={Images[14]}/>
          <img class="topbar-potions-2" src={Images[14]}/>
        </div>
      </div>
    )
  }
}

export default TopBar
