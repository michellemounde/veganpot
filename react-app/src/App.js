import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";

import { restoreUser } from "./store/session";

import Home from './components/Home';
import Recipes from './components/Recipes';
import About from './components/About';
import Profile from './components/Profile';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/recipes' exact component={Recipes}></Route>
          <Route path='/about' exact component={About}></Route>
          <Route path='/profile' exact component={Profile}></Route>
        </Switch>
      )}
      <h1>VeganPot</h1>

      <footer>
        Designed and Developed in 🇰🇪 by Michelle Mounde.
      </footer>
    </>
  );
}

export default App;
