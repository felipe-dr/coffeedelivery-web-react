import { ShoppingCart } from 'phosphor-react'
import { CartContext } from '@/contexts'
import { useContext } from 'react'

import { CartWithBadge, CartWithBadgeTotal } from './cart-with-badge.styles'

export function CartWithBadgeComponent() {
  const { cart } = useContext(CartContext)

  return (
    <CartWithBadge>
      <ShoppingCart weight="fill" />
      <CartWithBadgeTotal>{cart.length}</CartWithBadgeTotal>
    </CartWithBadge>
  )
}
