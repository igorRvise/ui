import { createContextContainer, itSupportsSystemProps, itRendersChildren, itThrowsContextError } from '@rviseui/tests'
import { MenuDropdown, MenuDropdownProps } from './MenuDropdown'
import { Menu } from '../Menu'
import { MENU_ERRORS } from '../Menu.errors'

const defaultProps: MenuDropdownProps = {}

const TestContainer = createContextContainer(MenuDropdown, Menu, { opened: true })

describe('@rviseui/core/MenuDropdown', () => {
  itThrowsContextError(MenuDropdown, defaultProps, MENU_ERRORS.context)
  itRendersChildren(TestContainer, defaultProps)
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    displayName: '@rviseui/core/MenuDropdown',
    providerName: 'MenuDropdown',
  })
})
