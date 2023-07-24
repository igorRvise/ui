import React from 'react'
import { checkAccessibility, itRendersChildren, itSupportsSystemProps } from '@rviseui/tests'
import { Spoiler, SpoilerProps } from './Spoiler'

const defaultProps: SpoilerProps = {
  maxHeight: 100,
  showLabel: 'show',
  hideLabel: 'hide',
  children: 'test-children',
}

describe('@rviseui/core/Spoiler', () => {
  checkAccessibility([<Spoiler {...defaultProps} />])
  itRendersChildren(Spoiler, defaultProps)
  itSupportsSystemProps({
    component: Spoiler,
    props: defaultProps,
    displayName: '@rviseui/core/Spoiler',
    refType: HTMLDivElement,
    providerName: 'Spoiler',
  })
})
