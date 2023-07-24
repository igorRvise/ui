import React from 'react'
import { useRviseTheme } from '@rviseui/styles'
import * as _icons from '../icons'

export interface PaginationItemProps extends React.ComponentPropsWithoutRef<'button'> {
  page: number | 'dots' | 'prev' | 'next' | 'first' | 'last'
  active?: boolean
  onClick?: () => void
}

const icons = {
  dots: _icons.DotsIcon,
  next: _icons.NextIcon,
  prev: _icons.PrevIcon,
  first: _icons.FirstIcon,
  last: _icons.LastIcon,
}

const rtlIcons = {
  dots: _icons.DotsIcon,
  prev: _icons.NextIcon,
  next: _icons.PrevIcon,
  last: _icons.FirstIcon,
  first: _icons.LastIcon,
}

export function DefaultItem({ page, active, onClick, ...others }: PaginationItemProps) {
  const theme = useRviseTheme()
  const Item = (theme.dir === 'rtl' ? rtlIcons : icons)[page]
  const children = Item ? <Item /> : page

  return (
    <button type="button" onClick={onClick} {...others}>
      {children}
    </button>
  )
}

DefaultItem.displayName = '@rviseui/core/Pagination/DefaultItem'
