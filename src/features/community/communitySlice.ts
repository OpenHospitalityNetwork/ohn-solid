import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { Community } from './types'
import * as api from './communityAPI'
import { getUser } from '../user/userSlice'

export interface CommunityState {
  byId: { [id: string]: Community }
  allIds: string[]
}

const initialState: CommunityState = {
  byId: {},
  allIds: [],
}

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

export default communitySlice.reducer
