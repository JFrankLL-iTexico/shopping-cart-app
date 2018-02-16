import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from './Item';

import * as cartActions from '../../actions/cartActions';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getClickHandler = this.getClickHandler.bind(this);
    this.addClickHandler = this.addClickHandler.bind(this);
  }

  async getClickHandler() {
    this.props.getCartItems();
  }
  addClickHandler() {
    this.props.addCartItem({ key: 'value' });
  }

  render() {
    const componentBody = (
      <div>
        <div>
          <button onClick={this.addClickHandler}>Add</button>
          <button onClick={this.getClickHandler}>Get</button>
        </div>
        <div>
          {
            this.props.cartItems.map((item) => {
              const itemBody = (
                <Item {...item} />
              );
              return itemBody;
            })
          }
        </div>
      </div>
    );
    return componentBody;
  }
}

const mapStateToProps = state => ({
  cartItems: state.cartReducer.items,
});

const mapDispatchToProps = dispatch => ({
  getCartItems: () => {
    dispatch(cartActions.getItems());
  },
  addCartItem: (item) => {
    dispatch(cartActions.addItem(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
