import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
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
      <div className="subcontainer register-container">
        <h3>Register</h3>
        <input
          key="register-username"
          type="text"
          name="username"
          id="reg-user-input"
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          id="reg-pass-input"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="reg-pass-re-input"
          placeholder="repeat password"
        />
        <span className="button">SignUp</span>
      </div>
    );
  }
}

export default Register;
