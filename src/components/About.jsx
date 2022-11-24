/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import Modal from 'react-overlays/Modal';
import data from './database/data.json';
import styles from './About.module.css';

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  return (
    <section className="about-container">
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
          a self-motivated and goal orientated individual with a degree
          in Computer Science from Kigali Independent University.
          I have worked on a variety of fullstack projects when studied at Microverse and
          now open to fulltime opportunities. I have a demonstrated history
          of both leading and working in teams, along with good time management skills.
          {/* skills. I enjoy learning new skills and am constantly expanding my
            current abilities. */}
        </p>
        <button type="button" onClick={() => setShowModal(true)} className="btn btn-primary">See More</button>
      </div>

      <Modal
        className={styles.modal}
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <div>
          <div className={styles.modalHeader}>
            <div className={styles.modalTitle}>About me</div>
            <div>
              <span className={styles.closeButton} onClick={handleClose} onKeyDown>
                x
              </span>
            </div>
          </div>
          <div className={styles.modalDesc}>
            Hey,
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
            of both leading and working in teams, along with good time management skills.

            <div className="skills">
              <h1>Programming Skills</h1>
              <div>
                <div className="card">
                  <h4>Node.js</h4>
                  <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg" alt="" />
                </div>
                <div className="card">
                  <h4>Python</h4>
                  <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                </div>
                <div className="card">
                  <h4>C#</h4>
                  <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" alt="" />
                </div>
                <div className="card">
                  <h4>Ruby</h4>
                  <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
                </div>
                <div className="card">
                  <h4>PhP</h4>
                  <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="" />
                </div>
                <div className="card">
                  <h4>Scala</h4>
                  <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
                </div>

                <div className="card">
                  <h4>Clojure</h4>
                  <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="" />
                </div>
                <div className="card">
                  <h4>Node.js</h4>
                  <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
                </div>
                <div className="card">
                  <h4>Python</h4>
                  <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="" />
                </div>
                <div className="card">
                  <h4>C#</h4>
                  <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="" />
                </div>
                <div className="card">
                  <h4>Ruby</h4>
                  <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="" />
                </div>
                <div className="card">
                  <h4>PhP</h4>
                  <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="" />
                </div>
                <div className="card">
                  <h4>Scala</h4>
                  <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original.svg" alt="" />
                </div>

                <div className="card">
                  <h4>Clojure</h4>
                  <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="" />
                </div>
                <div className="card">
                  <h4>Python</h4>
                  <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" alt="" />
                </div>
                <div className="card">
                  <h4>C#</h4>
                  <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="" />
                </div>
                <div className="card">
                  <h4>Ruby</h4>
                  <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" alt="" />
                </div>
                <div className="card">
                  <h4>PhP</h4>
                  <img className={styles.logo} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />
                </div>

              </div>
            </div>
          </div>
          <div className={styles.modalFooter}>
            <button type="button" className={styles.secondaryButton} onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default About;
