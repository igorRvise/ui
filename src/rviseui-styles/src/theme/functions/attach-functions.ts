import type { RviseTheme, RviseThemeBase } from '../types'
import { fns } from './fns'

export function attachFunctions(themeBase: RviseThemeBase): RviseTheme {
  return {
    ...themeBase,
    fn: {
      fontStyles: fns.fontStyles(themeBase),
      themeColor: fns.themeColor(themeBase),
      focusStyles: fns.focusStyles(themeBase),
      largerThan: fns.largerThan(themeBase),
      smallerThan: fns.smallerThan(themeBase),
      radialGradient: fns.radialGradient,
      linearGradient: fns.linearGradient,
      gradient: fns.gradient(themeBase),
      rgba: fns.rgba,
      size: fns.size,
      cover: fns.cover,
      lighten: fns.lighten,
      darken: fns.darken,
      primaryShade: fns.primaryShade(themeBase),
      radius: fns.radius(themeBase),
      variant: fns.variant(themeBase),
      hover: fns.hover,
      primaryColor: fns.primaryColor(themeBase),
      placeholderStyles: fns.placeholderStyles(themeBase),
    },
  }
}
