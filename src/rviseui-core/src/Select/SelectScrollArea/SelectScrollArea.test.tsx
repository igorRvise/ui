import { itRendersChildren, itSupportsStyle, itSupportsOthers, itSupportsRef } from '@rviseui/tests'
import { SelectScrollArea } from './SelectScrollArea'

describe('@rviseui/core/SelectScrollArea', () => {
  itRendersChildren(SelectScrollArea, {})
  itSupportsStyle(SelectScrollArea, {})
  itSupportsOthers(SelectScrollArea, {})
  itSupportsRef(SelectScrollArea, {}, HTMLDivElement)

  it('has correct displayName', () => {
    expect(SelectScrollArea.displayName).toStrictEqual('@rviseui/core/SelectScrollArea')
  })
})
