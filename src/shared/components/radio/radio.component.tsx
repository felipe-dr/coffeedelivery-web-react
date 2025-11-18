import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'

import { RadioContainer } from './radio.styles'

interface RadioComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  isSelected: boolean
}

export const RadioComponent = forwardRef(function Radio(
  { children, isSelected, ...rest }: RadioComponentProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <RadioContainer data-state={isSelected}>
      <input type="radio" ref={ref} {...rest} />
      {children}
    </RadioContainer>
  )
})
