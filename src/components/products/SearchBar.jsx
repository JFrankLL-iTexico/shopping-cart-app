import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      searchMode: 'value',
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
    this.props.handleSearch.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    // Called when the props and/or state change
  }

  componentWillUnmount() {
    // Called when the component is removed
  }
  // #endregion

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value,
    });
  }

  updateSelectValue(evt) {
    this.setState({
      searchMode: evt.target.value,
    });
  }

  render() {
    const searchBarBody = (
      <div className="search-wrapper">
        <input
          className="search"
          type="text"
          placeholder="Search..."
          value={this.state.inputValue}
          onChange={evt => this.updateInputValue(evt)}
          onKeyUp={(evt) => {
            if (this.state.inputValue === '') {
              this.props.handleSearch('value', '');
            }
            if (evt.key === 'Enter') {
              this.props.handleSearch(this.state.searchMode, this.state.inputValue);
            }
          }}
        />
        <div className="category">
          <select onChange={evt => this.updateSelectValue(evt)}>
            <option value="value">Name</option>
            <option value="category">Category</option>
          </select>
        </div>
      </div>
    );
    return searchBarBody;
  }
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
