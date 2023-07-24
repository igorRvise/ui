import React from 'react'
import { render, screen } from '@testing-library/react'
import {
  itRendersChildren,
  itSupportsSystemProps,
  checkAccessibility,
  itConnectsLabelAndInput,
  itSupportsWrapperProps,
  itHandlesBooleanState,
  itSupportsFocusEvents,
} from '@rviseui/tests'
import { Chip, ChipProps } from './Chip'

const defaultProps: ChipProps = {
  value: 'test-value',
  children: 'test-chip',
}

describe('@rviseui/core/Chip', () => {
  checkAccessibility([<Chip {...defaultProps} />])
  itRendersChildren(Chip, defaultProps)
  itConnectsLabelAndInput(Chip, defaultProps)
  itSupportsWrapperProps(Chip, defaultProps)
  itHandlesBooleanState(Chip, defaultProps)
  itSupportsFocusEvents(Chip, defaultProps, 'input')
  itSupportsSystemProps({
    component: Chip,
    props: defaultProps,
    displayName: '@rviseui/core/Chip',
    refType: HTMLInputElement,
    othersSelector: 'input',
    providerName: 'Chip',
  })

  it('displays checked icon when input is checked', () => {
    const { container: checked } = render(<Chip {...defaultProps} checked />)
    const { container: notChecked } = render(<Chip {...defaultProps} checked={false} />)
    expect(checked.querySelectorAll('.rviseui-Chip-checkIcon')).toHaveLength(1)
    expect(notChecked.querySelectorAll('.rviseui-Chip-checkIcon')).toHaveLength(0)
  })

  it('sets disabled attribute on input based on disabled prop', () => {
    render(<Chip {...defaultProps} disabled />)
    expect(screen.getByRole('checkbox')).toBeDisabled()
  })

  it('changes input type based on prop', () => {
    render(<Chip {...defaultProps} type="radio" />)
    expect(screen.getByRole('radio')).toBeInTheDocument()
  })
})
