import React, { Component } from 'react';
import SearchStyle from './SearchStyle';
import ButtonStyle from '../../styles/ButtonStyle';

class Search extends Component {
  state = {
    value: ''
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <SearchStyle>
        <input
          type="text"
          className="search__field"
          placeholder="Search over 1,000,000 recipes..."
          value={this.state.value}
          onChange={this.handleChange}
        />
        <ButtonStyle
          onClick={e => {
            this.props.onClick(this.state.value, e);
            this.setState({
              value: ''
            });
          }}
        >
          <svg>
            <use href="images/icons.svg#icon-magnifying-glass" />
          </svg>
          <span>Search</span>
        </ButtonStyle>
      </SearchStyle>
    );
  }
}

export default Search;
