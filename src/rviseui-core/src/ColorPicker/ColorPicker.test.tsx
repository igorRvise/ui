import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { checkAccessibility, itSupportsSystemProps } from '@rviseui/tests'
import { DEFAULT_THEME } from '@rviseui/styles'
import { ColorPicker, ColorPickerProps } from './ColorPicker'

const swatches = DEFAULT_THEME.colors.red
const defaultProps: ColorPickerProps = {}

describe('@rviseui/core/ColorPicker', () => {
  itSupportsSystemProps({
    component: ColorPicker,
    props: defaultProps,
    displayName: '@rviseui/core/ColorPicker',
    refType: HTMLDivElement,
    providerName: 'ColorPicker',
  })

  checkAccessibility([
    <ColorPicker swatches={swatches} format="rgba" saturationLabel="Saturation" alphaLabel="Alpha" hueLabel="Hue" />,
  ])

  it('renders swatches list based on prop', () => {
    const { container: withSwatches } = render(<ColorPicker swatches={swatches} />)
    const { container: withoutSwatches } = render(<ColorPicker />)
    expect(withSwatches.querySelectorAll('.rviseui-ColorPicker-swatches')).toHaveLength(1)
    expect(withoutSwatches.querySelectorAll('.rviseui-ColorPicker-swatches')).toHaveLength(0)
  })

  it('renders AlphaSlider based on color format', () => {
    const { container: hex } = render(<ColorPicker format="hex" />)
    const { container: rgba } = render(<ColorPicker format="rgba" />)
    expect(hex.querySelectorAll('.rviseui-ColorPicker-slider')).toHaveLength(1)
    expect(rgba.querySelectorAll('.rviseui-ColorPicker-slider')).toHaveLength(2)
  })

  it('renders picker based on withPicker prop', () => {
    const { container: withPicker } = render(<ColorPicker withPicker />)
    const { container: withoutPicker } = render(<ColorPicker withPicker={false} />)
    expect(withPicker.querySelectorAll('.rviseui-ColorPicker-saturation')).toHaveLength(1)
    expect(withoutPicker.querySelectorAll('.rviseui-ColorPicker-saturation')).toHaveLength(0)
  })

  it('onChangeEnd should be called if clicked on swatch', () => {
    const spy = jest.fn()
    const { container } = render(<ColorPicker onChangeEnd={spy} format="hex" swatches={['#ffffff', '#000000']} />)
    fireEvent(container.querySelectorAll('.rviseui-ColorSwatch-root')[0], new MouseEvent('click', { bubbles: true }))
    expect(spy).toHaveBeenCalledWith('#ffffff')
  })
})
