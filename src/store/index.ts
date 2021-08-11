import { configureStore } from '@reduxjs/toolkit'
import authSliceReducer from './auth/authSlice'
import moviesSliceReducer from './movies/moviesSlice'
const store = configureStore({
  reducer: {
    authSliceReducer,
    moviesSliceReducer
  },
  devTools: true
})
export type RootState = ReturnType<typeof store.getState>

export default store
