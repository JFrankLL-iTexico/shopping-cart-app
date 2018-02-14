import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger as logger } from 'redux-logger';

export default createStore(
  combineReducers({
    math: mathReducer,
    user: userReducer
  }),
  {},
  applyMiddleware(logger()),
);
