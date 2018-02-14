import MaterialIcon from 'material-icons-react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);

    const listedLinks = [
      {
        route: '/',
        icon: 'home',
        text: 'HOME',
      },
      {
        route: '/products',
        icon: 'view_column',
        text: 'PRODUCTS',
      },
      {
        route: '/about',
        icon: 'info',
        text: 'ABOUT',
      },
    ];

    this.state = {
      listedLinks,
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
    const links = this.state.listedLinks.map((link, index) => (
      <Link key={`link-${index.toString()}`} to={link.route} href={link.route}>
        <div className="linkwrapper">
          <MaterialIcon icon={link.icon} />
          <span>{link.text}</span>
        </div>
      </Link>
    ));
    const navigationBody = (
      <header className="header">
        {links}
      </header>
    );
    return navigationBody;
  }
}

Navigation.propTypes = {
  // eslint-disable-next-line
  extraComponents: PropTypes.any,
};


export default Navigation;
