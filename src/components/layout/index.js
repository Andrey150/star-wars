import React from 'react';
import {
  Link, Outlet 
} from "react-router-dom";
import RandomPlanet from '../random-planet';

import './layout.css';

const Layout = ( {onServiceChange} ) => {
  return (
    <>
      <div className='top-el'>
        <header className="header d-flex">
          <h3>
            <Link to={`/`}>Star DB</Link>
          </h3>
          <ul className="d-flex">
            <li>
              <Link to={`/peoples`}>People</Link>
            </li>
            <li>
              <Link to={`/planets`}>Planets</Link>
            </li>
            <li>
              <Link to={`/starships`}>Starship</Link>
            </li>
          </ul>
          <button className='btn btn-small' onClick={onServiceChange} >
            Change service
          </button>
        </header>
        <RandomPlanet /> 
      </div>           

      <Outlet/>
      <footer><h2>Welcome to StarBD</h2></footer>
    </>
  );
};

export default Layout;