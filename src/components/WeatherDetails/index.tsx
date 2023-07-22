import { View } from 'react-native'

import sun from '@assets/sun.svg'
import rain from '@assets/rain.svg'
import wind from '@assets/wind.svg'
import drop from '@assets/drop.svg'
import thermometer from '@assets/thermometer.svg'
import { WeatherItem } from '@components/WeatherItem'

import { styles } from './styles'
import { WeatherDetailsProps } from './types'

export function WeatherDetails(props: WeatherDetailsProps) {
  const { data } = props
  const { temp_kf, humidity, feels_like, wind_speed, probability } = data
  return (
    <View style={styles.container}>
      <WeatherItem icon={thermometer} title="Sensação térmica" value={feels_like} />
      <WeatherItem icon={rain} title="Probabilidade de chuva" value={probability} />
      <WeatherItem icon={wind} title="Velocidade do vento" value={wind_speed} />
      <WeatherItem icon={drop} title="Umidade do ar" value={humidity} />
      <WeatherItem icon={sun} title="Índice UV" value={temp_kf} isLast />
    </View>
  )
}
