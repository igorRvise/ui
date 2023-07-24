import type { CSSProperties } from 'react'
import type { RviseSizes, RviseSize, RviseTextSizes, RviseNumberSize } from './RviseSize'
import type { DeepPartial } from './DeepPartial'
import type { RviseThemeColors } from './RviseColor'
import type { RviseGradient } from './RviseGradient'
import type { VariantInput, VariantOutput } from '../functions/fns/variant/variant'
import type { ColorScheme } from './ColorScheme'
import type { CSSObject } from '../../tss'

export type LoaderType = 'bars' | 'oval' | 'dots'
export type RviseThemeOther = Record<string, any>
export type RviseThemeComponents = Record<string, ThemeComponent>

export interface HeadingStyle {
  fontSize: CSSProperties['fontSize']
  fontWeight: CSSProperties['fontWeight']
  lineHeight: CSSProperties['lineHeight']
}

type Shade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export interface RvisePrimaryShade {
  light: Shade
  dark: Shade
}

interface RviseFocusRingStyles {
  styles(theme: RviseThemeBase): CSSObject
  resetStyles(theme: RviseThemeBase): CSSObject
  inputStyles(theme: RviseThemeBase): CSSObject
}

interface RviseThemeFunctions {
  fontStyles(): any
  focusStyles(selector?: string): any
  cover(offset?: number | string): any
  themeColor(color: string, shade?: number, primaryFallback?: boolean, useSplittedShade?: boolean): string
  rgba(color: string, alpha: number): string
  size(props: { size: string | number; sizes: Record<string, any> }): any
  linearGradient(deg: number, ...colors: string[]): string
  radialGradient(...colors: string[]): string
  gradient(gradient?: RviseGradient): string
  smallerThan(breakpoint: RviseNumberSize): string
  largerThan(breakpoint: RviseNumberSize): string
  lighten(color: string, alpha: number): string
  darken(color: string, alpha: number): string
  radius(size?: RviseNumberSize | (string & {})): string | number
  variant(payload: VariantInput): VariantOutput
  primaryShade(colorScheme?: ColorScheme): Shade
  hover(hoverStyle: CSSObject): any
  primaryColor(colorScheme?: ColorScheme): string
  placeholderStyles(): any
}

type headingsSizes = {
  h1?: HeadingStyle
  h2?: HeadingStyle
  h3?: HeadingStyle
  h4?: HeadingStyle
  h5?: HeadingStyle
  h6?: HeadingStyle
  d1?: HeadingStyle
  d2?: HeadingStyle
  d3?: HeadingStyle
  d4?: HeadingStyle
  d5?: HeadingStyle
  d6?: HeadingStyle
}

export interface RviseCssTransition {
  productive?: string
  expressive?: string
  focus?: string
  linear?: string
  standard?: string
  overshoot?: string
  decelerate?: string
  accelerate?: string
}

export interface RviseTheme {
  dir: 'ltr' | 'rtl'
  primaryShade: Shade | RvisePrimaryShade
  focusRing: 'auto' | 'always' | 'never'
  defaultRadius: RviseNumberSize | (string & {})
  loader: LoaderType
  dateFormat: string
  colorScheme: ColorScheme
  white: string
  black: string
  colors: RviseThemeColors
  fontFamily: CSSProperties['fontFamily']
  lineHeight: CSSProperties['lineHeight']
  transitionTimingFunction: CSSProperties['transitionTimingFunction']
  fontFamilyMonospace: CSSProperties['fontFamily']
  primaryColor: keyof RviseThemeColors
  respectReducedMotion: boolean
  cursorType: 'default' | 'pointer'
  defaultGradient: RviseGradient
  cssTransitions: RviseCssTransition
  durations: Record<number, string>
  fontSizes: RviseTextSizes
  radius: RviseSizes
  spacing: RviseSizes
  breakpoints: RviseSizes
  shadows: Record<RviseSize, string>
  defaultBorderColor: CSSProperties['color']
  defaultDividerColor: CSSProperties['color']
  text: {
    bodyColor: CSSProperties['color']
    dimmedColor: CSSProperties['color']
  }
  headings: {
    fontFamily: CSSProperties['fontFamily']
    fontWeight: CSSProperties['fontWeight']
    sizes: headingsSizes
    color: CSSProperties['color']
    breakpoints?: {
      sm?: headingsSizes
      md?: headingsSizes
      lg?: headingsSizes
      xl?: headingsSizes
    }
  }

  fn: RviseThemeFunctions
  other: RviseThemeOther
  activeStyles: CSSObject
  datesLocale: string
  components: RviseThemeComponents
  globalStyles: (theme: RviseTheme) => CSSObject
  focusRingStyles: RviseFocusRingStyles
}

interface ThemeComponent {
  defaultProps?: Record<string, any> | ((theme: RviseTheme) => Record<string, any>)
  classNames?: Record<string, string>
  styles?: Record<string, CSSObject> | ((theme: RviseTheme, params: any) => Record<string, CSSObject>)
}

export type RviseThemeBase = Omit<RviseTheme, 'fn'>

export type RviseThemeOverride = DeepPartial<Omit<RviseThemeBase, 'other' | 'components'>> &
  Partial<Pick<RviseThemeBase, 'other' | 'components'>>
