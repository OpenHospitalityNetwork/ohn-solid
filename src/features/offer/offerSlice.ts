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
    try {
      return await api.getOffersOfUser(webId)
    } catch (error) {
      // if we fail, we create hospex document
      await api.createHospexDocument(api.getHospexUri(webId))
      throw error
    }
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
  },
})

// Selectors
const selectRawOffers = (state: RootState) => state.offer
export const selectOffers = createSelector(
  selectRawOffers,
  ({ byId, allIds }) => allIds.map(id => byId[id]),
)

export default offerSlice.reducer
