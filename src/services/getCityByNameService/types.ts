export type CityProps = {
  id: string
  name: string
  longitude: number
  latitude: number
}

export type CityAPIResponse = {
  id: string
  name: string
  sys: {
    country?: string
  }
  coord: {
    lon: number
    lat: number
  }
}
