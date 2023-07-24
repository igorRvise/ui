import React, { forwardRef } from 'react'
import { DefaultProps, RviseNumberSize, RviseShadow, useComponentDefaultProps } from '@rviseui/styles'
import { createPolymorphicComponent } from '@rviseui/utils'
import { Box } from '../Box'
import useStyles, { PaperStylesParams } from './Paper.styles'

export interface PaperProps extends DefaultProps<never, PaperStylesParams> {
  /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
  shadow?: RviseShadow

  /** Predefined border-radius value from theme.radius or number for border-radius in px */
  radius?: RviseNumberSize

  /** Adds 1px border with theme.colors.gray[3] color in light color scheme and theme.colors.dark[4] in dark color scheme */
  withBorder?: boolean

  /** Paper children */
  children?: React.ReactNode
}

const defaultProps: Partial<PaperProps> = {}

export const _Paper = forwardRef<HTMLDivElement, PaperProps>((props, ref) => {
  const { className, children, radius, withBorder, shadow, unstyled, ...others } = useComponentDefaultProps(
    'Paper',
    defaultProps,
    props,
  )
  const { classes, cx } = useStyles({ radius, shadow, withBorder }, { name: 'Paper', unstyled })

  return (
    <Box className={cx(classes.root, className)} ref={ref} {...others}>
      {children}
    </Box>
  )
})

_Paper.displayName = '@rviseui/core/Paper'

export const Paper = createPolymorphicComponent<'div', PaperProps>(_Paper)
