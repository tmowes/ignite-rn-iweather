import { View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Dashboard } from '@screens/Dashboard'

import { theme } from '@styles/theme'
import { useCity } from '@hooks/useCity'

import { AppRoutes } from './app.routes'

export function Routes() {
  const { city } = useCity()
  const { top: paddingTop } = useSafeAreaInsets()

  return (
    <View style={{ flex: 1, paddingTop, backgroundColor: theme.colors.gray_900 }}>
      <NavigationContainer>{city ? <Dashboard /> : <AppRoutes />}</NavigationContainer>
    </View>
  )
}
