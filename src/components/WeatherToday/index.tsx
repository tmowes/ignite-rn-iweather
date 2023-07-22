import { ImageBackground, Text, View } from 'react-native'

import dayjs from 'dayjs'

import { isDayTime } from '@utils/isDayTime'

import { styles } from './styles'
import { WeatherTodayProps } from './types'

export function WeatherToday(props: WeatherTodayProps) {
  const { city, weather } = props
  const today = dayjs(new Date()).format('dddd, DD [de] MMMM [de] YYYY')
  const isDay = isDayTime()

  const bgImg = isDay ? weather.details.bg_day : weather.details.bg_night
  const Icon = isDay ? weather.details?.icon_day : weather.details?.icon_night

  return (
    <ImageBackground style={styles.container} source={bgImg}>
      <View>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.day}>{today}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.details}>
          <Text style={styles.temperature}>{weather.temp}</Text>
          <Text style={styles.minMax}>
            {weather.temp_min} / {weather.temp_max}
          </Text>
          <Text style={styles.weather}>{weather.description}</Text>
        </View>
        <Icon width={160} height={160} />
      </View>
    </ImageBackground>
  )
}
