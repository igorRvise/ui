/* eslint-disable react/no-unused-prop-types */

import React, { useRef, useState, useCallback } from 'react'
import { useId, useClickOutside } from '@rviseui/hooks'
import {
  useRviseTheme,
  ClassNames,
  Styles,
  RviseNumberSize,
  RviseShadow,
  getDefaultZIndex,
  useComponentDefaultProps,
} from '@rviseui/styles'
import { RviseTransition } from '../Transition'
import { getFloatingPosition, FloatingPosition, ArrowPosition } from '../Floating'
import { usePopover } from './use-popover'
import { PopoverContextProvider } from './Popover.context'
import { PopoverWidth, PopoverMiddlewares, PopoverStylesNames, PopoverStylesParams } from './Popover.types'
import { PopoverTarget } from './PopoverTarget/PopoverTarget'
import { PopoverDropdown } from './PopoverDropdown/PopoverDropdown'

export interface PopoverBaseProps {
  /** Dropdown position relative to target */
  position?: FloatingPosition

  /** Space between target element and dropdown in px */
  offset?: number

  /** Called when dropdown position changes */
  onPositionChange?(position: FloatingPosition): void

  /** useEffect dependencies to force update dropdown position */
  positionDependencies?: any[]

  /** Called when dropdown closes */
  onClose?(): void

  /** Called when dropdown opens */
  onOpen?(): void

  /** One of premade transitions ot transition object */
  transition?: RviseTransition

  /** Transition duration in ms */
  transitionDuration?: number

  /** Exit transition duration in ms */
  exitTransitionDuration?: number

  /** Dropdown width, or 'target' to make dropdown width the same as target element */
  width?: PopoverWidth

  /** Floating ui middlewares to configure position handling */
  middlewares?: PopoverMiddlewares

  /** Determines whether component should have an arrow */
  withArrow?: boolean

  /** Arrow size in px */
  arrowSize?: number

  /** Arrow offset in px */
  arrowOffset?: number

  /** Arrow radius in px */
  arrowRadius?: number

  /** Arrow position **/
  arrowPosition?: ArrowPosition

  /** Determines whether dropdown should be rendered within Portal, defaults to false */
  withinPortal?: boolean

  /** Dropdown z-index */
  zIndex?: React.CSSProperties['zIndex']

  /** Radius from theme.radius or number to set border-radius in px */
  radius?: RviseNumberSize

  /** Key of theme.shadow or any other valid css box-shadow value */
  shadow?: RviseShadow

  /** If set, popover dropdown will not render */
  disabled?: boolean

  /** Determines whether focus should be automatically returned to control when dropdown closes, false by default */
  returnFocus?: boolean
}

export interface PopoverProps extends PopoverBaseProps {
  /** Popover.Target and Popover.Dropdown components */
  children: React.ReactNode

  /** Initial opened state for uncontrolled component */
  defaultOpened?: boolean

  /** Controls dropdown opened state */
  opened?: boolean

  /** Called with current state when dropdown opens or closes */
  onChange?(opened: boolean): void

  /** Determines whether dropdown should be closed on outside clicks, default to true */
  closeOnClickOutside?: boolean

  /** Events that trigger outside clicks */
  clickOutsideEvents?: string[]

  /** Determines whether focus should be trapped within dropdown, default to false */
  trapFocus?: boolean

  /** Determines whether dropdown should be closed when Escape key is pressed, defaults to true */
  closeOnEscape?: boolean

  /** id base to create accessibility connections */
  id?: string

  /** Determines whether dropdown and target element should have accessible roles, defaults to true */
  withRoles?: boolean

  unstyled?: boolean
  classNames?: ClassNames<PopoverStylesNames>
  styles?: Styles<PopoverStylesNames, PopoverStylesParams>
  __staticSelector?: string
  /** Props that will be passed to target element */
  trigger?: 'hover' | 'focus' | 'click'

  /** Delay in ms before dropdown opens */
  openDelay?: number

  /** Delay in ms before dropdown closes */
  closeDelay?: number
}

const defaultProps: Partial<PopoverProps> = {
  position: 'bottom',
  offset: 8,
  positionDependencies: [],
  transition: 'fade',
  transitionDuration: 150,
  middlewares: { flip: true, shift: true, inline: false },
  arrowSize: 7,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: 'side',
  closeOnClickOutside: true,
  withinPortal: false,
  closeOnEscape: true,
  trapFocus: false,
  withRoles: true,
  returnFocus: false,
  clickOutsideEvents: ['mousedown', 'touchstart'],
  zIndex: getDefaultZIndex('popover'),
  __staticSelector: 'Popover',
  width: 'max-content',
  closeDelay: 100,
  openDelay: 100,
  trigger: 'click',
}

export function Popover(props: PopoverProps) {
  const arrowRef = useRef<HTMLDivElement | null>(null)
  const {
    children,
    position,
    offset,
    onPositionChange,
    positionDependencies,
    opened,
    transition,
    transitionDuration,
    width,
    middlewares,
    withArrow,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    unstyled,
    classNames,
    styles,
    closeOnClickOutside,
    withinPortal,
    closeOnEscape,
    clickOutsideEvents,
    trapFocus,
    onClose,
    onOpen,
    onChange,
    zIndex,
    radius,
    shadow,
    id,
    defaultOpened,
    exitTransitionDuration,
    __staticSelector,
    withRoles,
    disabled,
    returnFocus,
    trigger,
    openDelay,
    closeDelay,
    ...others
  } = useComponentDefaultProps('Popover', defaultProps, props)
  const [targetNode, setTargetNode] = useState<HTMLElement>(null)
  const [dropdownNode, setDropdownNode] = useState<HTMLElement>(null)

  const uid = useId(id)
  const theme = useRviseTheme()
  const popover = usePopover({
    middlewares,
    width,
    position: getFloatingPosition(theme.dir, position),
    offset: offset + (withArrow ? arrowSize / 2 : 0),
    arrowRef,
    arrowOffset,
    onPositionChange,
    positionDependencies,
    opened,
    defaultOpened,
    onChange,
    onOpen,
    trigger,
    onClose,
    closeDelay,
    openDelay,
  })

  useClickOutside(() => closeOnClickOutside && popover.onClose(), clickOutsideEvents, [targetNode, dropdownNode])

  const reference = useCallback(
    (node: HTMLElement) => {
      setTargetNode(node)
      popover.floating.reference(node)
    },
    [popover.floating.reference],
  )

  const floating = useCallback(
    (node: HTMLElement) => {
      setDropdownNode(node)
      popover.floating.floating(node)
    },
    [popover.floating.floating],
  )

  return (
    <PopoverContextProvider
      value={{
        returnFocus,
        disabled,
        controlled: popover.controlled,
        reference,
        floating,
        x: popover.floating.x,
        y: popover.floating.y,
        arrowX: popover.floating?.middlewareData?.arrow?.x,
        arrowY: popover.floating?.middlewareData?.arrow?.y,
        opened: popover.opened,
        arrowRef,
        transition,
        transitionDuration,
        exitTransitionDuration,
        width,
        withArrow,
        arrowSize,
        arrowOffset,
        arrowRadius,
        arrowPosition,
        placement: popover.floating.placement,
        trapFocus,
        withinPortal,
        zIndex,
        radius,
        shadow,
        closeOnEscape,
        onClose: popover.onClose,
        onToggle: popover.onToggle,
        getTargetId: () => `${uid}-target`,
        getDropdownId: () => `${uid}-dropdown`,
        withRoles,
        targetProps: others,
        __staticSelector,
        classNames,
        styles,
        unstyled,
        targetRefProps: popover.getReferenceProps,
        dropdownRefProps: popover.getFloatingProps,
        trigger,
      }}>
      {children}
    </PopoverContextProvider>
  )
}

Popover.Target = PopoverTarget
Popover.Dropdown = PopoverDropdown
Popover.displayName = '@rviseui/core/Popover'
