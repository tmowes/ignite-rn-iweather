import AsyncStorage from '@react-native-async-storage/async-storage'

import { CityProps } from '@services/getCityByNameService'

const STORAGE_KEY = '@ignite-rn-iweather:city'

export async function getStorageCity() {
  const storage = await AsyncStorage.getItem(STORAGE_KEY)

  return storage ? (JSON.parse(storage) as CityProps) : null
}

export async function saveStorageCity(city: CityProps) {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(city))
}

export async function removeStorageCity() {
  await AsyncStorage.removeItem(STORAGE_KEY)
}
