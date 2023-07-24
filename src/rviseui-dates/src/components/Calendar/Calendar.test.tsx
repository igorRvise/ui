import { itSupportsSystemProps } from '@rviseui/tests'
import { Calendar, CalendarProps } from './Calendar'

const defaultProps: CalendarProps = {
  month: new Date(),
  value: new Date(),
}

describe('@rviseui/dates/Calendar', () => {
  itSupportsSystemProps({
    component: Calendar,
    props: defaultProps,
    displayName: '@rviseui/dates/Calendar',
  })
})
