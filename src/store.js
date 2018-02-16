import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger as logger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import productsReducer from './reducers/productsReducer';
import cartReducer from './reducers/cartReducer';

export default createStore(
  combineReducers({
    productsReducer,
    cartReducer,
  }),
  {},
  applyMiddleware(logger(), thunk, promise()),
);
