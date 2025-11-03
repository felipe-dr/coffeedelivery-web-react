import { ShoppingCartSimple } from 'phosphor-react'

import { ButtonComponent } from '../button/button.component'
import { InputNumberComponent } from '../input-number/input-number.component'
import {
  ProductCardActions,
  ProductCardCoin,
  ProductCardDescription,
  ProductCardFooter,
  ProductCardImage,
  ProductCardPrice,
  ProductCardTag,
  ProductCardTags,
  ProductCardTitle,
  ProductCardWrapper,
} from './product-card.styles'

export interface ProductsModel {
  id: string
  image: string
  tags: string[]
  title: string
  description: string
  price: number
}

type ProductCardComponentProps = {
  product: ProductsModel
}

export function ProductCardComponent({ product }: ProductCardComponentProps) {
  return (
    <ProductCardWrapper>
      <header>
        <ProductCardImage src={product.image} alt={product.title} />
        <ProductCardTags>
          {product.tags.map((tag) => (
            <ProductCardTag key={tag}>{tag}</ProductCardTag>
          ))}
        </ProductCardTags>
        <ProductCardTitle>{product.title}</ProductCardTitle>
      </header>
      <ProductCardDescription>{product.description}</ProductCardDescription>
      <ProductCardFooter>
        <ProductCardPrice value={product.price.toFixed(2)}>
          <ProductCardCoin>R$ </ProductCardCoin>
          {product.price.toFixed(2).replace('.', ',')}
        </ProductCardPrice>
        <ProductCardActions>
          <InputNumberComponent />
          <ButtonComponent variant="icon">
            <ShoppingCartSimple weight="fill" />
          </ButtonComponent>
        </ProductCardActions>
      </ProductCardFooter>
    </ProductCardWrapper>
  )
}
