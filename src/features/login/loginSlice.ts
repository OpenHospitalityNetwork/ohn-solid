import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { getUser } from '../user/userSlice'
import * as api from './loginAPI'

export interface LoginState {
  webId: string
  isLoggedIn: boolean
  status: 'success' | 'pending' | 'failed'
}

const initialState: LoginState = {
  webId: '',
  isLoggedIn: false,
  status: 'pending',
}

export const login = createAsyncThunk('login/login', api.login)

export const init = createAsyncThunk('login/init', async (_, { dispatch }) => {
  const data = await api.init()
  if (data?.isLoggedIn && data?.webId) {
    dispatch(getUser(data.webId))
  }
  return data
})

export const logout = createAsyncThunk('login/logout', api.logout)

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.status = 'pending'
      })
      .addCase(login.fulfilled, state => {
        state.status = 'success'
      })
      .addCase(init.fulfilled, (state, action) => {
        state.status = 'success'
        state.webId = action.payload?.webId ?? ''
        state.isLoggedIn = action.payload?.isLoggedIn ?? false
      })
      .addCase(logout.fulfilled, state => {
        state.isLoggedIn = initialState.isLoggedIn
        state.status = 'success'
        state.webId = initialState.webId
      })
  },
})

export const selectLogin = (state: RootState) => state.login

export default loginSlice.reducer
