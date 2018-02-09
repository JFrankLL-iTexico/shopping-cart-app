import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductList.css';
import Product from './Product';

function ProductGrid(props) {
  const products = !props.products ? [] :
    props.products.map((product) => {
      const productGridBody = (
        <Product
          key={product._id}
          product={product}
          addToCart={props.addToCart}
          deleteMe={props.removeProduct}
        />
      );
      return productGridBody;
    });
  return (<div className="products-grid">{products}</div>);
}

ProductGrid.propTypes = {
  // eslint-disable-next-line
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  // #region lifecycle
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
  // #endregion

  render() {
    return (
      <ProductGrid
        products={this.state.products}
        addToCart={this.props.addToCart}
        removeProduct={this.props.removeProduct}
      />
    );
  }
}

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default ProductList;
