import React from 'react'
import { render } from '@testing-library/react'
import { itSupportsSystemProps, itRendersChildren } from '@rviseui/tests'
import { InputLabel, InputLabelProps } from './InputLabel'

const defaultProps: InputLabelProps = {}

describe('@rviseui/core/InputLabel', () => {
  itRendersChildren(InputLabel, defaultProps)
  itSupportsSystemProps({
    component: InputLabel,
    props: defaultProps,
    displayName: '@rviseui/core/InputLabel',
    refType: HTMLLabelElement,
    providerName: 'InputLabel',
  })

  it('renders required asterisk if required prop is true', () => {
    render(<InputLabel required />)
    expect(document.querySelector('.rviseui-InputWrapper-required')).toBeInTheDocument()
  })

  it('does not render required asterisk if required prop is false', () => {
    render(<InputLabel required={false} />)
    expect(document.querySelector('.rviseui-InputWrapper-required')).not.toBeInTheDocument()
  })
})
