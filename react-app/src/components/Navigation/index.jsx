import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import ProfileButton from './ProfileButton';

import './Navigation.css';

const Navigation = ({ isLoaded }) => {
  const user = useSelector((state) => state.session.user);

  const [searchStr, setSearchStr] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <nav>
      <ul className='bg-green-light flex justify-between'>
        <li className='basis-1/6'>
          <img
            src={'/VeganPot-logos-cropped/VeganPot-logos.jpeg'}
            alt="VeganPot logo"
            className="object-cover max-w-full max-h-full"
          />
        </li>
        <li><NavLink activeClassName='active' to="/" exact>Home</NavLink></li>
        <li><NavLink activeClassName='active' to="/recipes" exact>Recipes</NavLink></li>
        <li><NavLink activeClassName='active' to="/about" exact>About</NavLink></li>
        <li>
          <form onSubmit={handleSearch}>
            <input
              type='search'
              placeholder='Search the site'
              required
              value={searchStr}
              onChange={(e) => setSearchStr(e.target.value)}
            />
            <button type='submit'>Search</button>
          </form>
        </li>
        {isLoaded && (
          <li><ProfileButton user={user} /></li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
