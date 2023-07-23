import { getNextDays } from '.'

const sut = getNextDays

describe('UTILS: getNextDays', () => {
  it('should be return the five next days', () => {
    const days = sut()
    expect(days).toHaveLength(5)
  })
})
