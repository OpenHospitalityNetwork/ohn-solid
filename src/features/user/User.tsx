import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { RootState } from '../../app/store'
import { selectUser } from './userSlice'

const User = () => {
  const params = useParams<{ webId: string }>()
  const webId = decodeURIComponent(params.webId)
  const user = useSelector((state: RootState) => selectUser(state, webId))
  return (
    <div>
      <p>
        <a href={user.id}>{user.name}</a>
      </p>
      <p>
        <img src={user.avatar} alt={`Image of ${user.name}`} />
      </p>
      <p>{user.about}</p>
    </div>
  )
}

export default User
