import React from 'react'
import { RviseProvider } from '@rviseui/styles'
import { NativeSelect } from './NativeSelect'

export default { title: 'NativeSelect' }

const data = ['React', 'Angular', 'Vue', 'Svelte']

export function CursorPointer() {
  return (
    <RviseProvider theme={{ cursorType: 'pointer' }}>
      <NativeSelect data={data} placeholder="Test placeholder" />
    </RviseProvider>
  )
}
