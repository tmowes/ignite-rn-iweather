/* eslint-disable global-require */
export * from '@react-native-async-storage/async-storage/jest/async-storage-mock'

// eslint-disable-next-line no-undef
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
)
