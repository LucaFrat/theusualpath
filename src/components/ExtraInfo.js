// src/components/ExtraInfo.js

import React from 'react';

function ExtraInfo() {
  return (
    <main>
      <section>
        <h2>Contact Information</h2>
        <p>Email: example@example.com</p>
      </section>
      <section>
        <h2>Recommended Readings</h2>
        <ul>
          <li><a href="#book1">Book Title 1</a></li>
          <li><a href="#article1">Article Title 1</a></li>
        </ul>
      </section>
      <section>
        <h2>About the Blog</h2>
        <p>Learn about the journey of creating this blog.</p>
      </section>
    </main>
  );
}

export default ExtraInfo;
