import { CartContext } from '@/contexts'
import { Minus, Plus } from 'phosphor-react'
import { InputHTMLAttributes, useContext } from 'react'

import {
  InputNumberBaseButton,
  InputNumberWrapper,
} from './input-number.styles'

interface InputNumberComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  itemId: string
  value: number
}

export function InputNumberComponent({
  itemId,
  value,
}: InputNumberComponentProps) {
  const { increaseItemQuantity, decreaseItemQuantity } = useContext(CartContext)

  const handleIncreaseItemQuantity = () => {
    increaseItemQuantity(itemId)
  }

  const handleDecreaseItemQuantity = () => {
    decreaseItemQuantity(itemId)
  }

  return (
    <InputNumberWrapper>
      <InputNumberBaseButton onClick={handleDecreaseItemQuantity}>
        <Minus size="14" />
      </InputNumberBaseButton>
      {value || 0}
      <InputNumberBaseButton onClick={handleIncreaseItemQuantity}>
        <Plus size="14" />
      </InputNumberBaseButton>
    </InputNumberWrapper>
  )
}
