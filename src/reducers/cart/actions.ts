import { Item } from './reducer'

export enum ActionEnum {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREASE_ITEM_QUANTITY = 'INCREASE_ITEM_QUANTITY',
  DECREASE_ITEM_QUANTITY = 'DECREASE_ITEM_QUANTITY',
}

export type ActionTypes =
  | {
      type: ActionEnum.ADD_ITEM
      payload: {
        item: Item
      }
    }
  | {
      type:
        | ActionEnum.REMOVE_ITEM
        | ActionEnum.INCREASE_ITEM_QUANTITY
        | ActionEnum.DECREASE_ITEM_QUANTITY
      payload: {
        itemId: Item['id']
      }
    }

export function addItemAction(item: Item) {
  return {
    type: ActionEnum.ADD_ITEM,
    payload: { item },
  } as ActionTypes
}

export function removeItemAction(itemId: Item['id']) {
  return {
    type: ActionEnum.REMOVE_ITEM,
    payload: { itemId },
  } as ActionTypes
}

export function increaseItemQuantityAction(itemId: Item['id']) {
  return {
    type: ActionEnum.INCREASE_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } as ActionTypes
}

export function decreaseItemQuantityAction(itemId: Item['id']) {
  return {
    type: ActionEnum.DECREASE_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } as ActionTypes
}
