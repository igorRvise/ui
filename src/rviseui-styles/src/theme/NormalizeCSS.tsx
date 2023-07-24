import React from 'react'
import { Global } from '@emotion/react'

const styles = {
  html: {
    fontFamily: 'sans-serif',
    msTextSizeAdjust: '100%',
    webkitTextSizeAdjust: '100%',
    lineHeight: '1.15',
    textSizeAdjust: '100%',
  },

  body: {
    margin: 0,
    lineHeight: 1,
  },
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary': {
    display: 'block',
  },
  'audio, canvas, progress, video': {
    display: 'inline-block',
    verticalAlign: 'baseline',
  },
  'audio:not([controls])': {
    display: 'none',
    height: 0,
  },
  '[hidden], template': {
    display: 'none',
  },
  a: {
    backgroundColor: 'transparent',
    textDecorationSkip: 'objects',
  },
  'a:active, a:hover': {
    outline: 0,
  },
  'abbr[title]': {
    borderBottom: '1px dotted',
  },
  'b, strong': {
    fontWeight: 'bold',
  },
  dfn: {
    fontStyle: 'italic',
  },
  mark: {
    background: '#ff0',
    color: '#000',
  },
  small: {
    fontSize: '80%',
  },
  'sub, sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },
  sup: {
    top: '-0.5em',
  },
  sub: {
    bottom: '-0.25em',
  },
  img: {
    border: 0,
  },
  'svg:not(:root)': {
    overflow: 'hidden',
  },
  figure: {
    margin: '1em 40px',
  },
  pre: {
    overflow: 'auto',
  },
  'code, kbd, pre, samp': {
    fontFamily: 'monospace, monospace',
    fontSize: '1em',
  },
  'button, input, optgroup, select, textarea': {
    color: 'inherit',
    font: 'inherit',
    margin: 0,
  },
  button: {
    overflow: 'visible',
  },
  'button, select': {
    textTransform: 'none',
  },
  'button, html input[type="button"], input[type="reset"], input[type="submit"]': {
    webkitAppearance: 'button',
    cursor: 'pointer',
  },
  'button[disabled], html input[disabled]': {
    cursor: 'default',
  },
  'button::-moz-focus-inner, input::-moz-focus-inner': {
    border: 0,
    padding: 0,
  },
  input: {
    lineHeight: 'normal',
  },
  'input[type="checkbox"], input[type="radio"]': {
    boxSizing: 'border-box',
    padding: 0,
  },
  'input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button': {
    height: 'auto',
  },
  'input[type="search"]': {
    webkitAppearance: 'textfield',
    boxSizing: 'content-box',
  },
  'input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration': {
    webkitAppearance: 'none',
  },
  fieldset: {
    border: '1px solid #c0c0c0',
    margin: '0 2px',
    padding: '0.35em 0.625em 0.75em',
  },
  legend: {
    border: 0,
    padding: 0,
  },
  textarea: {
    overflow: 'auto',
  },
  optgroup: {
    fontWeight: 'bold',
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
  'td, th': {
    padding: 0,
  },
  h1: {
    fontSize: '2em',
  },
  hr: {
    boxSizing: 'content-box',
    height: 0,
    overflow: 'visible',
  },
  'code, kbp, samp': {
    fontFamily: 'monospace, monospace',
    fontSize: '1em',
  },
  'audio, video': {
    display: 'inline-block',
  },
  'button, input': {
    overflow: 'visible',
  },
  'button, [type=reset], [type=submit]': {
    WebkitAppearance: 'button',
  },

  'button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner':
    {
      borderStyle: 'none',
      padding: 0,
    },

  'button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring': {
    outline: '1px dotted ButtonText',
  },
  progress: {
    display: 'inline-block',
    verticalAlign: 'baseline',
  },
  '[type=checkbox], [type=radio]': {
    boxSizing: 'border-box',
    padding: 0,
  },

  '[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button': {
    height: 'auto',
  },

  '[type=search]': {
    appearance: 'none',
  },

  '[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration': {
    appearance: 'none',
  },

  '::-webkit-file-upload-button': {
    appearance: 'button',
    font: 'inherit',
  },

  'details, menu': {
    display: 'block',
  },

  summary: {
    display: 'list-item',
  },

  canvas: {
    display: 'inline-block',
  },

  template: {
    display: 'none',
  },

  '[hidden]': {
    display: 'none',
  },
} as const

export function NormalizeCSS() {
  return <Global styles={styles} />
}
