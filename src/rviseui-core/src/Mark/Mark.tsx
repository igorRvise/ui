import React, { forwardRef } from 'react'
import { DefaultProps, RviseColor, useComponentDefaultProps } from '@rviseui/styles'
import { Box } from '../Box'
import useStyles from './Mark.styles'

export interface MarkProps extends DefaultProps, React.ComponentPropsWithoutRef<'mark'> {
  /** Background color from theme.colors */
  color?: RviseColor
}

const defaultProps: Partial<MarkProps> = {
  color: 'yellow',
}

export const Mark = forwardRef<HTMLElement, MarkProps>((props, ref) => {
  const { color, className, unstyled, ...others } = useComponentDefaultProps('Mark', defaultProps, props)

  const { classes, cx } = useStyles({ color }, { unstyled, name: 'Mark' })
  return <Box component="mark" ref={ref} className={cx(classes.root, className)} {...others} />
})

Mark.displayName = '@rviseui/core/Mark'
