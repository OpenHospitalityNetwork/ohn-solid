import { createSlice, isRejected, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface NotificationState {
  type: 'success' | 'error' | 'info' | ''
  title: string
  detail: string
}

const initialState: NotificationState = {
  type: '',
  title: '',
  detail: '',
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<NotificationState>) =>
      action.payload,
    clearNotification: () => initialState,
  },
  extraReducers: builder =>
    builder.addMatcher(isRejected, (_, action) => {
      return {
        type: 'error',
        title: (action.error.code ?? '' + ' ' + action.error.name ?? '').trim(),
        detail: action.error.message ?? '',
      }
    }),
})

export const { setNotification, clearNotification } = notificationSlice.actions

export const selectNotification = (state: RootState) => state.notification

export default notificationSlice.reducer
