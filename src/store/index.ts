import { configureStore } from '@reduxjs/toolkit'
import authSliceReducer from './auth/authSlice'
const store = configureStore({
  reducer: {
    authSliceReducer
  },
  devTools: true
})
export type RootState = ReturnType<typeof store.getState>

export default store
