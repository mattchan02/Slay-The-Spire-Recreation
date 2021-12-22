import { configureStore } from '@reduxjs/toolkit'
import relicReducer from '../features/counter/relicSlice.js'
import topbarReducer from '../features/counter/topbarSlice.js'

export default configureStore({
  reducer: {
    relics: relicReducer,
    topbar: topbarReducer,
  },
})
