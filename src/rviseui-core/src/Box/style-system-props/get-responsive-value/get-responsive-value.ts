import { RviseTheme, CSSObject, RviseNumberSize } from '@rviseui/styles'

export type StyleProperty = string | string[]

interface GetResponsiveStyles {
  value: any
  theme: RviseTheme
  getValue: (value: any, theme: RviseTheme) => any
  property: StyleProperty
}

export function getSortedKeys(value: Record<string, any>, theme: RviseTheme) {
  return Object.keys(value)
    .filter((breakpoint) => breakpoint !== 'base')
    .sort(
      (a, b) =>
        theme.fn.size({ size: a, sizes: theme.breakpoints }) - theme.fn.size({ size: b, sizes: theme.breakpoints }),
    )
    .reduce<string[]>(
      (acc, curr) => {
        return [...acc, curr]
      },
      value.base !== undefined ? ['base'] : [],
    )
}

export function getResponsiveValue({ value, theme, getValue, property }: GetResponsiveStyles): CSSObject {
  if (value == null) {
    return {}
  }

  const cssValue = getValue(value, theme)

  if (typeof value !== 'object') {
    return { [property as string]: cssValue }
  }

  const sortedKeys = getSortedKeys(value, theme)

  return sortedKeys.reduce<CSSObject>(
    (acc, breakpointKey) => {
      const breakpointValue = getValue(value[breakpointKey], theme)

      if (Array.isArray(property)) {
        acc[theme.fn.largerThan(breakpointKey as RviseNumberSize)] = {}
        property.forEach((prop) => {
          acc[theme.fn.largerThan(breakpointKey as RviseNumberSize)][prop] = breakpointValue
        })
      } else {
        acc[theme.fn.largerThan(breakpointKey as RviseNumberSize)] = {
          [property]: breakpointValue,
        }
      }

      return acc
    },
    value.base !== undefined ? { [property as string]: getValue(value.base, theme) } : {},
  )
}
