import { Tuple } from './Tuple'

export type DefaultRviseColor =
  | 'primary'
  | 'secondary'
  | 'dark'
  | 'gray'
  | 'red'
  | 'pink'
  | 'grape'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange'
  | 'teal'
  | (string & {})

export type RviseThemeColorsOverride = {}

export type RviseThemeColors = RviseThemeColorsOverride extends {
  colors: Record<infer CustomColors, Tuple<string, 10>>
}
  ? Record<CustomColors, Tuple<string, 10>>
  : Record<DefaultRviseColor, Tuple<string, 10>>

export type RviseColor = keyof RviseThemeColors
