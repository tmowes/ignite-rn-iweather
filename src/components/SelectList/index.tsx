import { Text, TouchableOpacity, View } from 'react-native'

import { Input } from '@components/Input'

import { styles } from './styles'
import { SelectListProps } from './types'

export function SelectList(props: SelectListProps) {
  const { data, onChange, onPress, isLoading, placeholder, value } = props
  return (
    <View style={styles.container}>
      <Input
        placeholder={placeholder}
        onChangeText={onChange}
        isLoading={isLoading}
        value={value}
      />
      <View testID="options" style={styles.options}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.latitude}
            activeOpacity={0.7}
            onPress={() => onPress(item)}
          >
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}
