// src/components/BlogList.js

import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 'post1',
    title: 'Breathing is bi-directional',
    summary: '...',
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
          <Link to={`/post/${post.id}`}><h3>{post.title}</h3></Link>
          <p>{post.summary}</p>
        </section>
      ))}
    </main>
  );
}

export default BlogList;
