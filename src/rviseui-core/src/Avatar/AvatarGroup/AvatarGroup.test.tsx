import { itSupportsSystemProps, itRendersChildren } from '@rviseui/tests'
import { AvatarGroup, AvatarGroupProps } from './AvatarGroup'

const defaultProps: AvatarGroupProps = {
  children: 'test-children',
}

describe('@rviseui/core/AvatarGroup', () => {
  itRendersChildren(AvatarGroup, defaultProps)
  itSupportsSystemProps({
    component: AvatarGroup,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@rviseui/core/AvatarGroup',
    providerName: 'AvatarGroup',
  })
})
