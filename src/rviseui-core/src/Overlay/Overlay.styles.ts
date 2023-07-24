import { createStyles } from '@rviseui/styles'

export interface OverlayStylesParams {
  zIndex: React.CSSProperties['zIndex']
}
//@ts-ignore
export default createStyles((theme, { zIndex }: OverlayStylesParams) => ({
  root: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex,
  },
}))
