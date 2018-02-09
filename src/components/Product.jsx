import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'material-icons-react';
import { Link } from 'react-router-dom';
import './Product.css';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }

  // #region lifecycle
  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
    this.setState({
      product: this.props.product,
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
  // #endregion

  render() {
    const { product } = this.state;
    const componentBody = (
      <div className="product">
        <div className="header">
          <span className="title">{product.name}</span>
        </div>
        <div className="body">
          <div className="img-preview-wrapper">
            <img
              src={product.imageUrl}
              alt=""
            />
          </div>
          <div className="tools">
            <span
              role="presentation"
              className="tool tool-add"
              onClick={() => {
                this.props.addToCart(product);
              }}
            >
              <MaterialIcon icon="add" />
            </span>
            <Link to={`/products/${this.state.product._id}`} href={`/products/${this.state.product._id}`}>
              <span role="presentation" className="tool tool-update" >
                <MaterialIcon icon="edit" />
              </span>
            </Link>
            <span
              role="presentation"
              className="tool tool-delete"
              onClick={() => { this.props.deleteMe(this.state.product._id); }}
            >
              <MaterialIcon icon="delete" />
            </span>
          </div>
        </div>
        <div className="footer">
          <div className="detail description">{product.description}</div>
          <div className="detail price">$ {product.price}</div>
          <div className="detail stock">
            <span>Stock: </span>
            {product.stock}
          </div>
          <div className="detail category">{product.category}</div>
        </div>
      </div>
    );

    return componentBody;
  }
}

Product.propTypes = {
  // eslint-disable-next-line
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  deleteMe: PropTypes.func.isRequired,
};

export default Product;
