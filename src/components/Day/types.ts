import { SvgProps } from 'react-native-svg'

export type DayProps = {
  data: DayData
}

export type DayData = {
  icon: React.FC<SvgProps>
  day: string
  weather: string
  max: string
  min: string
}
