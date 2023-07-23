import { apiCityForecastExample } from '@__tests__/examples/api'

import { api } from '@services/api'

import { getWeatherByCityService } from '.'

const sut = getWeatherByCityService

describe('API: getWeatherByCityService', () => {
  it('should be return the city forecast formatted', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: apiCityForecastExample })

    const data = {
      longitude: apiCityForecastExample.city.coord.lon,
      latitude: apiCityForecastExample.city.coord.lat,
    }

    const response = await sut(data)
    expect(response).toHaveProperty('today')
  })
})
