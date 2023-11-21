import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addNewRecipe, createNewRecipe } from "../../store/recipes";

import "./RecipeForm.css";

const RecipeForm = () => {
  const dispatch = useDispatch();

  const [url, setUrl] = useState("")
  const [name, setName] = useState("");
  const [instructions, setInstructions] = useState({});
  const [errors, setErrors] = useState({});

  const handleCreateRecipe = (e) => {
    e.preventDefault();

    const payload = {
      name,
      instructions
    }

    return dispatch(createNewRecipe(payload))
      .catch(async (err) => setErrors(err.errors))
  };

  const handleAddRecipe = (e) => {
    e.preventDefault();

    const payload = {
      url
    }

    return dispatch(addNewRecipe(payload))
      .catch(async (err) => setErrors(err.errors))
  }

  // TODO make Add and create recipe a tabbed option for adding recipe from URL and creating own recipe form that matches recipe item options
  return (
    <>
      <h2>Add Recipe</h2>

      <form onSubmit={handleAddRecipe}>
        {/*errors.url && <p>{errors.url}</p> */}
        <label>
          Link
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Recipe</button>
      </form>

      <form onSubmit={handleCreateRecipe}>
        {/* errors.server && <p>{errors.server}</p> */}
        {/* errors.name && <p>{errors.name}</p> */}
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        {/* errors.instructions && <p>{errors.instructions}</p> */}
        <fieldset>
          <legend>Instructions</legend>
          <label>
          1
            <textarea
              value={instructions.first}
              onChange={(e) => setInstructions({
                ...instructions,
                first: e.target.value
              })}
              required
            />
          </label>
          <label>
          2
            <textarea
              value={instructions.second}
              onChange={(e) => setInstructions({
                ...instructions,
                second: e.target.value
              })}
              required
            />
          </label>
        </fieldset>

        <button type="submit">Create Recipe</button>
      </form>
    </>
  );
}

export default RecipeForm;
