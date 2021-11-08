import React from 'react'
import ReactDOM from 'react-dom'

class BuffsAndDebuffs extends React.Component {
  constructor() {
    super();
    this.state = {
      ActiveBarrier: false,
      ActiveDoubleTap: false,
      ActiveDuplication: false,
      CounterBuffer: 0,
      DurationFrail: 0,
      DurationIntangible: 0,
      DurationRegen: 0,
      DurationVulnerable: 0,
      DurationWeak: 0,
      IntensityDexterity: 0,
      IntensityFlameBarrier: 0,
      IntensityMetallicize: 0,
      IntensityPlatedArmor: 0,
      IntensityRitual: 0,
      IntensityStrength: 0,
      IntensityStrengthDown: 0,
      IntensityThorns: 0,
      PowerIntensityBerserk: 0,
      PowerIntensityBrutality: 0,
      PowerIntensityCombust: 0,
      PowerIntensityDarkEmbrace: 0,
      PowerIntensityDemonForm: 0,
      PowerIntensityEvolve: 0,
      PowerIntensityFireBreathing: 0,
      PowerIntensityJuggernaut: 0
    };
  };

  render() {
    return(
      <div>
      </div>
    )
  }
}

export default BuffsAndDebuffs
