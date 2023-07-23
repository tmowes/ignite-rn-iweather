import {
  waitFor,
  act,
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from '@__tests__/utils/customRender'
import { apiCityByNameExample, apiCityForecastExample } from '@__tests__/examples/api'
import { saveStorageCity } from '@libs/asyncStorage/cityStorage'
import { cityDataExample } from '@__tests__/examples/city'

import { api } from '@services/api'

import { Dashboard } from '.'

describe('SCREEN: Dashboard', () => {
  beforeAll(async () => {
    await saveStorageCity(cityDataExample[0])
  })
  it('should be show city weather', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: apiCityForecastExample })
    render(<Dashboard />)
    const cityName = await waitFor(() => screen.findByText(/blumenau/i))
    expect(cityName).toBeTruthy()
  })
  it('should be show another selected city weather', async () => {
    await saveStorageCity(cityDataExample[1])

    jest
      .spyOn(api, 'get')
      .mockResolvedValueOnce({ data: apiCityForecastExample })
      .mockResolvedValueOnce({ data: apiCityByNameExample })
      .mockResolvedValueOnce({ data: apiCityForecastExample })

    render(<Dashboard />)
    await waitForElementToBeRemoved(() => screen.queryByTestId('loading'))

    const cityName = cityDataExample[0].name

    await waitFor(() =>
      act(() => {
        fireEvent.changeText(screen.getByTestId('search-input'), cityName)
      }),
    )
    await waitFor(() =>
      act(() => {
        fireEvent.press(screen.getByText(cityName, { exact: false }))
      }),
    )

    expect(screen.getByText(cityName, { exact: false })).toBeTruthy()
  })
})
