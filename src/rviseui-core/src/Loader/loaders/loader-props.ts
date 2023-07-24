import React from 'react'
import type { RviseColor } from '@rviseui/styles'

export interface LoaderProps extends React.ComponentPropsWithoutRef<'svg'> {
  size: number
  color: RviseColor
}
