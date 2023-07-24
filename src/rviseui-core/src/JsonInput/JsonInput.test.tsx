import React from 'react'
import { itSupportsSystemProps, itSupportsInputProps, itSupportsFocusEvents, checkAccessibility } from '@rviseui/tests'
import { JsonInput, JsonInputProps } from './JsonInput'

const defaultProps: JsonInputProps = {
  label: 'test-label',
}

describe('@rviseui/core/JsonInput', () => {
  checkAccessibility([<JsonInput {...defaultProps} />])
  itSupportsFocusEvents(JsonInput, defaultProps, 'textarea')
  itSupportsInputProps(JsonInput, defaultProps, 'JsonInput')
  itSupportsSystemProps({
    component: JsonInput,
    props: defaultProps,
    displayName: '@rviseui/core/JsonInput',
    refType: HTMLTextAreaElement,
    excludeOthers: true,
  })
})
