import React, { forwardRef } from 'react'
import { DefaultProps, RviseNumberSize, useComponentDefaultProps } from '@rviseui/styles'
import { Box } from '../../Box'
import { AvatarGroupProvider } from './AvatarGroup.context'
import useStyles from './AvatarGroup.styles'

export interface AvatarGroupProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Avatar components */
  children: React.ReactNode

  /** Negative space between Avatars */
  spacing?: RviseNumberSize
}

const defaultProps: Partial<AvatarGroupProps> = {}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
  const {
    children,
    spacing = 'sm',
    unstyled,
    className,
    ...others
  } = useComponentDefaultProps('AvatarGroup', defaultProps, props)
  const { classes, cx } = useStyles({ spacing }, { name: 'AvatarGroup', unstyled })

  return (
    <AvatarGroupProvider spacing={spacing}>
      <Box ref={ref} className={cx(classes.root, className)} {...others}>
        {children}
      </Box>
    </AvatarGroupProvider>
  )
})

AvatarGroup.displayName = '@rviseui/core/AvatarGroup'
