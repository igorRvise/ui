import { itSupportsSystemProps, itSupportsInputProps, itSupportsFocusEvents } from '@rviseui/tests'
import { DatePickerBase, DatePickerBaseProps } from './DatePickerBase'

const defaultProps: DatePickerBaseProps = {
  label: 'test-label',
  placeholder: 'test-placeholder',
  dropdownOpened: true,
  setDropdownOpened: () => {},
  onClear: () => {},
  transitionDuration: 0,
}

describe('@rviseui/dates/DatePickerBase', () => {
  itSupportsInputProps(DatePickerBase, defaultProps, 'DatePickerBase')
  itSupportsFocusEvents(DatePickerBase, defaultProps, 'input')
  itSupportsSystemProps({
    component: DatePickerBase,
    props: defaultProps,
    displayName: '@rviseui/dates/DatePickerBase',
    excludeOthers: true,
    refType: HTMLInputElement,
  })
})
