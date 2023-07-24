import React, { forwardRef } from 'react'
import { DefaultProps, useComponentDefaultProps } from '@rviseui/styles'
import { packSx, createPolymorphicComponent } from '@rviseui/utils'
import { Box } from '../Box'

export interface CenterProps extends DefaultProps {
  /** Content that should be centered vertically and horizontally */
  children: React.ReactNode

  /** Set to true to use inline-flex instead of flex */
  inline?: boolean
}

export const _Center = forwardRef<HTMLDivElement, CenterProps>((props, ref) => {
  const { inline, sx, ...others } = useComponentDefaultProps('Center', {}, props)
  return (
    <Box
      ref={ref}
      sx={[
        {
          display: inline ? 'inline-flex' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        ...packSx(sx),
      ]}
      {...others}
    />
  )
})

_Center.displayName = '@rviseui/core/Center'

export const Center = createPolymorphicComponent<'div', CenterProps>(_Center)
