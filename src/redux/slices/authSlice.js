import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    
    setToken: (state, action) => {
      state.token += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setToken } = authSlice.actions

export default authSlice.reducer