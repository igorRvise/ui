import { itRendersChildren, itSupportsSystemProps } from '@rviseui/tests'
import { Stack, StackProps } from './Stack'

const defaultProps: StackProps = {}

describe('@rviseui/core/Stack', () => {
  itRendersChildren(Stack, defaultProps)
  itSupportsSystemProps({
    component: Stack,
    props: defaultProps,
    displayName: '@rviseui/core/Stack',
    refType: HTMLDivElement,
    providerName: 'Stack',
  })
})
