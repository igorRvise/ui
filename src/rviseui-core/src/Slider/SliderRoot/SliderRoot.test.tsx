import React from 'react'
import { itSupportsSystemProps } from '@rviseui/tests'
import { SliderRoot, SliderRootProps } from './SliderRoot'

const defaultProps: SliderRootProps = {
  size: 10,
  children: <div />,
  disabled: false,
}

describe('@rviseui/core/SliderRoot', () => {
  itSupportsSystemProps({
    component: SliderRoot,
    props: defaultProps,
    displayName: '@rviseui/core/SliderRoot',
    refType: HTMLDivElement,
  })
})
