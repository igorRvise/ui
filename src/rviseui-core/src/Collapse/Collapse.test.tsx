import React from 'react'
import { itRendersChildren, itSupportsSystemProps } from '@rviseui/tests'
import { Collapse, CollapseProps } from './Collapse'

const defaultProps: CollapseProps = {
  in: true,
  children: <div style={{ height: '300px' }} />,
}

describe('@rviseui/core/Collapse', () => {
  itRendersChildren(Collapse, defaultProps)
  itSupportsSystemProps({
    component: Collapse,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@rviseui/core/Collapse',
    providerName: 'Collapse',
  })
})
