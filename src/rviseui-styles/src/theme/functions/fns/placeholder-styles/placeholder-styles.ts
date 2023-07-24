import type { RviseThemeBase } from '../../../types'
import type { CSSObject } from '../../../../tss'

export function placeholderStyles(theme: RviseThemeBase) {
  return (): CSSObject => ({
    userSelect: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  })
}
