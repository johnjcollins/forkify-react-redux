import React, { Component } from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import ContainerStyle from '../styles/ContainerStyle';
import Header from '../elements/Header/Header';
import Results from '../elements/Results/Results';
import Recipe from '../elements/Recipe/Recipe';
import EnhancedRecipe from '../models/EnhancedRecipe';
import Shopping from '../elements/Shopping/Shopping';
import uniqid from 'uniqid';
import { API_URL, API_KEY, PROXY } from '../../config';

class App extends Component {
  state = {
    recipes: [],
    recipe: null,
    list: [],
    likes: [],
    query: '',
    loadingRecipes: false,
    loadingRecipe: false,
    resultsPageSize: 10,
    resultsPageCurrent: 1,
    resultsPages: 0
  };

  componentDidMount() {
    this.getLikes();
  }

  handleSearch = async (query, e) => {
    e.preventDefault();

    this.setState({
      recipes: [],
      recipe: null,
      list: [],
      query,
      loadingRecipes: true
    });

    const endpoint = `${PROXY}${API_URL}search?key=${API_KEY}&q=${query}`;

    try {
      const result = await (await fetch(endpoint)).json();

      this.setState({
        recipes: result.recipes,
        loadingRecipes: false,
        resultsPages: Math.ceil(
          result.recipes.length / this.state.resultsPageSize
        )
      });
    } catch (error) {
      console.error(`ERROR retrieving recipes data: ${error}`);
    }
  };

  handleIncrementCurrentPage = () => {
    this.setState({
      resultsPageCurrent: this.state.resultsPageCurrent + 1
    });
  };

  handleDecrementCurrentPage = () => {
    this.setState({
      resultsPageCurrent: this.state.resultsPageCurrent - 1
    });
  };

  handleServingsChange = type => {
    if (type === 'dec' && this.state.recipe.servings <= 1) {
      return;
    }
    this.setState(prevState => {
      prevState.recipe.updateServings(type);
      return {
        recipe: prevState.recipe
      };
    });
  };

  handleLikeToggle = currentId => {
    const { id, title, author, img } = this.state.recipe;
    if (!this.isLiked(currentId)) {
      const newLike = { id, title, author, img };
      this.addLike(newLike);
    } else {
      this.deleteLike(currentId);
    }
  };

  handleGetShoppingList = () => {
    console.log('ShoppingListClicked');
    const shoppingListItems = this.state.recipe.ingredients.map(ing => {
      return {
        id: uniqid(),
        count: ing.count,
        unit: ing.unit,
        ingredient: ing.ingredient
      };
    });
    this.setState({
      list: shoppingListItems
    });
  };

  handleDeleteListItem = id => {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    });
  };

  addLike = newLike => {
    this.setState(
      {
        likes: [...this.state.likes, newLike]
      },
      () => {
        localStorage.setItem('likes', JSON.stringify(this.state.likes));
      }
    );
  };

  deleteLike = id => {
    this.setState(
      {
        likes: this.state.likes.filter(like => like.id !== id)
      },
      () => localStorage.setItem('likes', JSON.stringify(this.state.likes))
    );
  };

  isLiked = id =>
    this.state.likes
      ? this.state.likes.findIndex(el => el.id === id) !== -1
      : false;

  getLikes = () => {
    const storage = JSON.parse(localStorage.getItem('likes'));
    if (storage) {
      this.setState({
        likes: storage
      });
    }
  };

  getRecipe = async id => {
    this.setState({
      recipe: null,
      list: [],
      loadingRecipe: true
    });

    const endpoint = `${PROXY}${API_URL}get?key=${API_KEY}&rId=${id}`;

    try {
      const result = await (await fetch(endpoint)).json();

      const {
        recipe_id,
        title,
        publisher,
        image_url,
        source_url,
        ingredients
      } = result.recipe;
      const enhancedRecipe = new EnhancedRecipe(
        recipe_id,
        title,
        publisher,
        image_url,
        source_url,
        ingredients
      );
      enhancedRecipe.parseIngredients();
      enhancedRecipe.calcTime();
      enhancedRecipe.calcServings();
      this.setState({
        recipe: enhancedRecipe,
        loadingRecipe: false
      });
    } catch (error) {
      console.error(`ERROR getting recipe: ${error}`);
    }
  };

  render() {
    const {
      recipes,
      recipe,
      list,
      loadingRecipes,
      loadingRecipe,
      resultsPageCurrent,
      resultsPageSize,
      resultsPages
    } = this.state;

    return (
      <>
        <ContainerStyle>
          <Header
            onClick={this.handleSearch}
            numLikes={this.state.likes.length}
            likes={this.state.likes}
            onClickLike={this.getRecipe}
          />
          <Results
            recipes={recipes}
            start={(resultsPageCurrent - 1) * resultsPageSize}
            end={resultsPageCurrent * resultsPageSize}
            selectedRecipe={recipe}
            loading={loadingRecipes}
            onClick={this.getRecipe}
            onIncrement={this.handleIncrementCurrentPage}
            onDecrement={this.handleDecrementCurrentPage}
            currentPage={resultsPageCurrent}
            totalPages={resultsPages}
          />
          <Recipe
            recipe={recipe}
            onServingChange={this.handleServingsChange}
            loading={loadingRecipe}
            isLiked={recipe ? this.isLiked(recipe.id) : false}
            likeToggle={this.handleLikeToggle}
            onShoppingListClick={this.handleGetShoppingList}
          />
          <Shopping list={list} onDeleteClick={this.handleDeleteListItem} />
        </ContainerStyle>
        <GlobalStyle />
      </>
    );
  }
}

export default App;
