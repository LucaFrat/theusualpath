// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src="/intro-image.jpg" alt="Intro"
        className="intro-image" />
      <h1>Welcome to the Blog</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/extra">Extra Info</Link>
      </nav>
    </header>
  );
}

export default Header;
