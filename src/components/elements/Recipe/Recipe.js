import React from 'react';
import PropTypes from 'prop-types';
import RecipeStyle from './RecipeStyle';
import RecipeFigureStyle from '../../styles/RecipeFigureStyle';
import RecipeDetailsStyle from '../../styles/RecipeDetailsStyle';
import TinyButtonStyle from '../../styles/TinyButtonStyle';
import LoveButtonStyle from '../../styles/LoveButtonStyle';
import Ingredients from '../Ingredients/Ingredients';
import RecipeDirectionsStyle from '../../styles/RecipeDirectionsStyle';
import LinkButtonStyle from '../../styles/LinkButtonStyle';
import Loader from '../Loader/Loader';

const Recipe = ({
  recipe,
  onServingChange,
  loading,
  isLiked,
  likeToggle,
  onShoppingListClick
}) => {
  const heartIcon = isLiked
    ? 'images/icons.svg#icon-heart'
    : 'images/icons.svg#icon-heart-outlined';
  return (
    <RecipeStyle>
      {loading ? <Loader /> : null}
      {recipe ? (
        <React.Fragment>
          <RecipeFigureStyle>
            <img src={recipe.img} alt={recipe.title} className="recipe__img" />
            <h1 className="recipe__title">
              <span>{recipe.title}</span>
            </h1>
          </RecipeFigureStyle>
          <RecipeDetailsStyle>
            <div className="recipe__info">
              <svg className="recipe__info-icon">
                <use href="images/icons.svg#icon-stopwatch" />
              </svg>
              <span className="recipe__info-data recipe__info-data--minutes">
                {recipe.time}
              </span>
              <span className="recipe__info-text"> minutes</span>
            </div>
            <div className="recipe__info">
              <svg className="recipe__info-icon">
                <use href="images/icons.svg#icon-man" />
              </svg>
              <span className="recipe__info-data recipe__info-data--people">
                {recipe.servings}
              </span>
              <span className="recipe__info-text"> servings</span>

              <div className="recipe__info-buttons">
                <TinyButtonStyle onClick={() => onServingChange('dec')}>
                  <svg>
                    <use href="images/icons.svg#icon-circle-with-minus" />
                  </svg>
                </TinyButtonStyle>
                <TinyButtonStyle onClick={() => onServingChange('inc')}>
                  <svg>
                    <use href="images/icons.svg#icon-circle-with-plus" />
                  </svg>
                </TinyButtonStyle>
              </div>
            </div>
            <LoveButtonStyle onClick={() => likeToggle(recipe.id)}>
              <svg className="header__likes">
                <use href={heartIcon} />
              </svg>
            </LoveButtonStyle>
          </RecipeDetailsStyle>
          <Ingredients
            ingredients={recipe.ingredients}
            onClick={onShoppingListClick}
          />
          <RecipeDirectionsStyle>
            <h2 className="heading-2">How to cook it</h2>
            <p className="recipe__directions-text">
              This recipe was carefully designed and tested by
              <span className="recipe__by"> {recipe.author}</span>. Please check
              out directions at their website.
            </p>
            <LinkButtonStyle href={recipe.url} target="_blank">
              <span>Directions</span>
              <svg className="search__icon">
                <use href="images/icons.svg#icon-triangle-right" />
              </svg>
            </LinkButtonStyle>
          </RecipeDirectionsStyle>
        </React.Fragment>
      ) : null}
    </RecipeStyle>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
  onServingChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likeToggle: PropTypes.func.isRequired,
  onShoppingListClick: PropTypes.func.isRequired
};

export default Recipe;
