import React from 'react'
import { DefaultProps, useComponentDefaultProps } from '@rviseui/styles'
import { closeOnEscape } from '@rviseui/utils'
import { useFocusReturn } from '@rviseui/hooks'
import { FloatingArrow } from '../../Floating'
import { Box } from '../../Box'
import { Transition } from '../../Transition'
import { FocusTrap } from '../../FocusTrap'
import { OptionalPortal } from '../../Portal'
import { usePopoverContext } from '../Popover.context'
import useStyles from './PopoverDropdown.styles'

export interface PopoverDropdownProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Dropdown content */
  children?: React.ReactNode
}

const defaultProps: Partial<PopoverDropdownProps> = {}

export function PopoverDropdown(props: PopoverDropdownProps) {
  const { style, className, children, onKeyDownCapture, ...others } = useComponentDefaultProps(
    'PopoverDropdown',
    defaultProps,
    props,
  )

  const ctx = usePopoverContext()
  const { classes, cx } = useStyles(
    { radius: ctx.radius, shadow: ctx.shadow },
    {
      name: ctx.__staticSelector,
      classNames: ctx.classNames,
      styles: ctx.styles,
      unstyled: ctx.unstyled,
    },
  )

  const returnFocus = useFocusReturn({
    opened: ctx.opened,
    shouldReturnFocus: ctx.returnFocus,
  })

  const accessibleProps = ctx.withRoles
    ? {
        'aria-labelledby': ctx.getTargetId(),
        id: ctx.getDropdownId(),
        role: 'dialog',
      }
    : {}

  if (ctx.disabled) {
    return null
  }

  return (
    <OptionalPortal withinPortal={ctx.withinPortal}>
      <Transition
        mounted={ctx.opened}
        transition={ctx.transition}
        duration={ctx.transitionDuration}
        exitDuration={
          typeof ctx.exitTransitionDuration === 'number' ? ctx.exitTransitionDuration : ctx.transitionDuration
        }>
        {(transitionStyles) => (
          <FocusTrap active={ctx.trapFocus}>
            <Box
              {...accessibleProps}
              {...ctx.dropdownRefProps({
                ref: ctx.floating,
                className: cx(classes.dropdown, className),
                tabIndex: '-1',
                onKeyDownCapture: closeOnEscape(ctx.onClose, {
                  active: ctx.closeOnEscape,
                  onTrigger: returnFocus,
                  onKeyDown: onKeyDownCapture,
                }),
                style: {
                  ...style,
                  ...transitionStyles,
                  zIndex: ctx.zIndex,
                  top: ctx.y ?? 0,
                  left: ctx.x ?? 0,
                  width: ctx.width === 'target' ? undefined : ctx.width,
                },
              })}
              data-position={ctx.placement}
              {...others}>
              {children}
              <FloatingArrow
                ref={ctx.arrowRef}
                arrowX={ctx.arrowX}
                arrowY={ctx.arrowY}
                visible={ctx.withArrow}
                withBorder
                position={ctx.placement}
                arrowSize={ctx.arrowSize}
                arrowRadius={ctx.arrowRadius}
                arrowOffset={ctx.arrowOffset}
                arrowPosition={ctx.arrowPosition}
                className={classes.arrow}
              />
            </Box>
          </FocusTrap>
        )}
      </Transition>
    </OptionalPortal>
  )
}

PopoverDropdown.displayName = '@rviseui/core/PopoverDropdown'
