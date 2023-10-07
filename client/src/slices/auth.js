/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const AUTH = 'auth'
const USER = 'userInfo'

const initialState = {
  userInfo: localStorage.getItem(USER)
    ? JSON.parse(localStorage.getItem(USER))
    : null,
}

const authSlice = createSlice({
  name: AUTH,
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload
      localStorage.setItem(USER, JSON.stringify(action.payload))
    },
    logout: (state, action) => {
      state.userInfo = null
      localStorage.removeItem(USER)
    },
  },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
