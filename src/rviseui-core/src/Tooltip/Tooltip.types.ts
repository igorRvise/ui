import { DefaultProps, Selectors, RviseNumberSize, RviseColor } from '@rviseui/styles'
import { FloatingPosition } from '../Floating'
import useStyles, { TooltipStylesParams } from './Tooltip.styles'

export type TooltipStylesNames = Selectors<typeof useStyles>

export interface TooltipBaseProps
  extends DefaultProps<TooltipStylesNames, TooltipStylesParams>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Target element */
  children: React.ReactNode

  /** Tooltip position relative to target element (default) or mouse (floating) */
  position?: FloatingPosition

  /** Key of the prop that should be used to get element ref */
  refProp?: string

  /** Tooltip label */
  label: React.ReactNode

  /** Determines whether tooltip should be rendered within Portal */
  withinPortal?: boolean

  /** Radius from theme.radius or number to set border-radius in px */
  radius?: RviseNumberSize

  /** Key of theme.colors */
  color?: RviseColor

  /** Defines whether content should be wrapped on to the next line */
  multiline?: boolean

  /** Tooltip width in px */
  width?: number | 'auto'

  /** Tooltip z-index */
  zIndex?: React.CSSProperties['zIndex']

  /** Disables tooltip */
  disabled?: boolean
}
