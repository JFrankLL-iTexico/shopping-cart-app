import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';

import './Item.css';

class Item extends Component {
  constructor(props) {
    super();
    console.log('ºººººº', props);
  }

  render() {
    const componentBody = (
      <div className="cart-item">
        <div className="img-wrapper">
          <img src={this.props.imageUrl} alt="" />
        </div>
        <div className="item-body">
          {this.props.name}
          {this.props.category}

          {this.props.price}
          {this.props.quantity}
        </div>
        <div className="item-tools">
          <span className="tool tool-delete">
            <MaterialIcon icon="add" />
          </span>
          <span className="tool tool-add">
            <MaterialIcon icon="add" />
          </span>
          <span className="tool tool-remove">
            <MaterialIcon icon="add" />
          </span>
        </div>
        {/* {this.props._id}
        {this.props.description}
        {this.props.stock} */}
      </div>
    );
    return componentBody;
  }
}

export default Item;
