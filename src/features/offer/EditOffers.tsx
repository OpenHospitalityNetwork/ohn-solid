import React, { useState, useEffect, FormEventHandler } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectLogin } from '../login/loginSlice'
import { selectUserOffers } from '../user/userSlice'
import { getHospexUri } from './offerAPI'
import { createOffer, updateOffer } from './offerSlice'
import { Offer } from './types'

const EditOffers = () => {
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

  if (create)
    return (
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
    <div>
      <h1>Edit offers</h1>
      <button onClick={handleClickAdd}>Add Offer</button>
      <ul>
        {offers.map(offer => (
          <li key={offer.id}>
            {JSON.stringify(offer)}{' '}
            <button onClick={() => handleClickEdit(offer.id)}>edit</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const EditOfferForm = ({
  offer,
  onSubmit,
  onCancel,
  submit,
}: {
  offer: Offer
  onSubmit: (offer: Offer) => void
  onCancel: () => void
  submit: 'Create' | 'Update'
}) => {
  const [editedOffer, setEditedOffer] = useState(offer)

  useEffect(() => {
    setEditedOffer(offer)
  }, [offer])

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
      <input type="submit" value={submit} />
      <input type="button" value="Cancel" onClick={onCancel} />
    </form>
  )
}

export default EditOffers
