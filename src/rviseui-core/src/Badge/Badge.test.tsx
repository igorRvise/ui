import React from 'react'
import { render } from '@testing-library/react'
import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@rviseui/tests'
import { Badge, BadgeProps } from './Badge'

const defaultProps: BadgeProps = {}

describe('@rviseui/core/Badge', () => {
  itRendersChildren(Badge, defaultProps)
  itIsPolymorphic(Badge, defaultProps)
  itSupportsSystemProps({
    component: Badge,
    props: defaultProps,
    displayName: '@rviseui/core/Badge',
    refType: HTMLDivElement,
  })

  it('renders given left and right section', () => {
    const { container } = render(
      <Badge rightSection="test-right" leftSection="test-left">
        test
      </Badge>,
    )
    expect(container.querySelector('.rviseui-Badge-rightSection').textContent).toBe('test-right')
    expect(container.querySelector('.rviseui-Badge-leftSection').textContent).toBe('test-left')
  })
})
