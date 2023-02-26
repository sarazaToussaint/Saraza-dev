/* eslint-disable react/self-closing-comp */
import React from 'react';
import { VscGithubAlt, VscTwitter } from 'react-icons/vsc';
import { ImLinkedin2 } from 'react-icons/im';
import { NavLink as Link } from 'react-router-dom';

const Home = () => (
  <div className="bubbles">
    <div className="container home-container">
      <h1 className="home-title">
        TOUSSAINT
        <span className="myDiv"> SARAZA</span>
      </h1>
      <p>
        I am a self-motivated and goal orientated individual with a degree
        in Computer Science from Kigali Independent University.
        I have worked on a variety of fullstack projects when studied at Microverse and
        now open to fulltime opportunities. I have a demonstrated history
        of both leading and working in teams, along with good time management
        skills. I enjoy learning new skills and am constantly expanding my
        current.
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
      <Link className="buton" to="/Contact"><button type="button" className="myDiv btn btn-primary">Get in touch</button></Link>
    </div>

    <div className="waves-container">
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#0693e3" />
        </g>
      </svg>
    </div>
  </div>
);

export default Home;
