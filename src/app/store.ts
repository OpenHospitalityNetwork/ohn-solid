import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import offerReducer from '../features/offer/offerSlice'
import loginReducer from '../features/login/loginSlice'
import userReducer from '../features/user/userSlice'
import communityReducer from '../features/community/communitySlice'

export const store = configureStore({
  reducer: {
    offer: offerReducer,
    community: communityReducer,
    user: userReducer,
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
