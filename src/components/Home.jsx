import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Home = () => (
  <div className="container">
    <h1 className="home-title">
      TOUSSAINT
      <span> SARAZA</span>
    </h1>
    <p>
      Hello, I&apos;m Toussaint Computer Scientist | Full-stack web developer and open-source
      enthusiast with a love for clean code and accessible design.
      Pair-programming, remote work, and knowledge to work to tight deadlines.
      Fluent in multiple languages, frameworks, and technologies,
      and capable of ramping up quickly and efficiently.
    </p>
    <Link className="buton" to="/About"><button type="button" className="btn btn-primary">Get in touch</button></Link>

  </div>
);

export default Home;
