import type { RviseTheme } from '@rviseui/styles'

const NEGATIVE_VALUES = ['-xs', '-sm', '-md', '-lg', '-xl']

export function getSpacingValue(size: any, theme: RviseTheme) {
  if (NEGATIVE_VALUES.includes(size)) {
    return theme.fn.size({ size: size.replace('-', ''), sizes: theme.spacing }) * -1
  }

  return theme.fn.size({ size, sizes: theme.spacing })
}
