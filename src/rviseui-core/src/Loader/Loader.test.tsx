import React from 'react'
import { render } from '@testing-library/react'
import { itSupportsSystemProps } from '@rviseui/tests'
import { DEFAULT_THEME } from '@rviseui/styles'
import { Loader, LoaderProps } from './Loader'

const defaultProps: LoaderProps = {}

describe('@rviseui/core/Loader', () => {
  itSupportsSystemProps({
    component: Loader,
    props: defaultProps,
    displayName: '@rviseui/core/Loader',
    providerName: 'Loader',
  })

  it('sets svg width based on size prop', () => {
    const { container } = render(<Loader size={41} variant="bars" />)
    expect(container.querySelector('svg')).toHaveAttribute('width', '41px')
  })

  it('sets svg fill based on color prop', () => {
    const { container } = render(<Loader color="yellow" variant="bars" />)
    expect(container.querySelector('svg')).toHaveAttribute('fill', DEFAULT_THEME.colors.yellow[6])
  })
})
