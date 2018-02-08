import React, { Component } from 'react';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import Cart from './Cart';
import * as ProductController from './controllers/productController';
import * as OrderController from './controllers/orderController';
import './App.css';
import Navigation from './Navigation';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
    };
    this.goSearch = this.goSearch.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.fetchOrders = this.fetchOrders.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  // #region lifecycle methods
  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
    this.fetchProducts();
  }

  componentDidMount() {
    // Called ater the component has been rendered into the page
  }

  componentWillReceiveProps(nextProps) {
    // Called when the props provided to the component are changed
  }

  componentWillUpdate(nextProps, nextState) {
    // Called when the props and/or state change
  }

  componentWillUnmount() {
    // Called when the component is removed
  }
  // #endregion

  // #region ProductList
  fetchProducts(mode = null, value = '') {
    ProductController.fetchProducts(mode, value, (err, result) => {
      if (!err) {
        this.setState({
          products: result,
        });
      }
    });
  }
  removeProduct(id) {
    ProductController.deleteProduct(id, (err, result) => {
      if (!err) {
        let products = this.state.products.slice(0);
        products = products.filter(product => product._id !== id);
        this.setState({
          products,
        });
      }
    });
  }
  // #endregion

  // #region Search
  goSearch(mode, value) {
    this.fetchProducts(mode, value);
  }
  // #endregion

  // #region Cart
  addToCart(product) {
    const productAux = { ...product, quantity: 5 };
    const cart = this.state.cart.slice();
    if (!cart.some(item => item._id === productAux._id)) {
      cart.push(productAux);
      this.setState({
        cart,
      });
    }
  }
  removeFromCart(id) {
    let cart = this.state.cart.slice(0);
    cart = cart.filter(item => id !== item._id);
    this.setState({
      cart,
    });
  }
  fetchOrders() {
    OrderController.fetchOrders((err, result) => {
      console.log(result);
    });
  }
  // #endregion

  render() {
    return (
      <div className="app">
        <Navigation
          extraComponents={[
            <SearchBar
              handleSearch={this.goSearch}
            />,
            <Cart
              cart={this.state.cart}
              className="cart"
              removeFromCart={this.removeFromCart}
            />,
          ]}
        />
        <div className="panel-container">
          <div className="panel products-panel">
            <ProductList
              products={this.state.products}
              addToCart={this.addToCart}
              removeProduct={this.removeProduct}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
