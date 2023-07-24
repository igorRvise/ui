import React from 'react'
import { Global } from '@emotion/react'
import type { RviseTheme } from './types'

export function GlobalStyles({ theme }: { theme: RviseTheme }) {
  return (
    <Global
      styles={{
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },

        html: {
          colorScheme: theme.colorScheme === 'dark' ? 'dark' : 'light',
        },

        body: {
          ...theme.fn.fontStyles(),
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          lineHeight: theme.lineHeight,
          fontSize: theme.fontSizes.md,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
      }}
    />
  )
}
