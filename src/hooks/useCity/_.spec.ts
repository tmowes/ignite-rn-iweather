import { renderHook, waitFor, act } from '@__tests__/utils/customRender'
import { cityDataExample } from '@__tests__/examples/city'

import { CityProvider } from '@contexts/CityProvider'

import { useCity } from '.'

describe('HOOK: useCity', () => {
  it('should be change the selected city', async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider })
    await waitFor(() => {
      act(() => {
        result.current.onChanceCity(cityDataExample[0])
      })
    })
    expect(result.current.city).toEqual(cityDataExample[0])
  })
})
