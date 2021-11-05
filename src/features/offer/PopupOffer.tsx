import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { useAppSelector } from '../../app/hooks'
import { selectUser } from '../user/userSlice'
import { Offer } from './types'

const PopupOffer: React.FC<{ offer: Offer }> = ({ offer }) => {
  const user = useAppSelector(state => selectUser(state, offer.userId))
  return (
    <div>
      <Link
        to={`/users/${encodeURIComponent(user.id)}`}
        className="flex gap-2 items-center"
      >
        {user.avatar ? (
          <img src={user.avatar} className="h-8 rounded" />
        ) : (
          <FaUser className="h-8" />
        )}
        {user.name}
      </Link>
      <p className="whitespace-pre-line text-justify w-56">{offer.about.en}</p>
    </div>
  )
}

export default PopupOffer
