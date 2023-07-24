import { JsonInputStylesNames } from '@rviseui/core'
import { Input } from './Input.styles-api'
import { InputWrapper } from './InputWrapper.styles-api'

export const JsonInput: Record<JsonInputStylesNames, string> = {
  ...Input,
  ...InputWrapper,
}
