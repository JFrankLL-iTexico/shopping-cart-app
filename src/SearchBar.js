import React, { Component } from 'react';
import './SearchBar.css';
//import Request from 'superagent';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
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
    this.props.handleSearch.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    // Called when the props and/or state change
  }

  componentWillUnmount() {
    // Called when the component is removed
  }
  //#endregion

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    return (
        <div className="search-wrapper">
            <input
                className="search"
                type="text"
                placeholder="Search..."
                value={this.state.inputValue}
                onChange={evt => this.updateInputValue(evt)}
                onKeyUp={evt => {
                  if(this.state.inputValue === '')
                    this.props.handleSearch('value', '')
                  if(evt.key === 'Enter')
                    this.props.handleSearch('value', this.state.inputValue)
                    //TODO: search by category
                }}
            />
        </div>
    );
  }
}

export default SearchBar;