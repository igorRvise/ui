import { ReferenceType } from '@floating-ui/react'
import { createSafeContext } from '@rviseui/utils'
import { RviseNumberSize, RviseShadow, ClassNames, Styles } from '@rviseui/styles'
import { FloatingPosition, ArrowPosition } from '../Floating'
import { RviseTransition } from '../Transition'
import { POPOVER_ERRORS } from './Popover.errors'
import { PopoverWidth, PopoverStylesNames, PopoverStylesParams } from './Popover.types'

interface PopoverContext {
  x: number
  y: number
  arrowX: number
  arrowY: number
  arrowRef: React.RefObject<HTMLDivElement>
  opened: boolean
  transition: RviseTransition
  transitionDuration: number
  exitTransitionDuration: number
  reference: (node: ReferenceType) => void
  floating: (node: HTMLElement) => void
  width?: PopoverWidth
  withArrow: boolean
  arrowSize: number
  arrowOffset: number
  arrowRadius: number
  arrowPosition: ArrowPosition
  trapFocus: boolean
  placement: FloatingPosition
  withinPortal: boolean
  closeOnEscape: boolean
  zIndex: React.CSSProperties['zIndex']
  radius?: RviseNumberSize
  shadow?: RviseShadow
  onClose?(): void
  getDropdownId(): string
  getTargetId(): string
  controlled: boolean
  onToggle(): void
  withRoles: boolean
  targetProps: Record<string, any>
  disabled: boolean
  returnFocus: boolean
  classNames: ClassNames<PopoverStylesNames>
  styles: Styles<PopoverStylesNames, PopoverStylesParams>
  unstyled: boolean
  __staticSelector: string
  targetRefProps: (unknown) => any
  dropdownRefProps: (unknown) => any
  trigger?: 'hover' | 'focus' | 'click'
}

export const [PopoverContextProvider, usePopoverContext] = createSafeContext<PopoverContext>(POPOVER_ERRORS.context)
