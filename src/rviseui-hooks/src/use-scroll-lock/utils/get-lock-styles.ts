import { getScrollWidth } from './get-scroll-width'

export const getLockStyles = ({ disableBodyPadding }) => {
  const scrollWidth = disableBodyPadding ? null : getScrollWidth()

  return `body {
        --removed-scroll-width: ${scrollWidth}px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        ${scrollWidth ? 'padding-right: var(--removed-scroll-width) !important;' : ''}
        `
}
