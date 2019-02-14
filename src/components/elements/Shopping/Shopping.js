import React from 'react';
import PropTypes from 'prop-types';
import ShoppingStyle from './ShoppingStyle';
import ShoppingListStyle from '../../styles/ShoppingListStyle';
import ShoppingListItemStyle from '../../styles/ShoppingListItemStyle';
import TinyButtonStyle from '../../styles/TinyButtonStyle';
import NumberInput from '../NumberInput/NumberInput';
import Copyright from '../../styles/Copyright';

const Shopping = ({ list, onDeleteClick }) => {
  return (
    <ShoppingStyle>
      <h2 className="heading-2">My Shopping List</h2>
      <ShoppingListStyle>
        {list.map(item => (
          <ShoppingListItemStyle key={item.id}>
            <div className="shopping__count">
              <NumberInput count={item.count} />
              <p>{item.unit}</p>
            </div>
            <p className="shopping__description">{item.ingredient}</p>
            <TinyButtonStyle
              className="shopping__delete"
              onClick={() => onDeleteClick(item.id)}
            >
              <svg>
                <use href="images/icons.svg#icon-circle-with-cross" />
              </svg>
            </TinyButtonStyle>
          </ShoppingListItemStyle>
        ))}
      </ShoppingListStyle>
      <Copyright>
        &copy; by John Collins.
        <br /> Powered by&nbsp;
        <a href="http://food2fork.com" target="_blank" className="link">
          Food2Fork.com
        </a>
        .
      </Copyright>
    </ShoppingStyle>
  );
};

Shopping.propTypes = {
  list: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default Shopping;
