import { Text, View } from 'react-native'

import { styles } from './styles'
import { WeatherItemProps } from './types'

export function WeatherItem(props: WeatherItemProps) {
  const { icon: Icon, title, value, isLast = false } = props
  return (
    <View style={[styles.container, !isLast && styles.borderBottom]}>
      <Icon width={24} height={24} />

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.value}>{value}</Text>
    </View>
  )
}
