import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { checkAccessibility, itSupportsSystemProps } from '@rviseui/tests'
import { Progress, ProgressProps } from './Progress'

const defaultProps: ProgressProps = {
  value: 80,
}

describe('@rviseui/core/Progress', () => {
  checkAccessibility([<Progress value={80} aria-label="test-progress" />])
  itSupportsSystemProps({
    component: Progress,
    props: defaultProps,
    displayName: '@rviseui/core/Progress',
    refType: HTMLDivElement,
    providerName: 'Progress',
  })

  it('renders given amount of sections', () => {
    const { container } = render(
      <Progress
        value={84}
        sections={[
          { value: 40, color: 'cyan' },
          { value: 20, color: 'red' },
          { value: 15, color: 'lime' },
        ]}
      />,
    )

    expect(container.querySelectorAll('.rviseui-Progress-bar')).toHaveLength(3)
  })

  it('passes value prop to progressbar', () => {
    render(<Progress value={84} />)
    expect(screen.getByRole('progressbar')).toHaveStyle({ width: '84%' })
  })

  it('has correct aria attributes', () => {
    render(<Progress value={84} />)
    const element = screen.getByRole('progressbar')
    expect(element).toHaveAttribute('aria-valuenow', '84')
    expect(element).toHaveAttribute('aria-valuemin', '0')
    expect(element).toHaveAttribute('aria-valuemax', '100')
  })

  it('supports props on sections', async () => {
    const spy = jest.fn()
    const { container } = render(
      <Progress
        sections={[
          { value: 20, color: 'cyan', onClick: spy },
          { value: 30, color: 'orange' },
        ]}
      />,
    )

    await userEvent.click(container.querySelectorAll('.rviseui-Progress-bar')[0])
    expect(spy).toHaveBeenCalledTimes(1)
    await userEvent.click(container.querySelectorAll('.rviseui-Progress-bar')[1])
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
