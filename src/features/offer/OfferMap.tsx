import React from 'react'
import { useAppSelector } from '../../app/hooks'
import Map from './Map'
import { selectOffers } from './offerSlice'

const Offers = () => {
  const offers = useAppSelector(selectOffers)
  return <Map offers={offers} />
}

export default Offers
