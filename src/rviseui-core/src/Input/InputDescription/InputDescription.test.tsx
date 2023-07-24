import { itSupportsSystemProps, itRendersChildren } from '@rviseui/tests'
import { InputDescription, InputDescriptionProps } from './InputDescription'

const defaultProps: InputDescriptionProps = {}

describe('@rviseui/core/InputDescription', () => {
  itRendersChildren(InputDescription, defaultProps)
  itSupportsSystemProps({
    component: InputDescription,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@rviseui/core/InputDescription',
    providerName: 'InputDescription',
  })
})
