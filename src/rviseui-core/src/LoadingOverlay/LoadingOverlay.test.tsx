import React from 'react'
import { render } from '@testing-library/react'
import { itSupportsSystemProps } from '@rviseui/tests'
import { LoadingOverlay, LoadingOverlayProps } from './LoadingOverlay'

const defaultProps: LoadingOverlayProps = {
  visible: true,
}

describe('@rviseui/core/LoadingOverlay', () => {
  itSupportsSystemProps({
    component: LoadingOverlay,
    props: defaultProps,
    displayName: '@rviseui/core/LoadingOverlay',
    refType: HTMLDivElement,
    providerName: 'LoadingOverlay',
  })

  it('renders based on visible prop', () => {
    const { container: notVisible } = render(<LoadingOverlay visible={false} />)
    const { container: visible } = render(<LoadingOverlay visible />)
    expect(notVisible.querySelector('.rviseui-LoadingOverlay-root')).toBe(null)
    expect(visible.querySelector('.rviseui-LoadingOverlay-root')).toBeInTheDocument()
  })
})
