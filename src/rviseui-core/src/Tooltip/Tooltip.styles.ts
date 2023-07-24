import { createStyles, CSSObject, RviseColor, RviseNumberSize, RviseTheme } from '@rviseui/styles'

export interface TooltipStylesParams {
  color: RviseColor
  radius: RviseNumberSize
  width: number | 'auto'
  multiline: boolean
}

function getColors(theme: RviseTheme, color?: RviseColor): CSSObject {
  if (!color) {
    return {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[9],
      color: theme.white,
    }
  }

  const colors = theme.fn.variant({ variant: 'filled', color, primaryFallback: false })

  return {
    backgroundColor: colors.background,
    color: colors.color,
  }
}

export default createStyles((theme, { color, radius, width, multiline }: TooltipStylesParams) => ({
  tooltip: {
    ...theme.fn.fontStyles(),
    ...getColors(theme, color),
    lineHeight: theme.lineHeight,
    fontSize: theme.fontSizes.sm,
    borderRadius: theme.fn.radius(radius),
    padding: `calc(${theme.spacing.xs}px / 2) ${theme.spacing.xs}px`,
    position: 'absolute',
    whiteSpace: multiline ? 'unset' : 'nowrap',
    pointerEvents: 'none',
    width,
  },

  arrow: {
    backgroundColor: 'inherit',
    border: 0,
    zIndex: 1,
  },
}))
