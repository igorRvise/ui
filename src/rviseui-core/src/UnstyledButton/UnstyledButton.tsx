import React, { forwardRef } from 'react'
import { DefaultProps, useComponentDefaultProps } from '@rviseui/styles'
import { createPolymorphicComponent } from '@rviseui/utils'
import { Box } from '../Box'
import useStyles from './UnstyledButton.styles'

export interface UnstyledButtonProps extends DefaultProps {
  children?: React.ReactNode
}

export const _UnstyledButton = forwardRef<HTMLDivElement, UnstyledButtonProps & { component?: any }>((props, ref) => {
  const { className, component = 'button', unstyled, ...others } = useComponentDefaultProps('UnstyledButton', {}, props)
  const { classes, cx } = useStyles(null, { name: 'UnstyledButton', unstyled })
  return (
    <Box
      component={component}
      ref={ref}
      className={cx(classes.root, className)}
      type={component === 'button' ? 'button' : undefined}
      {...others}
    />
  )
})

_UnstyledButton.displayName = '@rviseui/core/UnstyledButton'

export const UnstyledButton = createPolymorphicComponent<'button', UnstyledButtonProps>(_UnstyledButton)
