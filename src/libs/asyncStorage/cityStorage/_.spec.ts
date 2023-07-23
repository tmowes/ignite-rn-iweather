import { cityDataExample } from '@__tests__/examples/city'

import { getStorageCity, saveStorageCity, removeStorageCity } from '.'

describe('STORAGE: cityStorage', () => {
  it('should be return null when do not have a city storaged', async () => {
    const response = await getStorageCity()
    expect(response).toBeNull()
  })
  it('should be return city a city storaged', async () => {
    await saveStorageCity(cityDataExample[0])
    const response = await getStorageCity()
    expect(response).toHaveProperty('name', 'Blumenau')
  })

  it('should be return null when remove a city storaged', async () => {
    await saveStorageCity(cityDataExample[0])
    await removeStorageCity()
    const response = await getStorageCity()
    expect(response).toBeNull()
  })
})
