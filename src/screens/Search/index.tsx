import { useEffect, useState } from 'react'
import { ImageBackground, Text, View, ScrollView } from 'react-native'

import Logo from '@assets/logo.svg'
import bg from '@assets/background.png'
import { useCity } from '@hooks/useCity'
import { SelectList } from '@components/SelectList'
import { getCityByNameService } from '@services/getCityByNameService'
import { CityProps } from '@services/getCityByNameService/types'

import { styles } from './styles'

export function Search() {
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [cities, setCities] = useState<CityProps[]>([])

  const { onChanceCity } = useCity()

  async function getCities(city: string) {
    setIsLoading(true)

    const response = await getCityByNameService(city)

    setCities(response)
    setIsLoading(false)
  }

  useEffect(() => {
    if (search.trim().length === 0) return

    const debounce = setTimeout(() => getCities(search), 500)

    // eslint-disable-next-line consistent-return
    return () => {
      clearInterval(debounce)
    }
  }, [search])

  return (
    <ScrollView>
      <ImageBackground
        source={bg}
        defaultSource={bg}
        style={styles.container}
        resizeMode="cover"
      >
        <Logo width={186} height={32} />

        <View style={styles.content}>
          <Text style={styles.title}>
            Boas vindas ao <Text style={styles.brand}>iWeather</Text>
          </Text>

          <Text style={styles.subtitle}>Escolha um local para ver a previsão do tempo</Text>

          <SelectList
            data={cities}
            onChange={setSearch}
            isLoading={isLoading}
            onPress={onChanceCity}
            placeholder="Buscar local"
          />
        </View>
      </ImageBackground>
    </ScrollView>
  )
}
