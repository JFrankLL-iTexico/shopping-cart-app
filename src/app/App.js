import React, { Component } from 'react';
import { connect } from 'react-redux';

import Routes from './routes/Routes';

import { fetchProducts } from '../actions/productsActions';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsReducer.products,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: (query) => {
    dispatch(fetchProducts(query));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
