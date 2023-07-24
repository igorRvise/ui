import { itRendersChildren, itSupportsSystemProps } from '@rviseui/tests'
import { Mark, MarkProps } from './Mark'

const defaultProps: MarkProps = {
  children: 'test-mark',
}

describe('@rviseui/core/Mark', () => {
  itRendersChildren(Mark, defaultProps)
  itSupportsSystemProps({
    component: Mark,
    props: defaultProps,
    displayName: '@rviseui/core/Mark',
    refType: HTMLElement,
    providerName: 'Mark',
  })
})
