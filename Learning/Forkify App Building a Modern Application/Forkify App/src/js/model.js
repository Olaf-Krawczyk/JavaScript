import { API_URL } from './config.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
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

export async function searchRecipe(query) {
  try {
    const response = await fetch(`${API_URL}?search=${query}`);
    const data = await response.json();
    state.search.query = query;
    state.search.results = data.data.recipes.map(element => {
      return {
        id: element.id,
        img: element.image_url,
        author: element.publisher,
        title: element.title,
      };
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
