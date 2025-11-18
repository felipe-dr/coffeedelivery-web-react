import { CartContext } from '@/contexts'
import { Item } from '@/reducers'
import { Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'

import { ButtonComponent } from '../button/button.component'
import { InputNumberComponent } from '../input-number/input-number.component'
import { ProductsModel } from '../product-card/product-card.component'
import {
  CartProductFooter,
  CartProductHeader,
  CartProductImage,
  CartProductPrice,
  CartProductTitle,
  CartProductWrapper,
} from './cart-product.styles'

type CartProductComponentProps = {
  product: Pick<ProductsModel, 'id' | 'image' | 'title' | 'price'>
}

export function CartProductComponent({ product }: CartProductComponentProps) {
  const { cart, removeItem } = useContext(CartContext)
  const [itemAlreadyAdded, setItemAlreadyAdded] = useState<Item>()

  const handleRemoveItemFromCart = () => {
    removeItem(product.id)
  }

  useEffect(() => {
    const itemFound = cart.find((item) => item.id === product.id)

    if (itemFound) {
      setItemAlreadyAdded(itemFound)
    }
  }, [cart, product.id])

  return (
    <CartProductWrapper>
      <CartProductImage src={product.image} alt={product.title} />
      <CartProductHeader>
        <CartProductTitle>{product.title}</CartProductTitle>
        <CartProductPrice value={product.price.toFixed(2)}>
          R$ {product.price.toFixed(2).replace('.', ',')}
        </CartProductPrice>
      </CartProductHeader>
      <CartProductFooter>
        <InputNumberComponent
          itemId={product.id}
          value={itemAlreadyAdded?.quantity || 0}
        />
        <ButtonComponent variant="secondary" onClick={handleRemoveItemFromCart}>
          <Trash size="16" />
          Remover
        </ButtonComponent>
      </CartProductFooter>
    </CartProductWrapper>
  )
}
