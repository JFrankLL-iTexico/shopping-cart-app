import React, { Component } from 'react';
import './Product.css';
import MaterialIcon from 'material-icons-react';

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
          <div className="separator-line"/>
          <div className="tools">
            <span className="tool tool-add">
              <MaterialIcon icon="add" />
            </span>
            <span className="tool tool-update">
              <MaterialIcon icon="edit" />
            </span>
            <span className="tool tool-delete">
              <MaterialIcon icon="delete" />
            </span>
          </div>
        </div>
        <div className="footer">
          <div className="detail description">{product.description}</div>
          <div className="detail price">$ {product.price}</div>
          <div className="detail stock">
            <span style={
              {
                fontWeigth: 'bold',
                color: 'black'
              }
            }>Stock: </span>
            {product.stock}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
