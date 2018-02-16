import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from '../../components/Navigation';
import Products from '../../components/products/Products';
import Home from '../../components/home/Home';
import About from '../../components/about/About';
import Cart from '../../components/cart/Cart';
import ProductDetail from '../../components/products/ProductDetail';

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const componentBody = (
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
            <Route
              key="route-cart"
              path="/cart"
              exact
              component={Cart}
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
    );
    return componentBody;
  }
}
