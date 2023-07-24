import { itSupportsSystemProps, createContextContainer, itThrowsContextError } from '@rviseui/tests'
import { GridProvider } from '../Grid.context'
import { Col, ColProps } from './Col'

const defaultProps: ColProps = {
  span: 12,
}

const TestContainer = createContextContainer(Col, GridProvider, {
  value: {
    gutter: 'md',
    grow: false,
    columns: 12,
  },
})

describe('@rviseui/core/Col', () => {
  itThrowsContextError(Col, defaultProps, 'Grid component was not found in tree')
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@rviseui/core/Col',
    providerName: 'GridCol',
  })
})
