import { LatLngTuple } from 'leaflet'
import React, { FormEventHandler, useEffect, useState } from 'react'
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet'
import { Offer } from './types'

const EditOffer = ({
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

  const handleChangeAbout: React.ChangeEventHandler<HTMLTextAreaElement> =
    e => {
      setEditedOffer(offer => ({
        ...offer,
        about: {
          en: [e.target.value],
        },
      }))
    }

  const handleChangePosition = (position: LatLngTuple) => {
    setEditedOffer((offer: Offer) => ({
      ...offer,
      position,
    }))
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    onSubmit(editedOffer)
  }

  return (
    <form
      className="w-64 p-4 bg-blue-200 rounded flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <section className="bg-yellow-200 p-2 -mb-4 text-sm italic">
        drag map to a new location
      </section>
      <LocationEdit
        location={editedOffer.position}
        onChange={handleChangePosition}
        className="w-56 h-56"
      />
      <textarea
        value={editedOffer.about.en[0] ?? ''}
        onChange={handleChangeAbout}
        placeholder="about"
      />
      <button className="bg-green-300 hover:bg-green-400" type="submit">
        {submit}
      </button>
      <button className="hover:bg-gray-100" type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  )
}

export default EditOffer

const normalizeLng = (lng: number) => (((lng % 360) - 180 * 3) % 360) + 180

const LocationDrag = ({
  onDrag,
}: {
  onDrag: (location: LatLngTuple) => void
}) => {
  const map = useMapEvents({
    drag: () => {
      const { lat, lng } = map.getCenter()
      onDrag([lat, normalizeLng(lng)])
      map.setView([lat, normalizeLng(lng)])
    },
  })

  return null
}

const LocationEdit: React.FC<{
  location: LatLngTuple
  onChange: (location: LatLngTuple) => void
  className?: string
}> = ({ location, className = '', onChange }) => {
  return (
    <MapContainer
      attributionControl={false}
      center={location}
      zoom={12}
      scrollWheelZoom="center"
      doubleClickZoom="center"
      touchZoom="center"
      className={className}
    >
      <LocationDrag onDrag={onChange} />
      <TileLayer url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png" />
      <Marker position={location} />
    </MapContainer>
  )
}
