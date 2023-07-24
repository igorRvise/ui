import { createStyles, RviseTheme } from '@rviseui/styles'
import type { TitleSize } from './Title'

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'd1' | 'd2' | 'd3' | 'd4' | 'd5' | 'd6'

export interface SimpleGridBreakpoint {
  size: TitleSize
  weight: React.CSSProperties['fontWeight']
}

export interface TitleStylesParams {
  element: HeadingElement
  size: TitleSize
  weight: React.CSSProperties['fontWeight']
  inline: boolean
  breakpoints?: any
}

function getFontStyles(size: TitleSize, element: HeadingElement, theme: RviseTheme) {
  const fontSize =
    typeof size !== 'undefined'
      ? size in theme.headings.sizes
        ? theme.headings.sizes[size].fontSize
        : size
      : theme.headings.sizes[element].fontSize

  const lineHeight =
    typeof size !== 'undefined' && size in theme.headings.sizes
      ? theme.headings.sizes[size].lineHeight
      : theme.headings.sizes[element].lineHeight

  return { fontSize, lineHeight }
}

export default createStyles(
  (theme, { element, weight, size, inline, breakpoints = theme.headings.breakpoints }: TitleStylesParams) => {
    const values = Object.keys(breakpoints)
      .filter((breakpoint) => breakpoint !== 'base')
      .sort(
        (a, b) =>
          theme.fn.size({ size: a, sizes: theme.breakpoints }) - theme.fn.size({ size: b, sizes: theme.breakpoints }),
      )
      .reduce((acc, breakpointKey) => {
        const headingStyles = breakpoints[breakpointKey]?.[size]
        if (headingStyles) {
          acc[`${theme.fn.largerThan(breakpointKey as any)}`] = { ...headingStyles }
        }
        return acc
      }, {})

    const { fontSize, lineHeight } = getFontStyles(size, element, theme)

    return {
      root: {
        ...theme.fn.fontStyles(),
        fontFamily: theme.headings.fontFamily,
        fontWeight: weight ?? theme.headings.sizes[element].fontWeight ?? theme.headings.fontWeight,
        fontSize,
        lineHeight: inline ? 1 : lineHeight,
        margin: 0,
        ...values,
      },
    }
  },
)
