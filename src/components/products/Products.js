import React, { Component } from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import Cart from './Cart';
import Pages from './Pages';
import * as ProductController from '../../controllers/productController';
import * as OrderController from '../../controllers/orderController';
import './Products.css';

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
      page: 0,
      itemsPerPage: 1,
    };
    this.goSearch = this.goSearch.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.fetchOrders = this.fetchOrders.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.changePage = this.changePage.bind(this);
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
  fetchProducts(category = '', name = '') {
    const { page } = this.state;
    const paramObj = {
      category,
      name,
      page,
      items: this.state.itemsPerPage,
    };
    ProductController.fetchProducts(paramObj, (err, result) => {
      if (!err) {
        this.setState({
          products: result.body,
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
  async changePage(forward = true) {
    let page = forward ? (this.state.page + 1) : (this.state.page - 1);
    page = page < 1 ? 0 : page;
    await this.setState({
      page,
    });
    this.fetchProducts();
  }
  // #endregion
  // #region Search
  goSearch(mode, value) {
    this.fetchProducts(mode, value);
  }
  // #endregion
  // #region Cart
  addToCart(product) {
    const productAux = { ...product, quantity: 1 };
    const cart = this.state.cart.slice();
    if (!cart.some(item => item._id === productAux.product)) {
      cart.push(productAux);
      this.setState({ cart });
    }
  }
  removeFromCart(id) {
    let cart = this.state.cart.slice(0);
    cart = cart.filter(item => id !== item._id);
    this.setState({ cart });
  }
  fetchOrders() {
    OrderController.fetchOrders((err, result) => {
      if (err) {
        console.log(err);
      }
    });
  }
  createOrder() {
    const body = {
      status: 'pending',
      products: this.state.cart.map((item) => {
        const itemAux = item;
        itemAux.product = item._id;
        itemAux.quantity = item.quantity;
        return itemAux;
      }),
      client_id: '5a79dc6903e0f1050c40ef04', // FIXME: Use a real client id!!!
    };
    OrderController.insertOrder(body, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
    });
  }
  // #endregion

  render() {
    const appBody = (
      <div className="app">
        <div className="search-comp-wrapper">
          <SearchBar
            key="extra-0"
            handleSearch={this.goSearch}
          />
          <Cart
            key="extra-1"
            cart={this.state.cart}
            className="cart"
            removeFromCart={this.removeFromCart}
            createOrder={this.createOrder}
          />
        </div>
        <div className="panel-container">
          <div className="panel products-panel">
            <ProductList
              products={this.state.products}
              addToCart={this.addToCart}
              removeProduct={this.removeProduct}
            />
          </div>
        </div>
        <Pages
          changePage={this.changePage}
        />
      </div>
    );
    return appBody;
  }
}
