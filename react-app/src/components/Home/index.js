import { useState, useEffect } from 'react';

import './Home.css';

const Home = () => {

  const [featured, setFeatured] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Scrape recipes or update scraped recipes on page load
  }, [])

  return (
    <>
      <h2>Find vegan recipes from vegan websites</h2>

      <section>
        {/* Set first row of featured item from each category */}
        {featured && featured.forEach(category => {
          <figure>
            <img></img>
            <figcaption></figcaption>
          </figure>
        })}

      </section>

      <section>
        {/* Set row of featured items for each category*/}
        {categories && categories.forEach(category => {
          <section>
            {category.map(recipe => {
              <figure>
                <img></img>
                <figcaption></figcaption>
              </figure>
            })}
          </section>
        })}

      </section>
    </>
  )
}

export default Home;
