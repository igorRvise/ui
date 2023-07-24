import { createSafeContext } from '@rviseui/utils'
import type { RviseNumberSize } from '@rviseui/styles'

interface GridContextValue {
  gutter: RviseNumberSize
  gutterXs: RviseNumberSize
  gutterSm: RviseNumberSize
  gutterMd: RviseNumberSize
  gutterLg: RviseNumberSize
  gutterXl: RviseNumberSize
  grow: boolean
  columns: number
}

export const [GridProvider, useGridContext] = createSafeContext<GridContextValue>(
  'Grid component was not found in tree',
)
