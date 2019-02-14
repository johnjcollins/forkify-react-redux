import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class NumberInput extends Component {
  state = {
    value: this.props.count
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { count } = this.props;
    return (
      <NumberInputStyle
        type="number"
        value={this.state.value}
        onChange={this.handleChange}
        step={count}
      />
    );
  }
}

NumberInput.propTypes = {
  count: PropTypes.number.isRequired
};

const NumberInputStyle = styled.input`
  color: inherit;
  font-family: inherit;
  font-size: 1.2rem;
  text-align: center;
  border: none;
  width: 3.7rem;
  border-radius: 3px;

  :focus {
    outline: none;
    background-color: #f2efee;
  }
`;

export default NumberInput;
