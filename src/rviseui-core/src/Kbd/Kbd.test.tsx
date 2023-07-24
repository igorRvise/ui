import { itRendersChildren, itSupportsSystemProps } from '@rviseui/tests'
import { Kbd, KbdProps } from './Kbd'

const defaultProps: KbdProps = { children: 'test' }

describe('@rviseui/core/Kbd', () => {
  itRendersChildren(Kbd, defaultProps)
  itSupportsSystemProps({
    component: Kbd,
    props: defaultProps,
    displayName: '@rviseui/core/Kbd',
    refType: HTMLElement,
    providerName: 'Kbd',
  })
})
