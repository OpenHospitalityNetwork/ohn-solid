import React, { FC } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import { Offer } from './types'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'

const Map: FC<{ points: Offer[] }> = ({ points }) => {
  const position: LatLngTuple = [54, 23]

  return (
    <MapContainer
      center={position}
      zoom={10}
      style={{ width: '100vw', height: '100vh' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        {points.map(({ id, position }) => (
          <Marker key={JSON.stringify(position)} position={position}>
            <Popup>There will be a basic user {id} info here, or not.</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  )
}

export default Map
