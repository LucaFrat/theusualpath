// src/components/BlogList.js

import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 'post2',
    title: 'Blog post place holder',
    summary: 'Blog posts place holder.',
    imageUrl: '/posts-images/place-holder.jpg',
  },
  {
    id: 'post1',
    title: 'Breathing is bi-directional',
    summary: 'Shifting focus from constant consumption to creation, symbolized by "breathing out" through sharing ideas.',
    imageUrl: '/posts-images/breathing-is-bidirectional.jpg',
  },
];

function BlogList() {
  return (
    <main>
      <h1 id='home-welcome-text'>Welcome to The Usual Path</h1>
      {posts.map((post) => (
        <section key={post.id} className="postList-section">
          
          <div className="postList-image">
            <Link to={`/post/${post.id}`}>
              <img src={post.imageUrl} alt={post.title} className="postList-image postList-shadow"/>
            </Link>
          </div>

          <div className="postList-text">
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.summary}</p>
          </div>
          
        </section>
      ))}
    </main>
  );
}

export default BlogList;
