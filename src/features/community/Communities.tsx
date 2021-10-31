import React from 'react'
import { useAppSelector } from '../../app/hooks'
import {
  selectCommunities,
  selectCommunitiesOfLoggedUser,
} from './communitySlice'

const Communities = () => {
  const communities = useAppSelector(selectCommunities)
  const userCommunities = useAppSelector(selectCommunitiesOfLoggedUser)
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
              <button>Join</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Communities
