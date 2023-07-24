import { RviseSize } from '@rviseui/styles'
import { createContext, useContext } from 'react'

interface CheckboxGroupContextValue {
  value: string[]
  onChange(event: React.ChangeEvent<HTMLInputElement>): void
  size: RviseSize
}

const CheckboxGroupContext = createContext<CheckboxGroupContextValue>(null)
export const CheckboxGroupProvider = CheckboxGroupContext.Provider
export const useCheckboxGroupContext = () => useContext(CheckboxGroupContext)
