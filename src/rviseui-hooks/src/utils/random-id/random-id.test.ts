import { randomId } from './random-id'

describe('@rviseui/hooks/random-id', () => {
  it('returns random id with rviseui- prefix', () => {
    expect(randomId().includes('rviseui-')).toBe(true)
    expect(randomId()).toHaveLength(17)
  })
})
