import React, { forwardRef } from 'react'
import { DefaultProps, RviseNumberSize, RviseGradient, RviseColor, useComponentDefaultProps } from '@rviseui/styles'
import { Box } from '../Box'
import useStyles, { ThemeIconVariant, ThemeIconStylesParams } from './ThemeIcon.styles'

export interface ThemeIconProps
  extends DefaultProps<never, ThemeIconStylesParams>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Icon */
  children: React.ReactNode

  /** Predefined width and height or number for width and height in px */
  size?: RviseNumberSize

  /** Predefined border-radius from theme.radius or number for border-radius in px */
  radius?: RviseNumberSize

  /** Icon color from theme */
  color?: RviseColor

  /** Controls appearance */
  variant?: ThemeIconVariant

  /** Controls gradient settings in gradient variant only */
  gradient?: RviseGradient
}

const defaultProps: Partial<ThemeIconProps> = {
  size: 'md',
  variant: 'filled',
}

export const ThemeIcon = forwardRef<HTMLDivElement, ThemeIconProps>((props, ref) => {
  const { className, size, radius, variant, color, children, gradient, unstyled, ...others } = useComponentDefaultProps(
    'ThemeIcon',
    defaultProps,
    props,
  )

  const { classes, cx } = useStyles({ variant, radius, color, size, gradient }, { name: 'ThemeIcon', unstyled })

  return (
    <Box className={cx(classes.root, className)} ref={ref} {...others}>
      {children}
    </Box>
  )
})

ThemeIcon.displayName = '@rviseui/core/ThemeIcon'
