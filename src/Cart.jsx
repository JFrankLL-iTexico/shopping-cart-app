import MaterialIcon from 'material-icons-react';
import React, { Component } from 'react';
import './Cart.css';

function Row(props) {
  return (
    <div className="cart-row">
      <span className="name">{props.product.name}</span>
      <input type="Number" defaultValue={1} />
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

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: props.cart,
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

  render() {
    const cartItemsRows = !this.state.cartItems.length
      ? (<div>Empty cart</div>)
      : this.state.cartItems.map((product) => {
        return (
          <Row
            key={`cart-row-${product._id}`}
            product={product}
            removeFromCart={this.props.removeFromCart}
          />
        );
      });

    return (
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
                onClick={() => { console.log('accept'); }}
              >
                Accept
              </button>
              <button
                className="tool tool-abort"
              >
                Abort
              </button>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Cart;
