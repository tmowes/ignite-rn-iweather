import { View } from 'react-native'

import { Day } from '@components/Day'

import { styles } from './styles'
import { NextDaysProps } from './types'

export function NextDays(props: NextDaysProps) {
  const { data } = props
  return (
    <View style={styles.container}>
      {data.map((day) => (
        <Day key={day.day} data={day} />
      ))}
    </View>
  )
}
