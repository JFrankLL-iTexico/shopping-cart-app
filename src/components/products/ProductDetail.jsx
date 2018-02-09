import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as ProductController from '../../controllers/productController';
import './ProductDetail.css';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      show: false,
    };
    this.fetchData();
    this.updateProduct = this.updateProduct.bind(this);
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
  }

  componentWillUpdate(nextProps, nextState) {
    // Called when the props and/or state change
  }

  componentWillUnmount() {
    // Called when the component is removed
  }
  // #endregion

  fetchData() {
    const { id } = this.state;
    ProductController.fetchProduct(id, (err, data) => {
      if (!err) {
        this.setState({
          ...data.body,
          show: true,
        });
      }
    });
  }

  updateProduct() {
    const id = this.state._id;
    const body = {
      name: this.state.name,
      price: Number(this.state.price),
      description: this.state.description,
      stock: Number(this.state.stock),
      category: this.state.category,
      imageUrl: this.state.imageUrl,
    };
    ProductController.updateProduct(id, body, (err, result) => {
      if (!err) {
        // TODO: alert successful transaction
      }
    });
  }

  // #region onChange Handlers
  imgOnChangeHandler(e) {
    const imageUrl = e.target.value;
    this.setState({ imageUrl });
  }
  nameOnChangeHandler(e) {
    const name = e.target.value;
    this.setState({ name });
  }
  categoryOnChangeHandler(e) {
    const category = e.target.value;
    this.setState({ category });
  }
  descriptionOnChangeHandler(e) {
    const description = e.target.value;
    this.setState({ description });
  }
  priceOnChangeHandler(e) {
    const price = e.target.value;
    this.setState({ price });
  }
  stockOnChangeHandler(e) {
    const stock = e.target.value;
    this.setState({ stock });
  }
  // #endregion

  render() {
    const productDetailBody = (this.state.show &&
      <div>
        <div className="product-detail">
          <div className="img-wrapper">
            <img src={this.state.imageUrl} alt="" />
          </div>
          <span>image Url: </span>
          <input
            type="text"
            value={this.state.imageUrl}
            onChange={e => this.imgOnChangeHandler(e)}
          />
          <span>Name: </span>
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.nameOnChangeHandler(e)}
          />
          <span>Category: </span>
          <input
            type="text"
            value={this.state.category}
            onChange={e => this.categoryOnChangeHandler(e)}
          />
          <span>Description: </span>
          <input
            type="text"
            value={this.state.description}
            onChange={e => this.descriptionOnChangeHandler(e)}
          />
          <span>Price: </span>
          <input
            type="number"
            value={this.state.price}
            onChange={e => this.priceOnChangeHandler(e)}
          />
          <span>Stock: </span>
          <input
            type="number"
            value={this.state.stock}
            onChange={e => this.stockOnChangeHandler(e)}
          />
          <div className="order-tools">
            <button
              className="tool tool-accept"
              onClick={() => { this.updateProduct(); }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
    return productDetailBody;
  }
}

ProductDetail.propTypes = {
  // eslint-disable-next-line
  match: PropTypes.any.isRequired,
};

export default ProductDetail;
