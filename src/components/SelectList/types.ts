import { CityProps } from '@services/getCityByNameService'

export type SelectListProps = {
  isLoading?: boolean
  placeholder?: string
  value?: string
  data: CityProps[]
  onChange: (value: string) => void
  onPress: (value: CityProps) => void
}
