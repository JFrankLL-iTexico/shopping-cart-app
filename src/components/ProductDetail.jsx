import React, { Component } from 'react';
import * as ProductController from '../controllers/productController';
import Navigation from '../Navigation';
import './ProductDetail.css';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      data: null,
    };
    this.fetchData();
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
    const id = this.state.id;
    ProductController.fetchProduct(id, (err, data) => {
      if (!err) {
        console.log(data);
        this.setState({
          data
        });
      }
    });
  }

  render() {
    const data = this.state.data;
    return (data &&
      <div>
        <Navigation />
        <div className="product-detail">
          <div className="img-wrapper">
            <img src={data.imageUrl} alt="" />
          </div>
          <input value={data.imageUrl} />
          <input value={data.name} />
          <input value={data.category} />
          <input value={data.description} />
          <input value={data.price} />
          <input value={data.stock} />
        </div>
      </div>
    );
  }
}

export default ProductDetail;
