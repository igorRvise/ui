import { createStyles, RviseNumberSize, RviseSize } from '@rviseui/styles'

export interface ContainerStylesParams {
  fluid: boolean
  size: RviseNumberSize
  sizes: Record<RviseSize, number>
}

export default createStyles((theme, { fluid, size, sizes }: ContainerStylesParams) => ({
  root: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    maxWidth: fluid ? '100%' : theme.fn.size({ size, sizes }),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}))
