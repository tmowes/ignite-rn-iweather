import { StyleSheet } from 'react-native'

import { theme } from '@styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray_900,
    padding: 20,
    paddingBottom: 0,
    gap: 8,
  },
  scroll: {
    gap: 8,
    paddingBottom: 32,
  },
})
