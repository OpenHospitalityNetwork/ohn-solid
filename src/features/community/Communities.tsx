import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { joinCommunity } from './communitySlice'
import {
  selectCommunities,
  selectCommunitiesOfLoggedUser,
} from './communitySlice'

const Communities = () => {
  const communities = useAppSelector(selectCommunities)
  const userCommunities = useAppSelector(selectCommunitiesOfLoggedUser)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>Communities</h1>
      <ul>
        {communities.map(community => (
          <li key={community.id}>
            {community.name}{' '}
            {userCommunities.includes(community) ? (
              'Member'
            ) : (
              <button onClick={() => dispatch(joinCommunity(community.id))}>
                Join
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Communities
