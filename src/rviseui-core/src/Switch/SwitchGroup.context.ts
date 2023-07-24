import { RviseSize } from '@rviseui/styles'
import { createContext, useContext } from 'react'

interface SwitchGroupContextValue {
  value: string[]
  onChange(event: React.ChangeEvent<HTMLInputElement>): void
  size: RviseSize
}

const SwitchGroupContext = createContext<SwitchGroupContextValue>(null)
export const SwitchGroupProvider = SwitchGroupContext.Provider
export const useSwitchGroupContext = () => useContext(SwitchGroupContext)
