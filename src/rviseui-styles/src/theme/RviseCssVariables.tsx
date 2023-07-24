import React from 'react'
import { Global } from '@emotion/react'
import type { RviseTheme, RviseSize } from './types'

function assignSizeVariables(
  variables: Record<string, string>,
  sizes: Record<RviseSize, number | string>,
  name: string,
) {
  Object.keys(sizes).forEach((size) => {
    // eslint-disable-next-line no-param-reassign
    variables[`--rviseui-${name}-${size}`] = typeof sizes[size] === 'number' ? `${sizes[size]}px` : sizes[size]
  })
}

export function RviseCssVariables({ theme }: { theme: RviseTheme }) {
  const variables: Record<string, string> = {
    '--rviseui-color-white': theme.white,
    '--rviseui-color-black': theme.black,
    '--rviseui-transition-timing-function': theme.transitionTimingFunction,
    '--rviseui-line-height': `${theme.lineHeight}`,
    '--rviseui-font-family': theme.fontFamily,
    '--rviseui-font-family-monospace': theme.fontFamilyMonospace,
    '--rviseui-font-family-headings': theme.headings.fontFamily,
    '--rviseui-heading-font-weight': `${theme.headings.fontWeight}`,
  }

  assignSizeVariables(variables, theme.shadows, 'shadow')
  assignSizeVariables(variables, theme.fontSizes, 'font-size')
  assignSizeVariables(variables, theme.radius, 'radius')
  assignSizeVariables(variables, theme.spacing, 'spacing')

  Object.keys(theme.colors).forEach((color) => {
    theme.colors[color].forEach((shade, index) => {
      variables[`--rviseui-color-${color}-${index}`] = shade
    })
  })

  const headings = theme.headings.sizes

  Object.keys(headings).forEach((heading) => {
    variables[`--rviseui-${heading}-font-size`] = `${headings[heading].fontSize}px`
    variables[`--rviseui-${heading}-line-height`] = `${headings[heading].lineHeight}`
  })

  return (
    <Global
      styles={{
        ':root': variables,
      }}
    />
  )
}
