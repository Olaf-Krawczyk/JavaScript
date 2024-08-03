import { API_URL } from './config.js';

export const state = {
  recipe: {},
};

export async function loadRecipe(id) {
  try {
    const response = await fetch(`${API_URL}${id}`);
    const data = await response.json();

    if (data.status === 'fail') {
      console.log(data.message);
    }

    const { recipe } = data.data;
    state.recipe = recipe;
  } catch (error) {}
}
