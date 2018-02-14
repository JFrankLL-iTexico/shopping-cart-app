import React, { Component } from 'react';
import './Auth.css';

class Auth extends Component {
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
      <div className="subcontainer login-container">
        <h3>LogIn</h3>
        <input
          type="text"
          name="username"
          id="auth-user-input"
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          id="auth-pass-input"
          placeholder="password"
        />
        <span className="button">SignIn</span>
      </div>
    );
  }
}

export default Auth;
