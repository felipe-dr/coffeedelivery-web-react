import { createContext, ReactNode, useReducer } from 'react'

import {
  Item,
  cartReducer,
  addItemAction,
  removeItemAction,
  increaseItemQuantityAction,
  decreaseItemQuantityAction,
} from '@/reducers'

interface CartContextType {
  cart: Item[]
  addItem: (item: Item) => void
  removeItem: (itemId: string) => void
  increaseItemQuantity: (itemId: string) => void
  decreaseItemQuantity: (itemId: string) => void
  getTotalItemsPriceFormatted: () => string
  getTotalCartFormatted: () => string
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] })

  const { cart } = cartState

  const shippingPrice = 25.0

  function addItem(item: Item) {
    dispatch(addItemAction(item))
  }

  function removeItem(itemId: string) {
    dispatch(removeItemAction(itemId))
  }

  function increaseItemQuantity(itemId: string) {
    dispatch(increaseItemQuantityAction(itemId))
  }

  function decreaseItemQuantity(itemId: string) {
    dispatch(decreaseItemQuantityAction(itemId))
  }

  function getTotalItemsPrice() {
    const totalItemsPrice = cart.reduce(
      (accumulator, currentItem) =>
        accumulator + currentItem.price * currentItem.quantity,
      0,
    )

    return totalItemsPrice
  }

  function getTotalItemsPriceFormatted() {
    return getTotalItemsPrice().toFixed(2).replace('.', ',')
  }

  function getTotalCartFormatted() {
    const totalCartPrice = Number(getTotalItemsPrice() + shippingPrice)

    return totalCartPrice.toFixed(2).replace('.', ',')
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        increaseItemQuantity,
        decreaseItemQuantity,
        getTotalItemsPriceFormatted,
        getTotalCartFormatted,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
