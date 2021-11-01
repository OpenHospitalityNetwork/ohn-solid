import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { getUser } from '../user/userSlice'
import * as api from './communityAPI'
import { Community } from './types'

export interface CommunityState {
  byId: { [id: string]: Community }
  allIds: string[]
}

const initialState: CommunityState = {
  byId: {},
  allIds: [],
}

export const joinCommunity = createAsyncThunk(
  'community/join',
  async (communityId: string, { getState, dispatch }) => {
    const state = getState() as RootState
    const userId = state.login.webId
    await api.joinCommunity(communityId, userId)
    dispatch(getCommunity(communityId))
    return { userId, communityId }
  },
)

export const getCommunity = createAsyncThunk(
  'community/getCommunity',
  async (communityId: string, { getState, dispatch }) => {
    const community = await api.getCommunity(communityId)

    const state = getState() as RootState
    const userIds = state.user.allIds

    if (community) {
      community.memberIds.forEach(id => {
        if (!userIds.includes(id)) {
          dispatch(getUser(id))
        }
      })
    }

    return community
  },
)

export const getCommunitiesOfUser = createAsyncThunk(
  'community/getCommunitiesOfUser',
  async (webId: string, { getState, dispatch }) => {
    // fetch community ids of user
    const communities = await api.getCommunitiesOfUser(webId)

    // fetch communities that haven't been fetched before
    const state = getState() as RootState
    communities.forEach(community => {
      if (!state.community.allIds.includes(community)) {
        dispatch(getCommunity(community))
      }
    })
    return {
      userId: webId,
      communities,
    }
  },
)

export const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCommunity.fulfilled, (state, action) => {
      const community = action.payload
      if (community) {
        state.byId[community.id] = community
        if (!state.allIds.includes(community.id)) {
          state.allIds.push(community.id)
        }
      }
    })
  },
})

const selectCommunityIds = (state: RootState) => state.community.allIds

const selectCommunityDict = (state: RootState) => state.community.byId

export const selectCommunities = createSelector(
  selectCommunityIds,
  selectCommunityDict,
  (ids, dict) => ids.map(id => dict[id]).filter(community => !!community),
)

export const selectLoggedUser = createSelector(
  (state: RootState) => state.login.webId,
  (state: RootState) => state.user.byId,
  (webId, users) => users[webId],
)

export const selectCommunitiesOfLoggedUser = createSelector(
  selectLoggedUser,
  selectCommunityDict,
  (user, communityDict) =>
    user?.communityIds
      .map(id => communityDict[id])
      .filter(community => !!community) ?? [],
)

export default communitySlice.reducer
