import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';

import Navigation from './components/Navigation';

import { restoreUser } from './store/session';

import Home from './components/Home';
import Recipes from './components/Recipes';
import RecipeForm from './components/RecipeForm';
import About from './components/About';
import Profile from './components/Profile';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const handleClick = () => {
    console.log('redirecting to /recipes/add');
    history.push('/recipes/add');
  };

  return (
    <>
      <Navigation isLoaded={isLoaded} />

      <main className="overflow-scroll">
        {isLoaded && (
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/about' exact component={About}></Route>
            <Route path='/profile' exact component={Profile}></Route>
            <Route path='/recipes' exact component={Recipes}></Route>
            <Route path='/recipes/add' component={RecipeForm}></Route>
          </Switch>
        )}

        <button aria-label='Add recipe button' title='Add recipe button' type="button" onClick={handleClick}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
            <path fill="currentColor"
              d='M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3
                0L192 109.3 329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160
                352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3
                0L192 301.3 329.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z'/>
          </svg>
        </button>

      </main>

      <footer className="bg-green-light fixed bottom-0 w-full">
        Designed and Developed in 🇰🇪 by Michelle Mounde.
      </footer>
    </>
  );
};

export default App;
