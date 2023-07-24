import React, { forwardRef } from 'react'
import { DefaultProps, useComponentDefaultProps } from '@rviseui/styles'
import { Text, TextProps } from '../Text'
import useStyles, { TitleStylesParams } from './Title.styles'

export type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6
export type TitleSize = `h${TitleOrder}` | `d${TitleOrder}` | React.CSSProperties['fontSize']

export interface TitleProps
  extends Omit<TextProps, 'size' | 'styles' | 'classNames' | 'span'>,
    DefaultProps<never, TitleStylesParams>,
    Omit<React.ComponentPropsWithoutRef<'h1'>, 'color'> {
  /** Defines component and styles which will be used */
  order?: TitleOrder

  /** Title font-size: h1-h6 or any valid CSS font-size value */
  size?: TitleSize

  breakpoints?: TitleStylesParams['breakpoints']

  isDisplay?: boolean
}

const defaultProps: Partial<TitleProps> = {
  order: 1,
}

export const Title = forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const { className, order, children, unstyled, size, weight, inline, breakpoints, isDisplay, ...others } =
    useComponentDefaultProps('Title', defaultProps, props)

  const { classes, cx } = useStyles(
    { element: isDisplay ? `d${order}` : `h${order}`, weight, size, inline, breakpoints },
    { name: 'Title', unstyled },
  )

  if (![1, 2, 3, 4, 5, 6].includes(order)) {
    return null
  }

  return (
    <Text component={`h${order}`} ref={ref} className={cx(classes.root, className)} {...others}>
      {children}
    </Text>
  )
})

Title.displayName = '@rviseui/core/Title'
