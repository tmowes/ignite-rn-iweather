import { DayData } from '@components/Day/types'
import { WeatherDetails } from '@components/WeatherDetails/types'
import { WeatherToday } from '@components/WeatherToday/types'
import { WeatherIconsKeysProps } from '@utils/weatherIcons'

export interface WeatherAPIResponseProps {
  list: {
    pop: number
    dt_txt: string
    main: {
      temp: number
      temp_min: number
      temp_max: number
      feels_like: number
      humidity: number
      temp_kf: number
    }
    wind: {
      speed: number
    }
    weather: {
      description: string
      main: WeatherIconsKeysProps
    }[]
  }[]
}

export type SearchCityWeatherProps = {
  latitude: number
  longitude: number
}

export type WeatherResponseProps = {
  today: {
    weather: WeatherToday
    details: WeatherDetails
  }
  nextDays: DayData[]
}
