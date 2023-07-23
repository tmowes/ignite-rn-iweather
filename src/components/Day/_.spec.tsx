import { render, screen } from '@testing-library/react-native'
import { dayDataExample } from '@__tests__/examples/day'

import { Day } from '.'

describe('COMPONENT: Day', () => {
  it('should be render a day', () => {
    render(<Day data={dayDataExample} />)
    const day = screen.queryByText(dayDataExample.day)
    expect(day).toBeTruthy()
  })
})
