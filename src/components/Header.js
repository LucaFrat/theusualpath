// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src="/header-image.png" alt="Intro" className="intro-image" />
      <h1>Welcome to The Usual Path</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/extra">Extras</Link>
      </nav>
    </header>
  );
}

export default Header;
