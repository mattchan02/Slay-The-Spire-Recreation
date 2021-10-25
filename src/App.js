import React from 'react'
import ReactDOM from 'react-dom'
import MainMenu from './MainMenu.js'
import GameModeMenu from './GameModeMenu.js'
import GameStartWindow from './GameStartWindow.js'
import CharacterSelection from './CharacterSelection.js'
import AppStyles from './CSSFiles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      handleMainMenu: true,
      handleGameModeMenu: false,
      handleCharacterSelection: false,
      handleGameStartWindow: false
    };
    this.handleGameModeMenu = this.renderGameModeMenu.bind(this)
    this.handleCharacterSelection = this.renderCharacterSelection.bind(this)
    this.handleGameStartWindow = this.renderGameStartWindow.bind(this)
  };

  renderGameModeMenu() {
    console.log('Rendering the Game Mode Menu')
    this.setState({
      handleMainMenu: false,
      handleGameModeMenu: true
    }, () => {console.log(this.state);
    });
  }

  renderCharacterSelection() {
    console.log('Rendering the Character Selection Menu')
    this.setState({
      handleGameModeMenu: false,
      handleCharacterSelection: true
    }, () => {console.log(this.state);
    });
  }

  renderGameStartWindow() {
    console.log('Rendering the Game Start Window Menu')
    this.setState({
      handleCharacterSelection: false,
      handleGameStartWindow: true
    }, () => {console.log(this.state);
    });
  }

  render() {
    return(
      <div>
        <div>
          {this.state.handleMainMenu
          ? <MainMenu
              renderGameModeMenu = {this.handleGameModeMenu.bind(this)}
              />
          : null
          }
        </div>
        <div>
          {this.state.handleGameModeMenu
          ? <GameModeMenu
              renderCharacterSelection = {this.handleCharacterSelection.bind(this)}
              />
          : null
          }
        </div>
        <div>
          {this.state.handleCharacterSelection
          ? <CharacterSelection
              renderGameStartWindow = {this.handleGameStartWindow.bind(this)}
              />
          : null
          }
        </div>
        <div>
          {this.state.handleGameStartWindow
          ? <GameStartWindow />
          : null
          }
        </div>
      </div>
    )
  }
}

export default App;



// {this.state.handleCharacterSelection
// ? <CharacterSelection />
// : null}
// {this.state.handleGameStartWindow
// ? <GameStartWindow />
// : null}
