import React, { Component } from 'react';
import Request from 'superagent';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import Cart from './Cart';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      products: [],
      cart: []
    };
    this.goSearch = this.goSearch.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  //#region lifecycle methods
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
  //#endregion

  fetchProducts(mode=null, value='') {
    var url = 'http://10.40.10.53:3000/api/product';
    if(mode && value.length > 0) {
      url += `/search?${mode}=${value}`;
    }
    //console.log(mode, value, 'aaa');
    Request.get(url)
      .then(result => {
        this.setState({
          products: result.body
        });
      }).catch(err => {});
  }

  goSearch(mode, value) {
    this.fetchProducts(mode, value);
  }

  addToCart(product) {
    var cart = this.state.cart.slice();
    cart.push({
      product,
      quantity: 5
    });
    this.setState({
      cart
    });
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <SearchBar
            handleSearch={this.goSearch} />
          <Cart
            cart={this.state.cart}
            className="cart" />
        </div>
        <div className="panel-container">
          <div className="panel products-panel">
            <ProductList
              products={this.state.products}
              addToCart={this.addToCart}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;