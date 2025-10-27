import { Minus, Plus } from 'phosphor-react'
import { InputHTMLAttributes } from 'react'

import {
  InputNumberBaseButton,
  InputNumberWrapper,
} from './input-number.styles'

interface InputNumberComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export function InputNumberComponent() {
  return (
    <InputNumberWrapper>
      <InputNumberBaseButton>
        <Minus size="14" />
      </InputNumberBaseButton>
      1
      <InputNumberBaseButton>
        <Plus size="14" />
      </InputNumberBaseButton>
    </InputNumberWrapper>
  )
}
