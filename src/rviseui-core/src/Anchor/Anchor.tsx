import React, { forwardRef } from 'react'
import { useComponentDefaultProps } from '@rviseui/styles'
import { createPolymorphicComponent } from '@rviseui/utils'
import { Text, TextProps } from '../Text/Text'
import useStyles from './Anchor.styles'

export interface AnchorProps extends TextProps {
  children?: React.ReactNode
}

const defaultProps: Partial<AnchorProps> = {}

export const _Anchor = forwardRef<HTMLAnchorElement, AnchorProps & { component: any }>((props, ref) => {
  const { component, className, unstyled, ...others } = useComponentDefaultProps(
    'Anchor',
    defaultProps as AnchorProps & { component: any },
    props,
  )
  const { classes, cx } = useStyles(null, { name: 'Anchor', unstyled })
  const buttonProps = component === 'button' ? { type: 'button' } : null

  return (
    <Text
      component={component || 'a'}
      variant="link"
      ref={ref}
      className={cx(classes.root, className)}
      {...buttonProps}
      {...others}
    />
  )
})

_Anchor.displayName = '@rviseui/core/Anchor'

export const Anchor = createPolymorphicComponent<'a', AnchorProps>(_Anchor)
