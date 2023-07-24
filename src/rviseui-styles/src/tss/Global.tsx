import React from 'react'
import { Global as EmotionGlobal, css, CSSObject } from '@emotion/react'
import { useRviseTheme } from '../theme/RviseProvider'
import type { RviseTheme } from '../theme/types'

type EmotionStyles = CSSObject | CSSObject[]

interface GlobalStylesProps {
  styles: EmotionStyles | ((theme: RviseTheme) => EmotionStyles)
}

export function Global({ styles }: GlobalStylesProps) {
  const theme = useRviseTheme()
  return <EmotionGlobal styles={css(typeof styles === 'function' ? styles(theme) : styles)} />
}
