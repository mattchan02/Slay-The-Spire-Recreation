import { createSlice } from '@reduxjs/toolkit'

export const topbarSlice = createSlice({
  name: 'topbar',
  initialState: {
    currentGoldAmount: 99,
    currentHP: 45,
    maximumHP: 75
  },
  reducers: {
    increaseGoldSmall: (state) => {
      state.currentGoldAmount += Math.floor(Math.random() * 25) + 18;
    },
    increaseGoldMedium: (state) => {
      state.currentGoldAmount += Math.floor(Math.random() * 55) + 44;
    },
    increaseGoldSmall: (state) => {
      state.currentGoldAmount += Math.floor(Math.random() * 88) + 66;
    },
    increaseGold10ish: (state) => {
      state.currentGoldAmount += Math.floor(Math.random() * 20) + 10;
      console.log("Increase10ish")
    },
    increaseGold20ish: (state) => {
      state.currentGoldAmount += Math.floor(Math.random() * 30) + 20;
    },
    increaseGold30ish: (state) => {
      state.currentGoldAmount += Math.floor(Math.random() * 40) + 30;
    },
    increaseGold40ish: (state) => {
      state.currentGoldAmount += Math.floor(Math.random() * 50) + 40;
    },
    increaseGold50ish: (state) => {
      state.currentGoldAmount += Math.floor(Math.random() * 60) + 50;
    },
    increaseGold60ish: (state) => {
      state.currentGoldAmount += Math.floor(Math.random() * 70) + 60;
    },
    increaseGold70ish: (state) => {
      state.currentGoldAmount += Math.floor(Math.random() * 80) + 70;
    },
    increaseGold80ish: (state) => {
      state.currentGoldAmount += Math.floor(Math.random() * 90) + 80;
    },
    increaseGold90ish: (state) => {
      state.currentGoldAmount += Math.floor(Math.random() * 100) + 90;
    },
    increaseGold100ish: (state) => {
      state.currentGoldAmount += Math.floor(Math.random() * 150) + 100;
    },
    increaseGold150ish: (state) => {
      state.currentGoldAmount += Math.floor(Math.random() * 200) + 150;
    },
    increaseGold200ish: (state) => {
      state.currentGoldAmount += Math.floor(Math.random() * 250) + 200;
    },
    increaseGold250ish: (state) => {
      state.currentGoldAmount += Math.floor(Math.random() * 300) + 250;
    },
    increaseGold300ish: (state) => {
      state.currentGoldAmount += Math.floor(Math.random() * 400) + 300;
    },
    decreaseGoldSmall: (state) => {
      state.currentGoldAmount -= Math.floor(Math.random() * 25) + 18;
    },
    decreaseGoldSmall: (state) => {
      state.currentGoldAmount -= Math.floor(Math.random() * 25) + 18;
    },
    decreaseGoldSmall: (state) => {
      state.currentGoldAmount -= Math.floor(Math.random() * 25) + 18;
    },
    decreaseGold10ish: (state) => {
      state.currentGoldAmount -= Math.floor(Math.random() * 20) + 10;
    },
    decreaseGold20ish: (state) => {
      state.currentGoldAmount -= Math.floor(Math.random() * 30) + 20;
    },
    decreaseGold30ish: (state) => {
      state.currentGoldAmount -= Math.floor(Math.random() * 40) + 30;
    },
    decreaseGold40ish: (state) => {
      state.currentGoldAmount -= Math.floor(Math.random() * 50) + 40;
    },
    decreaseGold50ish: (state) => {
      state.currentGoldAmount -= Math.floor(Math.random() * 60) + 50;
    },
    decreaseGold60ish: (state) => {
      state.currentGoldAmount -= Math.floor(Math.random() * 70) + 60;
    },
    decreaseGold70ish: (state) => {
      state.currentGoldAmount -= Math.floor(Math.random() * 80) + 70;
    },
    decreaseGold80ish: (state) => {
      state.currentGoldAmount -= Math.floor(Math.random() * 90) + 80;
    },
    decreaseGold90ish: (state) => {
      state.currentGoldAmount -= Math.floor(Math.random() * 100) + 90;
    },
    decreaseGold100ish: (state) => {
      state.currentGoldAmount -= Math.floor(Math.random() * 150) + 100;
    },
    decreaseGold150ish: (state) => {
      state.currentGoldAmount -= Math.floor(Math.random() * 200) + 150;
    },
    decreaseGold200ish: (state) => {
      state.currentGoldAmount -= Math.floor(Math.random() * 250) + 200;
    },
    decreaseGold250ish: (state) => {
      state.currentGoldAmount -= Math.floor(Math.random() * 300) + 250;
    },
    decreaseGold300ish: (state) => {
      state.currentGoldAmount -= Math.floor(Math.random() * 400) + 300;
    },
    take5damage: (state) => {
      state.currentHP -= 5;
    },
    take10damage: (state) => {
      state.currentHP -= 10;
    },
    heal5damage: (state) => {
      state.currentHP += 5;
    },
    heal10damage: (state) => {
      state.currentHP += 10;
    },
  },
})

export const {
  increaseGoldSmall,
  increaseGoldMedium,
  increaseGoldLarge,
  increaseGold10ish,
  increaseGold20ish,
  increaseGold30ish,
  increaseGold40ish,
  increaseGold50ish,
  increaseGold60ish,
  increaseGold70ish,
  increaseGold80ish,
  increaseGold90ish,
  increaseGold100ish,
  increaseGold150ish,
  increaseGold200ish,
  increaseGold250ish,
  increaseGold300ish,
  decreaseGoldSmall,
  decreaseGoldMedium,
  decreaseGoldLarge,
  decreaseGold10ish,
  decreaseGold20ish,
  decreaseGold30ish,
  decreaseGold40ish,
  decreaseGold50ish,
  decreaseGold60ish,
  decreaseGold70ish,
  decreaseGold80ish,
  decreaseGold90ish,
  decreaseGold100ish,
  decreaseGold150ish,
  decreaseGold200ish,
  decreaseGold250ish,
  decreaseGold300ish,
  take5damage,
  take10damage,
  heal5damage,
  heal10damage,
} = topbarSlice.actions

export default topbarSlice.reducer
