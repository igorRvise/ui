import { primaryShade } from '../primary-shade/primary-shade'
import type { RviseThemeBase } from '../../../types'

export function primaryColor(theme: RviseThemeBase) {
  return (colorScheme?: 'light' | 'dark') => {
    const shade = primaryShade(theme)(colorScheme)
    return theme.colors[theme.primaryColor][shade]
  }
}
