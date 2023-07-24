import React from 'react'
import { RviseSize } from '@rviseui/styles'
import { CloseButton } from '../../CloseButton'
import { ChevronIcon } from './ChevronIcon'

export interface SelectRightSectionProps {
  shouldClear: boolean
  clearButtonLabel?: string
  onClear?: () => void
  size: RviseSize
  error?: any
  // eslint-disable-next-line react/no-unused-prop-types
  disabled?: boolean
  clearButtonTabIndex?: number
}

export function SelectRightSection({
  shouldClear,
  clearButtonLabel,
  onClear,
  size,
  error,
  clearButtonTabIndex,
}: SelectRightSectionProps) {
  return shouldClear ? (
    <CloseButton
      variant="transparent"
      aria-label={clearButtonLabel}
      onClick={onClear}
      size={size}
      tabIndex={clearButtonTabIndex}
      onMouseDown={(event) => event.preventDefault()}
    />
  ) : (
    <ChevronIcon error={error} size={size} />
  )
}

SelectRightSection.displayName = '@rviseui/core/SelectRightSection'
