import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { RootState } from '../../app/store'
import { selectUser, selectUserOffers } from './userSlice'

const User = () => {
  const params = useParams<{ webId: string }>()
  const webId = decodeURIComponent(params.webId)
  const user = useSelector((state: RootState) => selectUser(state, webId))
  const offers = useSelector((state: RootState) =>
    selectUserOffers(state, webId),
  )
  return (
    <div>
      <p>
        <a href={user.id}>{user.name}</a>
      </p>
      <p>
        <img src={user.avatar} alt={`Image of ${user.name}`} />
      </p>
      <p>{user.about}</p>
      <ul>
        {offers.map(offer => (
          <li key={offer.id}>{JSON.stringify(offer)}</li>
        ))}
      </ul>
    </div>
  )
}

export default User
