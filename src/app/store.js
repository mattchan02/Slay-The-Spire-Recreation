import { configureStore } from '@reduxjs/toolkit'
import relicReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: relicReducer
  },
})
