import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@rviseui/tests'
import { Box, BoxProps } from './Box'

const defaultProps: BoxProps = {}

describe('@rviseui/core/Box', () => {
  itRendersChildren(Box as any, defaultProps)
  itIsPolymorphic(Box as any, defaultProps)
  itSupportsSystemProps({
    component: Box,
    props: defaultProps,
    displayName: '@rviseui/core/Box',
    refType: HTMLDivElement,
  })
})
