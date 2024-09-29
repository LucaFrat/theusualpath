// src/components/BlogPost.js

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const [content, setContent] = useState('');
  const { id } = useParams();

  useEffect(() => {
    // Dynamically import the markdown file based on the id
    import(`../posts/${id}.md`)
      .then((res) => {
        fetch(res.default)
          .then((response) => response.text())
          .then((text) => setContent(text));
      })
      .catch((err) => {
        console.error(err);
        setContent('# Post Not Found\n\nSorry, this post does not exist.');
      });
  }, [id]);

  return (
    <article className='post-content'>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}

export default BlogPost;
