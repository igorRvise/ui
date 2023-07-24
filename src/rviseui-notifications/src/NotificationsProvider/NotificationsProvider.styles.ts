import { createStyles } from '@rviseui/core'

interface NotificationsProviderStylesParams {
  zIndex: React.CSSProperties['zIndex']
}

//@ts-ignore
export default createStyles((theme, { zIndex }: NotificationsProviderStylesParams) => ({
  notifications: {
    width: `calc(100% - ${(theme.spacing.md as number) * 2}px)`,
    boxSizing: 'border-box',
    position: 'fixed',
    zIndex,
  },

  notification: {
    '&:not(:first-of-type)': {
      marginTop: theme.spacing.sm,
    },
  },
}))
