// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src="/header-image.png" alt="Intro" className="master-intro-image" />
      <nav className='navigation-bar'>
        <Link to="/">HOME</Link>
        <Link to="/extra">RESOURCES</Link>
      </nav>
    </header>
  );
}

export default Header;
