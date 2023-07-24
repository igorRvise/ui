import { createStyles, RviseSize } from '@rviseui/styles'

export interface JsonInputStylesParams {
  size: RviseSize
}

export default createStyles((theme, { size }: JsonInputStylesParams) => ({
  input: {
    fontFamily: theme.fontFamilyMonospace,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }) - 2,
  },
}))
