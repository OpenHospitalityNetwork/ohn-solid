import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectLoggedUser } from '../community/communitySlice'
import { selectUserOffers } from '../user/userSlice'
import EditOfferForm from './EditOfferForm'
import OfferItem from './Offer'
import { getHospexUri } from './offerAPI'
import { createOffer, updateOffer } from './offerSlice'
import { Offer } from './types'

const Offers = () => {
  const user = useAppSelector(selectLoggedUser)
  const offers = useAppSelector(state => selectUserOffers(state, user.id))
  const dispatch = useAppDispatch()
  const document = getHospexUri(user.id)

  const [create, setCreate] = useState(false)
  const [edit, setEdit] = useState('')

  const offerToEdit = offers.find(offer => offer.id === edit)

  const handleClickAdd = () => {
    setCreate(true)
    setEdit('')
  }

  const handleClickEdit = (id: string) => {
    setEdit('')
    setCreate(false)
    setEdit(id)
  }

  const handleCreate = (offer: Offer) => {
    dispatch(createOffer({ offer, document }))
    setCreate(false)
  }

  const handleUpdate = (offer: Offer) => {
    dispatch(updateOffer({ offer, document }))
    setEdit('')
  }

  const handleCancel = () => {
    setCreate(false)
    setEdit('')
  }

  if (create)
    return (
      <EditOfferForm
        offer={{
          id: `${document}#offer${Date.now()}`,
          userId: user.id,
          position: [0, 0],
          about: {
            en: [''],
          },
        }}
        onSubmit={handleCreate}
        onCancel={handleCancel}
        submit="Create"
      />
    )

  if (offerToEdit)
    return (
      <EditOfferForm
        offer={offerToEdit}
        onSubmit={handleUpdate}
        onCancel={handleCancel}
        submit="Update"
      />
    )

  return (
    <div className="flex flex-col items-center justify-evenly">
      <header>
        <h1>
          Offers of{' '}
          <Link to={`/users/${encodeURIComponent(user.id)}`}>{user.name}</Link>
        </h1>
      </header>
      <ul className="flex flex-wrap gap-6 justify-center">
        {offers.map(offer => (
          <li key={offer.id}>
            <OfferItem
              offer={offer}
              onClickEdit={() => handleClickEdit(offer.id)}
            />
          </li>
        ))}
      </ul>
      <button onClick={handleClickAdd}>Add Offer</button>
    </div>
  )
}

export default Offers
