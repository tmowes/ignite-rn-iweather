import { render, screen } from '@testing-library/react-native'
import { nextDaysDataExample } from '@__tests__/examples/nextDays'

import { NextDays } from '.'

describe('COMPONENT: NextDays', () => {
  it('should be render a NextDays', () => {
    render(<NextDays data={nextDaysDataExample} />)
    const nextDays = screen.queryByText(nextDaysDataExample[2].day)
    expect(nextDays).toBeTruthy()
  })
})
