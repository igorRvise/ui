import { itSupportsSystemProps } from '@rviseui/tests'
import { ColorSlider, ColorSliderProps } from './ColorSlider'

const defaultProps: ColorSliderProps = {
  value: 25,
  onChange: () => {},
  onChangeEnd: () => {},
  size: 'sm',
  maxValue: 360,
  overlays: [{ color: 'red' }],
  round: true,
}

describe('@rviseui/core/ColorSlider', () => {
  itSupportsSystemProps({
    component: ColorSlider,
    props: defaultProps,
    displayName: '@rviseui/core/ColorSlider',
    refType: HTMLDivElement,
  })
})
