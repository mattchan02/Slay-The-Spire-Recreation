import React from 'react'
import ReactDOM from 'react-dom'
import DeckBarStyles from './CSSFiles/DeckBarStyles.css'
import DiscardPileArray from './DiscardPileArray.js'
import ExhaustPileArray from './ExhaustPileArray.js'
import DeckArray from './DeckArray.js'
import HandArray from './HandArray.js'

export function DeckBar() {

  return(
    <div class="deckbar-whole">
      <table>
      <tr>
      <td class="deckbar-decknumber">
      Deck: {DeckArray.length}
      </td>
      <td class="deckbar-handnumber">
      Hand: {HandArray.length}
      </td>
      <td class="deckbar-discardnumber">
      Discard: {DiscardPileArray.length}
      </td>
      <td class="deckbar-exhaustnumber">
      Exhaust: {ExhaustPileArray.length}
      </td>
      </tr>
      </table>
    </div>
  )
}

export default DeckBar
