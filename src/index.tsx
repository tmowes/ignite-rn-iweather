import { StatusBar } from 'react-native'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito'

import { CityProvider } from '@contexts/CityProvider'
import { Loading } from '@components/Loading'

import { Routes } from './routes'

export default function AppSrc() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold, Nunito_800ExtraBold })

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <CityProvider>{fontsLoaded ? <Routes /> : <Loading />}</CityProvider>
    </SafeAreaProvider>
  )
}
