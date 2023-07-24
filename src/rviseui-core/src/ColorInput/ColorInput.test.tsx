import React from 'react'
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsWrapperProps,
  itSupportsInputProps,
  itSupportsFocusEvents,
} from '@rviseui/tests'
import { ColorInput, ColorInputProps } from './ColorInput'

const defaultProps: ColorInputProps = {
  label: 'test-label',
}

describe('@rviseui/core/ColorInput', () => {
  checkAccessibility([<ColorInput label="Color input" />, <ColorInput aria-label="Color input" />])
  itSupportsWrapperProps(ColorInput, defaultProps)
  itSupportsInputProps(ColorInput, defaultProps, 'ColorInput')
  itSupportsFocusEvents(ColorInput, defaultProps, 'input')
  itSupportsSystemProps({
    component: ColorInput,
    props: defaultProps,
    displayName: '@rviseui/core/ColorInput',
    refType: HTMLInputElement,
    othersSelector: 'input',
    providerName: 'ColorInput',
  })
})
