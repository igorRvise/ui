import React, { forwardRef } from 'react'
import {
  DefaultProps,
  RviseSize,
  RviseNumberSize,
  RviseGradient,
  RviseColor,
  Selectors,
  useComponentDefaultProps,
} from '@rviseui/styles'
import { createPolymorphicComponent } from '@rviseui/utils'
import { Box } from '../Box'
import useStyles, { BadgeStylesParams, BadgeVariant } from './Badge.styles'

export type BadgeStylesNames = Selectors<typeof useStyles>

export interface BadgeProps extends DefaultProps<BadgeStylesNames, BadgeStylesParams> {
  /** Key of theme.colors */
  color?: RviseColor

  /** Controls appearance */
  variant?: BadgeVariant

  /** Controls gradient, applied to gradient variant only */
  gradient?: RviseGradient

  /** Badge height and font size */
  size?: RviseSize

  /** Key of theme.radius or number to set border-radius in px */
  radius?: RviseNumberSize

  /** Sets badge width to 100% of parent element, hides overflow text with text-overflow: ellipsis */
  fullWidth?: boolean

  /** Section rendered on the left side of label */
  leftSection?: React.ReactNode

  /** Section rendered on the right side of label */
  rightSection?: React.ReactNode

  /** Badge label */
  children?: React.ReactNode
}

const defaultProps: Partial<BadgeProps> = {
  variant: 'light',
  size: 'md',
  radius: 'xl',
}

export const _Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    className,
    color,
    variant,
    fullWidth,
    children,
    size,
    leftSection,
    rightSection,
    radius,
    gradient,
    classNames,
    styles,
    unstyled,
    ...others
  } = useComponentDefaultProps('Badge', defaultProps, props)

  const { classes, cx } = useStyles(
    {
      size,
      fullWidth,
      color,
      radius,
      variant,
      gradient,
    },
    { classNames, styles, name: 'Badge', unstyled },
  )

  return (
    <Box className={cx(classes.root, className)} ref={ref} {...others}>
      {leftSection && <span className={classes.leftSection}>{leftSection}</span>}
      <span className={classes.inner}>{children}</span>
      {rightSection && <span className={classes.rightSection}>{rightSection}</span>}
    </Box>
  )
})

_Badge.displayName = '@rviseui/core/Badge'

export const Badge = createPolymorphicComponent<'div', BadgeProps>(_Badge)
