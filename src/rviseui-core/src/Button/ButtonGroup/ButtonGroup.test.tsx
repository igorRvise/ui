import { itSupportsSystemProps, itRendersChildren } from '@rviseui/tests'
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup'

const defaultProps: ButtonGroupProps = {}

describe('@rviseui/core/ButtonGroup', () => {
  itRendersChildren(ButtonGroup, defaultProps)
  itSupportsSystemProps({
    component: ButtonGroup,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@rviseui/core/ButtonGroup',
    providerName: 'ButtonGroup',
  })
})
