import { itSupportsClassName, itSupportsStyle } from '@rviseui/tests'
import { Thumb, ThumbProps } from './Thumb'

const defaultProps: ThumbProps = {
  __staticSelector: 'Test',
  position: { x: 0.4, y: 0.5 },
  size: 'sm',
}

describe('@rviseui/core/Thumb', () => {
  itSupportsClassName(Thumb, defaultProps)
  itSupportsStyle(Thumb, defaultProps)

  it('has correct displayName', () => {
    expect(Thumb.displayName).toStrictEqual('@rviseui/core/Thumb')
  })
})
