/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import data from './database/data.json';
// import styles from './About.module.css';

const About = () => (
  <>
    <section className="about-container bubbles">
      <div className="photo">
        <img className="dev-img" src={data.data.devPhoto} alt={data.data.developer} />
      </div>
      <div className="bio">
        <h1 className="about-title">{data.data.occupation}</h1>
        <p>
          Hey,
          I&apos;m
          <span className="name">
            {' '}
            {data.data.developer}
            {' '}
          </span>
          a self-motivated and goal oriented individual with a degree
          in Computer Science from Kigali Independent University.
          I have worked on a variety of fullstack projects when I studied at Microverse and am
          now open to fulltime opportunities. I have a demonstrated history
          of both leading and working in teams, along with good time management skills.
        </p>
        <a
          href="https://docs.google.com/document/d/1Gz_HMGGmernqwVFcTqWqM7A8Fy9NqvI6YBc1dQSPPWI/edit"
          target="_blank"
          rel="noreferrer"
          className="btn myBtn primary"
        >
          See my resume
        </a>
      </div>
    </section>
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
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#0693e3" className="myBtn" />
        </g>
      </svg>
    </div>
  </>
);

export default About;
