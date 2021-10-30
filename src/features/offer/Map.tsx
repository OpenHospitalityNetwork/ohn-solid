import React, { FC } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import { Offer } from './types'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'

const Map: FC<{ points: Offer[] }> = ({ points }) => {
  const position: LatLngTuple = [50, 15]

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
        {points.map(offer => (
          <Marker key={offer.id} position={offer.position}>
            <Popup>
              <p>{offer.id}</p>
              <p>{offer.userId}</p>
              <p>
                {Object.entries(offer.about).map(([lang, texts]) => (
                  <li key={lang}>
                    <b>{lang}</b> <span>{texts.join('----')}</span>
                  </li>
                ))}
              </p>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  )
}

export default Map
