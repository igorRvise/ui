import type { RviseThemeBase, RviseNumberSize } from '../../../types'

export function radius(theme: RviseThemeBase) {
  return (size?: RviseNumberSize | (string & {})): string | number => {
    if (typeof size === 'number') {
      return size
    }

    const defaultRadius =
      typeof theme.defaultRadius === 'number'
        ? theme.defaultRadius
        : theme.radius[theme.defaultRadius] || theme.defaultRadius

    return theme.radius[size] || size || defaultRadius
  }
}
