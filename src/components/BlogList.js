// src/components/BlogList.js

import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 'post1',
    title: 'First Blog Post',
    summary: 'An introduction to our first topic.',
  },
  {
    id: 'post2',
    title: 'Second Blog Post',
    summary: 'Delving deeper into the second topic.',
  },
];

function BlogList() {
  return (
    <main>
      {posts.map((post) => (
        <section key={post.id} className="post-section">
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
          <Link to={`/post/${post.id}`}>Read More</Link>
        </section>
      ))}
    </main>
  );
}

export default BlogList;
