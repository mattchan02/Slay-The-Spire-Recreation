import { createSlice } from '@reduxjs/toolkit'

export const relicbarSlice = createSlice({
  name: 'relicbar',
  initialState: {
    HaveStarterBurningBlood: 0,
    HaveAkabeko: 0,
    HaveAnchor: 0,
    HaveAncientTeaSet: 0,
    HaveArtOfWar: 0,
    HaveAstrolabe: 0,
    HaveBadOfMarbles: 0,
    HaveBagOfPreparation: 0,
    HaveBirdFacedUrn: 0,
    HaveBlackBlood: 0,
    HaveBlackStar: 0,
    HaveBloodVial: 0,
    HaveBloodyIdol: 0,
    HaveBlueCandle: 0,
    HaveBottledFlame: 0,
    HaveBottledLightning: 0,
    HaveBottledTornado: 0,
    HaveBrimstone: 0,
    HaveBronzeScales: 0,
    HaveBustedCrown: 0,
    HaveCalipers: 0,
    HaveCallingBell: 0,
    HaveCaptainsWheel: 0,
    HaveCauldron: 0,
    HaveCentennialPuzzle: 0,
    HaveChampionBelt: 0,
    HaveCharonsAshes: 0,
    HaveChemicalX: 0,
    HaveCirclet: 0,
    HaveClockworkSouvenir: 0,
    HaveCoffeeDripper: 0,
    HaveCultistHeadpiece: 0,
    HaveCursedKey: 0,
    HaveDarkstonePeriapt: 0,
    HaveDataDisk: 0,
    HaveDeadBranch: 0,
    HaveDollysMirror: 0,
    HaveDreamCatcher: 0,
    HaveDuVuDoll: 0,
    HaveEctoplasm: 0,
    HaveEmotionChip: 0,
    HaveEmptyCage: 0,
    HaveEnchiridion: 0,
    HaveEternalFeather: 0,
    HaveFaceOfCleric: 0,
    HaveFossilizedHelix: 0,
    HaveFrozenCore: 0,
    HaveFrozenEgg: 0,
    HaveFrozenEye: 0,
    HaveFusionHammer: 0,
    HaveGamblingChip: 0,
    HaveGinger: 0,
    HaveGirya: 0,
    HaveGoldPlatedCables: 0,
    HaveGoldenIdol: 0,
    HaveGremlinHorn: 0,
    HaveGremlinVisage: 0,
    HaveHandDrill: 0,
    HaveHappyFlower: 0,
    HaveHornCleat: 0,
    HaveHoveringKite: 0,
    HaveIceCream: 0,
    HaveIncenseBurner: 0,
    HaveInkBottle: 0,
    HaveInserter: 0,
    HaveJuzuBracelet: 0,
    HaveKunai: 0,
    HaveLantern: 0,
    HaveLeesWaffle: 0,
    HaveLetterOpener: 0,
    HaveLizardTail: 0,
    HaveMagicFlower: 0,
    HaveMango: 0,
    HaveMarkOfPain: 0,
    HaveMatryoshka: 0,
    HaveMawBank: 0,
    HaveMealTicket: 0,
    HaveMeatOnTheBone: 0,
    HaveMedicalKit: 0,
    HaveMembershipCard: 0,
    HaveMercuryHourglass: 0,
    HaveMoltenEgg: 0,
    HaveMummifiedHand: 0,
    HaveMutagenicStrength: 0,
    HaveNlothsGift: 0,
    HaveNlothsHungryFace: 0,
    HaveNecronomicon: 0,
    HaveNeowsLament: 0,
    HaveNilrysCodex: 0,
    HaveNinjaScroll: 0,
    HaveNuclearBattery: 0,
    HaveNunchaku: 0,
    HaveOddMushroom: 0,
    HaveOddlySmoothStone: 0,
    HaveOldCoin: 0,
    HaveOmamori: 0,
    HaveOrangePellets: 0,
    HaveOrichalcum: 0,
    HaveOrnamentalFan: 0,
    HaveOrrery: 0,
    HavePandorasBox: 0,
    HavePantograph: 0,
    HavePaperKrane: 0,
    HavePaperPhrog: 0,
    HavePeacePipe: 0,
    HavePear: 0,
    HavePenNib: 0,
    HavePhilosophersStone: 0,
    HavePocketwatch: 0,
    HavePotionBelt: 0,
    HavePrayerWheel: 0,
    HavePreservedInsect: 0,
    HavePrismaticShard: 0,
    HaveQuestionCard: 0,
    HaveRedMask: 0,
    HaveRedSkull: 0,
    HaveRegalPillow: 0,
    HaveRingOfTheSerpent: 0,
    HaveRunicCapacitor: 0,
    HaveRunicCube: 0,
    HaveRunicDome: 0,
    HaveRunicPyramind: 0,
    HaveSacredBark: 0,
    HaveSelfFormingClay: 0,
    HaveShovel: 0,
    HaveShuriken: 0,
    HaveSingingBowl: 0,
    HaveSlaversCollar: 0,
    HaveSlingOfCourage: 0,
    HaveSmilingMask: 0,
    HaveSneckoEye: 0,
    HaveSneckoSkull: 0,
    HaveSozu: 0,
    HaveSpiritPoop: 0,
    HaveStoneCalendar: 0,
    HaveStrangeSpoon: 0,
    HaveStrawberry: 0,
    HaveSundial: 0,
    HaveSymbioticVirus: 0,
    HaveTheAbacus: 0,
    HaveTheBoot: 0,
    HaveTheCourier: 0,
    HaveTheSpecimen: 0,
    HaveThreadAndNeedle: 0,
    HaveTinyChest: 0,
    HaveTinyHouse: 0,
    HaveToolbox: 0,
    HaveTorii: 0,
    HaveToughBandages: 0,
    HaveToxicEgg: 0,
    HaveToyOrnithopter: 0,
    HaveTungstenRod: 0,
    HaveTurnip: 0,
    HaveTwistedFunnel: 0,
    HaveUnceasingTop: 0,
    HaveVajra: 0,
    HaveVelvetChoker: 0,
    HaveWarPaint: 0,
    HaveWarpedTongs: 0,
    HaveWhetstone: 0,
    HaveWhiteBeastStatue: 0,
    HaveWingBoots: 0,
    HaveWristBlade: 0,
  },
  reducers: {
    WillHaveStarterBurningBlood: (state) => {
      state.HaveStarterBurningBlood += 1;
      console.log('You have Burning Blood now')
    },
    WillNotHaveStarterBurningBlood: (state) => {
      state.HaveStarterBurningBlood -= 1;
    },
    WillHaveAkabeko: (state) => {
      state.HaveAkabeko += 1;
    },
    WillNotHaveAkabeko: (state) => {
      state.HaveAkabeko -= 1;
    },
    WillHaveAnchor: (state) => {
      state.HaveAnchor += 1;
    },
    WillNotHaveAnchor: (state) => {
      state.HaveAnchor -= 1;
    },
    WillHaveAncientTeaSet: (state) => {
      state.HaveAncientTeaSet += 1;
    },
    WillNotHaveAncientTeaSet: (state) => {
      state.HaveAncientTeaSet -= 1;
    },
    WillHaveArtOfWar: (state) => {
      state.HaveArtOfWar += 1;
    },
    WillNotHaveArtOfWar: (state) => {
      state.HaveArtOfWar -= 1;
    },
    WillHaveAstrolabe: (state) => {
      state.HaveAstrolabe += 1;
    },
    WillNotHaveAstrolabe: (state) => {
      state.HaveAstrolabe -= 1;
    },
    WillHaveBagOfMarbles: (state) => {
      state.HaveBagOfMarbles += 1;
    },
    WillNotHaveBagOfMarbles: (state) => {
      state.HaveBagOfMarbles -= 1;
    },
    WillHaveBagOfPreparation: (state) => {
      state.HaveBagOfPreparation += 1;
    },
    WillNotHaveBagOfPreparation: (state) => {
      state.HaveBagOfPreparation -= 1;
    },
    WillHaveBirdFacedUrn: (state) => {
      state.HaveBirdFacedUrn += 1;
    },
    WillNotHaveBirdFacedUrn: (state) => {
      state.HaveBirdFacedUrn -= 1;
    },
    WillHaveBlackBlood: (state) => {
      state.HaveBlackBlood += 1;
    },
    WillNotHaveBlackBlood: (state) => {
      state.HaveBlackBlood -= 1;
    },
    WillHaveBlackStar: (state) => {
      state.HaveBlackStar += 1;
    },
    WillNotHaveBlackStar: (state) => {
      state.HaveBlackStar -= 1;
    },
    WillHaveBloodVial: (state) => {
      state.HaveBloodVial += 1;
    },
    WillNotHaveBloodVial: (state) => {
      state.HaveBloodVial -= 1;
    },
    WillHaveBloodyIdol: (state) => {
      state.HaveBloodyIdol += 1;
    },
    WillNotHaveBloodyIdol: (state) => {
      state.HaveBloodyIdol -= 1;
    },
    WillHaveBlueCandle: (state) => {
      state.HaveBlueCandle += 1;
    },
    WillNotHaveBlueCandle: (state) => {
      state.HaveBlueCandle -= 1;
    },
    WillHaveBottledFlame: (state) => {
      state.HaveBottledFlame += 1;
    },
    WillNotHaveBottledFlame: (state) => {
      state.HaveBottledFlame -= 1;
    },
    WillHaveBottledLightning: (state) => {
      state.HaveBottledLightning += 1;
    },
    WillNotHaveBottledLightning: (state) => {
      state.HaveBottledLightning -= 1;
    },
    WillHaveBottledTornado: (state) => {
      state.HaveBottledTornado += 1;
    },
    WillNotHaveBottledTornado: (state) => {
      state.HaveBottledTornado -= 1;
    },
    WillHaveBrimstone: (state) => {
      state.HaveBrimstone += 1;
    },
    WillNotHaveBrimstone: (state) => {
      state.HaveBrimstone -= 1;
    },
    WillHaveBronzeScales: (state) => {
      state.HaveBronzeScales += 1;
    },
    WillNotHaveBronzeScales: (state) => {
      state.HaveBronzeScales -= 1;
    },
    WillHaveBustedCrown: (state) => {
      state.HaveBustedCrown += 1;
    },
    WillNotHaveBustedCrown: (state) => {
      state.HaveBustedCrown -= 1;
    },
    WillHaveCalipers: (state) => {
      state.HaveCalipers += 1;
    },
    WillNotHaveCalipers: (state) => {
      state.HaveCalipers -= 1;
    },
    WillHaveCallingBell: (state) => {
      state.HaveCallingBell += 1;
    },
    WillNotHaveCallingBell: (state) => {
      state.HaveCallingBell -= 1;
    },
    WillHaveCaptainsWheels: (state) => {
      state.HaveCaptainsWheel += 1;
    },
    WillNotHaveCaptainsWheel: (state) => {
      state.HaveCaptainsWheel -= 1;
    },
    WillHaveCauldron: (state) => {
      state.HaveCauldron += 1;
    },
    WillNotHaveCauldron: (state) => {
      state.HaveCauldron -= 1;
    },
    WillHaveCentennialPuzzle: (state) => {
      state.HaveCentennialPuzzle += 1;
    },
    WillNotHaveCentennialPuzzle: (state) => {
      state.HaveCentennialPuzzle -= 1;
    },
    WillHaveChampionBelt: (state) => {
      state.HaveChampionBelt += 1;
    },
    WillNotHaveChampionBelt: (state) => {
      state.HaveChampionBelt -= 1;
    },
    WillHaveCharonsAshes: (state) => {
      state.HaveCharonsAshes += 1;
    },
    WillNotHaveCharonsAshes: (state) => {
      state.HaveCharonsAshes -= 1;
    },
    WillHaveChemicalX: (state) => {
      state.HaveChemicalX += 1;
    },
    WillNotHaveChemicalX: (state) => {
      state.HaveChemicalX -= 1;
    },
    WillHaveCirclet: (state) => {
      state.HaveCirclet += 1;
    },
    WillNotHaveCirclet: (state) => {
      state.HaveCirclet -= 1;
    },
    WillHaveClockworkSouvenir: (state) => {
      state.HaveClockworkSouvenir += 1;
    },
    WillNotHaveClockworkSouvenir: (state) => {
      state.HaveClockworkSouvenir -= 1;
    },
    WillHaveCoffeeDripper: (state) => {
      state.HaveCoffeeDripper += 1;
    },
    WillNotHaveCoffeeDripper: (state) => {
      state.HaveCoffeeDripper -= 1;
    },
    WillHaveCultistHeadpiece: (state) => {
      state.HaveCultistHeadpiece += 1;
    },
    WillNotHaveCultistHeadpiece: (state) => {
      state.HaveCultistHeadpiece -= 1;
    },
    WillHaveCursedKey: (state) => {
      state.HaveCursedKey += 1;
    },
    WillNotHaveCursedKey: (state) => {
      state.HaveCursedKey -= 1;
    },
    WillHaveDarkstonePeriapt: (state) => {
      state.HaveDarkstonePeriapt += 1;
    },
    WillNotHaveDarkstonePeriapt: (state) => {
      state.HaveDarkstonePeriapt -= 1;
    },
    WillHaveDeadBranch: (state) => {
      state.HaveDeadBranch += 1;
    },
    WillNotHaveDeadBranch: (state) => {
      state.HaveDeadBranch -= 1;
    },
    WillHaveDollysMirror: (state) => {
      state.HaveDollysMirror += 1;
    },
    WillNotHaveDollysMirror: (state) => {
      state.HaveDollysMirror -= 1;
    },
    WillHaveDreamCatcher: (state) => {
      state.HaveDreamCatcher += 1;
    },
    WillNotHaveDreamCatcher: (state) => {
      state.HaveDreamCatcher -= 1;
    },
    WillHaveDuVuDoll: (state) => {
      state.HaveDuVuDoll += 1;
    },
    WillNotHaveDuVuDoll: (state) => {
      state.HaveDuVuDoll -= 1;
    },
    WillHaveEctoplasm: (state) => {
      state.HaveEctoplasm += 1;
    },
    WillNotHaveEctoplasm: (state) => {
      state.HaveEctoplasm -= 1;
    },
    WillHaveEmptyCage: (state) => {
      state.HaveEmptyCage += 1;
    },
    WillNotEmptyCage: (state) => {
      state.HaveEmptyCage -= 1;
    },
    WillHaveEnchiridion: (state) => {
      state.HaveEnchiridion += 1;
    },
    WillNotHaveEnchiridion: (state) => {
      state.HaveEnchirion -= 1;
    },
    WillHaveEternalFeather: (state) => {
      state.HaveEternalFeather += 1;
    },
    WillNotHaveEternalFeather: (state) => {
      state.HaveEternalFeather -= 1;
    },
    WillHaveFaceOfCleric: (state) => {
      state.HaveFaceOfCleric += 1;
    },
    WillNotHaveFaceOfCleric: (state) => {
      state.HaveFaceOfCleric -= 1;
    },
    WillHaveFossilizedHelix: (state) => {
      state.HaveFossilizedHelix += 1;
    },
    WillNotHaveFossilizedHelix: (state) => {
      state.HaveFossilizedHelix -= 1;
    },
    WillHaveFrozenEgg: (state) => {
      state.HaveFrozenEgg += 1;
    },
    WillNotHaveFrozenEgg: (state) => {
      state.HaveFrozenEgg -= 1;
    },
    WillHaveFrozenEye: (state) => {
      state.HaveFrozenEye += 1;
    },
    WillNotHaveFrozenEye: (state) => {
      state.HaveFrozenEye -= 1;
    },
    WillHaveFusionHammer: (state) => {
      state.HaveFusionHammer += 1;
    },
    WillNotHaveFusionHammer: (state) => {
      state.HaveFusionHammer -= 1;
    },
    WillHaveGamblingChip: (state) => {
      state.HaveGamblingChip += 1;
    },
    WillNotHaveGamblingChip: (state) => {
      state.HaveGamblingChip -= 1;
    },
    WillHaveGinger: (state) => {
      state.HaveGinger += 1;
    },
    WillNotHaveGinger: (state) => {
      state.HaveGinger -= 1;
    },
    WillHaveGirya: (state) => {
      state.HaveGirya += 1;
    },
    WillNotHaveGirya: (state) => {
      state.HaveGirya -= 1;
    },
    WillHaveGoldenIdol: (state) => {
      state.HaveGoldenIdol += 1;
    },
    WillNotHaveGoldenIdol: (state) => {
      state.HaveGoldenIdol -= 1;
    },
    WillHaveGremlinHorn: (state) => {
      state.HaveGremlinHorn += 1;
    },
    WillNotHaveGremlinHorn: (state) => {
      state.HaveGremlinHorn -= 1;
    },
    WillHaveGremlinVisage: (state) => {
      state.HaveGremlinVisage += 1;
    },
    WillNotHaveGremlinVisage: (state) => {
      state.HaveGremlinVisage -= 1;
    },
    WillHaveHandDrill: (state) => {
      state.HaveHandDrill += 1;
    },
    WillNotHaveHandDrill: (state) => {
      state.HaveHandDrill -= 1;
    },
    WillHaveHappyFlower: (state) => {
      state.HaveHappyFlower += 1;
    },
    WillNotHaveHappyFlower: (state) => {
      state.HaveHappyFlower -= 1;
    },
    WillHaveHornCleat: (state) => {
      state.HaveHornCleat += 1;
    },
    WillNotHaveHornCleat: (state) => {
      state.HaveHornCleat -= 1;
    },
    WillHaveHoveringKite: (state) => {
      state.HaveHoveringKite += 1;
    },
    WillNotHaveHoveringKite: (state) => {
      state.HaveHoveringKite -= 1;
    },
    WillHaveIceCream: (state) => {
      state.HaveIceCream += 1;
    },
    WillNotHaveIceCream: (state) => {
      state.HaveIceCream -= 1;
    },
    WillHaveIncenseBurner: (state) => {
      state.HaveIncenseBurner += 1;
    },
    WillNotHaveIncenseBurner: (state) => {
      state.HaveIncenseBurner -= 1;
    },
    WillHaveInkBottle: (state) => {
      state.HaveInkBottle += 1;
    },
    WillNotHaveInkBottle: (state) => {
      state.HaveInkBottle -= 1;
    },
    WillHaveInserter: (state) => {
      state.HaveInserter += 1;
    },
    WillNotHaveInserter: (state) => {
      state.HaveInserter -= 1;
    },
    WillHaveJuzuBracelet: (state) => {
      state.HaveJuzuBracelet += 1;
    },
    WillNotHaveJuzuBracelet: (state) => {
      state.HaveJuzuBracelet -= 1;
    },
    WillHaveKunai: (state) => {
      state.HaveKunai += 1;
    },
    WillNotHaveKunai: (state) => {
      state.HaveKunai -= 1;
    },
    WillHaveLantern: (state) => {
      state.HaveLantern += 1;
    },
    WillNotHaveLantern: (state) => {
      state.HaveLantern -= 1;
    },
    WillHaveLeesWaffle: (state) => {
      state.HaveLeesWaffle += 1;
    },
    WillNotHaveLeesWaffle: (state) => {
      state.HaveLeesWaffle -= 1;
    },
    WillHaveLetterOpener: (state) => {
      state.HaveLetterOpener += 1;
    },
    WillNotHaveLetterOpener: (state) => {
      state.HaveLetterOpener -= 1;
    },
    WillHaveLizardTail: (state) => {
      state.HaveLizardTail += 1;
    },
    WillNotHaveLizardTail: (state) => {
      state.HaveLizardTail -= 1;
    },
    WillHaveMagicFlower: (state) => {
      state.HaveMagicFlower += 1;
    },
    WillNotHaveMagicFlower: (state) => {
      state.HaveMagicFlower -= 1;
    },
    WillHaveMango: (state) => {
      state.HaveMango += 1;
    },
    WillNotHaveMango: (state) => {
      state.HaveMango -= 1;
    },
    WillHaveMarkOfPain: (state) => {
      state.HaveMarkOfPain += 1;
    },
    WillNotHaveMarkOfPain: (state) => {
      state.HaveMarkOfPain -= 1;
    },
    WillHaveMatryoshka: (state) => {
      state.HaveMatryoshka += 1;
    },
    WillNotHaveMatryoshka: (state) => {
      state.HaveMatryoshka -= 1;
    },
    WillHaveMawBank: (state) => {
      state.HaveMawBank += 1;
    },
    WillNotHaveMawBank: (state) => {
      state.HaveMawBank -= 1;
    },
    WillHaveMealTicket: (state) => {
      state.HaveMealTicket += 1;
    },
    WillNotHaveMealTicket: (state) => {
      state.HaveMealTicket -= 1;
    },
    WillHaveMeatOnTheBone: (state) => {
      state.HaveMeatOnTheBone += 1;
    },
    WillNotHaveMeatOnTheBone: (state) => {
      state.HaveMeatOnTheBone -= 1;
    },
    WillHaveMedicalKit: (state) => {
      state.HaveMedicalKit += 1;
    },
    WillNotHaveMedicalKit: (state) => {
      state.HaveMedicalKit -= 1;
    },
    WillHaveMembershipCard: (state) => {
      state.HaveMembershipCard += 1;
    },
    WillNotHaveMembershipCard: (state) => {
      state.HaveMembershipCard -= 1;
    },
    WillHaveMercuryHourglass: (state) => {
      state.HaveMercuryHourglass += 1;
    },
    WillNotHaveMercuryHourglass: (state) => {
      state.HaveMercuryHourglass -= 1;
    },
    WillHaveMoltenEgg: (state) => {
      state.HaveMoltenEgg += 1;
    },
    WillNotHaveMoltenEgg: (state) => {
      state.HaveMoltenEgg -= 1;
    },
    WillHaveMummifiedHand: (state) => {
      state.HaveMummifiedHand += 1;
    },
    WillNotHaveMummifiedHand: (state) => {
      state.HaveMummifiedHand -= 1;
    },
    WillHaveMutagenicStrength: (state) => {
      state.HaveMutagenicStrength += 1;
    },
    WillNotHaveMutagenicStrength: (state) => {
      state.HaveMutagenicStrength -= 1;
    },
    WillHaveNlothsGift: (state) => {
      state.HaveNlothsGift += 1;
    },
    WillNotHaveNlothsGift: (state) => {
      state.HaveNlothsGift -= 1;
    },
    WillHaveNlothsHungryFace: (state) => {
      state.HaveNlothsHungryFace += 1;
    },
    WillNotHaveNlothsHungryFace: (state) => {
      state.HaveNlothsHungryFace -= 1;
    },
    WillHaveNecronomicon: (state) => {
      state.HaveNecronomicon += 1;
    },
    WillNotHaveNecronomicon: (state) => {
      state.HaveNecronomicon -= 1;
    },
    WillHaveNeowsLament: (state) => {
      state.HaveNeowsLament += 1;
    },
    WillNotHaveNeowsLament: (state) => {
      state.HaveNeowsLament -= 1;
    },
    WillHaveNilrysCodex: (state) => {
      state.HaveNilrysCodex += 1;
    },
    WillNotHaveNilrysCodex: (state) => {
      state.HaveNilrysCodex -= 1;
    },
    WillHaveNuclearBattery: (state) => {
      state.HaveNuclearBattery += 1;
    },
    WillNotHaveNuclearBattery: (state) => {
      state.HaveNuclearBattery -= 1;
    },
    WillHaveNunchaku: (state) => {
      state.HaveNunchaku += 1;
    },
    WillNotHaveNunchaku: (state) => {
      state.HaveNunchaku -= 1;
    },
    WillHaveOddMushroom: (state) => {
      state.HaveOddMushroom += 1;
    },
    WillNotHaveOddMushroom: (state) => {
      state.HaveOddMushroom -= 1;
    },
    WillHaveOddlySmoothStone: (state) => {
      state.HaveOddlySmoothStone += 1;
    },
    WillNotHaveOddlySmoothStone: (state) => {
      state.HaveOddlySmoothStone -= 1;
    },
    WillHaveOldCoin: (state) => {
      state.HaveOldCoin += 1;
    },
    WillNotHaveOldCoin: (state) => {
      state.HaveOldCoin -= 1;
    },
    WillHaveOmamori: (state) => {
      state.HaveOmamori += 1;
    },
    WillNotHaveOmamori: (state) => {
      state.HaveOmamori -= 1;
    },
    WillHaveOrangePellets: (state) => {
      state.HaveOrangePellets += 1;
    },
    WillNotHaveOrangePellets: (state) => {
      state.HaveOrangePellets -= 1;
    },
    WillHaveOrichalcum: (state) => {
      state.HaveOrichalcum += 1;
    },
    WillNotHaveOrichalcum: (state) => {
      state.HaveOrichalcum -= 1;
    },
    WillHaveOrnamentalFan: (state) => {
      state.HaveOrnamentalFan += 1;
    },
    WillNotHaveOrnamentalFan: (state) => {
      state.HaveOrnamentalFan -= 1;
    },
    WillHaveOrrery: (state) => {
      state.HaveOrrery += 1;
    },
    WillNotHaveOrrery: (state) => {
      state.HaveOrrery -= 1;
    },
    WillHavePandorasBox: (state) => {
      state.HavePandorasBox += 1;
    },
    WillNotHavePandorasBox: (state) => {
      state.HavePandorasBox -= 1;
    },
    WillHavePantograph: (state) => {
      state.HavePantograph += 1;
    },
    WillNotHavePantograph: (state) => {
      state.HavePantograph -= 1;
    },
    WillHavePaperKrane: (state) => {
      state.HavePaperKrane += 1;
    },
    WillNotHavePaperKrane: (state) => {
      state.HavePaperKrane -= 1;
    },
    WillHavePaperPhrog: (state) => {
      state.HavePaperPhrog += 1;
    },
    WillNotHavePaperPhrog: (state) => {
      state.HavePaperPhrog -= 1;
    },
    WillHavePeacePipe: (state) => {
      state.HavePeacePipe += 1;
    },
    WillNotHavePeacePipe: (state) => {
      state.HavePeacePipe -= 1;
    },
    WillHavePear: (state) => {
      state.HavePear += 1;
    },
    WillNotHavePear: (state) => {
      state.HavePear -= 1;
    },
    WillHavePenNib: (state) => {
      state.HavePenNib += 1;
    },
    WillNotHavePenNib: (state) => {
      state.HavePenNib -= 1;
    },
    WillHavePhilosophersStone: (state) => {
      state.HavePhilosophersStone += 1;
    },
    WillNotHavePhilosophersStone: (state) => {
      state.HavePhilosophersStone -= 1;
    },
    WillHavePocketWatch: (state) => {
      state.HavePocketWatch += 1;
    },
    WillNotHavePocketWatch: (state) => {
      state.HavePocketWatch -= 1;
    },
    WillHavePotionBelt: (state) => {
      state.HavePotionBelt += 1;
    },
    WillNotHavePotionBelt: (state) => {
      state.HavePotionBelt -= 1;
    },
    WillHavePrayerWheel: (state) => {
      state.HavePrayerWheel += 1;
    },
    WillNotHavePrayerWheel: (state) => {
      state.HavePrayerWheel -= 1;
    },
    WillHavePreservedInsect: (state) => {
      state.HavePreservedInsect += 1;
    },
    WillNotHavePreservedInsect: (state) => {
      state.HavePreservedInsect -= 1;
    },
    WillHavePrismaticShard: (state) => {
      state.HavePrismaticShard += 1;
    },
    WillNotHavePrismaticShard: (state) => {
      state.HavePrismaticShard -= 1;
    },
    WillHaveQuestionCard: (state) => {
      state.HaveQuestionCard += 1;
    },
    WillNotHaveQuestionCard: (state) => {
      state.HaveQuestionCard -= 1;
    },
    WillHaveRedMask: (state) => {
      state.HaveRedMask += 1;
    },
    WillNotHaveRedMask: (state) => {
      state.HaveRedMask -= 1;
    },
    WillHaveRedSkull: (state) => {
      state.HaveRedSkull += 1;
    },
    WillNotHaveRedSkull: (state) => {
      state.HaveRedSkull -= 1;
    },
    WillHaveRegalPillow: (state) => {
      state.HaveRegalPillow += 1;
    },
    WillNotHaveRegalPillow: (state) => {
      state.HaveRegalPillow -= 1;
    },
    WillHaveRunicCapacitor: (state) => {
      state.HaveRunicCapacitor += 1;
    },
    WillNotHaveRunicCapacitor: (state) => {
      state.HaveRunicCapacitor -= 1;
    },
    WillHaveRunicCube: (state) => {
      state.HaveRunicCube += 1;
    },
    WillNotHaveRunicCube: (state) => {
      state.HaveRunicCube -= 1;
    },
    WillHaveRunicDome: (state) => {
      state.HaveRunicDome += 1;
    },
    WillNotHaveRunicDome: (state) => {
      state.HaveRunicDome -= 1;
    },
    WillHaveRunicPyramid: (state) => {
      state.HaveRunicPyramid += 1;
    },
    WillNotHaveRunicPyramid: (state) => {
      state.HaveRunicPyramid -= 1;
    },
    WillHaveSacredBark: (state) => {
      state.HaveSacredBark += 1;
    },
    WillNotHaveSacredBark: (state) => {
      state.HaveSacredBark -= 1;
    },
    WillHaveSelfFormingClay: (state) => {
      state.HaveSelfFormingClay += 1;
    },
    WillNotHaveSelfFormingClay: (state) => {
      state.HaveSelfFormingClay -= 1;
    },
    WillHaveShovel: (state) => {
      state.HaveShovel += 1;
    },
    WillNotHaveShovel: (state) => {
      state.HaveShovel -= 1;
    },
    WillHaveShuriken: (state) => {
      state.HaveShuriken += 1;
    },
    WillNotHaveShuriken: (state) => {
      state.HaveShuriken -= 1;
    },
    WillHaveSingingBowl: (state) => {
      state.HaveSingingBowl += 1;
    },
    WillNotHaveSingingBowl: (state) => {
      state.HaveSingingBowl -= 1;
    },
    WillHaveSlaversCollar: (state) => {
      state.HaveSlaversCollar += 1;
    },
    WillNotHaveSlaversCollar: (state) => {
      state.HaveSlaversCollar -= 1;
    },
    WillHaveSlingOfCourage: (state) => {
      state.HaveSlingOfCourage += 1;
    },
    WillNotHaveSlingOfCourage: (state) => {
      state.HaveSlingOfCourage -= 1;
    },
    WillHaveSmilingMask: (state) => {
      state.HaveSmilingMask += 1;
    },
    WillNotHaveSmilingMask: (state) => {
      state.HaveSmilingMask -= 1;
    },
    WillHaveSneckoEye: (state) => {
      state.HaveSneckoEye += 1;
    },
    WillNotHaveSneckoEye: (state) => {
      state.Have -= 1;
    },
    WillHaveSneckoSkull: (state) => {
      state.HaveSneckoSkull += 1;
    },
    WillNotHaveSneckoSkull: (state) => {
      state.HaveSneckoSkull -= 1;
    },
    WillHaveSozu: (state) => {
      state.HaveSozu += 1;
    },
    WillNotHaveSozu: (state) => {
      state.HaveSozu -= 1;
    },
    WillHaveSpiritPoop: (state) => {
      state.HaveSpiritPoop += 1;
    },
    WillNotHaveSpiritPoop: (state) => {
      state.HaveSpiritPoop -= 1;
    },
    WillHaveStoneCalendar: (state) => {
      state.HaveStoneCalendar += 1;
    },
    WillNotHaveStoneCalendar: (state) => {
      state.HaveStoneCalendar -= 1;
    },
    WillHaveStrangeSpoon: (state) => {
      state.HaveStrangeSpoon += 1;
    },
    WillNotHaveStrangeSpoon: (state) => {
      state.HaveStrangeSpoon -= 1;
    },
    WillHaveStrawberry: (state) => {
      state.HaveStrawberry += 1;
    },
    WillNotHaveStrawberry: (state) => {
      state.HaveStrawberry -= 1;
    },
    WillHaveSundial: (state) => {
      state.HaveSundial += 1;
    },
    WillNotHaveSundial: (state) => {
      state.HaveSundial -= 1;
    },
    WillHaveTheAbacus: (state) => {
      state.HaveTheAbacus += 1;
    },
    WillNotHaveTheAbacus: (state) => {
      state.HaveTheAbacus -= 1;
    },
    WillHaveTheBoot: (state) => {
      state.HaveTheBoot += 1;
    },
    WillNotHaveTheBoot: (state) => {
      state.HaveTheBoot -= 1;
    },
    WillHaveTheCourier: (state) => {
      state.HaveTheCourier += 1;
    },
    WillNotHaveTheCourier: (state) => {
      state.HaveTheCourier -= 1;
    },
    WillHaveTheSpecimen: (state) => {
      state.HaveTheSpecimen += 1;
    },
    WillNotHaveTheSpecimen: (state) => {
      state.HaveTheSpecimen -= 1;
    },
    WillHaveThreadAndNeedle: (state) => {
      state.HaveThreadAndNeedle += 1;
    },
    WillNotHaveThreadAndNeedle: (state) => {
      state.HaveThreadAndNeedle -= 1;
    },
    WillHaveTinyChest: (state) => {
      state.HaveTinyChest += 1;
    },
    WillNotHaveTinyChest: (state) => {
      state.HaveTinyChest -= 1;
    },
    WillHaveTinyHouse: (state) => {
      state.HaveTinyHouse += 1;
    },
    WillNotHaveTinyHouse: (state) => {
      state.HaveTinyHouse -= 1;
    },
    WillHaveToolbox: (state) => {
      state.HaveToolbox += 1;
    },
    WillNotHaveToolbox: (state) => {
      state.HaveToolbox -= 1;
    },
    WillHaveTorii: (state) => {
      state.HaveTorii += 1;
    },
    WillNotHaveTorii: (state) => {
      state.HaveTorii -= 1;
    },
    WillHaveToughBandages: (state) => {
      state.HaveToughBandages += 1;
    },
    WillNotHaveToughBandages: (state) => {
      state.HaveToughBandages -= 1;
    },
    WillHaveToxicEgg: (state) => {
      state.HaveToxicEgg += 1;
    },
    WillNotHaveToxicEgg: (state) => {
      state.HaveToxicEgg -= 1;
    },
    WillHaveToyOrnithopter: (state) => {
      state.HaveToyOrnithopter += 1;
    },
    WillNotHaveToyOrnithopter: (state) => {
      state.HaveToyOrnithopter -= 1;
    },
    WillHaveTungstenRod: (state) => {
      state.HaveTungstenRod += 1;
    },
    WillNotHaveTungstenRod: (state) => {
      state.HaveTungstenRod -= 1;
    },
    WillHaveTurnip: (state) => {
      state.HaveTurnip += 1;
    },
    WillNotHaveTurnip: (state) => {
      state.HaveTurnip -= 1;
    },
    WillHaveTwistedFunnel: (state) => {
      state.HaveTwistedFunnel += 1;
    },
    WillNotHaveTwistedFunnel: (state) => {
      state.HaveTwistedFunnel -= 1;
    },
    WillHaveUnceasingTop: (state) => {
      state.HaveUnceasingTop += 1;
    },
    WillNotHaveUnceasingTop: (state) => {
      state.HaveUnceasingTop -= 1;
    },
    WillHaveVajra: (state) => {
      state.HaveVajra += 1;
    },
    WillNotHaveVajra: (state) => {
      state.HaveVajra -= 1;
    },
    WillHaveVelvetChoker: (state) => {
      state.HaveVelvetChoker += 1;
    },
    WillNotHaveVelvetChoker: (state) => {
      state.HaveVelvetChoker -= 1;
    },
    WillHaveWarPaint: (state) => {
      state.HaveWarPaint += 1;
    },
    WillNotHaveWarPaint: (state) => {
      state.HaveWarPaint -= 1;
    },
    WillHaveWarpedTongs: (state) => {
      state.HaveWarpedTongs += 1;
    },
    WillNotHaveWarpedTongs: (state) => {
      state.HaveWarpedTongs -= 1;
    },
    WillHaveWhetstone: (state) => {
      state.HaveWhetstone += 1;
    },
    WillNotHaveWhetstone: (state) => {
      state.HaveWhetstone -= 1;
    },
    WillHaveWhiteBeastStatue: (state) => {
      state.HaveWhiteBeastStatue += 1;
    },
    WillNotHaveWhiteBeastStatue: (state) => {
      state.HaveWhiteBeastStatue -= 1;
    },
    WillHaveWingBoots: (state) => {
      state.HaveWingBoots += 1;
    },
    WillNotHaveWingBoots: (state) => {
      state.HaveWingBoots -= 1;
    },
  }
});

export const {
  WillHaveStarterBurningBlood,
  WillNotHaveStarterBurningBlood,
  WillHaveAkabeko,
  WillNotHaveAkabeko,
  WillHaveAnchor,
  WillNotHaveAnchor,
  WillHaveAncientTeaSet,
  WillNotHaveAncientTeaSet,
  WillHaveArtOfWar,
  WillNotHaveArtOfWar,
  WillHaveAstrolabe,
  WillNotHaveAstrolabe,
  WillHaveBagOfMarbles,
  WillNotHaveBagOfMarbles,
  WillHaveBagOfPreparation,
  WillNotHaveBagOfPreparation,
  WillHaveBirdFacedUrn,
  WillNotHaveBirdFacedUrn,
  WillHaveBlackBlood,
  WillNotHaveBlackBlood,
  WillHaveBlackStar,
  WillNotHaveBlackStar,
  WillHaveBloodVial,
  WillNotHaveBloodVial,
  WillHaveBloodyIdol,
  WillNotHaveBloodyIdol,
  WillHaveBlueCandle,
  WillNotHaveBlueCandle,
  WillHaveBottledFlame,
  WillNotHaveBottledFlame,
  WillHaveBottledLightning,
  WillNotHaveBottledLightning,
  WillHaveBottledTornado,
  WillNotHaveBottledTornado,
  WillHaveBrimstone,
  WillNotHaveBrimstone,
  WillHaveBronzeScales,
  WillNotHaveBronzeScales,
  WillHaveBustedCrown,
  WillNotHaveBustedCrown,
  WillHaveCalipers,
  WillNotHaveCalipers,
  WillHaveCallingBell,
  WillNotHaveCallingBell,
  WillHaveCaptainsWheels,
  WillNotHaveCaptainsWheel,
  WillHaveCauldron,
  WillNotHaveCauldron,
  WillHaveCentennialPuzzle,
  WillNotHaveCentennialPuzzle,
  WillHaveChampionBelt,
  WillNotHaveChampionBelt,
  WillHaveCharonsAshes,
  WillNotHaveCharonsAshes,
  WillHaveChemicalX,
  WillNotHaveChemicalX,
  WillHaveCirclet,
  WillNotHaveCirclet,
  WillHaveClockworkSouvenir,
  WillNotHaveClockworkSouvenir,
  WillHaveCoffeeDripper,
  WillNotHaveCoffeeDripper,
  WillHaveCultistHeadpiece,
  WillNotHaveCultistHeadpiece,
  WillHaveCursedKey,
  WillNotHaveCursedKey,
  WillHaveDarkstonePeriapt,
  WillNotHaveDarkstonePeriapt,
  WillHaveDeadBranch,
  WillNotHaveDeadBranch,
  WillHaveDollysMirror,
  WillNotHaveDollysMirror,
  WillHaveDreamCatcher,
  WillNotHaveDreamCatcher,
  WillHaveDuVuDoll,
  WillNotHaveDuVuDoll,
  WillHaveEctoplasm,
  WillNotHaveEctoplasm,
  WillHaveEmptyCage,
  WillNotHaveEmptyCage,
  WillHaveEnchiridion,
  WillNotHaveEnchiridion,
  WillHaveEternalFeather,
  WillNotHaveEternalFeather,
  WillHaveFaceOfCleric,
  WillNotHaveFaceOfCleric,
  WillHaveFossilizedHelix,
  WillNotHaveFossilizedHelix,
  WillHaveFrozenEgg,
  WillNotHaveFrozenEgg,
  WillHaveFrozenEye,
  WillNotHaveFrozenEye,
  WillHaveFusionHammer,
  WillNotHaveFusionHammer,
  WillHaveGamblingChip,
  WillNotHaveGamblingChip,
  WillHaveGinger,
  WillNotHaveGinger,
  WillHaveGirya,
  WillNotHaveGirya,
  WillHaveGoldenIdol,
  WillNotHaveGoldenIdol,
  WillHaveGremlinHorn,
  WillNotHaveGremlinHorn,
  WillHaveGremlinVisage,
  WillNotHaveGremlinVisage,
  WillHaveHandDrill,
  WillNotHaveHandDrill,
  WillHaveHappyFlower,
  WillNotHaveHappyFlower,
  WillHaveHornCleat,
  WillNotHaveHornCleat,
  WillHaveHoveringKite,
  WillNotHaveHoveringKite,
  WillHaveIceCream,
  WillNotHaveIceCream,
  WillHaveIncenseBurner,
  WillNotHaveIncenseBurner,
  WillHaveInkBottle,
  WillNotHaveInkBottle,
  WillHaveInserter,
  WillNotHaveInserter,
  WillHaveJuzuBracelet,
  WillNotHaveJuzuBracelet,
  WillHaveKunai,
  WillNotHaveKunai,
  WillHaveLantern,
  WillNotHaveLantern,
  WillHaveLeesWaffle,
  WillNotHaveLeesWaffle,
  WillHaveLetterOpener,
  WillNotHaveLetterOpener,
  WillHaveLizardTail,
  WillNotHaveLizardTail,
  WillHaveMagicFlower,
  WillNotHaveMagicFlower,
  WillHaveMango,
  WillNotHaveMango,
  WillHaveMarkOfPain,
  WillNotHaveMarkOfPain,
  WillHaveMatryoshka,
  WillNotHaveMatryoshka,
  WillHaveMawBank,
  WillNotHaveMawBank,
  WillHaveMealTicket,
  WillNotHaveMealTicket,
  WillHaveMeatOnTheBone,
  WillNotHaveMeatOnTheBone,
  WillHaveMedicalKit,
  WillNotHaveMedicalKit,
  WillHaveMembershipCard,
  WillNotHaveMembershipCard,
  WillHaveMercuryHourglass,
  WillNotHaveMercuryHourglass,
  WillHaveMoltenEgg,
  WillNotHaveMoltenEgg,
  WillHaveMummifiedHand,
  WillNotHaveMummifiedHand,
  WillHaveMutagenicStrength,
  WillNotHaveMutagenicStrength,
  WillHaveNlothsGift,
  WillNotHaveNlothsGift,
  WillHaveNlothsHungryFace,
  WillNotHaveNlothsHungryFace,
  WillHaveNecronomicon,
  WillNotHaveNecronomicon,
  WillHaveNeowsLament,
  WillNotHaveNeowsLament,
  WillHaveNilrysCodex,
  WillNotHaveNilrysCodex,
  WillHaveNuclearBattery,
  WillNotHaveNuclearBattery,
  WillHaveNunchaku,
  WillNotHaveNunchaku,
  WillHaveOddMushroom,
  WillNotHaveOddMushroom,
  WillHaveOddlySmoothStone,
  WillNotHaveOddlySmoothStone,
  WillHaveOldCoin,
  WillNotHaveOldCoin,
  WillHaveOmamori,
  WillNotHaveOmamori,
  WillHaveOrangePellets,
  WillNotHaveOrangePellets,
  WillHaveOrichalcum,
  WillNotHaveOrichalcum,
  WillHaveOrnamentalFan,
  WillNotHaveOrnamentalFan,
  WillHaveOrrery,
  WillNotHaveOrrery,
  WillHavePandorasBox,
  WillNotHavePandorasBox,
  WillHavePantograph,
  WillNotHavePantograph,
  WillHavePaperKrane,
  WillNotHavePaperKrane,
  WillHavePaperPhrog,
  WillNotHavePaperPhrog,
  WillHavePeacePipe,
  WillNotHavePeacePipe,
  WillHavePear,
  WillNotHavePear,
  WillHavePenNib,
  WillNotHavePenNib,
  WillHavePhilosophersStone,
  WillNotHavePhilosophersStone,
  WillHavePocketWatch,
  WillNotHavePocketWatch,
  WillHavePotionBelt,
  WillNotHavePotionBelt,
  WillHavePrayerWheel,
  WillNotHavePrayerWheel,
  WillHavePreservedInsect,
  WillNotHavePreservedInsect,
  WillHavePrismaticShard,
  WillNotHavePrismaticShard,
  WillHaveQuestionCard,
  WillNotHaveQuestionCard,
  WillHaveRedMask,
  WillNotHaveRedMask,
  WillHaveRedSkull,
  WillNotHaveRedSkull,
  WillHaveRegalPillow,
  WillNotHaveRegalPillow,
  WillHaveRunicCapacitor,
  WillNotHaveRunicCapacitor,
  WillHaveRunicCube,
  WillNotHaveRunicCube,
  WillHaveRunicDome,
  WillNotHaveRunicDome,
  WillHaveRunicPyramid,
  WillNotHaveRunicPyramid,
  WillHaveSacredBark,
  WillNotHaveSacredBark,
  WillHaveSelfFormingClay,
  WillNotHaveSelfFormingClay,
  WillHaveShovel,
  WillNotHaveShovel,
  WillHaveShuriken,
  WillNotHaveShuriken,
  WillHaveSingingBowl,
  WillNotHaveSingingBowl,
  WillHaveSlaversCollar,
  WillNotHaveSlaversCollar,
  WillHaveSlingOfCourage,
  WillNotHaveSlingOfCourage,
  WillHaveSmilingMask,
  WillNotHaveSmilingMask,
  WillHaveSneckoEye,
  WillNotHaveSneckoEye,
  WillHaveSneckoSkull,
  WillNotHaveSneckoSkull,
  WillHaveSozu,
  WillNotHaveSozu,
  WillHaveSpiritPoop,
  WillNotHaveSpiritPoop,
  WillHaveStoneCalendar,
  WillNotHaveStoneCalendar,
  WillHaveStrangeSpoon,
  WillNotHaveStrangeSpoon,
  WillHaveStrawberry,
  WillNotHaveStrawberry,
  WillHaveSundial,
  WillNotHaveSundial,
  WillHaveTheAbacus,
  WillNotHaveTheAbacus,
  WillHaveTheBoot,
  WillNotHaveTheBoot,
  WillHaveTheCourier,
  WillNotHaveTheCourier,
  WillHaveTheSpecimen,
  WillNotHaveTheSpecimen,
  WillHaveThreadAndNeedle,
  WillNotHaveThreadAndNeedle,
  WillHaveTinyChest,
  WillNotHaveTinyChest,
  WillHaveTinyHouse,
  WillNotHaveTinyHouse,
  WillHaveToolbox,
  WillNotHaveToolbox,
  WillHaveTorii,
  WillNotHaveTorii,
  WillHaveToughBandages,
  WillNotHaveToughBandages,
  WillHaveToxicEgg,
  WillNotHaveToxicEgg,
  WillHaveToyOrnithopter,
  WillNotHaveToyOrnithopter,
  WillHaveTungstenRod,
  WillNotHaveTungstenRod,
  WillHaveTurnip,
  WillNotHaveTurnip,
  WillHaveTwistedFunnel,
  WillNotHaveTwistedFunnel,
  WillHaveUnceasingTop,
  WillNotHaveUnceasingTop,
  WillHaveVajra,
  WillNotHaveVajra,
  WillHaveVelvetChoker,
  WillNotHaveVelvetChoker,
  WillHaveWarPaint,
  WillNotHaveWarPaint,
  WillHaveWarpedTongs,
  WillNotHaveWarpedTongs,
  WillHaveWhetstone,
  WillNotHaveWhetstone,
  WillHaveWhiteBeastStatue,
  WillNotHaveWhiteBeastStatue,
  WillHaveWingBoots,
  WillNotHaveWingBoots,
} = relicbarSlice.actions

export default relicbarSlice.reducer
