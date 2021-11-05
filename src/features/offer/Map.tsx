import { LatLngTuple } from 'leaflet'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import React, { FC } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import PopupOffer from './PopupOffer'
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

const Map: FC<{ offers: Offer[] }> = ({ offers }) => {
  const position: LatLngTuple = [30, 0]

  return (
    <MapContainer center={position} zoom={2} className="w-screen h-screen">
      {/*<CurrentLocation />*/}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        {offers.map(offer => (
          <Marker key={offer.id} position={offer.position}>
            <Popup>
              <PopupOffer offer={offer} />
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  )
}

export default Map
