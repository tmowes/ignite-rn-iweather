import { weatherIcons } from '@utils/weatherIcons'

export type WeatherTodayProps = {
  city: string
  weather: WeatherToday
}

export type WeatherToday = {
  temp: string
  temp_min: string
  temp_max: string
  description: string
  details: typeof weatherIcons.Clouds
}
