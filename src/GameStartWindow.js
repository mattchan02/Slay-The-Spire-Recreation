import React from 'react'
import ReactDOM from 'react-dom'
import TopBar from './TopBar.js'
import RelicsBar from './RelicsBar.js'

class GameStartWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      trackingData: false,
    };
  };

  render() {
    return(
      <div>
        <TopBar />
        <RelicsBar />


      </div>
    )
  }
}

export default GameStartWindow
