import React from 'react';
import RecipesStyle from '../../styles/RecipesStyle';
import RecipesListStyle from '../../styles/RecipesListStyle';
import RecipeListItemStyle from '../../styles/RecipesListItemStyle';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import { limitRecipeTitle } from '../../../helpers';

const Results = ({
  recipes,
  start,
  end,
  selectedRecipe,
  loading,
  onClick,
  onIncrement,
  onDecrement,
  currentPage,
  totalPages
}) => {
  return (
    <React.Fragment>
      <RecipesStyle>
        {loading ? <Loader /> : null}
        <RecipesListStyle>
          {recipes.length !== 0
            ? recipes.slice(start, end).map(recipe => (
                <RecipeListItemStyle
                  active={
                    selectedRecipe && recipe.recipe_id === selectedRecipe.id
                  }
                  key={recipe.recipe_id}
                  onClick={() => onClick(recipe.recipe_id)}
                >
                  <figure className="fig">
                    <img src={recipe.image_url} alt={recipe.title} />
                  </figure>
                  <div className="data">
                    <h4 className="name">{limitRecipeTitle(recipe.title)}</h4>
                    <p className="author">{recipe.publisher}</p>
                  </div>
                </RecipeListItemStyle>
              ))
            : null}
          {recipes.length > 0 ? (
            <Pagination
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          ) : null}
        </RecipesListStyle>
      </RecipesStyle>
    </React.Fragment>
  );
};

export default Results;
