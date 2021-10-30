import { FormEventHandler } from 'hoist-non-react-statics/node_modules/@types/react'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectLogin } from '../login/loginSlice'
import { selectUserOffers } from '../user/userSlice'
import { getHospexUri } from './offerAPI'
import { createOffer } from './offerSlice'
import { Offer } from './types'

const EditOffers = () => {
  const { webId: userId } = useAppSelector(selectLogin)
  const offers = useAppSelector(state => selectUserOffers(state, userId))
  const dispatch = useAppDispatch()
  const document = getHospexUri(userId)

  const [create, setCreate] = useState(false)

  const handleClickAdd = () => {
    setCreate(true)
  }

  const handleCreate = (offer: Offer) => {
    dispatch(createOffer({ offer, document }))
    setCreate(false)
  }

  const handleCancel = () => {
    setCreate(false)
  }

  return (
    <div>
      <h1>Edit offers</h1>
      <button onClick={handleClickAdd}>Add Offer</button>
      <ul>
        {offers.map(offer => (
          <li key={offer.id}>
            {JSON.stringify(offer)} <button>edit</button>
          </li>
        ))}
      </ul>
      {create && (
        <EditOfferForm
          offer={{
            id: `${document}#offer${Date.now()}`,
            userId,
            position: [0, 0],
            about: {
              en: [''],
            },
          }}
          onSubmit={handleCreate}
          onCancel={handleCancel}
        />
      )}
    </div>
  )
}

const EditOfferForm = ({
  offer,
  onSubmit,
  onCancel,
}: {
  offer: Offer
  onSubmit: (offer: Offer) => void
  onCancel: () => void
}) => {
  const [editedOffer, setEditedOffer] = useState(offer)

  const handleChangeAbout: React.ChangeEventHandler<HTMLInputElement> = e => {
    setEditedOffer(offer => ({
      ...offer,
      about: {
        en: [e.target.value],
      },
    }))
  }
  const handleChangeLat: React.ChangeEventHandler<HTMLInputElement> = e => {
    setEditedOffer(offer => ({
      ...offer,
      position: [+e.target.value, offer.position[1]],
    }))
  }
  const handleChangeLong: React.ChangeEventHandler<HTMLInputElement> = e => {
    setEditedOffer(offer => ({
      ...offer,
      position: [offer.position[0], +e.target.value],
    }))
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    onSubmit(editedOffer)
  }
  return (
    <form onSubmit={handleSubmit}>
      {offer.id}
      <br />
      <input
        value={editedOffer.about.en[0] ?? ''}
        onChange={handleChangeAbout}
        placeholder="about"
      />
      <br />
      <input
        type="number"
        value={editedOffer.position[0]}
        onChange={handleChangeLat}
        placeholder="lat"
      />
      <input
        type="number"
        value={editedOffer.position[1]}
        onChange={handleChangeLong}
        placeholder="long"
      />
      <br />
      <input type="submit" value="Create" />
      <input type="button" value="Cancel" onClick={onCancel} />
    </form>
  )
}

export default EditOffers
