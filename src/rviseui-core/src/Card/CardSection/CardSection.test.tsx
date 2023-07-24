import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@rviseui/tests'
import { CardSection, CardSectionProps } from './CardSection'

const defaultProps: CardSectionProps = {}

describe('@rviseui/core/CardSection', () => {
  itRendersChildren(CardSection, defaultProps)
  itIsPolymorphic(CardSection, defaultProps)
  itSupportsSystemProps({
    component: CardSection,
    props: defaultProps,
    displayName: '@rviseui/core/CardSection',
    refType: HTMLDivElement,
    providerName: 'CardSection',
  })
})
