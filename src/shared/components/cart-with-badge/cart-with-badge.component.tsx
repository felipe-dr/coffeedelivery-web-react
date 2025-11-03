import { ShoppingCart } from 'phosphor-react'

import { CartWithBadge, CartWithBadgeTotal } from './cart-with-badge.styles'

export function CartWithBadgeComponent() {
  return (
    <CartWithBadge>
      <ShoppingCart weight="fill" />
      <CartWithBadgeTotal>0</CartWithBadgeTotal>
    </CartWithBadge>
  )
}
