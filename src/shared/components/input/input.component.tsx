import {
  FocusEvent,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  Ref,
  useState,
} from 'react'
import { FieldError } from 'react-hook-form'

import {
  Input,
  InputErrorMesage,
  InputLabelContainer,
  InputOptionalLabel,
  InputWrapper,
} from './input.styles'

interface InputComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
  inputWrapperProps?: HTMLAttributes<HTMLDivElement>
  error?: FieldError
}

export const InputComponent = forwardRef(function InputComponent(
  {
    isOptional = false,
    inputWrapperProps,
    onFocus,
    onBlur,
    error,
    ...props
  }: InputComponentProps,
  ref: Ref<HTMLInputElement>,
) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false)
    onBlur?.(event)
  }

  return (
    <InputWrapper {...inputWrapperProps}>
      <InputLabelContainer data-state={isFocused ? 'focused' : 'blurred'}>
        <Input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...props}
        />
        {isOptional && <InputOptionalLabel>Opcional</InputOptionalLabel>}
      </InputLabelContainer>
      {error?.message && (
        <InputErrorMesage role="alert">{error.message}</InputErrorMesage>
      )}
    </InputWrapper>
  )
})
