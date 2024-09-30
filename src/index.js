// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure the path to App.js is correct

import './css/master.css';
import './css/postsList.css';
import './css/in-post.css';
import './css/extras.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);