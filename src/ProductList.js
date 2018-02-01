import React, { Component } from 'react';
import './ProductList.css';
import Request from 'superagent';
import Product from './Product'

function ProductGrid(props) {
  let products = props.products.map(product =>
    <Product
      key={product._id}
      product={product}
    />
  );
  return (<div className="products-grid">{products}</div>);
}

class ProductList extends Component {

  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
    var url = 'http://10.40.10.53:3000/api/product';
    Request.get(url)
      .then(result => {
        this.setState({
          products: result.body
        });
      }).catch(err => {});
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

  render() {
    return (
      <ProductGrid
        products={this.state.products}
      />
    );
  }
}

export default ProductList;