import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import * as api from './offerAPI'
import { Offer } from './types'

export interface OfferState {
  byId: { [id: string]: Offer }
  allIds: string[]
}

const initialState: OfferState = {
  byId: {},
  allIds: [],
}

export const loadOffers = createAsyncThunk('offer/fetchOffers', async () => {
  const response = await api.fetchOffers()
  // The value we return becomes the `fulfilled` action payload
  return response
})

export const getOffersOfUser = createAsyncThunk(
  'offer/getOffersOfUser',
  async (webId: string) => {
    return await api.getOffersOfUser(webId)
  },
)

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadOffers.fulfilled, (state, action) => {
        action.payload.forEach(offer => {
          state.byId[offer.id] = offer
          if (!state.allIds.includes(offer.id)) {
            state.allIds.push(offer.id)
          }
        })
      })
      .addCase(getOffersOfUser.fulfilled, (state, action) => {
        action.payload.forEach(offer => {
          state.byId[offer.id] = offer
          if (!state.allIds.includes(offer.id)) {
            state.allIds.push(offer.id)
          }
        })
      })
  },
})

// export const { increment, decrement, incrementByAmount } = offerSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
const selectRawOffers = (state: RootState) => state.offer
export const selectOffers = createSelector(
  selectRawOffers,
  ({ byId, allIds }) => allIds.map(id => byId[id]),
)

export default offerSlice.reducer
