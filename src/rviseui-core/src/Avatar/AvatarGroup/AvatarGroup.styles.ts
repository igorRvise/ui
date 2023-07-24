import { createStyles, RviseNumberSize } from '@rviseui/styles'

interface AvatarGroupStylesParams {
  spacing: RviseNumberSize
}

export default createStyles((theme, { spacing }: AvatarGroupStylesParams) => ({
  root: {
    display: 'flex',
    paddingLeft: theme.fn.size({ size: spacing, sizes: theme.spacing }),
  },
}))
