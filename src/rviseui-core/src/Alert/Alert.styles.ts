import { createStyles, CSSObject, RviseColor, RviseNumberSize, RviseTheme } from '@rviseui/styles'

export type AlertVariant = 'filled' | 'outline' | 'light'

export interface AlertStylesParams {
  color: RviseColor
  radius: RviseNumberSize
  variant: AlertVariant
}

interface GetVariantStylesInput {
  variant: AlertVariant
  color: RviseColor
  theme: RviseTheme
}

function getVariantStyles({ variant, color, theme }: GetVariantStylesInput): CSSObject {
  if (variant === 'filled') {
    const colors = theme.fn.variant({ variant: 'filled', color })
    return {
      backgroundColor: colors.background,
      color: theme.white,
    }
  }

  if (variant === 'outline') {
    const colors = theme.fn.variant({ variant: 'outline', color })
    return {
      color: colors.color,
      borderColor: colors.border,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    }
  }

  const colors = theme.fn.variant({ variant: 'light', color })

  return {
    backgroundColor: colors.background,
    color: colors.color,
  }
}

export default createStyles((theme, { color, radius, variant }: AlertStylesParams) => ({
  root: {
    ...theme.fn.fontStyles(),
    position: 'relative',
    overflow: 'hidden',
    padding: `${theme.spacing.sm as number}px ${theme.spacing.md as number}px`,
    borderRadius: theme.fn.radius(radius),
    border: '1px solid transparent',
    ...getVariantStyles({ variant, color, theme }),
  },

  wrapper: {
    display: 'flex',
  },

  body: {
    flex: 1,
  },

  title: {
    boxSizing: 'border-box',
    margin: 0,
    marginBottom: 7,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    lineHeight: theme.lineHeight,
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,

    '&[data-with-close-button]': {
      paddingRight: theme.spacing.md,
    },
  },

  label: {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  icon: {
    lineHeight: 1,
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight: theme.spacing.md,
    marginTop: 1,
  },

  message: {
    ...theme.fn.fontStyles(),
    lineHeight: theme.lineHeight,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: theme.fontSizes.sm,
    color:
      variant === 'filled'
        ? theme.white
        : theme.colorScheme === 'dark'
        ? variant === 'light'
          ? theme.white
          : theme.colors.dark[0]
        : theme.black,
  },

  closeButton: {
    position: 'absolute',
    top: theme.spacing.sm,
    right: theme.spacing.sm,
    color: 'inherit',
  },
}))
