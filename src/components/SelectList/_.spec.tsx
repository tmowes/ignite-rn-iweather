import { render, screen, fireEvent } from '@testing-library/react-native'
import { cityDataExample } from '@__tests__/examples/city'

import { SelectList } from '.'

describe('COMPONENT: SelectList', () => {
  it('should be return selected city details', async () => {
    const onPress = jest.fn()
    render(<SelectList data={cityDataExample} onChange={() => true} onPress={onPress} />)
    const selectedCity = screen.getByText(/blumenau/i)
    fireEvent.press(selectedCity)
    expect(onPress).toBeCalledWith(cityDataExample[0])
  })
  it('not should be show options when data is empty', async () => {
    render(<SelectList data={[]} onChange={() => true} onPress={() => true} />)
    const options = screen.getByTestId('options')
    expect(options.children).toHaveLength(0)
  })
})
