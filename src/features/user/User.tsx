import React from 'react'
import { useParams } from 'react-router'

const User = () => {
  const params = useParams<{ webId: string }>()
  const webId = decodeURIComponent(params.webId)
  return <div>User {webId}</div>
}

export default User
