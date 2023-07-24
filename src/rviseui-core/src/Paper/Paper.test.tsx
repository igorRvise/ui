import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@rviseui/tests'
import { Paper, PaperProps } from './Paper'

const defaultProps: PaperProps = {}

describe('@rviseui/core/Paper', () => {
  itRendersChildren(Paper, defaultProps)
  itIsPolymorphic(Paper, defaultProps)
  itSupportsSystemProps({
    component: Paper,
    props: defaultProps,
    displayName: '@rviseui/core/Paper',
    refType: HTMLDivElement,
    providerName: 'Paper',
  })
})
