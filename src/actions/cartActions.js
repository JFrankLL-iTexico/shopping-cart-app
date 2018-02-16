export function getItems() {
  return {
    type: 'GET_ITEMS',
    payload: {},
  };
}

export function addItem(item) {
  return {
    type: 'ADD_ITEM',
    payload: item,
  };
}

export function removeItem(id) {
  return {
    type: 'REMOVE_ITEM',
    payload: id,
  };
}

export function clearItems() {
  return {
    type: 'CLEAR_CART',
  };
}
