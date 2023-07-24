import React from 'react'
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsFocusEvents,
  itSupportsInputProps,
  itIsPolymorphic,
} from '@rviseui/tests'
import { InputBase, InputBaseProps } from './InputBase'

const defaultProps: InputBaseProps = {}

describe('@rviseui/core/Input', () => {
  checkAccessibility([<InputBase label="test-input" />, <InputBase aria-label="test-input" />])
  itSupportsInputProps(InputBase, defaultProps, 'InputBase')
  itSupportsFocusEvents(InputBase, defaultProps, 'input')
  itIsPolymorphic(InputBase, defaultProps, '.rviseui-InputBase-input')
  itSupportsSystemProps({
    component: InputBase,
    props: defaultProps,
    displayName: '@rviseui/core/InputBase',
    refType: HTMLInputElement,
    othersSelector: 'input',
    providerName: 'InputBase',
  })
})
