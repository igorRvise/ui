import { itSupportsSystemProps, itRendersChildren, createContextContainer } from '@rviseui/tests'
import { MenuLabel, MenuLabelProps } from './MenuLabel'
import { Menu } from '../Menu'

const defaultProps: MenuLabelProps = {}

const TestContainer = createContextContainer<any>(MenuLabel, Menu, { opened: true })

describe('@rviseui/core/MenuLabel', () => {
  itRendersChildren(TestContainer, defaultProps)
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@rviseui/core/MenuLabel',
    providerName: 'MenuLabel',
  })
})
