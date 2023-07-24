import React, { forwardRef } from 'react'
import { DefaultProps, RviseNumberSize, useComponentDefaultProps } from '@rviseui/styles'
import { ForwardRefWithStaticComponents } from '@rviseui/utils'
import { Box } from '../Box'
import { Col } from './Col/Col'
import { GridProvider } from './Grid.context'
import useStyles from './Grid.styles'

export interface GridProps extends DefaultProps, React.ComponentPropsWithRef<'div'> {
  /** <Col /> components only */
  children: React.ReactNode

  /** Spacing between columns, key of theme.spacing or number for value in px  */
  gutter?: RviseNumberSize

  /** Gutter when screen size is larger than theme.breakpoints.xs */
  gutterXs?: RviseNumberSize

  /** Gutter when screen size is larger than theme.breakpoints.sm */
  gutterSm?: RviseNumberSize

  /** Gutter when screen size is larger than theme.breakpoints.md */
  gutterMd?: RviseNumberSize

  /** Gutter when screen size is larger than theme.breakpoints.lg */
  gutterLg?: RviseNumberSize

  /** Gutter when screen size is larger than theme.breakpoints.xl */
  gutterXl?: RviseNumberSize

  /** Should columns in the last row take 100% of grid width */
  grow?: boolean

  /** Set grid justify-content property */
  justify?: React.CSSProperties['justifyContent']

  /** Set grid align-content property */
  align?: React.CSSProperties['alignContent']

  /** Amount of columns in each row */
  columns?: number
}

type GridComponent = ForwardRefWithStaticComponents<GridProps, { Col: typeof Col }>

const defaultProps: Partial<GridProps> = {
  gutter: 'md',
  justify: 'flex-start',
  align: 'stretch',
  columns: 12,
}

export const Grid: GridComponent = forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  const {
    gutter,
    gutterXs,
    gutterSm,
    gutterMd,
    gutterLg,
    gutterXl,
    children,
    grow,
    justify,
    align,
    columns,
    className,
    id,
    unstyled,
    ...others
  } = useComponentDefaultProps('Grid', defaultProps, props)
  const { classes, cx } = useStyles(
    { gutter, justify, align, gutterXs, gutterSm, gutterMd, gutterLg, gutterXl },
    { unstyled, name: 'Grid' },
  )

  return (
    <GridProvider value={{ gutter, gutterXs, gutterSm, gutterMd, gutterLg, gutterXl, grow, columns }}>
      <Box className={cx(classes.root, className)} ref={ref} {...others}>
        {children}
      </Box>
    </GridProvider>
  )
}) as any

Grid.Col = Col
Grid.displayName = '@rviseui/core/Grid'
