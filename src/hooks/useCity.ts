import { useContext } from 'react'

import { CityContext } from '@contexts/CityProvider'

export function useCity() {
  return useContext(CityContext)
}
