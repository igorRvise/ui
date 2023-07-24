import type { RviseTheme } from '@rviseui/styles'

export function getFontSizeValue(size: any, theme: RviseTheme) {
  return theme.fn.size({ size, sizes: theme.fontSizes })
}
