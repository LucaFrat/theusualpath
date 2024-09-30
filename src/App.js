// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes }
  from 'react-router-dom';

import Header from './components/Header';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import ExtraInfo from './components/ExtraInfo';

import './css/master.css';
import './css/postsList.css';
import './css/in-post.css';
import './css/extras.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/extra" element={<ExtraInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
