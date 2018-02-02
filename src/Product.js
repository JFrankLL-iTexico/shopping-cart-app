import React, { Component } from 'react';
import './Product.css';
import MaterialIcon from 'material-icons-react';
import Request from 'superagent';

class Product extends Component {

  constructor() {
    super();
    this.state = {
      product: {},
      show: true
    };
    this.deleteMe = this.deleteMe.bind(this);
    this.destroyMe = this.destroyMe.bind(this);
  }

  //#region lifecycle
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
  //#endregion

  deleteMe() {
    let id = this.state.product._id;
    var url = `http://10.40.10.53:3000/api/product/${id}`;
        this.destroyMe();
    Request.delete(url)
      .then(result => {
        console.log(result.text);
      }).catch(err => {});
  }

  destroyMe() {
    this.setState({
      show: false
    });
  }

  render() {
    const product = this.state.product;
    return (this.state.show &&
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
            <span className="tool tool-add"
                onClick={() => {this.props.addToCart(product._id)}}>
              <MaterialIcon icon="add" />
            </span>
            <span className="tool tool-update"
                onClick={() => {console.log('update')}}>
              <MaterialIcon icon="edit" />
            </span>
            <span
              className="tool tool-delete"
              onClick={this.deleteMe}
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
  }
}

export default Product;
