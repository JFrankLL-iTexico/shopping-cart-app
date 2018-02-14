import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import Navigation from './components/Navigation';
import Products from './components/products/Products';
import Home from './components/home/Home';
import About from './components/about/About';
import ProductDetail from './components/products/ProductDetail';

const mathReducer = (state = {
  result: 1,
  lastValues: [],
}, action) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload],
      };
      break;
    case 'SUBSTRACT':
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload],
      };
      break;
    default: break;
  }
  return state;
};

const userReducer = (state = {
  name: 'Max',
  age: 27,
}, action) => {
  switch (action.type) {
    case 'SET_NAME':
      state = {
        ...state,
        name: action.payload,
      };
      break;
    case 'SET_AGE':
      state = {
        ...state,
        age: action.payload,
      };
      break;
    default: break;
  }
  return state;
};

const store = createStore(
  combineReducers({ mathReducer, userReducer }),
  {},
  applyMiddleware(createLogger()),
);

store.subscribe(() => {
  // console.log("Store Updated", store.getState());
});

const appBody = (
  <Provider store={store}>
    <Router>
      <div>
        <Navigation extraComponents={[<div>Hola</div>]} />
        <Switch>
          <Route
            key="route-home"
            path="/"
            exact
            component={Home}
          />
          <Route
            key="route-products"
            path="/products"
            exact
            component={Products}
          />
          <Route
            key="route-about"
            path="/about"
            exact
            component={About}
          />
          {/* Unlisted Routes */}
          <Route
            key="unlisted-route-product-detail"
            path="/products/:id"
            component={ProductDetail}
          />
        </Switch>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(appBody, document.getElementById('root'));
