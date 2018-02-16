const defaultState = {
  products: [],
};

const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_PENDING':
      state = {
        ...state,
        products: [],
      };
      break;
    case 'GET_PRODUCTS_FULFILLED':
      state = {
        ...state,
        products: action.payload,
      };
      break;
    case 'GET_PRODUCTS_REJECTED':
      state = {
        ...state,
        products: [3],
      };
      break;
    default: break;
  }
  return state;
};

export default productsReducer;
