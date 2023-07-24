import { RviseThemeOverride, RviseThemeBase, RviseTheme } from '../../types'
import { attachFunctions } from '../../functions/attach-functions'

export function mergeTheme(currentTheme: RviseThemeBase, themeOverride?: RviseThemeOverride): RviseThemeBase {
  if (!themeOverride) {
    return currentTheme
  }

  // @ts-ignore
  const result: RviseThemeBase = Object.keys(currentTheme).reduce((acc, key) => {
    if (key === 'headings' && themeOverride.headings) {
      const sizes = themeOverride.headings.sizes
        ? Object.keys(currentTheme.headings.sizes).reduce((headingsAcc, h) => {
            // eslint-disable-next-line no-param-reassign
            headingsAcc[h] = {
              ...currentTheme.headings.sizes[h],
              ...themeOverride.headings.sizes[h],
            }
            return headingsAcc
          }, {} as RviseThemeBase['headings']['sizes'])
        : currentTheme.headings.sizes
      return {
        ...acc,
        headings: {
          ...currentTheme.headings,
          ...themeOverride.headings,
          sizes,
        },
      }
    }

    acc[key] =
      typeof themeOverride[key] === 'object'
        ? { ...currentTheme[key], ...themeOverride[key] }
        : typeof themeOverride[key] === 'number' ||
          typeof themeOverride[key] === 'boolean' ||
          typeof themeOverride[key] === 'function'
        ? themeOverride[key]
        : themeOverride[key] || currentTheme[key]
    return acc
  }, {} as RviseThemeBase)

  if (!(result.primaryColor in result.colors)) {
    throw new Error(
      'RviseProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://rvise.dev/theming/colors/#primary-color',
    )
  }

  return result
}

export function mergeThemeWithFunctions(currentTheme: RviseThemeBase, themeOverride?: RviseThemeOverride): RviseTheme {
  return attachFunctions(mergeTheme(currentTheme, themeOverride))
}
