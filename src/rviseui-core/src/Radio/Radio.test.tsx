import React from 'react'
import {
  checkAccessibility,
  itConnectsLabelAndInput,
  itSupportsSystemProps,
  itSupportsWrapperProps,
} from '@rviseui/tests'
import { Radio, RadioProps } from './Radio'
import { RadioGroup } from './RadioGroup/RadioGroup'

const defaultProps: RadioProps = {
  value: 'test-radio',
  label: 'test-radio-label',
}

describe('@rviseui/core/Radio', () => {
  itConnectsLabelAndInput(Radio, defaultProps)
  itSupportsWrapperProps(Radio, defaultProps)
  checkAccessibility([<Radio {...defaultProps} />])
  itSupportsSystemProps({
    component: Radio,
    props: defaultProps,
    displayName: '@rviseui/core/Radio',
    refType: HTMLInputElement,
    othersSelector: 'input',
    providerName: 'Radio',
  })

  it('exposes RadioGroup as a static component', () => {
    expect(Radio.Group).toBe(RadioGroup)
  })
})
