import {
  renderHook,
  waitFor,
  act,
  render,
  screen,
  fireEvent,
} from '@__tests__/utils/customRender'
import { apiCityByNameExample } from '@__tests__/examples/api'

import { api } from '@services/api'

import { Search } from '.'

describe('SCREEN: search', () => {
  it('should be show city option', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: apiCityByNameExample })
    render(<Search />)
    const input = screen.getByTestId('search-input')
    fireEvent.changeText(input, 'Blumenau')
    const option = await waitFor(() => screen.findByText(/blumenau/i))
    expect(option).toBeTruthy()
  })
})
