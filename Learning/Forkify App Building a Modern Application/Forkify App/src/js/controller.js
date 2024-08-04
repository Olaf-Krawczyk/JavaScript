import * as model from './model.js';
import recipeView from './views/recipe.js';
import searchView from './views/search.js';
import { getJSON } from './helpers.js';
import { API_URL } from './config.js';

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    await getJSON(`${API_URL}${id}`);
    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
}

async function controlSearchResults() {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    await model.searchRecipe(query);
    console.log(model.state);
  } catch (error) {
    console.log(error);
  }
}

function init() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}
init();
