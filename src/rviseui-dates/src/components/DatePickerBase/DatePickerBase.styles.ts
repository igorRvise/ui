import { createStyles } from '@rviseui/core'

export default createStyles((theme) => ({
  wrapper: {
    ...theme.fn.fontStyles(),
    position: 'relative',
    cursor: 'pointer',
  },

  input: {
    cursor: 'pointer',
    whiteSpace: 'nowrap',

    '&:not([data-free-input])::selection': {
      backgroundColor: 'transparent',
    },

    '&[data-free-input]': {
      cursor: 'text',
    },
  },
}))
