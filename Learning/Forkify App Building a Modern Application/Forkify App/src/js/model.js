export const state = {
  recipe: {},
};

export async function loadRecipe(id) {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await response.json();

    if (data.status === 'fail') {
      console.log(data.message);
    }

    const { recipe } = data.data;
    state.recipe = recipe;
  } catch (error) {}
}
