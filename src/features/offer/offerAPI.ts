import { Offer } from './types'

// A mock function to mimic making an async request for data
export const fetchOffers = async (): Promise<Offer[]> => {
  const offers: Offer[] = []
  for (let i = 0; i < 40; i++) {
    for (let j = 0; j < 40; j++) {
      offers.push({
        id: `${i}_${j}`,
        position: [(Math.random() - 0.5) * 160, (Math.random() - 0.5) * 360],
      })
    }
  }
  return offers
}
