import React, { cloneElement, forwardRef } from 'react'
import { useMergedRef } from '@rviseui/hooks'
import { isElement } from '@rviseui/utils'
import { clsx, useComponentDefaultProps } from '@rviseui/styles'
import { usePopoverContext } from '../Popover.context'
import { POPOVER_ERRORS } from '../Popover.errors'

export interface PopoverTargetProps {
  /** Target element */
  children: React.ReactNode

  /** Key of the prop that should be used to get element ref */
  refProp?: string

  /** Popup accessible type, 'dialog' by default */
  popupType?: string
}

const defaultProps: Partial<PopoverTargetProps> = {
  refProp: 'ref',
  popupType: 'dialog',
}

export const PopoverTarget = forwardRef<HTMLElement, PopoverTargetProps>((props, ref) => {
  const { children, refProp, popupType, ...others } = useComponentDefaultProps('PopoverTarget', defaultProps, props)

  if (!isElement(children)) {
    throw new Error(POPOVER_ERRORS.children)
  }

  const forwardedProps = others as any
  const ctx = usePopoverContext()
  const targetRef = useMergedRef(ctx.reference, (children as any).ref, ref)
  const accessibleProps = ctx.withRoles
    ? {
        'aria-haspopup': popupType,
        'aria-expanded': ctx.opened,
        'aria-controls': ctx.getDropdownId(),
        id: ctx.getTargetId(),
      }
    : {}

  const cxProps = ctx.targetRefProps({
    ...forwardedProps,
    ...accessibleProps,
    ...ctx.targetProps,
    className: clsx(ctx.targetProps.className, forwardedProps.className, children.props.className),
    [refProp]: targetRef,
    ...children.props,
  })

  return cloneElement(children, {
    ...cxProps,
    ...(!ctx.controlled && ctx.trigger !== 'hover' ? { onClick: ctx.onToggle } : null),
  })
})

PopoverTarget.displayName = '@rviseui/core/PopoverTarget'
