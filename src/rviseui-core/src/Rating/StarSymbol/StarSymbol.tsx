import React from 'react'
import { RviseSize, RviseColor } from '@rviseui/styles'
import { StarIcon } from './StarIcon'
import useStyles from './StarSymbol.styles'

export interface StarSymbolProps {
  size: RviseSize
  color: RviseColor
  type: 'empty' | 'full'
}

export function StarSymbol({ size, type, color }: StarSymbolProps) {
  const { classes } = useStyles({ size, type, color })
  return <StarIcon className={classes.icon} />
}

StarSymbol.displayName = '@rviseui/core/StarSymbol'
