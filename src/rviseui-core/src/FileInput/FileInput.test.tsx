import React from 'react'
import { checkAccessibility, itSupportsSystemProps, itSupportsFocusEvents, itSupportsInputProps } from '@rviseui/tests'
import { FileInput, FileInputProps } from './FileInput'

const defaultProps: FileInputProps = {}

describe('@rviseui/core/FileInput', () => {
  checkAccessibility([<FileInput placeholder="test-input" />, <FileInput aria-label="test-input" />])
  itSupportsInputProps(FileInput, defaultProps, 'FileInput')
  itSupportsFocusEvents(FileInput, defaultProps, 'button')
  itSupportsSystemProps({
    component: FileInput,
    props: defaultProps,
    displayName: '@rviseui/core/FileInput',
    refType: HTMLButtonElement,
    othersSelector: 'button',
    providerName: 'FileInput',
  })
})
