import { configureStore } from '@reduxjs/toolkit'
import topbarReducer from '../features/counter/topbarSlice.js'
import relicbarReducer from '../features/counter/relicbarSlice.js'
import mapzoneReducer from '../features/counter/mapzoneSlice.js'

export default configureStore({
  reducer: {
    topbar: topbarReducer,
    relicbar: relicbarReducer,
    mapzone: mapzoneReducer,
  },
});
