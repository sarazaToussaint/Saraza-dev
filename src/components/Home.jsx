/* eslint-disable react/self-closing-comp */
import React from 'react';
import { VscGithubAlt, VscTwitter } from 'react-icons/vsc';
import { ImLinkedin2 } from 'react-icons/im';
import { NavLink as Link } from 'react-router-dom';

const Home = () => (
  <div className="bubbles">
    <div className="container">
      <h1 className="home-title">
        TOUSSAINT
        <span> SARAZA</span>
      </h1>
      <p>
        I am a self-motivated and goal orientated individual with a degree
        in Computer Science from Kigali Independent University.
        I have worked on a variety of fullstack projects when studied at Microverse and
        now open to fulltime opportunities. I have a demonstrated history
        of both leading and working in teams, along with good time management
        skills. I enjoy learning new skills and am constantly expanding my
        current abilities.
      </p>
      <div className="icon-container">
        <a href="https://www.linkedin.com/in/toussaintsaraza/" target="_blank" rel="noreferrer">
          <ImLinkedin2 />
        </a>
        <a href="https://twitter.com/ToussaintSaraz1" target="_blank" rel="noreferrer">
          <VscTwitter />
        </a>
        <a href="https://github.com/sarazaToussaint" target="_blank" rel="noreferrer">
          <VscGithubAlt />
        </a>
      </div>
      <Link className="buton" to="/Contact"><button type="button" className="btn btn-primary">Get in touch</button></Link>
    </div>

    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>

  </div>
);

export default Home;
