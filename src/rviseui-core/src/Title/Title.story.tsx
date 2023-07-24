import { RviseProvider } from '@rviseui/styles'
import React from 'react'
import { Title } from './Title'

export default { title: 'Title' }

const headings = ([1, 2, 3, 4, 5, 6] as const).map((order) => (
  <Title order={order} key={order}>
    Heading with order {order}
  </Title>
))

const displayHeadings = ([1, 2, 3, 4, 5, 6] as const).map((order) => (
  <Title order={order} key={order} size={`d${order}`} isDisplay>
    Heading with order {order}
  </Title>
))

export function SharedFontWeightOnProvider() {
  return (
    <RviseProvider
      inherit
      theme={{
        headings: {
          fontWeight: 100,
        },
      }}>
      {headings}
      {displayHeadings}
    </RviseProvider>
  )
}

export function IndividualFontWeightOnProvider() {
  return (
    <RviseProvider
      inherit
      theme={{
        headings: {
          fontWeight: 900,
          sizes: {
            h1: { fontWeight: 100 },
            h2: { fontWeight: 400 },
          },
        },
      }}>
      {headings}
    </RviseProvider>
  )
}

export function TextProps() {
  return (
    <>
      <Title order={2} size="h1">
        Blue color
      </Title>
    </>
  )
}
