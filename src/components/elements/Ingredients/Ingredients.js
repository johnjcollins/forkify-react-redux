import React from 'react';
import IngredientsStyle from './IngredientsStyle';
import IngredientsListStyle from '../../styles/IngredientsListStyle';
import IngredientsListItemStyle from '../../styles/IngredientsListItemStyle';
import SmallButtonStyle from '../../styles/SmallButtonStyle';
import { formatCount } from '../../../helpers';

const Ingredients = ({ ingredients, onClick }) => {
  return (
    <IngredientsStyle>
      <IngredientsListStyle>
        {ingredients.map((ing, idx) => (
          <IngredientsListItemStyle key={idx}>
            <svg className="recipe__icon">
              <use href="images/icons.svg#icon-check" />
            </svg>
            <div className="recipe__count">{formatCount(ing.count)}</div>
            <div className="recipe__ingredient">
              <span className="recipe__unit">{ing.unit} </span>
              {ing.ingredient}
            </div>
          </IngredientsListItemStyle>
        ))}
      </IngredientsListStyle>
      <SmallButtonStyle onClick={onClick}>
        <svg>
          <use href="images/icons.svg#icon-shopping-cart" />
        </svg>
        <span>Add to shopping list</span>
      </SmallButtonStyle>
    </IngredientsStyle>
  );
};

export default Ingredients;
