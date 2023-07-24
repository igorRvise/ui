import React from 'react'
import { render } from '@testing-library/react'
import { checkAccessibility, itSupportsSystemProps, itSupportsFocusEvents, itIsPolymorphic } from '@rviseui/tests'
import { CloseButton, CloseButtonProps } from './CloseButton'

const defaultProps: CloseButtonProps = {}

describe('@rviseui/core/CloseButton', () => {
  checkAccessibility([<CloseButton aria-label="test" />, <CloseButton title="test" />])
  itSupportsFocusEvents(CloseButton, defaultProps, '.rviseui-ActionIcon-root')
  itIsPolymorphic(CloseButton, defaultProps)
  itSupportsSystemProps({
    component: CloseButton as any,
    props: defaultProps,
    displayName: '@rviseui/core/CloseButton',
    refType: HTMLButtonElement,
    providerName: 'CloseButton',
  })

  it('sets width and height on CloseIcon based on iconSize prop', () => {
    const { container } = render(<CloseButton iconSize={45} />)
    const svg = container.querySelector('svg')
    expect(svg.getAttribute('width')).toBe('45')
    expect(svg.getAttribute('height')).toBe('45')
  })
})
