import React, { Component } from 'react';
import Navigation from '../Navigation';
import Auth from '../auth/Auth';
import Register from '../auth/Register';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  componentWillUpdate(nextProps, nextState) {
    // Called when the props and/or state change
  }

  componentWillUnmount() {
    // Called when the component is removed
  }
  // #endregion

  render() {
    return (
      <div>
        <Navigation />
        <div className="container-wrapper">
          <Auth />
          <span className="line" />
          <Register />
        </div>
      </div>
    );
  }
}

export default Home;
