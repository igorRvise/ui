import { itSupportsSystemProps, createContextContainer, itRendersChildren, itThrowsContextError } from '@rviseui/tests'
import { AccordionItem, AccordionItemProps } from './AccordionItem'
import { AccordionProvider } from '../AccordionProvider'
import { ACCORDION_ERRORS } from '../Accordion.errors'

const defaultProps: AccordionItemProps = {
  value: 'test',
  children: 'Test item',
}

const TestContainer = createContextContainer(AccordionItem, AccordionProvider, { order: 3 })

describe('@rviseui/core/AccordionItem', () => {
  itRendersChildren(TestContainer, defaultProps)
  itThrowsContextError(AccordionItem, defaultProps, ACCORDION_ERRORS.context)
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@rviseui/core/AccordionItem',
    providerName: 'AccordionItem',
  })
})
