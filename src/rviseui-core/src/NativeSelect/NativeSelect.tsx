import React, { forwardRef } from 'react'
import { DefaultProps, RviseSize, useRviseTheme } from '@rviseui/styles'
import {
  InputWrapperBaseProps,
  InputWrapperStylesNames,
  Input,
  InputSharedProps,
  InputStylesNames,
  useInputProps,
} from '../Input'
import { getSelectRightSectionProps } from '../Select/SelectRightSection/get-select-right-section-props'
import { SelectItem } from '../Select/types'

export type NativeSelectStylesNames = InputStylesNames | InputWrapperStylesNames

export interface NativeSelectProps
  extends DefaultProps<NativeSelectStylesNames>,
    InputWrapperBaseProps,
    InputSharedProps,
    Omit<React.ComponentPropsWithoutRef<'select'>, 'size'> {
  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string

  /** Data used to render options */
  data: (string | SelectItem)[]

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: Record<string, any>

  /** Input size */
  size?: RviseSize
}

const defaultProps: Partial<NativeSelectProps> = {
  size: 'sm',
}

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>((props, ref) => {
  const {
    inputProps,
    wrapperProps,
    data,
    onChange,
    value,
    classNames,
    styles,
    rightSection,
    rightSectionWidth,
    ...others
  } = useInputProps('NativeSelect', defaultProps, props)
  const theme = useRviseTheme()

  const formattedData = data.map((item) => (typeof item === 'string' ? { label: item, value: item } : item))

  const options = formattedData.map((item) => (
    <option key={item.value} value={item.value} disabled={item.disabled}>
      {item.label}
    </option>
  ))

  return (
    <Input.Wrapper {...wrapperProps} __staticSelector="NativeSelect">
      <Input<'select'>
        {...inputProps}
        {...others}
        onChange={onChange}
        component="select"
        ref={ref}
        value={value === null ? '' : value}
        __staticSelector="NativeSelect"
        pointer={theme.cursorType === 'pointer'}
        {...getSelectRightSectionProps({
          theme,
          rightSection,
          rightSectionWidth,
          styles,
          shouldClear: false,
          size: inputProps.size,
          error: wrapperProps.error,
          readOnly: false,
        })}>
        {options}
      </Input>
    </Input.Wrapper>
  )
})

NativeSelect.displayName = '@rviseui/core/NativeSelect'