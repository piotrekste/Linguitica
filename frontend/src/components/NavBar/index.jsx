import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';
import './navBar.css';

const NavBar = props => (
  <header className="navbar">
    <nav className="navbarNavigation">
      <div></div>
      <div className="navbarLogo">
        <img src={logo} alt="logo-kwiatek"></img>
        <a href="/">LINGUITICA</a>
      </div>
      <div className="spacer"></div>
      <div className="navbarItems">
        <ul>
          <li>
            <Link to="/login">Zaloguj się</Link>
          </li>
          <li>
            <Link to="/register">Zarejestruj się</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
