import { itRendersChildren, itSupportsSystemProps } from '@rviseui/tests'
import { TypographyStylesProvider, TypographyStylesProviderProps } from './TypographyStylesProvider'

const defaultProps: TypographyStylesProviderProps = {
  children: 'test-children',
}

describe('@rviseui/core/TypographyStylesProvider', () => {
  itRendersChildren(TypographyStylesProvider, defaultProps)
  itSupportsSystemProps({
    component: TypographyStylesProvider,
    props: defaultProps,
    displayName: '@rviseui/core/TypographyStylesProvider',
    refType: HTMLDivElement,
  })
})
