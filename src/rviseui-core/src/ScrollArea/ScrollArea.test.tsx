import { itRendersChildren, itSupportsSystemProps } from '@rviseui/tests'
import { ScrollArea, ScrollAreaProps } from './ScrollArea'

const defaultProps: ScrollAreaProps = {}

describe('@rviseui/core/ScrollArea', () => {
  itRendersChildren(ScrollArea, defaultProps)
  itSupportsSystemProps({
    component: ScrollArea,
    props: defaultProps,
    displayName: '@rviseui/core/ScrollArea',
    refType: HTMLDivElement,
    providerName: 'ScrollArea',
  })
})

describe('@rviseui/core/ScrollArea.Autosize', () => {
  itRendersChildren(ScrollArea.Autosize, defaultProps)
  itSupportsSystemProps({
    component: ScrollArea.Autosize,
    props: defaultProps,
    displayName: '@rviseui/core/ScrollAreaAutosize',
    refType: HTMLDivElement,
    providerName: 'ScrollAreaAutosize',
  })
})
