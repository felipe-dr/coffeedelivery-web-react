import { HTMLAttributes, InputHTMLAttributes } from 'react'

import { Input, InputOptionalLabel, InputWrapper } from './input.styles'

interface InputComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
  inputWrapperProps?: HTMLAttributes<HTMLDivElement>
}

export function InputComponent({
  isOptional = false,
  inputWrapperProps,
  ...props
}: InputComponentProps) {
  return (
    <InputWrapper {...inputWrapperProps}>
      <Input type="text" {...props} />
      {isOptional && <InputOptionalLabel>Opcional</InputOptionalLabel>}
    </InputWrapper>
  )
}
