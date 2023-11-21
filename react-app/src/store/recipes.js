const ADD_RECIPE = 'recipes/addRecipe';
const CREATE_RECIPE = 'recipes/createRecipe';

const addRecipe = (recipe) => ({
  type: ADD_RECIPE,
  payload: recipe,
});

const createRecipe = (recipe) => ({
  type: CREATE_RECIPE,
  payload: recipe,
});

export const addNewRecipe = ({ url }) => async (dispatch) => {
  const res = await fetch('/api/recipes', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  });

  if (res.ok) {
    const data = await res.json();
    if (data.recipe) dispatch(addRecipe(data.recipe));
    return res;
  } if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      const err = new Error('');
      err.errors = data.errors;
      err.name = '';
      throw err;
    }
  } else {
    const err = new Error('An error occurred. Please try again.');
    err.name = 'ServerError';
    err.errors = { server: 'A server error occured. Please try again.' };
    throw err;
  }
};

export const createNewRecipe = (recipeObj) => {

};

const initialState = { recipes: null };

const recipesReducer = (action, state = initialState) => {
  const nextState = { ...state };

  switch (action.type) {
    case ADD_RECIPE:
    case CREATE_RECIPE:
      nextState.recipes = action.payload;
      return nextState;
    default:
      return state;
  }
};

export default recipesReducer;
