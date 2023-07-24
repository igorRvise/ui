import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@rviseui/tests'
import { Center, CenterProps } from './Center'

const defaultProps: CenterProps = {
  children: 'test-center',
}

describe('@rviseui/core/Center', () => {
  itRendersChildren(Center, defaultProps)
  itIsPolymorphic(Center, defaultProps)
  itSupportsSystemProps({
    component: Center,
    props: defaultProps,
    displayName: '@rviseui/core/Center',
    refType: HTMLDivElement,
    providerName: 'Center',
  })
})
