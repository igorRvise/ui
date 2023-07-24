import { createSafeContext } from '@rviseui/utils'
import { RviseNumberSize, ClassNames, Styles } from '@rviseui/styles'
import type { ListStylesNames } from './List'

interface ListContextValue {
  spacing?: RviseNumberSize
  center?: boolean
  icon?: React.ReactNode
  listStyleType?: string
  withPadding?: boolean
  size?: RviseNumberSize
  classNames?: ClassNames<ListStylesNames>
  styles?: Styles<ListStylesNames>
  unstyled?: boolean
}

export const [ListProvider, useListContext] = createSafeContext<ListContextValue>(
  'List component was not found in tree',
)
