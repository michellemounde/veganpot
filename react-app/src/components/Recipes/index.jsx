import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './Recipes.css';

const Recipes = () => {
  const [ingredient, setIngredient] = useState('');
  const recipes = useSelector(state => state.recipes);

  return (
    <>
      <h2>Recipes</h2>

      <form>
        <fieldset>
          <legend>By Category</legend>

          <div>
            <input type='checkbox' id='breakfast' name='breakfast'/>
            <label for='breakfast'>Breakfast</label>
          </div>

          <div>
            <input type='checkbox' id='lunch' name='lunch'/>
            <label for='lunch'>Lunch</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>By Diet</legend>

          <div>
            <input type='checkbox' id='breakfast' name='breakfast'/>
            <label for='breakfast'>Breakfast</label>
          </div>

          <div>
            <input type='checkbox' id='lunch' name='lunch'/>
            <label for='lunch'>Lunch</label>
          </div>
        </fieldset>

        <input
          type='search'
          placeholder='By Ingredient'
          required
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
      </form>

      <section>
        <ul>
          {/*recipes && recipes.map(recipe => {
            <figure>
              <img></img>
              <figcaption></figcaption>
            </figure>
          })*/}
        </ul>

      </section>
    </>
  )
}

export default Recipes;
