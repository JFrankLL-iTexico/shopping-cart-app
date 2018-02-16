const defaultState = {
  items: [],
};

const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      state = {
        ...state,
      };
      break;
    case 'ADD_ITEM':
      state = {
        items: [...state.items, action.payload],
      };
      break;
    case 'REMOVE_ITEM':
      state = {
        items: state.items.filter(item => action.payload !== item._id),
      };
      break;
    case 'CLEAR_CART':
      state = {
        items: [],
      };
      break;
    default: break;
  }
  return state;
};

export default productsReducer;
