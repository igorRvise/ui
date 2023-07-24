import React from 'react'
import { render } from '@testing-library/react'
import { itSupportsSystemProps, itIsPolymorphic, itRendersChildren } from '@rviseui/tests'
import { BackgroundImage, BackgroundImageProps } from './BackgroundImage'

const defaultProps: BackgroundImageProps = {
  src: './image.png',
}

describe('@rviseui/core/BackgroundImage', () => {
  itIsPolymorphic(BackgroundImage, defaultProps)
  itRendersChildren(BackgroundImage, defaultProps)
  itSupportsSystemProps({
    component: BackgroundImage,
    props: defaultProps,
    displayName: '@rviseui/core/BackgroundImage',
    refType: HTMLDivElement,
    providerName: 'BackgroundImage',
  })

  it('sets correct image as background', () => {
    const { container } = render(<BackgroundImage src="./image" />)
    expect(container.firstChild).toHaveStyle({ backgroundImage: "url('./image')" })
  })
})
