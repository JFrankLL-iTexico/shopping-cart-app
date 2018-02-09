import MaterialIcon from 'material-icons-react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Cart.css';

function Row(props) {
  return (
    <div className="cart-row">
      <span className="name">{props.product.name}</span>
      <input
        type="Number"
        defaultValue={1}
        onChange={(e) => {
          const { value } = e.target;
          props.updateQuantity(props.product._id, value);
        }}
      />
      <span
        role="presentation"
        onClick={() => {
          props.removeFromCart(props.product._id);
        }}
      >
        <MaterialIcon icon="close" />
      </span>
    </div>
  );
}

Row.propTypes = {
  // eslint-disable-next-line
  product: PropTypes.object.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: props.cart,
    };
    this.updateQuantity = this.updateQuantity.bind(this);
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
      cartItems: nextProps.cart,
    });
  }

  componentWillUpdate(nextProps, nextState) {
    // Called when the props and/or state change
  }

  componentWillUnmount() {
    // Called when the component is removed
  }
  // #endregion

  updateQuantity(id, value) {
    let { cartItems } = this.state;
    cartItems = cartItems.map((item) => {
      const aux = item;
      if (item._id === id) {
        aux.quantity = Number(value);
      }
      return aux;
    });
    this.setState({ cartItems });
  }

  clearCartItems() {
    this.setState({
      cartItems: [],
    });
  }

  render() {
    const cartItemsRows = !this.state.cartItems.length
      ? (<div>Empty cart</div>)
      : this.state.cartItems.map((product) => {
        const rowBody = (
          <Row
            key={`cart-row-${product._id}`}
            product={product}
            removeFromCart={this.props.removeFromCart}
            updateQuantity={this.updateQuantity}
          />
        );
        return rowBody;
      });

    const componentBody = (
      <div className="cart-wrapper">
        <span className="cart">
          <MaterialIcon icon="shopping_cart" />
          <span className="small">My Cart</span>
        </span>
        <div className="list-wrapper">
          <div className="scroll">{cartItemsRows}</div>
          { this.state.cartItems.length > 0 &&
            <div className="order-tools">
              <button
                className="tool tool-accept"
                onClick={() => { this.props.createOrder(this.state.cartItems); }}
              >
                Accept
              </button>
              <button
                className="tool tool-abort"
                onClick={() => { this.clearCartItems(); }}
              >
                Abort
              </button>
            </div>
          }
        </div>
      </div>
    );

    return componentBody;
  }
}

Cart.propTypes = {
  // eslint-disable-next-line
  cart: PropTypes.array.isRequired,
  createOrder: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
