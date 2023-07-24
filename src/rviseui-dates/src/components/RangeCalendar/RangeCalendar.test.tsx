import { itSupportsSystemProps } from '@rviseui/tests'
import { RangeCalendar, RangeCalendarProps } from './RangeCalendar'

const defaultProps: RangeCalendarProps = {
  month: new Date(),
  value: [new Date(), new Date()] as [Date, Date],
  onChange: () => {},
}

describe('@rviseui/dates/RangeCalendar', () => {
  itSupportsSystemProps({
    component: RangeCalendar,
    props: defaultProps,
    displayName: '@rviseui/dates/RangeCalendar',
    refType: HTMLDivElement,
  })
})
