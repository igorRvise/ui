import React, { forwardRef } from 'react'
import { DefaultProps, RviseNumberSize, useComponentDefaultProps } from '@rviseui/styles'
import { createPolymorphicComponent, packSx } from '@rviseui/utils'
import { Box } from '../Box'

export interface BackgroundImageProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Image url */
  src: string

  /** Key of theme.radius or number to set border-radius in px */
  radius?: RviseNumberSize
}

const defaultProps: Partial<BackgroundImageProps> = {
  radius: 0,
}

export const _BackgroundImage = forwardRef<HTMLDivElement, BackgroundImageProps>((props, ref) => {
  const { src, radius, sx, ...others } = useComponentDefaultProps('BackgroundImage', defaultProps, props)

  return (
    <Box
      {...others}
      ref={ref}
      sx={[
        (theme) => ({
          ...theme.fn.focusStyles(),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'block',
          width: '100%',
          border: 0,
          textDecoration: 'none',
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          backgroundImage: `url(${src})`,
          borderRadius: theme.fn.radius(radius),
        }),
        ...packSx(sx),
      ]}
    />
  )
})

_BackgroundImage.displayName = '@rviseui/core/BackgroundImage'

export const BackgroundImage = createPolymorphicComponent<'div', BackgroundImageProps>(_BackgroundImage)
