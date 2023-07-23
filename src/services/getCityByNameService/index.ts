import { api } from '@services/api'

import { CityAPIResponse, CityProps } from './types'

export async function getCityByNameService(name: string): Promise<CityProps[]> {
  try {
    const { data } = await api.get<CityAPIResponse>(`/weather?q=${name}`)
    const city = {
      id: data.id,
      name: data.sys.country ? `${data.name}, ${data.sys.country}` : data.name,
      longitude: data.coord.lon,
      latitude: data.coord.lat,
    }
    return [city]
  } catch (error) {
    return []
  }
}
