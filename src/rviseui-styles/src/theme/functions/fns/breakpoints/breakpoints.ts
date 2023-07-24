import type { RviseThemeBase, RviseNumberSize } from '../../../types'
import { size } from '../size/size'

export function largerThan(theme: RviseThemeBase) {
  return (breakpoint: RviseNumberSize) =>
    `@media (min-width: ${size({ size: breakpoint, sizes: theme.breakpoints })}px)`
}

export function smallerThan(theme: RviseThemeBase) {
  return (breakpoint: RviseNumberSize) =>
    `@media (max-width: ${size({ size: breakpoint, sizes: theme.breakpoints }) - 1}px)`
}
