import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import {
  getCommunitiesOfUser,
  joinCommunity,
} from '../community/communitySlice'
import { getOffersOfUser } from '../offer/offerSlice'
import { User } from './types'
import * as api from './userAPI'

export interface UserState {
  byId: { [id: string]: User }
  allIds: string[]
}

const initialState: UserState = {
  byId: {},
  allIds: [],
}

export const getUser = createAsyncThunk(
  'user/fetchUser',
  async (webId: string, { dispatch }) => {
    const response = await api.getUser(webId)
    if (response && response.hospexDocuments.length > 0) {
      dispatch(getOffersOfUser(webId))
      dispatch(getCommunitiesOfUser(webId))
    }
    return response
  },
)

export const createHospexDocument = createAsyncThunk(
  'user/createHospexDocument',
  async ({ userId, documentId }: { userId: string; documentId: string }) => {
    await api.createHospexDocument(documentId)
    return { userId, documentId }
  },
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        const user = action.payload
        if (user) {
          state.byId[user.id] = user
          if (!state.allIds.includes(user.id)) {
            state.allIds.push(user.id)
          }
        }
      })
      .addCase(getCommunitiesOfUser.fulfilled, (state, action) => {
        const { userId, communities } = action.payload

        state.byId[userId].communityIds = communities
      })
      .addCase(joinCommunity.fulfilled, (state, action) => {
        const { userId, communityId } = action.payload
        if (!state.byId[userId].communityIds.includes(communityId))
          state.byId[userId].communityIds.push(communityId)
      })
      .addCase(createHospexDocument.fulfilled, (state, action) => {
        const { userId, documentId } = action.payload
        state.byId[userId].hospexDocuments.push(documentId)
      })
  },
})

export default userSlice.reducer

const selectUserId = (_: RootState, webId: string) => webId

export const selectUsers = (state: RootState) => state.user.byId

export const selectUser = createSelector(
  selectUserId,
  selectUsers,
  (webId, users) =>
    users[webId] ?? {
      id: webId,
      name: '',
      avatar: '',
      about: '',
      communityIds: [],
    },
)

const selectOffers = (state: RootState) => state.offer.byId

export const selectUserOffers = createSelector(
  selectUserId,
  selectOffers,
  (userId, offers) =>
    Object.values(offers).filter(offer => offer.userId === userId),
)

const selectCommunities = (state: RootState) => state.community.byId

export const selectUserCommunities = createSelector(
  selectUser,
  selectCommunities,
  (user, communities) =>
    Object.values(communities).filter(
      community =>
        user?.communityIds?.includes(community.id) &&
        community.memberIds.includes(user.id),
    ),
)
