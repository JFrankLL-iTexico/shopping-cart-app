import React, { Component } from 'react';
import './Product.css';

class Product extends Component {

  constructor() {
    super();
    this.state = {
      product: {}
    };
  }

  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
    this.setState({
      product: this.props.product
    });
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
    const product = this.state.product;
    return (
      <div className="product">
        <div className="header">
          <span className="title">{product.name}</span>
        </div>
        <div className="body">
          <div className="img-preview-wrapper">
            <img
              src={product.imageUrl+"?r="+Math.floor(Math.random()*99)}
              alt=""
            />
          </div>
        </div>
        <div className="footer">
          <div className="description">{product.description}</div>
          <div className="price">$ {product.price}</div>
          <div className="tools">
            <span className="tool">tool</span>
            <span className="tool">tool</span>
            <span className="tool">tool</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
