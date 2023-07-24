import type { CSSProperties } from 'react'
import type { RviseStyleSystemProps } from './RviseStyleSystem'
import type { RviseTheme } from './RviseTheme'
import type { CSSObject } from '../../tss'

export type Sx = CSSObject | ((theme: RviseTheme) => CSSObject)

export type ClassNames<StylesNames extends string> = Partial<Record<StylesNames, string>>
export type Styles<StylesNames extends string, StylesParams extends Record<string, any> = never> =
  | Partial<Record<StylesNames, CSSObject>>
  | ((theme: RviseTheme, params: StylesParams) => Partial<Record<StylesNames, CSSObject>>)

export interface DefaultProps<
  StylesNames extends string = never,
  StylesParams extends Record<string, any> = Record<string, any>,
> extends RviseStyleSystemProps {
  className?: string
  style?: CSSProperties
  sx?: Sx | (Sx | undefined)[]
  classNames?: ClassNames<StylesNames>
  styles?: Styles<StylesNames, StylesParams>
  unstyled?: boolean
}
