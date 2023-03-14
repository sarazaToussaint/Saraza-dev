import React from 'react';
// import Carousel from 'nuka-carousel';
// import { RiSingleQuotesR, RiSingleQuotesL } from 'react-icons/ri';
// import data from './database/data.json';
import styles from './About.module.css';

const Skills = () => (
  <>
    <div className={styles.skills}>
      {/* <h2>Programming Skills</h2> */}
      <div className={styles.flex}>
        <div className={styles.card}>
          <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
          <h6>HTML5</h6>
        </div>
        <div className={styles.card}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" />
          <h6>CSS3</h6>
        </div>
        <div className={styles.card}>
          <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
          <h6>Boostrap</h6>
        </div>
        {/* <div className={styles.card}>
          <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="" />
          <h6>Sass</h6>
        </div> */}
        <div className={styles.card}>
          <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
          <h6>JavaScript</h6>
        </div>
        <div className={styles.card}>
          <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
          <h6>React.js</h6>
        </div>
        <div className={styles.card}>
          <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="" />
          <h6>Redux</h6>
        </div>

        <div className={styles.card}>
          <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg" alt="" />
          <h6>Ruby</h6>
        </div>

        <div className={styles.card}>
          <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" alt="" />
          <h6>Rails</h6>
        </div>

        <div className={styles.card}>
          <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="" />
          <h6>PostgreSql</h6>
        </div>

        <div className={styles.card}>
          <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="" />
          <h6>Node.js</h6>
        </div>
        <div className={styles.card}>
          <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="" />
          <h6>Webpack</h6>
        </div>
        <div className={styles.card}>
          <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="" />
          <h6>Jest</h6>
        </div>
        <div className={styles.card}>
          <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original.svg" alt="" />
          <h6>Rspec</h6>
        </div>

        <div className={styles.card}>
          <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="" />
          <h6>VsCode</h6>
        </div>
        <div className={styles.card}>
          <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" alt="" />
          <h6>Heroku</h6>
        </div>
        <div className={styles.card}>
          <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" alt="" />
          <h6>Eslint</h6>
        </div>
        <div className={styles.card}>
          <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />
          <h6>GitHub</h6>
        </div>
        <div className={styles.card}>
          <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="" />
          <h6>Git</h6>
        </div>
      </div>
    </div>

    {/* <div className={styles.recommendation}>
      <h2 className={styles.title}>People&apos;s Feedback</h2>
      <div className="carouselContainer">
        <Carousel
          autoplay="true"
          wrapAround="true"
          adaptiveHeight="true"
          cellSpacing={50}
          pauseOnHover="true"
          autoplayInterval={8000}
          slidesToShow={1}
          swiping="true"
          defaultControlsConfig={{
            nextButtonText: null,
            prevButtonText: null,
            pagingDotsStyle: {
              fill: '#3f3f3f',
            },
          }}
        >
          {data.data.recommendations.map((item) => (
            <div key={item.id} className={styles.letter}>
              <div className={styles.head}>
                <img className={styles.recomendImg} src={item.photo} alt={item.name} />
                <div className="recomand-header align-items-center m-2">
                  <h4>{item.name}</h4>
                  <p>{item.occupation}</p>
                </div>
              </div>
              <p className="reco-letter">
                <RiSingleQuotesL className="qoute" />
                {' '}
                {item.recommend}
                <RiSingleQuotesR className="qoute" />
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div> */}
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

export default Skills;
