import { createStyles, RVISE_SIZES, RviseNumberSize, RviseSize, RviseTheme } from '@rviseui/styles'

export interface GridStylesParams {
  gutter: RviseNumberSize
  gutterXs: RviseNumberSize
  gutterSm: RviseNumberSize
  gutterMd: RviseNumberSize
  gutterLg: RviseNumberSize
  gutterXl: RviseNumberSize
  justify?: React.CSSProperties['justifyContent']
  align?: React.CSSProperties['alignContent']
}

function getGutterStyles(gutters: Record<RviseSize, RviseNumberSize>, theme: RviseTheme) {
  return RVISE_SIZES.reduce((acc, size) => {
    if (typeof gutters[size] !== 'undefined') {
      acc[`@media (min-width: ${theme.breakpoints[size]}px)`] = {
        margin: -theme.fn.size({ size: gutters[size], sizes: theme.spacing }) / 2,
      }
    }

    return acc
  }, {})
}

export default createStyles(
  (theme, { justify, align, gutter, gutterXs, gutterSm, gutterMd, gutterLg, gutterXl }: GridStylesParams) => ({
    root: {
      margin: -theme.fn.size({ size: gutter, sizes: theme.spacing }) / 2,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: justify,
      alignItems: align,
      ...getGutterStyles({ xs: gutterXs, sm: gutterSm, md: gutterMd, lg: gutterLg, xl: gutterXl }, theme),
    },
  }),
)
