import React from 'react';
import { NavLink as Link } from 'react-router-dom';

export default function NavaBar() {
  return (
    <nav className="nav">
      <h1 className="site-title">SARAZA.dev</h1>
      <ul>
        <li className="active">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
