import { useCallback, useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'

import { useCity } from '@hooks/useCity'
import { getCityByNameService } from '@services/getCityByNameService'
import { getWeatherByCityService } from '@services/getWeatherByCityService'
import { Loading } from '@components/Loading'
import { NextDays } from '@components/NextDays'
import { SelectList } from '@components/SelectList'
import { WeatherToday } from '@components/WeatherToday'
import { WeatherDetails } from '@components/WeatherDetails'
import { CityProps } from '@services/getCityByNameService/types'
import { WeatherResponseProps } from '@services/getWeatherByCityService/types'

import { styles } from './styles'

export function Dashboard() {
  const [isSearching, setIsSearching] = useState(false)
  const [search, setSearch] = useState('')
  const [cities, setCities] = useState<CityProps[]>([])
  const [isWeatherLoading, setWeatherIsLoading] = useState(true)
  const [weather, setWeather] = useState<WeatherResponseProps>({} as WeatherResponseProps)

  const { city, onChanceCity, cityIsLoading } = useCity()

  const onSelect = (value: CityProps) => {
    onChanceCity(value)
    setSearch('')
    setCities([])
  }

  const getWeatherDetails = useCallback(async () => {
    if (!city) return
    setWeatherIsLoading(true)

    const { latitude, longitude } = city
    const response = await getWeatherByCityService({ latitude, longitude })

    setWeather(response)
    setWeatherIsLoading(false)
  }, [city])

  async function getCities(newCity: string) {
    setIsSearching(true)

    const response = await getCityByNameService(newCity)

    setCities(response)
    setIsSearching(false)
  }

  useEffect(() => {
    if (search.trim().length === 0) return
    getCities(search)
    const debounce = setTimeout(() => getCities(search), 500)

    // eslint-disable-next-line consistent-return
    return () => {
      clearInterval(debounce)
    }
  }, [search])

  useEffect(() => {
    getWeatherDetails()
  }, [getWeatherDetails])

  if (isWeatherLoading || cityIsLoading || !city) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <SelectList
        data={cities}
        value={search}
        onChange={setSearch}
        onPress={onSelect}
        isLoading={isSearching}
        placeholder="Buscar local"
      />

      <WeatherToday city={city.name} weather={weather.today.weather} />

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <WeatherDetails data={weather.today.details} />
        <NextDays data={weather.nextDays} />
      </ScrollView>
    </View>
  )
}
