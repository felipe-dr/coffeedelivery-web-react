import { Trash } from 'phosphor-react'

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
        <InputNumberComponent />
        <ButtonComponent variant="secondary">
          <Trash size="16" />
          Remover
        </ButtonComponent>
      </CartProductFooter>
    </CartProductWrapper>
  )
}
