import { itRendersChildren, itSupportsSystemProps } from '@rviseui/tests'
import { ThemeIcon, ThemeIconProps } from './ThemeIcon'

const defaultProps: ThemeIconProps = {
  children: 'test-icon',
}

describe('@rviseui/core/ThemeIcon', () => {
  itRendersChildren(ThemeIcon, defaultProps)
  itSupportsSystemProps({
    component: ThemeIcon,
    props: defaultProps,
    displayName: '@rviseui/core/ThemeIcon',
    refType: HTMLDivElement,
    providerName: 'ThemeIcon',
  })
})
