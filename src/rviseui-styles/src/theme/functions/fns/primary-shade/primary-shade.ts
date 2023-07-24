import type { RviseThemeBase } from '../../../types'

export function primaryShade(theme: RviseThemeBase) {
  return (colorScheme?: 'light' | 'dark') => {
    if (typeof theme.primaryShade === 'number') {
      return theme.primaryShade
    }

    return theme.primaryShade[colorScheme || theme.colorScheme]
  }
}
