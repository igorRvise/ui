import { itRendersChildren, itSupportsSystemProps } from '@rviseui/tests'
import { Skeleton, SkeletonProps } from './Skeleton'

const defaultProps: SkeletonProps = {}

describe('@rviseui/core/Skeleton', () => {
  itRendersChildren(Skeleton, defaultProps)
  itSupportsSystemProps({
    component: Skeleton,
    props: defaultProps,
    displayName: '@rviseui/core/Skeleton',
    refType: HTMLDivElement,
    providerName: 'Skeleton',
  })
})
