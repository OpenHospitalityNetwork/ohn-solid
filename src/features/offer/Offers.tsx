import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Map from './Map'
import { loadOffers, selectOffers } from './offerSlice'

const Offers = () => {
  const offers = useAppSelector(selectOffers)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(loadOffers())
  }, [dispatch])

  return <Map points={offers} />
}

export default Offers
