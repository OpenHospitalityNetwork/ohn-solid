import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import offerReducer from '../features/offer/offerSlice'
import counterReducer from '../features/counter/counterSlice'
import loginReducer from '../features/login/loginSlice'

export const store = configureStore({
  reducer: {
    offer: offerReducer,
    counter: counterReducer,
    login: loginReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
