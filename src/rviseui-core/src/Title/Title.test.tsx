import { itRendersChildren, itSupportsSystemProps } from '@rviseui/tests'
import { Title, TitleProps } from './Title'

const defaultProps: TitleProps = {}

describe('@rviseui/core/Title', () => {
  itRendersChildren(Title, defaultProps)
  itSupportsSystemProps({
    component: Title,
    props: defaultProps,
    displayName: '@rviseui/core/Title',
    refType: HTMLHeadingElement,
    providerName: 'Title',
  })
})
