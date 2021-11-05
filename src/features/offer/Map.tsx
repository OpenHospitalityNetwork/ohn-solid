import { LatLngTuple } from 'leaflet'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import React, { FC } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import { Offer } from './types'

/* uncomment CurrentLocation to go to user's current location
const CurrentLocation = () => {
  const map = useMap()
  useEffect(() => {
    map.locate()
  }, [map])
  useMapEvents({
    locationfound: e => map.setView(e.latlng, 4),
  })

  return null
}
*/

const Map: FC<{ points: Offer[] }> = ({ points }) => {
  const position: LatLngTuple = [30, 0]

  return (
    <MapContainer center={position} zoom={2} className="w-screen h-screen">
      {/*<CurrentLocation />*/}
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
