import React from 'react'
import { checkAccessibility, itSupportsSystemProps } from '@rviseui/tests'
import { HueSlider, HueSliderProps } from './HueSlider'

const defaultProps: HueSliderProps = {
  value: 150,
  onChange: () => {},
  onChangeEnd: () => {},
  size: 'sm',
}

describe('@rviseui/core/HueSlider', () => {
  checkAccessibility([<HueSlider {...defaultProps} aria-label="test-label" />])
  itSupportsSystemProps({
    component: HueSlider,
    props: defaultProps,
    displayName: '@rviseui/core/HueSlider',
    refType: HTMLDivElement,
  })
})
