import React, { useEffect, useState, forwardRef } from 'react'
import {
  DefaultProps,
  RviseNumberSize,
  RviseColor,
  Selectors,
  useComponentDefaultProps,
  RviseGradient,
} from '@rviseui/styles'
import { createPolymorphicComponent } from '@rviseui/utils'
import { Box } from '../Box'
import { AvatarPlaceholderIcon } from './AvatarPlaceholderIcon'
import { AvatarGroup } from './AvatarGroup/AvatarGroup'
import { useAvatarGroupContext } from './AvatarGroup/AvatarGroup.context'
import useStyles, { AvatarStylesParams, AvatarVariant } from './Avatar.styles'

export type AvatarStylesNames = Selectors<typeof useStyles>

export interface AvatarProps extends DefaultProps<AvatarStylesNames, AvatarStylesParams> {
  /** Image url */
  src?: string | null

  /** Image alt text or title for placeholder variant */
  alt?: string

  /** Avatar width and height */
  size?: RviseNumberSize

  /** Value from theme.radius or number to set border-radius in px */
  radius?: RviseNumberSize

  /** Color from theme.colors used for letter and icon placeholders */
  color?: RviseColor

  /** Controls appearance */
  variant?: AvatarVariant

  /** Controls gradient settings in gradient variant only */
  gradient?: RviseGradient

  /** img element attributes */
  imageProps?: Record<string, any>

  /** Custom placeholder */
  children?: React.ReactNode
}

const defaultProps: Partial<AvatarProps> = {
  size: 'md',
  color: 'gray',
  variant: 'light',
}

export const _Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    className,
    size,
    src,
    alt,
    radius,
    children,
    color,
    variant,
    gradient,
    classNames,
    styles,
    imageProps,
    unstyled,
    ...others
  } = useComponentDefaultProps('Avatar', defaultProps, props)

  const ctx = useAvatarGroupContext()
  const [error, setError] = useState(!src)

  const { classes, cx } = useStyles(
    { color, radius, size, withinGroup: ctx.withinGroup, spacing: ctx.spacing, variant, gradient },
    { classNames, styles, unstyled, name: 'Avatar' },
  )

  useEffect(() => {
    !src ? setError(true) : setError(false)
  }, [src])

  return (
    <Box component="div" className={cx(classes.root, className)} ref={ref} {...others}>
      {error ? (
        <div className={classes.placeholder} title={alt}>
          {children || <AvatarPlaceholderIcon className={classes.placeholderIcon} />}
        </div>
      ) : (
        <img {...imageProps} className={classes.image} src={src} alt={alt} onError={() => setError(true)} />
      )}
    </Box>
  )
}) as any

_Avatar.displayName = '@rviseui/core/Avatar'
_Avatar.Group = AvatarGroup

export const Avatar = createPolymorphicComponent<'div', AvatarProps, { Group: typeof AvatarGroup }>(_Avatar)
