import { itSupportsSystemProps, createContextContainer } from '@rviseui/tests'
import { MenuDivider, MenuDividerProps } from './MenuDivider'
import { Menu } from '../Menu'

const defaultProps: MenuDividerProps = {}

const TestContainer = createContextContainer<any>(MenuDivider, Menu, { opened: true })

describe('@rviseui/core/MenuDivider', () => {
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@rviseui/core/MenuDivider',
    providerName: 'MenuDivider',
  })
})
