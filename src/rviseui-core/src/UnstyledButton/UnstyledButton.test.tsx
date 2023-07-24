import { itRendersChildren, itSupportsFocusEvents, itSupportsSystemProps, itIsPolymorphic } from '@rviseui/tests'
import { UnstyledButton, UnstyledButtonProps } from './UnstyledButton'

const defaultProps: UnstyledButtonProps = {}

describe('@rviseui/core/UnstyledButton', () => {
  itRendersChildren(UnstyledButton, defaultProps)
  itIsPolymorphic(UnstyledButton, defaultProps)
  itSupportsFocusEvents(UnstyledButton, defaultProps, 'button')
  itSupportsSystemProps({
    component: UnstyledButton,
    props: defaultProps,
    displayName: '@rviseui/core/UnstyledButton',
    refType: HTMLButtonElement,
    providerName: 'UnstyledButton',
  })
})
