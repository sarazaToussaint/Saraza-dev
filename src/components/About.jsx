import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import data from './database/data.json';

const About = () => (
  <section className="about-container">
    <div className="photo">
      <img className="dev-img" src={data.data.devPhoto} alt={data.data.developer} />
    </div>
    <div className="bio">
      <h1 className="about-title">{data.data.occupation}</h1>
      <p>
        Hello,
        I&apos;m
        <span className="name">
          {' '}
          {data.data.developer}
          {' '}
        </span>
        a self-motivated and goal orientated individual with a degree
        in Computer Science from Kigali Independent University.
        I have worked on a variety of fullstack projects when studied at Microverse and
        now open to fulltime opportunities. I have a demonstrated history
        of both leading and working in teams, along with good time management
        skills. I enjoy learning new skills and am constantly expanding my
        current abilities.
      </p>
      <Link className="buton" to="/Skills"><button type="button" className="btn btn-primary">See More</button></Link>
    </div>
  </section>
);

export default About;
