import { createStyles } from '@rviseui/core'

interface NotificationsStylesParams {
  zIndex: any
}

export default createStyles((theme, { zIndex }: NotificationsStylesParams) => ({
  notification: {
    '&:not(:first-of-type)': {
      marginTop: theme.spacing.sm,
    },
  },
  notifications: {
    width: `calc(100% - ${theme.spacing.md} * 2)`,
    boxSizing: 'border-box',
    position: 'fixed',
    zIndex,
  },
}))
