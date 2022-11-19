import React from 'react';
import { NavLink as Link } from 'react-router-dom';

export default function NavaBar() {
  return (
    <nav className="nav">
      <h1 className="site-title">
        Saraza
        <span>.dev</span>
      </h1>
      <ul>
        <li className="active">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Project">Projects</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
