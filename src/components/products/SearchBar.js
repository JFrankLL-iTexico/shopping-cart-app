import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      valueMode: 'name',
      name: '',
      category: '',
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

  async handleUpdateInputValue(evt) {
    await this.setState({ inputValue: evt.target.value });
    const mode = this.state.valueMode;
    switch (mode) {
      case 'name':
        this.setState({ name: this.state.inputValue });
        break;
      case 'category':
        this.setState({ category: this.state.inputValue });
        break;
      default:
        break;
    }
  }

  handleChangeValueMode(evt) {
    const valueMode = evt.target.value;
    let inputValue;
    switch (valueMode) {
      case 'name': inputValue = this.state.name; break;
      case 'category': inputValue = this.state.category; break;
      default: break;
    }
    this.setState({
      valueMode,
      inputValue,
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
          onChange={evt => this.handleUpdateInputValue(evt)}
          onKeyUp={(evt) => {
            if (this.state.inputValue === '') {
              this.props.handleSearch('', '');
            }
            if (evt.key === 'Enter') {
              this.props.handleSearch(this.state.category, this.state.name);
            }
          }}
        />
        <div className="category">
          <select onChange={evt => this.handleChangeValueMode(evt)}>
            <option value="name">Name</option>
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
