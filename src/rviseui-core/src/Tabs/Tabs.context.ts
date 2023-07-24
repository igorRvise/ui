import { createSafeContext } from '@rviseui/utils'
import { RviseColor, RviseNumberSize, ClassNames, Styles } from '@rviseui/styles'
import { TabsOrientation, TabsPlacement, TabsValue, TabsVariant, TabsStylesParams } from './Tabs.types'
import { TABS_ERRORS } from './Tabs.errors'
import type { TabsStylesNames } from './Tabs'

interface TabsContext {
  id: string
  value: TabsValue
  orientation: TabsOrientation
  loop: boolean
  activateTabWithKeyboard: boolean
  allowTabDeactivation: boolean
  onTabChange(value: TabsValue): void
  getTabId(value: string): string
  getPanelId(value: string): string
  variant: TabsVariant
  color: RviseColor
  radius: RviseNumberSize
  inverted: boolean
  keepMounted: boolean
  placement: TabsPlacement
  classNames: ClassNames<TabsStylesNames>
  styles: Styles<TabsStylesNames, TabsStylesParams>
  unstyled: boolean
}

export const [TabsContextProvider, useTabsContext] = createSafeContext<TabsContext>(TABS_ERRORS.context)
