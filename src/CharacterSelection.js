import React from 'react'
import ReactDOM from 'react-dom'
import CharacterSelectionStyles from './CSSFiles/CharacterSelectionStyles.css'
import Images from './ImageDatabase.js'
import Relics from './RelicsDatabase.js'

class CharacterSelection extends React.Component {
  constructor() {
    super();
    this.state = {
      highlightCharacter1: true,
      highlightCharacter2: false,
      highlightCharacter3: false,
      highlightCharacter4: false
    };
    this.highlightCharacter1 = this.showcaseCharacter1.bind(this)
    this.highlightCharacter2 = this.showcaseCharacter2.bind(this)
    this.highlightCharacter3 = this.showcaseCharacter3.bind(this)
    this.highlightCharacter4 = this.showcaseCharacter4.bind(this)
  };

  showcaseCharacter1 = () => {
    console.log('Highlighting Character #1')
    this.setState({
      highlightCharacter1: true,
      highlightCharacter2: false,
      highlightCharacter3: false,
      highlightCharacter4: false
    });
    console.log(this.state)
  }

  showcaseCharacter2 = () => {
    console.log('Highlighting Character #2')
    this.setState({
      highlightCharacter1: false,
      highlightCharacter2: true,
      highlightCharacter3: false,
      highlightCharacter4: false
    });
    console.log(this.state)
  }

  showcaseCharacter3 = () => {
    console.log('Highlighting Character #3')
    this.setState({
      highlightCharacter1: false,
      highlightCharacter2: false,
      highlightCharacter3: true,
      highlightCharacter4: false
    });
    console.log(this.state)
  }

  showcaseCharacter4 = () => {
    console.log('Highlighting Character #4')
    this.setState({
      highlightCharacter1: false,
      highlightCharacter2: false,
      highlightCharacter3: false,
      highlightCharacter4: true
    });
    console.log(this.state)
  }

  render() {
    return(
      <div>
        {this.state.highlightCharacter1
          ? <div class="char-1-box">
              <div class="char-1-desc">
                <p class="desc-1-title"> The Ironclad </p>
                <img class="desc-1-heart" src={Images[11]} />
                <p class="desc-1-hp"> HP: 80/80 </p>
                <img class="desc-1-gold-picture" src={Images[12]} />
                <p class="desc-1-gold"> Gold: 99 </p>
                <p class="desc-1-intro"> The remaining soldier of the Ironclads.
                <br></br>Sold his soul to harness demonic energies. </p>
                <img class="desc-1-relic" src={Relics[0]} />
                <p class="desc-1-item"> Burning Blood </p>
                <p class="desc-1-itemdesc"> At the end of combat, heal 6 HP. </p>
              </div>
              <div class="char-buttons">
                <img
                  class="char-button-1"
                  src={Images[7]}
                  onMouseEnter={this.showcaseCharacter1}
                  />
                <img
                  class="char-button-2"
                  src={Images[8]}
                  onMouseEnter={this.showcaseCharacter2}
                  />
                <img
                  class="char-button-3"
                  src={Images[9]}
                  onMouseEnter={this.showcaseCharacter3}
                  />
                <img
                  class="char-button-4"
                  src={Images[10]}
                  onMouseEnter={this.showcaseCharacter4}
                  />
              </div>
            </div>
          : null
          }
        {this.state.highlightCharacter2
          ? <div class="char-2-box">
              <div class="char-2-desc">
                <p class="desc-1-title"> The Silent </p>
                <img class="desc-1-heart" src={Images[11]} />
                <p class="desc-1-hp"> HP: 70/70 </p>
                <img class="desc-1-gold-picture" src={Images[12]} />
                <p class="desc-1-gold"> Gold: 99 </p>
                <p class="desc-1-intro"> A deadly huntress from the foglands.
                <br></br>Eradicates foes with daggers and poisons. </p>
                <img class="desc-1-relic" src={Relics[1]} />
                <p class="desc-1-item"> Ring of the Snake </p>
                <p class="desc-1-itemdesc"> At the start of each combat, draw 2 additional cards. </p>
              </div>
              <div class="char-buttons">
                <img
                  class="char-button-1"
                  src={Images[7]}
                  onMouseEnter={this.showcaseCharacter1}
                  />
                <img
                  class="char-button-2"
                  src={Images[8]}
                  onMouseEnter={this.showcaseCharacter2}
                  />
                <img
                  class="char-button-3"
                  src={Images[9]}
                  onMouseEnter={this.showcaseCharacter3}
                  />
                <img
                  class="char-button-4"
                  src={Images[10]}
                  onMouseEnter={this.showcaseCharacter4}
                  />
              </div>
            </div>
          : null
          }
        {this.state.highlightCharacter3
          ? <div class="char-3-box">
              <div class="char-3-desc">
                <p class="desc-1-title"> The Defect </p>
                <img class="desc-1-heart" src={Images[11]} />
                <p class="desc-1-hp"> HP: 75/75 </p>
                <img class="desc-1-gold-picture" src={Images[12]} />
                <p class="desc-1-gold"> Gold: 99 </p>
                <p class="desc-1-intro"> A combat automaton which became self-aware.
                <br></br>Ancient Technology allows the manipulation of orbs. </p>
                <img class="desc-1-relic" src={Relics[2]} />
                <p class="desc-1-item"> Cracked Orb </p>
                <p class="desc-1-itemdesc"> At the start of each combat, Channel 1 lightning. </p>
              </div>
              <div class="char-buttons">
                <img
                  class="char-button-1"
                  src={Images[7]}
                  onMouseEnter={this.showcaseCharacter1}
                  />
                <img
                  class="char-button-2"
                  src={Images[8]}
                  onMouseEnter={this.showcaseCharacter2}
                  />
                <img
                  class="char-button-3"
                  src={Images[9]}
                  onMouseEnter={this.showcaseCharacter3}
                  />
                <img
                  class="char-button-4"
                  src={Images[10]}
                  onMouseEnter={this.showcaseCharacter4}
                  />
              </div>
            </div>
          : null
          }
        {this.state.highlightCharacter4
          ? <div class="char-4-box">
              <div class="char-4-desc">
                <p class="desc-1-title"> The Watcher </p>
                <img class="desc-1-heart" src={Images[11]} />
                <p class="desc-1-hp"> HP: 72/72 </p>
                <img class="desc-1-gold-picture" src={Images[12]} />
                <p class="desc-1-gold"> Gold: 99 </p>
                <p class="desc-1-intro"> A blind ascetic who has come to "Evaluate" the Spire.
                <br></br>Master of the divine stances. </p>
                <img class="desc-1-relic" src={Relics[3]} />
                <p class="desc-1-item"> Pure Water </p>
                <p class="desc-1-itemdesc"> At the start of each combat, add a Miracle into your hand </p>
              </div>
              <div class="char-buttons">
                <img
                  class="char-button-1"
                  src={Images[7]}
                  onMouseEnter={this.showcaseCharacter1}
                  />
                <img
                  class="char-button-2"
                  src={Images[8]}
                  onMouseEnter={this.showcaseCharacter2}
                  />
                <img
                  class="char-button-3"
                  src={Images[9]}
                  onMouseEnter={this.showcaseCharacter3}
                  />
                <img
                  class="char-button-4"
                  src={Images[10]}
                  onMouseEnter={this.showcaseCharacter4}
                  />
              </div>
            </div>
          : null
          }
      </div>

    )
  }
}

export default CharacterSelection
