import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../model/auth'
import { authLogin } from './authAction'
export interface IAuthSlice {
  email: string,
  isLogin: boolean,
}
const initialState: IAuthSlice = {
  email: '',
  isLogin: false
}
export const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(authLogin.fulfilled, (state, { payload }) => {
        state.email = (payload as IUser).email
        state.isLogin = true
    });
  },
})
export default authSlice.reducer
