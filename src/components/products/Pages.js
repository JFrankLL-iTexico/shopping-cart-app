import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Pages.css';

function Page(props) {
  return (
    <div
      role="presentation"
      className="page"
      onClick={() => { props.changePage(props.text === 'next'); }}
    >
      {props.text}
    </div>
  );
}

Page.propTypes = {
  text: PropTypes.string.isRequired,
  changePage: PropTypes.func.isRequired,
};

class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: ['prev', 'next'],
    };
  }

  render() {
    const pagesBody = (
      <div className="pages-wrapper">
        <Page
          key="page-prev"
          text={this.state.pages[0]}
          changePage={this.props.changePage}
        />
        <span>Pages</span>
        <Page
          key="page-next"
          text={this.state.pages[1]}
          changePage={this.props.changePage}
        />
      </div>
    );
    return pagesBody;
  }
}

Pages.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Pages;
