import { createStyles, RviseColor, RviseSize } from '@rviseui/styles'

export interface StarSymbolStylesParams {
  size: RviseSize
  type: 'empty' | 'full'
  color: RviseColor
}

const sizes: Record<RviseSize, number> = {
  xs: 14,
  sm: 18,
  md: 20,
  lg: 28,
  xl: 32,
}

export default createStyles((theme, { size, type, color }: StarSymbolStylesParams) => {
  const emptyColor = theme.colorScheme === 'light' ? theme.colors.gray[3] : theme.colors.gray[8]
  const fullColor = theme.fn.variant({ variant: 'filled', color }).background

  return {
    icon: {
      stroke: type === 'empty' ? emptyColor : fullColor,
      fill: type === 'empty' ? emptyColor : fullColor,
      width: theme.fn.size({ size, sizes }),
      height: theme.fn.size({ size, sizes }),
    },
  }
})
