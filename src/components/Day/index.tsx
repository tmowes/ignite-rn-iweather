import { Text, View } from 'react-native'

import { styles } from './styles'
import { DayProps } from './types'

export function Day(props: DayProps) {
  const { data } = props
  const { icon: Icon, day, max, min } = data

  return (
    <View style={styles.container}>
      <Text style={styles.day}>{day}</Text>
      <Icon width={56} height={56} />
      <Text style={styles.max}>{max}</Text>
      <Text style={styles.min}>{min}</Text>
    </View>
  )
}
