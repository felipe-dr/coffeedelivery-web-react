import { produce } from 'immer'

import { ActionEnum, ActionTypes } from './actions'

export interface Item {
  id: string
  title: string
  price: number
  image: string
  quantity: number
}

interface CartState {
  cart: Item[]
}

export function cartReducer(state: CartState, action: ActionTypes) {
  switch (action.type) {
    case ActionEnum.ADD_ITEM:
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.cart.find(
          (item) => item.id === action.payload.item.id,
        )

        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantity += 1
        } else {
          draft.cart.push(action.payload.item)
        }
      })

    case ActionEnum.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemToRemove = draft.cart.findIndex(
          (item) => item.id === action.payload.itemId,
        )

        draft.cart.splice(itemToRemove, 1)
      })

    case ActionEnum.INCREASE_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToIncrease = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )

        if (itemToIncrease?.id) {
          itemToIncrease.quantity += 1
        }
      })

    case ActionEnum.DECREASE_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToDecrease = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )

        if (itemToDecrease?.id && itemToDecrease.quantity > 1) {
          itemToDecrease.quantity -= 1
        }
      })

    default:
      return state
  }
}
