import React, { FormEventHandler, useEffect, useState } from 'react'
import { Offer } from './types'

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

export default EditOfferForm
