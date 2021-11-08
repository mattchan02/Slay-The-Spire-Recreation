import React from 'react'
import ReactDOM from 'react'
import EndTurnStyles from './CSSFiles/EndTurnStyles.css'

class EndTurn extends React.Component {
  constructor() {
    super();
    this.state = {
      playerTurn: true,
      enemyTurn: false,
    };
    this.playerTurn = this.goToPlayerTurn.bind(this)
    this.enemyTurn = this.goToEnemyTurn.bind(this)
  };

  goToPlayerTurn = () => {
    console.log('Enemy Turn ending, Player Turn now')
    this.setState({
      playerTurn: true,
      enemyTurn: false,
    });
    console.log(this.state)
  }

  goToEnemyTurn = () => {
    console.log('Player Turn ending, Enemy Turn now')
    this.setState({
      playerTurn: false,
      enemyTurn: true,
    });
    console.log(this.state)
  }

  render() {
    return(
      <div class="endturn-whole-div">
        <div class="endturn-outer-ring">
          {this.state.playerTurn
            ? <div
                class="endturn-inner-ring"
                onClick={this.goToEnemyTurn}
                >
                <div class="endturn-end-text"> End Turn </div>
              </div>
            : null
          }
          {this.state.enemyTurn
            ? <div
                class="endturn-inner-ring"
                onClick={this.goToPlayerTurn}
                >
                <div class="endturn-enemy-text"> Enemy Turn </div>
              </div>
            : null
          }
        </div>
      </div>
    )
  }
}

export default EndTurn
