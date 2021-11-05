import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Community from './Community'
import { joinCommunity, selectLoggedUser } from './communitySlice'
import {
  selectCommunities,
  selectCommunitiesOfLoggedUser,
} from './communitySlice'

const Communities = () => {
  const communities = useAppSelector(selectCommunities)
  const userCommunities = useAppSelector(selectCommunitiesOfLoggedUser)
  const loggedUser = useAppSelector(selectLoggedUser)
  const dispatch = useAppDispatch()
  return (
    <div className="flex flex-col items-center justify-evenly my-8">
      <header>
        <h1>Communities</h1>
      </header>
      <ul className="flex flex-wrap gap-6 justify-center">
        {communities.map(community => (
          <li key={community.id}>
            <Community
              key={community.id}
              community={community}
              isMember={
                userCommunities.includes(community) &&
                community.memberIds.includes(loggedUser.id)
              }
              onJoin={() => dispatch(joinCommunity(community))}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Communities
