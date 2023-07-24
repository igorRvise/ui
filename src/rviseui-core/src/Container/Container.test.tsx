import { itRendersChildren, itSupportsSystemProps } from '@rviseui/tests'
import { Container, ContainerProps } from './Container'

const defaultProps: ContainerProps = {}

describe('@rviseui/core/Container', () => {
  itRendersChildren(Container, defaultProps)
  itSupportsSystemProps({
    component: Container,
    props: defaultProps,
    displayName: '@rviseui/core/Container',
    refType: HTMLDivElement,
    providerName: 'Container',
  })
})
