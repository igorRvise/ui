import { RviseTheme } from '@rviseui/styles'

export function getColorValue(color: any, theme: RviseTheme): string {
  if (color === 'dimmed') {
    return theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6]
  }

  return theme.fn.variant({ variant: 'filled', color, primaryFallback: false }).background
}
