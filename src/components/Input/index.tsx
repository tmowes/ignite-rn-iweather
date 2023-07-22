import { View, TextInput, TextInputProps, ActivityIndicator } from 'react-native'

import { theme } from '@styles/theme'

import { styles } from './styles'
import { InputProps } from './types'

export function Input(props: InputProps) {
  const { isLoading = false, ...attrs } = props
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholderTextColor={theme.colors.gray_400} {...attrs} />
      {isLoading && <ActivityIndicator color={theme.colors.blue_light} />}
    </View>
  )
}
