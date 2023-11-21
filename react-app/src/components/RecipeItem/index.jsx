import React from 'react';
import './RecipeItem.css';

const RecipeItem = () => {

  return (
    <>
      <h2>Recipe Name</h2>
      <img></img>

      <div>
        <p>Prep Time:<span></span></p>
        <p>Cook Time:<span></span></p>
        <p>Total Time:<span></span></p>
        <p>Serving Size:<span></span></p>
        <p>Rating:<span></span></p>
        <p>Course:<span></span></p>
        <p>Cuisine:<span></span></p>
      </div>

      <section>
        <h3>Ingredients</h3>
        <ol>
          <li></li>
        </ol>
      </section>

      <section>
        <h3>Instructions</h3>
        <ol>
          <li></li>
        </ol>
      </section>

      <section>
        <h3>Notes</h3>
        <ol>
          <li></li>
        </ol>
      </section>

      <section>
        <h3>Nutrition</h3>
        <ol>
          <li></li>
        </ol>
      </section>
    </>
  )
}

export default RecipeItem;
