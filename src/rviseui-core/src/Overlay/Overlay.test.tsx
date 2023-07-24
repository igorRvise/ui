import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@rviseui/tests'
import { Overlay, OverlayProps } from './Overlay'

const defaultProps: OverlayProps = {}

describe('@rviseui/core/Overlay', () => {
  itIsPolymorphic(Overlay, defaultProps)
  itRendersChildren(Overlay, defaultProps)
  itSupportsSystemProps({
    component: Overlay,
    props: defaultProps,
    displayName: '@rviseui/core/Overlay',
    refType: HTMLDivElement,
    providerName: 'Overlay',
  })
})
