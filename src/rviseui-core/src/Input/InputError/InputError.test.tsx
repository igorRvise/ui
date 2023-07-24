import { itSupportsSystemProps, itRendersChildren } from '@rviseui/tests'
import { InputError, InputErrorProps } from './InputError'

const defaultProps: InputErrorProps = {}

describe('@rviseui/core/InputError', () => {
  itRendersChildren(InputError, defaultProps)
  itSupportsSystemProps({
    component: InputError,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@rviseui/core/InputError',
    providerName: 'InputError',
  })
})
