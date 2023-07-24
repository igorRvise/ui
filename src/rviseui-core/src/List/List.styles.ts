import { createStyles, RviseNumberSize } from '@rviseui/styles'

export interface ListStylesParams {
  withPadding: boolean
  size: RviseNumberSize
  listStyleType: string
  spacing: RviseNumberSize
  center: boolean
}

export default createStyles((theme, { withPadding, size, listStyleType }: ListStylesParams) => ({
  root: {
    ...theme.fn.fontStyles(),
    listStyleType,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    lineHeight: theme.lineHeight,
    margin: 0,
    paddingLeft: withPadding ? theme.spacing.xl : 0,
    listStylePosition: 'inside',
  },
}))
