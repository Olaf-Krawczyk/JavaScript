import * as model from './model.js';
import recipeView from './views/recipe.js';
import { getJSON } from './helpers.js';
import { API_URL } from './config.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    await getJSON(`${API_URL}${id}`);
    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (error) {}
}

function init() {
  recipeView.addHandlerRender(controlRecipes);
}
init();
