import React from 'react'
import { RviseProvider } from '@rviseui/styles'
import { render } from '@testing-library/react'

export function itSupportsProviderDefaultProps<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  name: string,
  selector?: string,
) {
  it('supports default props on RviseProvider', () => {
    const { container } = render(
      <RviseProvider
        theme={{
          components: {
            [name]: {
              defaultProps: { 'data-provider-prop': 'test-provider-prop' },
            },
          },
        }}>
        <Component {...requiredProps} />
      </RviseProvider>,
    )

    const target = selector ? container.querySelector(selector) : container.firstChild
    expect(target).toHaveAttribute('data-provider-prop', 'test-provider-prop')
  })
}
