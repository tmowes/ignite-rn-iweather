import { apiCityByNameExample } from '@__tests__/examples/api'

import { api } from '@services/api'

import { getCityByNameService } from '.'

const sut = getCityByNameService

describe('API: getCityByNameService', () => {
  it('should be return the city details', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: apiCityByNameExample })
    const response = await sut(apiCityByNameExample.name)
    expect(response.length).toBeGreaterThan(0)
  })
})
