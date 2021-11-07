import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface OnboardingState {
  onboarding: boolean
  step: number
}

const initialState: OnboardingState = {
  onboarding: false,
  step: 0,
}

export const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setOnboarding: (state, action: PayloadAction<boolean>) => {
      state.onboarding = action.payload
    },
    incrementStep: state => {
      state.step++
    },
    decrementStep: state => {
      state.step--
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload
    },
  },
})

export const { setOnboarding, incrementStep, decrementStep, setStep } =
  onboardingSlice.actions

export const selectOnboarding = (state: RootState) => state.onboarding

export default onboardingSlice.reducer
