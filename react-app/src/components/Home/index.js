import { useState, useEffect } from 'react';

import './Home.css';

const Home = () => {
// TODO If user, load all their data into state else ask for login to perform functionality
  const [featured, setFeatured] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Scrape recipes or update scraped recipes on page load
  }, [])

  return (
    <>
      <h2 className="font-mono bg-green-light">Save your favourite vegan recipes all in one place and browse saved recipes</h2>

      <p>Sans serif font-choice</p>
      <p>Serif font-choice</p>
      <p>Mono font-choice</p>

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
