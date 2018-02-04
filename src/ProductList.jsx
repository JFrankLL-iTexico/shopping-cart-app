import React, { Component } from 'react';
import './ProductList.css';
import Product from './Product';

function ProductGrid(props) {
  const products = !props.products ? [] :
    props.products.map((product) => {
      return (
        <Product
          key={product._id}
          product={product}
          addToCart={props.addToCart}
        />
      );
    });
  return (<div className="products-grid">{products}</div>);
}

class ProductList extends Component {

  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
  }

  componentDidMount() {
    // Called ater the component has been rendered into the page
  }

  componentWillReceiveProps(nextProps) {
    // Called when the props provided to the component are changed
    this.setState({
      products: nextProps.products,
    });
  }

  componentWillUpdate(nextProps, nextState) {
    // Called when the props and/or state change
  }

  componentWillUnmount() {
    // Called when the component is removed
  }

  render() {
    return (
      <ProductGrid
        products={this.state.products}
        addToCart={this.props.addToCart}
      />
    );
  }
}

export default ProductList;