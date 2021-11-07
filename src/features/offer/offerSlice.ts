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

export const getOffersOfUser = createAsyncThunk(
  'offer/getOffersOfUser',
  async (webId: string) => {
    return await api.getOffersOfUser(webId)
  },
)

export const createOffer = createAsyncThunk(
  'offer/create',
  async ({ offer, document }: { offer: Offer; document: string }) => {
    return await api.createOffer(offer, document)
  },
)

export const updateOffer = createAsyncThunk(
  'offer/update',
  async ({ offer, document }: { offer: Offer; document: string }) => {
    return await api.updateOffer(offer, document)
  },
)

export const removeOffer = createAsyncThunk(
  'offer/remove',
  async (offer: Offer) => {
    return await api.removeOffer(offer)
  },
)

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getOffersOfUser.fulfilled, (state, action) => {
        action.payload.forEach(offer => {
          state.byId[offer.id] = offer
          if (!state.allIds.includes(offer.id)) {
            state.allIds.push(offer.id)
          }
        })
      })
      .addCase(createOffer.fulfilled, (state, action) => {
        const offer = action.payload
        state.byId[offer.id] = offer
        state.allIds.push(offer.id)
      })
      .addCase(updateOffer.fulfilled, (state, action) => {
        const offer = action.payload
        state.byId[offer.id] = offer
      })
      .addCase(removeOffer.fulfilled, (state, action) => {
        const offer = action.payload
        delete state.byId[offer.id]
        state.allIds = state.allIds.filter(id => id !== offer.id)
      })
  },
})

// Selectors
const selectRawOffers = (state: RootState) => state.offer
export const selectOffers = createSelector(
  selectRawOffers,
  ({ byId, allIds }) => allIds.map(id => byId[id]),
)

export default offerSlice.reducer
