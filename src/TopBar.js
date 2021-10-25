import React from 'react'
import ReactDOM from 'react-dom'
import TopBarStyles from './CSSFiles/TopBarStyles.css'

class TopBar extends React.Component {
  constructor() {
    super();
    this.state = {
      trackingData: false,
    };
  };

  render() {
    return(
      <div class="top-bar">
        <tr>
          <td>
          Username
          </td>
          <td>
          CharacterName
          </td>
          <td>
          Current HP
          </td>
          <td>
          Maximum HP
          </td>
          <td>
          Gold
          </td>
          <td>
          Potion Slots
          </td>
          <td>
          Level Number
          </td>
        </tr>
      </div>
    )
  }
}

export default TopBar
