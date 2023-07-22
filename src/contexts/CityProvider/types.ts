import { ReactNode } from 'react'

import { CityProps } from '@services/getCityByNameService'

export type CityProviderProps = {
  children: ReactNode
}

export type CityContextData = {
  cityIsLoading: boolean
  city: CityProps | null
  onChanceCity: (city: CityProps) => void
}
