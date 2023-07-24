import { itIsPolymorphic, itSupportsSystemProps } from '@rviseui/tests'
import { ColorSwatch, ColorSwatchProps } from './ColorSwatch'

const defaultProps: ColorSwatchProps = {
  color: '#fff',
}

describe('@rviseui/core/ColorSwatch', () => {
  itIsPolymorphic(ColorSwatch as any, defaultProps)
  itSupportsSystemProps({
    component: ColorSwatch,
    props: defaultProps,
    displayName: '@rviseui/core/ColorSwatch',
    refType: HTMLDivElement,
    providerName: 'ColorSwatch',
  })
})
