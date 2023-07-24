import { itRendersChildren, itSupportsSystemProps } from '@rviseui/tests'
import { AspectRatio, AspectRatioProps } from './AspectRatio'

const defaultProps: AspectRatioProps = {
  ratio: 16 / 9,
}

describe('@rviseui/core/AspectRatio', () => {
  itRendersChildren(AspectRatio, defaultProps)
  itSupportsSystemProps({
    component: AspectRatio,
    props: defaultProps,
    displayName: '@rviseui/core/AspectRatio',
    refType: HTMLDivElement,
    providerName: 'AspectRatio',
  })
})
