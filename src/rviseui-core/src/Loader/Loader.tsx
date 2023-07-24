import React from 'react'
import {
  DefaultProps,
  RviseNumberSize,
  RviseColor,
  RviseTheme,
  useRviseTheme,
  useComponentDefaultProps,
} from '@rviseui/styles'
import { Box } from '../Box'
import { Bars } from './loaders/Bars'
import { Oval } from './loaders/Oval'
import { Dots } from './loaders/Dots'

const LOADERS = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
}

const sizes = {
  xs: 18,
  sm: 22,
  md: 36,
  lg: 44,
  xl: 58,
}

export interface LoaderProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'svg'>, 'display' | 'opacity'> {
  /** Defines width of loader */
  size?: RviseNumberSize

  /** Loader color from theme */
  color?: RviseColor

  /** Loader appearance */
  variant?: RviseTheme['loader']
}

const defaultProps: Partial<LoaderProps> = {
  size: 'md',
}

export function Loader(props: LoaderProps) {
  const { size, color, variant, ...others } = useComponentDefaultProps('Loader', defaultProps, props)
  const theme = useRviseTheme()
  const defaultLoader = variant in LOADERS ? variant : theme.loader

  return (
    <Box
      role="presentation"
      component={LOADERS[defaultLoader] || LOADERS.bars}
      size={theme.fn.size({ size, sizes })}
      color={
        theme.fn.variant({
          variant: 'filled',
          primaryFallback: false,
          color: color || theme.primaryColor,
        }).background
      }
      {...others}
    />
  )
}

Loader.displayName = '@rviseui/core/Loader'
