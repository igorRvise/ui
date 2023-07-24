import React, { forwardRef } from 'react'
import { useRviseTheme } from '@rviseui/styles'
import { getArrowPositionStyles } from './get-arrow-position-styles'
import { ArrowPosition, FloatingPosition } from '../types'

interface FloatingArrowProps extends React.ComponentPropsWithoutRef<'div'> {
  withBorder: boolean
  position: FloatingPosition
  arrowSize: number
  arrowOffset: number
  arrowRadius: number
  arrowPosition: ArrowPosition
  arrowX: number
  arrowY: number
  visible: boolean
}

export const FloatingArrow = forwardRef<HTMLDivElement, FloatingArrowProps>(
  (
    { withBorder, position, arrowSize, arrowOffset, arrowRadius, arrowPosition, visible, arrowX, arrowY, ...others },
    ref,
  ) => {
    const theme = useRviseTheme()
    if (!visible) {
      return null
    }

    return (
      <div
        {...others}
        ref={ref}
        style={getArrowPositionStyles({
          withBorder,
          position,
          arrowSize,
          arrowOffset,
          arrowRadius,
          arrowPosition,
          dir: theme.dir,
          arrowX,
          arrowY,
        })}
      />
    )
  },
)

FloatingArrow.displayName = '@rviseui/core/FloatingArrow'
