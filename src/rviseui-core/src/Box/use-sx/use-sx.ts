import { RviseStyleSystemProps, RviseTheme, Sx, useCss, useRviseTheme } from '@rviseui/styles'
import { getSystemStyles } from '../style-system-props/get-system-styles/get-system-styles'

function extractSx(sx: Sx, theme: RviseTheme) {
  return typeof sx === 'function' ? sx(theme) : sx
}

export function useSx(sx: Sx | Sx[], systemProps: RviseStyleSystemProps, className: string) {
  const theme = useRviseTheme()
  const { css, cx } = useCss()

  if (Array.isArray(sx)) {
    return cx(
      className,
      css(getSystemStyles(systemProps, theme)),
      sx.map((partial) => css(extractSx(partial, theme))),
    )
  }

  return cx(className, css(extractSx(sx, theme)), css(getSystemStyles(systemProps, theme)))
}
