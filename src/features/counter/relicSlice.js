import { createSlice } from '@reduxjs/toolkit'

export const relicSlice = createSlice({
  name: 'relics',
  initialState: {
    haveBurningBlood: true,
  },
  reducers: {
    activateBurningBlood: (state) => {
      state.haveBurningBlood = true;
    },
  },
})

export const { activateBurningBlood } = relicSlice.actions

export default relicSlice.reducer
