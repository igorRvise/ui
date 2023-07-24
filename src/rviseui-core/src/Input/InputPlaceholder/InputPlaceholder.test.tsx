import { itSupportsSystemProps, itRendersChildren } from '@rviseui/tests'
import { InputPlaceholder, InputPlaceholderProps } from './InputPlaceholder'

const defaultProps: InputPlaceholderProps = {}

describe('@rviseui/core/InputPlaceholder', () => {
  itRendersChildren(InputPlaceholder, defaultProps)
  itSupportsSystemProps({
    component: InputPlaceholder,
    props: defaultProps,
    refType: HTMLSpanElement,
    displayName: '@rviseui/core/InputPlaceholder',
    providerName: 'InputPlaceholder',
  })
})
