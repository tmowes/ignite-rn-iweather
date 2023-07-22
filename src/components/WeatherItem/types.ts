import { SvgProps } from 'react-native-svg'

export type WeatherItemProps = {
  icon: React.FC<SvgProps>
  title: string
  value: string
  isLast?: boolean
}
