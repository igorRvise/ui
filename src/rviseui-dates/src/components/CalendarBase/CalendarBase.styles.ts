import { createStyles, RviseSize } from '@rviseui/core'
import { sizes as DAY_SIZES } from '../Month/Day/Day.styles'

interface CalendarBaseStyles {
  size: RviseSize
  fullWidth: boolean
  amountOfMonths: number
}

export default createStyles((theme, { size, amountOfMonths, fullWidth }: CalendarBaseStyles) => {
  const _maxWidth = theme.fn.size({ size, sizes: DAY_SIZES }) * 7
  const maxWidth =
    amountOfMonths > 1 ? _maxWidth * amountOfMonths + (amountOfMonths - 1) * (theme.spacing.md as number) : _maxWidth

  return {
    calendarBase: {
      boxSizing: 'border-box',
      display: 'flex',
      gap: theme.spacing.md,
      maxWidth: fullWidth ? '100%' : maxWidth,
    },
  }
})
