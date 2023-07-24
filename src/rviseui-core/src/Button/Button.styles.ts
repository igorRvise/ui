import {
  createStyles,
  CSSObject,
  RviseColor,
  RviseGradient,
  RviseNumberSize,
  RviseSize,
  RviseTheme,
} from '@rviseui/styles'

import { INPUT_SIZES } from '../Input'

export const BUTTON_VARIANTS = ['filled', 'outline', 'light', 'white', 'default', 'subtle', 'gradient', 'link'] as const

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number]

export interface ButtonStylesParams {
  color: RviseColor
  size: RviseSize
  radius: RviseNumberSize
  fullWidth: boolean
  compact: boolean
  gradient: RviseGradient
  variant: ButtonVariant
  withRightIcon: boolean
  withLeftIcon: boolean
}

export const sizes = {
  xs: { minHeight: INPUT_SIZES.xs, paddingLeft: 14, paddingRight: 14 },
  sm: { minHeight: INPUT_SIZES.sm, paddingLeft: 18, paddingRight: 18 },
  md: { minHeight: INPUT_SIZES.md, paddingLeft: 22, paddingRight: 22 },
  lg: { minHeight: INPUT_SIZES.lg, paddingLeft: 26, paddingRight: 26 },
  xl: { minHeight: INPUT_SIZES.xl, paddingLeft: 32, paddingRight: 32 },
  'compact-xs': { minHeight: 22, paddingLeft: 7, paddingRight: 7 },
  'compact-sm': { minHeight: 26, paddingLeft: 8, paddingRight: 8 },
  'compact-md': { minHeight: 30, paddingLeft: 10, paddingRight: 10 },
  'compact-lg': { minHeight: 34, paddingLeft: 12, paddingRight: 12 },
  'compact-xl': { minHeight: 40, paddingLeft: 14, paddingRight: 14 },
}

interface GetSizeStyles {
  compact: boolean
  size: RviseSize
  withLeftIcon: boolean
  withRightIcon: boolean
}

function getSizeStyles({ compact, size, withLeftIcon, withRightIcon }: GetSizeStyles): CSSObject {
  if (compact) {
    return sizes[`compact-${size}`]
  }

  const _sizes = sizes[size]

  return {
    ..._sizes,
    paddingLeft: withLeftIcon ? _sizes.paddingLeft / 1.5 : _sizes.paddingLeft,
    paddingRight: withRightIcon ? _sizes.paddingRight / 1.5 : _sizes.paddingRight,
  }
}

const getWidthStyles = (fullWidth: boolean) => ({
  display: fullWidth ? 'block' : 'inline-flex',
  alignItems: fullWidth ? '' : 'center',
  width: fullWidth ? '100%' : 'auto',
})

interface GetVariantStyles {
  theme: RviseTheme
  color: RviseColor
  variant: ButtonVariant
  gradient: RviseGradient
}

function getVariantStyles({ variant, theme, color, gradient }: GetVariantStyles) {
  const colors = theme.fn.variant({ color, variant, gradient })

  if (variant === 'gradient') {
    return {
      border: 0,
      backgroundImage: colors.background,
      color: colors.color,

      '&:hover': theme.fn.hover({
        backgroundSize: '200%',
      }),
    }
  }

  if (variant === 'link') {
    return {
      padding: 0,
      color: colors.color,
      minHeight: 'auto',
      '&:hover': theme.fn.hover({
        textDecoration: 'underline',
      }),
    }
  }

  if (variant === 'outline') {
    return {
      border: `1px solid ${colors.border}`,
      backgroundColor: colors.background,
      color: colors.color,
      ...theme.fn.hover({
        color: color === 'white' ? theme.colors.dark[4] : theme.white,
        backgroundColor: colors.hover,
      }),
    }
  }

  return {
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.background,
    color: color === 'white' ? theme.colors.dark[4] : colors.color,
    ...theme.fn.hover({
      backgroundColor: colors.hover,
    }),
  }
}

export default createStyles(
  (
    theme,
    { color, size, radius, fullWidth, compact, gradient, variant, withLeftIcon, withRightIcon }: ButtonStylesParams,
  ) => ({
    root: {
      ...getSizeStyles({ compact, size, withLeftIcon, withRightIcon }),
      ...theme.fn.fontStyles(),
      ...theme.fn.focusStyles(),
      ...getWidthStyles(fullWidth),
      borderRadius: theme.fn.radius(radius),
      fontWeight: 600,
      position: 'relative',
      lineHeight: 1,
      fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
      userSelect: 'none',
      cursor: 'pointer',
      ...getVariantStyles({ variant, theme, color, gradient }),
      transition: 'background-color 0.2s, background 0.2s, border 0.2s, color 0.1s cubic-bezier(0, 0, 1, 1)',

      '&:active': theme.activeStyles,

      '&:disabled, &[data-disabled]': {
        borderColor: 'transparent',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
        cursor: 'not-allowed',
        backgroundImage: 'none',
        pointerEvents: 'none',

        '&:active': {
          transform: 'none',
        },
      },

      '&[data-loading]': {
        pointerEvents: 'none',

        '&::before': {
          content: '""',
          position: 'absolute',
          top: -1,
          left: -1,
          right: -1,
          bottom: -1,
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.fn.rgba(theme.colors.dark[7], 0.5) : 'rgba(255, 255, 255, .5)',
          borderRadius: theme.fn.radius(radius),
          cursor: 'not-allowed',
        },
      },
    },

    icon: {
      display: 'flex',
      alignItems: 'center',
    },

    leftIcon: {
      marginRight: 10,
    },

    rightIcon: {
      marginLeft: 10,
    },

    centerLoader: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      opacity: 0.5,
    },

    inner: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      overflow: 'visible',
    },

    label: {
      whiteSpace: 'nowrap',
      height: '100%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    },
  }),
)
