import { InputHTMLAttributes } from 'react'

import { Input, InputOptionalLabel, InputWrapper } from './input.styles'

interface InputComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
}

export function InputComponent({ isOptional = false }: InputComponentProps) {
  return (
    <InputWrapper>
      <Input type="text" />
      {isOptional && <InputOptionalLabel>Opcional</InputOptionalLabel>}
    </InputWrapper>
  )
}
