import React from 'react'
import { render } from '@testing-library/react'
import { itSupportsSystemProps } from '@rviseui/tests'
import { Grid, GridProps } from './Grid'
import { Col } from './Col/Col'

const defaultProps: GridProps = {
  children: (
    <>
      <Grid.Col>1</Grid.Col>
      <Grid.Col>2</Grid.Col>
    </>
  ),
}

describe('@rviseui/core/Grid', () => {
  itSupportsSystemProps({
    component: Grid,
    props: defaultProps,
    displayName: '@rviseui/core/Grid',
    refType: HTMLDivElement,
    providerName: 'Grid',
  })

  it('exposes Col as Grid.Col', () => {
    expect(Grid.Col).toBe(Col)
  })

  it('supports getting Col ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(
      <Grid>
        <Grid.Col ref={ref} />
      </Grid>,
    )
    expect(ref.current instanceof HTMLDivElement).toBe(true)
  })
})
