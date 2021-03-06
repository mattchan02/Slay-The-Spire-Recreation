import React from 'react'
import ReactDOM from 'react-dom'
import RelicsBarStyles from './CSSFiles/RelicsBarStyles.css'
import RelicsImages from './RelicsDatabase.js'
import Images from './ImageDatabase.js'
import { useSelector, useDispatch } from 'react-redux'
import {
  WillHaveStarterBurningBlood,
  WillNotHaveStarterBurningBlood,
  WillHaveAkabeko,
  WillNotHaveAkabeko,
  WillHaveAnchor,
  WillNotHaveAnchor,
  WillHaveAncientTeaSet,
  WillNotHaveAncientTeaSet,
} from './features/counter/relicbarSlice.js'

export function Relics() {
  const relicbar = useSelector(state => state.relicbar)
  const dispatch = useDispatch()

  return (
    <div class="relics-bar">
      <p class="relics-words">Relics: </p>
      {relicbar.HaveStarterBurningBlood === 1
      ? <div>
          <p>You have Burning Blood</p>
        </div>
      : null
      }
      {relicbar.HaveStarterAkabeko === 1
      ? <div>
          <p>You have Akabeko</p>
        </div>
      : null
      }
      <button onClick={() => dispatch(WillHaveStarterBurningBlood())}>Get Burning Blood</button>
      <button onClick={() => dispatch(WillNotHaveStarterBurningBlood())}>Remove Burning Blood</button>
    </div>
  )
}

export default Relics

// StarterBurningBlood: false,
// StarterRingOfTheSnake: false,
// StarterCrackedCore: false,
// HaveAkabeko: false,
// HaveAnchor: false,
// HaveAncientTeaSet: false,
// HaveArtOfWar: false,
// HaveAstrolabe: false,
// HaveBagOfMarbles: false,
// HaveBagOfPreparation: false,
// HaveBirdFacedUrn: false,
// HaveBlackBlood: false,
// HaveBlackStar: false,
// HaveBloodVial: false,
// HaveBloodyIdol: false,
// HaveBlueCandle: false,
// HaveBottledFlame: false,
// HaveBottledLightning: false,
// HaveBottledTornado: false,
// HaveBrimstone: false,
// HaveBronzeScales: false,
// HaveBustedCrown: false,
// HaveCalipers: false,
// HaveCallingBell: false,
// HaveCaptainsWheel: false,
// HaveCauldron: false,
// HaveCentennialPuzzle: false,
// HaveChampionBelt: false,
// HaveCharonsAshes: false,
// HaveChemicalX: false,
// HaveCirclet: false,
// HaveClockworkSouvenir: false,
// HaveCoffeeDripper: false,
// HaveCultistHeadpiece: false,
// HaveCursedKey: false,
// HaveDarkstonePeriapt: false,


// HaveDeadBranch: false,
// HaveDollysMirror: false,
// HaveDreamCatcher: false,
// HaveDuVuDoll: false,
// HaveEctoplasm: false,

// HaveEmptyCage: false,
// HaveEnchiridion: false,
// HaveEternalFeather: false,
// HaveFaceOfCleric: false,
// HaveFossilizedHelix: false,

// HaveFrozenEgg: false,
// HaveFrozenEye: false,
// HaveFusionHammer: false,
// HaveGamblingChip: false,
// HaveGinger: false,
// HaveGirya: false,
// HaveGoldenIdol: false,
// HaveGremlinHorn: false,
// HaveGremlinVisage: false,
// HaveHandDrill: false,
// HaveHappyFlower: false,
// HaveHornCleat: false,
// HaveHoveringKite: false,
// HaveIceCream: false,
// HaveIncenseBurner: false,
// HaveInkBottle: false,
// HaveInserter: false,
// HaveJuzuBracelet: false,
// HaveKunai: false,
// HaveLantern: false,
// HaveLeesWaffle: false,

// HaveLetterOpener: false,
// HaveLizardTail: false,
// HaveMagicFlower: false,
// HaveMango: false,
// HaveMarkOfPain: false,
// HaveMatryoshka: false,
// HaveMawBank: false,
// HaveMealTicket: false,
// HaveMeatOnTheBone: false,

// HaveMedicalKit: false,
// HaveMembershipCard: false,

// HaveMercuryHourglass: false,
// HaveMoltenEgg: false,
// HaveMummifiedHand: false,
// HaveMutagenicStrength: false,
// HaveNlothsGift: false,
// HaveNlothsHungryFace: false,
// HaveNecronomicon: false,
// HaveNeowsLament: false,
// HaveNilrysCodex: false,

// HaveNuclearBattery: false,
// HaveNunchaku: false,
// HaveOddMushroom: false,
// HaveOddlySmoothStone: false,
// HaveOldCoin: false,
// HaveOmamori: false,
// HaveOrangePellets: false,
// HaveOrichalcum: false,
// HaveOrnamentalFan: false,
// HaveOrrery: false,
// HavePandorasBox: false,
// HavePantograph: false,
// HavePaperKrane: false,
// HavePaperPhrog: false,
// HavePeacePipe: false,
// HavePear: false,
// HavePenNib: false,
// HavePhilosophersStone: false,
// HavePocketwatch: false,
// HavePotionBelt: false,
// HavePrayerWheel: false,

// HavePreservedInsect: false,
// HavePrismaticShard: false,
// HaveQuestionCard: false,
// HaveRedMask: false,
// HaveRedSkull: false,
// HaveRegalPillow: false,
// HaveRunicCapacitor: false,
// HaveRunicCube: false,
// HaveRunicDome: false,
// HaveRunicPyramind: false,
// HaveSacredBark: false,
// HaveSelfFormingClay: false,
// HaveShovel: false,
// HaveShuriken: false,
// HaveSingingBowl: false,
// HaveSlaversCollar: false,
// HaveSlingOfCourage: false,
// HaveSmilingMask: false,
// HaveSneckoEye: false,

// HaveSneckoSkull: false,
// HaveSozu: false,
// HaveSpiritPoop: false,
// HaveStoneCalendar: false,
// HaveStrangeSpoon: false,
// HaveStrawberry: false,
// HaveSundial: false,

// HaveTheAbacus: false,
// HaveTheBoot: false,
// HaveTheCourier: false,
// HaveTheSpecimen: false,
// HaveThreadAndNeedle: false,
// HaveTinyChest: false,
// HaveTinyHouse: false,
// HaveToolbox: false,
// HaveTorii: false,
// HaveToughBandages: false,
// HaveToxicEgg: false,
// HaveToyOrnithopter: false,
// HaveTungstenRod: false,
// HaveTurnip: false,
// HaveTwistedFunnel: false,
// HaveUnceasingTop: false,
// HaveVajra: false,
// HaveVelvetChoker: false,
// HaveWarPaint: false,
// HaveWarpedTongs: false,
// HaveWhetstone: false,
// HaveWhiteBeastStatue: false,
// HaveWingBoots: false,
//
