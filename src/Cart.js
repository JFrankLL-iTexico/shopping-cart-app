import React, { Component } from 'react';
import './Cart.css';
import MaterialIcon from 'material-icons-react';
//import Request from 'superagent';

function Row(props) {
  return (<div className="prpr">{props.product.product}</div>);
}

class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: props.cart
    };
  }

  //#region lifecycle
  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
  }

  componentDidMount() {
    // Called ater the component has been rendered into the page
  }

  componentWillReceiveProps(nextProps) {
    // Called when the props provided to the component are changed
    this.setState({
      cart: nextProps.cart
    });
  }

  componentWillUpdate(nextProps, nextState) {
    // Called when the props and/or state change
  }

  componentWillUnmount() {
    // Called when the component is removed
  }
  //#endregion

  render() {
    const cartItems = this.state.cart.map(product => <Row key={product._id} product={product} />);
    console.log(this.state.cart);
    
    return (
      <div className="cart-wrapper">
        <span className="cart">
            <MaterialIcon icon="shopping_cart" />
            <span className="small">My Cart</span>
        </span>
        <div className="list-wrapper">
          {cartItems}
        </div>
      </div>
    );
  }
}

export default Cart;