import React, { createContext, useContext } from 'react'
import type { EmotionCache } from '@emotion/cache'
import { ThemeProvider, Global } from '@emotion/react'
import { DEFAULT_THEME } from './default-theme'
import { GlobalStyles } from './GlobalStyles'
import { RviseCssVariables } from './RviseCssVariables'
import type { RviseThemeOverride, RviseTheme } from './types'
import { mergeThemeWithFunctions } from './utils/merge-theme/merge-theme'
import { filterProps } from './utils/filter-props/filter-props'
import { NormalizeCSS } from './NormalizeCSS'

interface RviseProviderContextType {
  theme: RviseTheme
  emotionCache?: EmotionCache
}

const RviseProviderContext = createContext<RviseProviderContextType>({
  theme: DEFAULT_THEME,
})

export function useRviseTheme() {
  return useContext(RviseProviderContext)?.theme || DEFAULT_THEME
}

export function useRviseProviderStyles(component: string | string[]) {
  const theme = useRviseTheme()

  const getStyles = (name: string) => ({
    styles: theme.components[name]?.styles || {},
    classNames: theme.components[name]?.classNames || {},
  })

  if (Array.isArray(component)) {
    return component.map(getStyles)
  }

  return [getStyles(component)]
}

export function useRviseEmotionCache() {
  return useContext(RviseProviderContext)?.emotionCache
}

export function useComponentDefaultProps<T extends Record<string, any>, U extends Partial<T> = {}>(
  component: string,
  defaultProps: U,
  props: T,
): T & {
  [Key in Extract<keyof T, keyof U>]-?: U[Key] | NonNullable<T[Key]>
} {
  const theme = useRviseTheme()
  const contextPropsPayload = theme.components[component]?.defaultProps
  const contextProps = typeof contextPropsPayload === 'function' ? contextPropsPayload(theme) : contextPropsPayload

  return { ...defaultProps, ...contextProps, ...filterProps(props) }
}

export interface RviseProviderProps {
  theme?: RviseThemeOverride
  emotionCache?: EmotionCache
  withNormalizeCSS?: boolean
  withGlobalStyles?: boolean
  withCSSVariables?: boolean
  children: React.ReactNode
  inherit?: boolean
}

export function RviseProvider({
  theme,
  emotionCache,
  withNormalizeCSS = false,
  withGlobalStyles = false,
  withCSSVariables = false,
  inherit = false,
  children,
}: RviseProviderProps) {
  const ctx = useContext(RviseProviderContext)
  const mergedTheme = mergeThemeWithFunctions(DEFAULT_THEME, inherit ? { ...ctx.theme, ...theme } : theme)

  return (
    <ThemeProvider theme={mergedTheme}>
      <RviseProviderContext.Provider value={{ theme: mergedTheme, emotionCache }}>
        {withNormalizeCSS && <NormalizeCSS />}
        {withGlobalStyles && <GlobalStyles theme={mergedTheme} />}
        {withCSSVariables && <RviseCssVariables theme={mergedTheme} />}
        {typeof mergedTheme.globalStyles === 'function' && (
          <Global styles={mergedTheme.globalStyles(mergedTheme) as any} />
        )}
        {children}
      </RviseProviderContext.Provider>
    </ThemeProvider>
  )
}

RviseProvider.displayName = '@rviseui/core/RviseProvider'
