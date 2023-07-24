import { itSupportsSystemProps } from '@rviseui/tests'
import { Table, TableProps } from './Table'

const defaultProps: TableProps = {}

describe('@rviseui/core/Table', () => {
  itSupportsSystemProps({
    component: Table,
    props: defaultProps,
    displayName: '@rviseui/core/Table',
    refType: HTMLTableElement,
    providerName: 'Table',
  })
})
