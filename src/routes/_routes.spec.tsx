import { renderHook, render, screen, waitFor, act } from '@__tests__/utils/customRender'
import { saveStorageCity, removeStorageCity } from '@libs/asyncStorage/cityStorage'
import { cityDataExample } from '@__tests__/examples/city'
import { apiCityByNameExample, apiCityForecastExample } from '@__tests__/examples/api'

import { api } from '@services/api'

import { Routes } from '.'

describe('ROUTE: AppRoutes', () => {
  it('should be render search screen when not selected city', async () => {
    render(<Routes />)
    const title = await waitFor(() => screen.findByText(/^escolha um local/i))
    expect(title).toBeTruthy()
  })
  it('should be render dashboard screen when has a selected city', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: apiCityForecastExample })

    await saveStorageCity(cityDataExample[0])

    await act(() => waitFor(() => render(<Routes />)))

    const title = screen.getByText(cityDataExample[0].name)

    expect(title).toBeTruthy()
  })
})
