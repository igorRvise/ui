import React from 'react'
import { RviseTextSizes } from '@rviseui/styles'
import { Text } from './Text'

export default { title: 'Text' }

export function WithNumberAsSize() {
  return <Text size={112}>112px text</Text>
}

export function ColorIndex() {
  return <Text color="violet.9">Red 1 text</Text>
}
export function TruncateStart() {
  return (
    <div style={{ maxWidth: 100 }}>
      <Text truncate="start">Very very very long text</Text>
    </div>
  )
}
export function TruncateEnd() {
  return (
    <div style={{ maxWidth: 100 }}>
      <Text truncate="end">Very very very long text</Text>
    </div>
  )
}
export function Sizes() {
  return (
    <div style={{ maxWidth: 200 }}>
      <Text size="xs">Size xs</Text>
      <Text size="sm">Size sm</Text>
      <Text size="md">Size md</Text>
      <Text size="lg">Size lg</Text>
      <Text size="caption">Size caption</Text>
      <Text size="description">Size description</Text>
      <Text size="label">Size label</Text>
      <Text size="titleLabel">Size titleLabel</Text>
      <Text size="accent">Size accent</Text>
      <Text size="body">Size body</Text>
      <Text size="lead">Size lead</Text>
    </div>
  )
}
