import { LatLngTuple } from 'leaflet'
import React, { MouseEventHandler } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { Offer as OfferType } from './types'

const Offer: React.FC<{
  offer: OfferType
  onClickEdit: MouseEventHandler<HTMLButtonElement>
}> = ({ offer, onClickEdit }) => (
  <div className="w-64 p-4 bg-blue-50 rounded flex flex-col gap-4">
    <Location location={offer.position} className="w-56 h-56" />
    <section className="">{offer.about.en}</section>
    <button className="bg-white" onClick={onClickEdit}>
      edit
    </button>
  </div>
)

export default Offer

const Location: React.FC<{ location: LatLngTuple; className?: string }> = ({
  location,
  className = '',
}) => {
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
      <TileLayer url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png" />
      <Marker position={location} />
    </MapContainer>
  )
}
