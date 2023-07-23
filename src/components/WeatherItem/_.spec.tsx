import { render, screen } from '@testing-library/react-native'
import { weatherItemProps } from '@__tests__/examples/weatherItem'

import { WeatherItem } from '.'

describe('COMPONENT: WeatherItem', () => {
  it('should be show a title and value', () => {
    render(<WeatherItem {...weatherItemProps} />)
    const title = screen.queryByText(weatherItemProps.title)
    const value = screen.queryByText(weatherItemProps.value)
    expect(title).toBeTruthy()
    expect(value).toBeTruthy()
  })
})
