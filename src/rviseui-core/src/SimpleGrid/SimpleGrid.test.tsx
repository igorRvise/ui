import React from 'react'
import { itRendersChildren, itSupportsSystemProps } from '@rviseui/tests'
import { SimpleGrid, SimpleGridProps } from './SimpleGrid'

const defaultProps: SimpleGridProps = {
  cols: 2,
  children: <span>test</span>,
}

describe('@rviseui/core/SimpleGrid', () => {
  itRendersChildren(SimpleGrid, defaultProps)
  itSupportsSystemProps({
    component: SimpleGrid,
    props: defaultProps,
    displayName: '@rviseui/core/SimpleGrid',
    refType: HTMLDivElement,
    providerName: 'SimpleGrid',
  })
})
