import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectLoggedUser } from '../community/communitySlice'
import { selectLogin } from '../login/loginSlice'
import { selectUserOffers } from '../user/userSlice'
import EditOfferForm from './EditOffer'
import OfferItem from './Offer'
import { getHospexUri } from './offerAPI'
import { createOffer, updateOffer } from './offerSlice'
import { Offer } from './types'

const Offers = () => {
  const user = useAppSelector(selectLoggedUser)
  const { webId: userId } = useAppSelector(selectLogin)
  const offers = useAppSelector(state => selectUserOffers(state, userId))
  const dispatch = useAppDispatch()
  const document = getHospexUri(userId)

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

  return (
    <div className="flex flex-col items-center justify-evenly my-8">
      <header>
        <h1>
          Offers of{' '}
          <Link to={`/users/${encodeURIComponent(userId)}`}>
            {user?.name ?? 'user'}
          </Link>
        </h1>
      </header>
      <ul className="flex flex-wrap gap-6 justify-center">
        {offers.map(offer => (
          <li key={offer.id}>
            {offer === offerToEdit ? (
              <EditOfferForm
                offer={offerToEdit}
                onSubmit={handleUpdate}
                onCancel={handleCancel}
                submit="Update"
              />
            ) : (
              <OfferItem
                offer={offer}
                editable
                onClickEdit={() => handleClickEdit(offer.id)}
              />
            )}
          </li>
        ))}
        <li>
          {create ? (
            <EditOfferForm
              offer={{
                id: `${document}#offer${Date.now()}`,
                userId,
                position: [51.477, 0],
                about: {
                  en: '',
                },
              }}
              onSubmit={handleCreate}
              onCancel={handleCancel}
              submit="Create"
            />
          ) : !edit ? (
            <button
              className="w-64 h-64 p-4 bg-blue-400 rounded flex items-center justify-center text-5xl font-bold text-indigo-50"
              onClick={handleClickAdd}
            >
              + Add
            </button>
          ) : null}
        </li>
      </ul>
    </div>
  )
}

export default Offers
