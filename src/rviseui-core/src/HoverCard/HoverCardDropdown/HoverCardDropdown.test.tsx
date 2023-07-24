import { itSupportsSystemProps, createContextContainer, itThrowsContextError, itRendersChildren } from '@rviseui/tests'
import { HoverCardDropdown, HoverCardDropdownProps } from './HoverCardDropdown'
import { HoverCard } from '../HoverCard'
import { HOVER_CARD_ERRORS } from '../HoverCard.errors'

const defaultProps: HoverCardDropdownProps = {}

const TestContainer = createContextContainer(HoverCardDropdown, HoverCard, {
  initiallyOpened: true,
})

describe('@rviseui/core/HoverCardDropdown', () => {
  itThrowsContextError(HoverCardDropdown, defaultProps, HOVER_CARD_ERRORS.context)
  itRendersChildren(TestContainer, defaultProps)

  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    displayName: '@rviseui/core/HoverCardDropdown',
    providerName: 'HoverCardDropdown',
  })
})
