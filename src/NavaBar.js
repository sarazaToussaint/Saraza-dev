import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavaBar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="site-title">Saraza.dev</NavLink>
      <ul>
        <li className="active">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/project">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
