import React from 'react';

export default function NavaBar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">Saraza.dev</a>
      <ul>
        <li className="active">
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/project">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
