import React from 'react'
import ReactDOM from 'react-dom'
import Images from './ImageDatabase.js'
import Ironclad from './Ironclad.js'
import BackgroundWindowStyles from './CSSFiles/BackgroundWindowStyles.css'

class BackgroundWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      trackingData: 0
    };
  };

  render() {
    return(
      <div class="background-window-setting">
      <center>
        <div>
          <img src={Images[15]} class="background-image" />
        </div>
      </center>
      </div>
    )
  }
}

export default BackgroundWindow
