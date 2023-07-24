import type { RviseThemeBase } from '../../../types'
import type { CSSObject } from '../../../../tss'

export function fontStyles(theme: RviseThemeBase) {
  return (): CSSObject => ({ fontFamily: theme.fontFamily || 'sans-serif' })
}
