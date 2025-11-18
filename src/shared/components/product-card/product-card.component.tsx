import { ShoppingCartSimple } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'

import { CartContext } from '@/contexts'

import { Item } from '@/reducers'

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
  const { cart, addItem } = useContext(CartContext)
  const [itemAlreadyAdded, setItemAlreadyAdded] = useState<Item>()

  const isItemAlreadyAdded = !!itemAlreadyAdded

  const handleAddItemToCart = () => {
    addItem({ ...product, quantity: 1 })
  }

  useEffect(() => {
    const itemFound = cart.find((item) => item.id === product.id)

    if (itemFound) {
      setItemAlreadyAdded(itemFound)
    }
  }, [cart, product.id])

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
          <InputNumberComponent
            itemId={product.id}
            value={itemAlreadyAdded?.quantity || 0}
          />
          <ButtonComponent
            variant="icon"
            onClick={handleAddItemToCart}
            disabled={isItemAlreadyAdded}
          >
            <ShoppingCartSimple weight="fill" />
          </ButtonComponent>
        </ProductCardActions>
      </ProductCardFooter>
    </ProductCardWrapper>
  )
}
