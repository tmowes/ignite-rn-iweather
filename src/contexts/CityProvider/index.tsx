import { createContext, useEffect, useMemo, useState } from 'react'

import { getStorageCity, saveStorageCity } from '@libs/asyncStorage/cityStorage'

import { CityProps } from '@services/getCityByNameService/types'

import { CityContextData, CityProviderProps } from './types'

export const CityContext = createContext<CityContextData>({} as CityContextData)

export function CityProvider({ children }: CityProviderProps) {
  const [cityIsLoading, setCityIsLoading] = useState(true)
  const [city, setCity] = useState<CityProps | null>(null)

  async function onChanceCity(selectedCity: CityProps) {
    setCityIsLoading(true)

    await saveStorageCity(selectedCity)
    setCity(selectedCity)

    setCityIsLoading(false)
  }

  useEffect(() => {
    setCityIsLoading(true)

    getStorageCity()
      .then((data) => setCity(data))
      .finally(() => setCityIsLoading(false))
  }, [])

  const providerValues = useMemo(
    () => ({
      city,
      cityIsLoading,
      onChanceCity,
    }),
    [city, cityIsLoading],
  )

  return <CityContext.Provider value={providerValues}>{children}</CityContext.Provider>
}
