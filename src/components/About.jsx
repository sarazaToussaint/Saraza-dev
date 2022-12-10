/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import Modal from 'react-overlays/Modal';
import data from './database/data.json';
import Skills from './Skills';
import styles from './About.module.css';

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  return (
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
          a self-motivated and goal orientated individual with a degree
          in Computer Science from Kigali Independent University.
          I have worked on a variety of fullstack projects when studied at Microverse and
          now open to fulltime opportunities. I have a demonstrated history
          of both leading and working in teams, along with good time management skills.
        </p>
        <button type="button" onClick={() => setShowModal(true)} className="btn btn-primary">See More</button>
      </div>

      <Modal
        className={styles.modal}
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >

        <div className={styles.modalHeader}>
          <div>
            <span className={styles.closeButton} onClick={handleClose} onKeyDown>
              x
            </span>
          </div>
        </div>
        <div className={styles.modalDesc}>
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
            </p>
          </div>
          <Skills />
        </div>
      </Modal>
    </section>
  );
};

export default About;
