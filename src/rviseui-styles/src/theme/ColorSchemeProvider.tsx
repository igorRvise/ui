import React, { createContext, useContext } from 'react'
import { ColorScheme } from './types'

interface ColorSchemeContextProps {
  colorScheme: ColorScheme
  toggleColorScheme(colorScheme?: ColorScheme): void
}

const ColorSchemeContext = createContext<ColorSchemeContextProps>(null)

export function useRviseColorScheme() {
  const ctx = useContext(ColorSchemeContext)

  if (!ctx) {
    throw new Error(
      'useRviseColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component',
    )
  }

  return ctx
}

interface ColorSchemeProviderProps extends ColorSchemeContextProps {
  children: React.ReactNode
}

export function ColorSchemeProvider({ colorScheme, toggleColorScheme, children }: ColorSchemeProviderProps) {
  return (
    <ColorSchemeContext.Provider value={{ colorScheme, toggleColorScheme }}>{children}</ColorSchemeContext.Provider>
  )
}

ColorSchemeProvider.displayName = '@rviseui/core/ColorSchemeProvider'
